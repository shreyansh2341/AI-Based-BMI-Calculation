'use strict';

require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const { SessionsClient } = require('@google-cloud/dialogflow');
const admin = require('firebase-admin');
const cookieParser = require('cookie-parser');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

process.env.GOOGLE_APPLICATION_CREDENTIALS = path.join(
  __dirname,
  "../tensile-spirit-433609-q4-ca0a5f9adada.json"
);


const serviceAccount = require('enter path to your service account key file here');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "enter your database URL here" 
});

app.use(express.static(path.join(__dirname, '../public')));
app.use('/images', express.static('images'));

app.use(cookieParser());
app.use(express.json()); 


const checkAuth = (req, res, next) => {
  const sessionCookie = req.cookies.session || '';
  admin.auth().verifySessionCookie(sessionCookie, true)
    .then((decodedClaims) => {
      req.user = decodedClaims;
      next();
    })
    .catch((error) => {
      res.redirect('/login');
    });
};

app.get('/', checkAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

app.get('/chatbot', checkAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'chatbot.html'));
});

app.get('/diet', checkAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'diet.html'));
});

app.get('/exercise', checkAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'exercise.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'register.html'));
});

app.post('/sessionLogin', (req, res) => {
  const idToken = req.body.idToken.toString();
  const expiresIn = 60 * 60 * 24 * 5 * 1000; 

  admin.auth().createSessionCookie(idToken, { expiresIn })
    .then((sessionCookie) => {
      const options = { maxAge: expiresIn, httpOnly: true, secure: false };
      res.cookie('session', sessionCookie, options);
      res.end(JSON.stringify({ status: 'success' }));
    })
    .catch((error) => {
      res.status(401).send('UNAUTHORIZED REQUEST!');
    });
});

io.on('connection', (socket) => {
  socket.on('chat message', async (text) => {
    const sessionClient = new SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(
      process.env.DIALOGFLOW_PROJECT_ID,
      socket.id
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: 'en-US',
        },
      },
    };

    try {
      const responses = await sessionClient.detectIntent(request);
      const result = responses[0].queryResult;
      const aiText = result.fulfillmentText;
      socket.emit('bot reply', aiText);
    } catch (err) {
      console.error('Dialogflow API ERROR:', err);
      socket.emit('bot reply', 'I encountered an error, please try again later.');
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

// const bmiText = document.getElementById("bmi");
// const descText = document.getElementById("desc");
// const form = document.querySelector("form");

// form.addEventListener("submit", handleSubmit);
// form.addEventListener("reset", handleReset);

// function handleReset() {
//   bmiText.textContent = 0;
//   bmiText.className = "";
//   descText.textContent = "N/A";
//   document.getElementById('bot-interface').style.display = 'none';
//   document.getElementById('chatbot-tag').style.display = 'none';
// }

// function handleSubmit(e) {
//   e.preventDefault();

//   const weight = parseFloat(form.weight.value);
//   const height = parseFloat(form.height.value);

//   if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
//     alert("Please enter a valid weight and height");
//     return;
//   }

//   const heightInMeters = height / 100;
//   const bmi = weight / Math.pow(heightInMeters, 2);
//   const desc = interpretBMI(bmi);

//   bmiText.textContent = bmi.toFixed(2);
//   bmiText.className = desc;
//   descText.innerHTML = `You are <strong>${desc}</strong>`;

//   localStorage.setItem('bmi', bmi.toFixed(2));
//   localStorage.setItem('weight', weight);
//   localStorage.setItem('height', height);

//   document.getElementById('bot-interface').style.display = 'block';
//   document.getElementById('bot-text').innerHTML = "Would you like to see diet options or exercise plans?";
//   document.getElementById('bot-options').style.display = 'block';

//   // Show the chatbot tag
//   document.getElementById('chatbot-tag').style.display = 'block';
// }

// function interpretBMI(bmi) {
//   if (bmi < 18.5) {
//     return "underweight";
//   } else if (bmi < 25) {
//     return "healthy";
//   } else if (bmi < 30) {
//     return "overweight";
//   } else {
//     return "obese";
//   }
// }

// function showDietSection(dietType) {
//   localStorage.setItem('dietType', dietType);
//   window.location.href = '/diet';
// }

// function showExerciseSection() {
//   window.location.href = '/exercise';
// }

// function openChatbot() {
//   window.location.href = '/chatbot';
// }

// function updateDietChart() {
//   const bmi = parseFloat(localStorage.getItem('bmi'));
//   const dietType = localStorage.getItem('dietType') || 'veg';
//   let weightCategory = '';

//   if (bmi < 18.5) {
//     weightCategory = 'Underweight';
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     weightCategory = 'Normal weight';
//   } else if (bmi >= 25 && bmi < 29.9) {
//     weightCategory = 'Overweight';
//   } else {
//     weightCategory = 'Obesity';
//   }

//   let foodImages = '';

//   const dietData = {
//     'veg': {
//       'Underweight': [
//         { name: 'Avocado', benefits: 'Healthy Fats, Fiber', image: 'https://th.bing.com/th/id/OIP.Q7XebBUhGyhOl8cMEVTrNAHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Sweet Potatoes', benefits: 'Carbs, Vitamin A', image: 'https://th.bing.com/th/id/OIP.lKgQbpc6nBkvQIQX2fEGrAHaFy?w=224&h=180&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Whole Grain Bread', benefits: 'Carbs, Fiber', image: 'https://example.com/whole_grain_bread.jpg' },
//         { name: 'Nuts', benefits: 'Healthy Fats, Protein', image: 'https://th.bing.com/th/id/OIP.2Yik2zVi0PURljI_gyJabwHaE8?w=235&h=180&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Cottage Cheese', benefits: 'Calcium, Protein', image: 'https://th.bing.com/th/id/OIP.AAJzQmsxk6f-cdxoHdlW8wHaE8?w=186&h=124&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Bananas', benefits: 'Potassium, Energy', image: 'https://example.com/bananas.jpg' }
//       ],
//       'Normal weight': [
//         { name: 'Broccoli', benefits: 'Vitamins, Fiber', image: 'https://th.bing.com/th/id/OIP.RxxsiXcL6SqvSSF_X8ghHAHaFy?w=186&h=180&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Paneer', benefits: 'Protein, Calcium', image: 'https://th.bing.com/th/id/OIP.Dc52erzQhVGjSz2t085TeQHaKC?w=130&h=180&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Carrots', benefits: 'Vitamin A, Fiber', image: 'https://th.bing.com/th/id/OIP.lhf0cNctUtpmNlIhJfVD5AHaFn?w=254&h=192&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Quinoa', benefits: 'Protein, Fiber', image: 'https://th.bing.com/th/id/OIP.ftrT36dMSt_NRtMS6dGHzQHaFy?w=237&h=185&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Beans', benefits: 'Protein, Fiber', image: 'https://th.bing.com/th/id/OIP.zWYi7fn89_GfQ-ghiO-RJwHaFy?w=186&h=145&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Lentils', benefits: 'Protein, Iron', image: 'https://example.com/lentils.jpg' }
//       ],
//       'Overweight': [
//         { name: 'Spinach', benefits: 'Iron, Low Calories', image: 'https://th.bing.com/th/id/OIP.h16bLrESBVkTcj85MRX83AHaFy?w=241&h=188&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Brown Rice', benefits: 'Fiber, Magnesium', image: 'https://th.bing.com/th/id/OIP.o2gLqLy2uS6Q48rEdUiMhAAAAA?w=216&h=180&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Oats', benefits: 'Fiber, Low Calorie', image: 'https://th.bing.com/th/id/OIP.bWe98jrct4d7P0EJxEP4OQHaJx?w=186&h=246&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Bell Peppers', benefits: 'Vitamins, Fiber', image: 'https://th.bing.com/th/id/OIP.jb3SvuwupUa_c0H0rdYDcgHaFy?w=256&h=200&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Chickpeas', benefits: 'Protein, Low Fat', image: 'https://th.bing.com/th/id/OIP.4T6qzsrYkFI4otwhxW4hegHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Cucumbers', benefits: 'Hydration, Low Calories', image: 'https://example.com/cucumbers.jpg' }
//       ],
//       'Obesity': [
//         { name: 'Lentils', benefits: 'Protein, Fiber', image: 'https://th.bing.com/th/id/OIP.mYbtm5UywBA8lvRHGBg-cwAAAA?w=237&h=185&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Quinoa', benefits: 'Protein, Low Fat', image: 'https://th.bing.com/th/id/OIP.ftrT36dMSt_NRtMS6dGHzQHaFy?w=237&h=185&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Cauliflower', benefits: 'Low Carb, Vitamin C', image: 'https://th.bing.com/th/id/OIP.NU0tzmt00kpv6EoXlT-TwQHaFy?w=242&h=189&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Brussels Sprouts', benefits: 'Fiber, Vitamin K', image: 'https://th.bing.com/th/id/OIP.zd-1wqVg2dLqqx4BvKB_PAAAAA?w=234&h=180&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Pumpkin Seeds', benefits: 'Magnesium, Zinc', image: 'https://th.bing.com/th/id/OIP.LpxPAyESos_fKbTdPSxk5AHaFy?w=226&h=197&c=7&r=0&o=5&pid=1.7' },
//         { name: 'Broccoli', benefits: 'Vitamins, Fiber', image: 'https://th.bing.com/th/id/OIP.RxxsiXcL6SqvSSF_X8ghHAHaFy?w=186&h=180&c=7&r=0&o=5&pid=1.7' }
//       ]
//     },
//     'non-veg': {
//       'Underweight': [
//         { name: 'Chicken Breast', benefits: 'Protein, Low Fat', image: 'https://example.com/chicken_breast.jpg' },
//         { name: 'Salmon', benefits: 'Omega-3, Protein', image: 'https://example.com/salmon.jpg' },
//         { name: 'Eggs', benefits: 'Protein, Vitamins', image: 'https://example.com/eggs.jpg' },
//         { name: 'Turkey', benefits: 'Protein, Low Fat', image: 'https://example.com/turkey.jpg' },
//         { name: 'Beef', benefits: 'Protein, Iron', image: 'https://example.com/beef.jpg' },
//         { name: 'Shrimp', benefits: 'Protein, Low Calories', image: 'https://example.com/shrimp.jpg' }
//       ],
//       'Normal weight': [
//         { name: 'Grilled Chicken', benefits: 'Protein, Low Fat', image: 'https://example.com/grilled_chicken.jpg' },
//         { name: 'Tuna', benefits: 'Protein, Omega-3', image: 'https://example.com/tuna.jpg' },
//         { name: 'Lean Pork', benefits: 'Protein, Vitamins', image: 'https://example.com/lean_pork.jpg' },
//         { name: 'Sardines', benefits: 'Protein, Calcium', image: 'https://example.com/sardines.jpg' },
//         { name: 'Venison', benefits: 'Protein, Low Fat', image: 'https://example.com/venison.jpg' },
//         { name: 'Oysters', benefits: 'Protein, Zinc', image: 'https://example.com/oysters.jpg' }
//       ],
//       'Overweight': [
//         { name: 'Chicken Soup', benefits: 'Protein, Low Calories', image: 'https://example.com/chicken_soup.jpg' },
//         { name: 'Baked Cod', benefits: 'Protein, Low Fat', image: 'https://example.com/baked_cod.jpg' },
//         { name: 'Turkey Breast', benefits: 'Protein, Low Fat', image: 'https://example.com/turkey_breast.jpg' },
//         { name: 'Shrimp Salad', benefits: 'Protein, Low Calories', image: 'https://example.com/shrimp_salad.jpg' },
//         { name: 'Grilled Salmon', benefits: 'Protein, Omega-3', image: 'https://example.com/grilled_salmon.jpg' },
//         { name: 'Lean Beef', benefits: 'Protein, Iron', image: 'https://example.com/lean_beef.jpg' }
//       ],
//       'Obesity': [
//         { name: 'Boiled Eggs', benefits: 'Protein, Vitamins', image: 'https://example.com/boiled_eggs.jpg' },
//         { name: 'Grilled Chicken Breast', benefits: 'Protein, Low Fat', image: 'https://example.com/grilled_chicken_breast.jpg' },
//         { name: 'Baked Turkey', benefits: 'Protein, Low Fat', image: 'https://example.com/baked_turkey.jpg' },
//         { name: 'Canned Tuna', benefits: 'Protein, Omega-3', image: 'https://example.com/canned_tuna.jpg' },
//         { name: 'Lean Pork Chops', benefits: 'Protein, Vitamins', image: 'https://example.com/lean_pork_chops.jpg' },
//         { name: 'Grilled Shrimp', benefits: 'Protein, Low Calories', image: 'https://example.com/grilled_shrimp.jpg' }
//       ]
//     }
//   };

//   dietData[dietType][weightCategory].forEach(item => {
//     foodImages += `
//       <div class="card">
//         <img src="${item.image}" alt="${item.name}">
//         <div class="card-title">${item.name}</div>
//         <div class="card-description">${item.benefits}</div>
//       </div>
//     `;
//   });

//   document.getElementById('diet-chart').innerHTML = `<h3>${dietType.charAt(0).toUpperCase() + dietType.slice(1)} Diet Plan for ${weightCategory}:</h3>`;
//   document.querySelector('.food-images').innerHTML = foodImages;
// }

// function updateExerciseChart() {
//   const bmi = parseFloat(localStorage.getItem('bmi'));
//   let weightCategory = '';

//   if (bmi < 18.5) {
//     weightCategory = 'Underweight';
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     weightCategory = 'Normal weight';
//   } else if (bmi >= 25 && bmi < 29.9) {
//     weightCategory = 'Overweight';
//   } else {
//     weightCategory = 'Obesity';
//   }

//   let exerciseImages = '';

//   const exerciseData = {
//     'Underweight': [
//       { name: 'Yoga', benefits: 'Flexibility, Strength', image: 'https://th.bing.com/th/id/OIP.AjbnAw4mjskGLOSZBp3t9AHaHj?w=186&h=190&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Light Cardio', benefits: 'Endurance', image: 'https://th.bing.com/th/id/OIP.ri9XtZ33dpSC27uysoM5kQAAAA?w=186&h=263&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Bodyweight Exercises', benefits: 'Strength', image: 'https://th.bing.com/th/id/OIP.kkoVJcBlOxO_JTIPVXZIGAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Pilates', benefits: 'Core Strength', image: 'https://th.bing.com/th/id/OIP.s_hSh6s6naxmClRX2pz5bQHaOI?w=180&h=345&c=7&r=0&o=5&dpr=1.1&pid=1.7g' },
//       { name: 'Walking', benefits: 'Low Intensity Cardio', image: 'https://th.bing.com/th/id/OIP.lF86-rNwEgUPJGOY_tExlwHaNp?w=184&h=339&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Swimming', benefits: 'Full Body Workout', image: 'https://th.bing.com/th/id/OIP.hs3xzvJ4eGn-aB2_ZeSpCQAAAA?w=186&h=260&c=7&r=0&o=5&dpr=1.1&pid=1.7' }
//     ],
//     'Normal weight': [
//       { name: 'Walking', benefits: 'Cardio', image: 'https://th.bing.com/th/id/OIP.ig8yY-GldaJuRtAEP57DawHaLD?w=186&h=278&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Strength Training', benefits: 'Muscle Building', image: 'https://th.bing.com/th/id/OIP.jc0vN6lhkkRnwTF4Z82RGQHaSh?w=139&h=349&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'HIIT', benefits: 'High Intensity Cardio', image: 'https://th.bing.com/th/id/OIP.IevEx2BcRMmfNWtemdyD-AHaFv?w=186&h=144&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Cycling', benefits: 'Leg Strength', image: 'https://th.bing.com/th/id/OIP.E_5TaGtsArr6gUXe5U8GjAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Swimming', benefits: 'Full Body Workout', image: 'https://th.bing.com/th/id/OIP.hs3xzvJ4eGn-aB2_ZeSpCQAAAA?w=186&h=260&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Jump Rope', benefits: 'Cardio, Coordination', image: 'https://example.com/jump_rope.jpg' }
//     ],
//     'Overweight': [
//       { name: 'Brisk Walking', benefits: 'Full Body , Cardio, Low Impact', image: 'https://th.bing.com/th/id/OIP.9h2vU-q3MaqyW7bCf82utAHaJa?w=153&h=194&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Swimming', benefits: 'Full Body, Leg Strength, Low Impact', image: 'https://th.bing.com/th/id/OIP.hs3xzvJ4eGn-aB2_ZeSpCQAAAA?w=186&h=260&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Low-Impact Aerobics', benefits: 'Cardio', image: 'https://th.bing.com/th/id/OIP.u2Z-V8oRWQd2IREyc1DqSwAAAA?w=126&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Rowing', benefits: 'Cardio, Upper Body Strength, Leg Strength', image: 'https://th.bing.com/th/id/OIP.e-f9xTv8cMcjMpXRfAQ_VAAAAA?w=209&h=195&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Elliptical Machine', benefits: 'Cardio, Low Impact', image: 'https://th.bing.com/th/id/OIP.FY42ZTmdGXEpxCDZQP8pewHaF3?w=250&h=198&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Cycling', benefits: 'Leg Strength,', image: 'https://th.bing.com/th/id/OIP.E_5TaGtsArr6gUXe5U8GjAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7' }
//     ],
//     'Obesity': [
//       { name: 'Low-Impact Aerobics', benefits: 'Cardio', image: 'https://th.bing.com/th/id/OIP.u2Z-V8oRWQd2IREyc1DqSwAAAA?w=126&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Cycling', benefits: 'Leg Strength', image: 'https://th.bing.com/th/id/OIP.E_5TaGtsArr6gUXe5U8GjAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Water Aerobics', benefits: 'Low Impact', image: 'https://th.bing.com/th/id/OIP.UgkTYoJStoP8EgT93g4YewHaJc?w=186&h=237&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Resistance Band Exercises', benefits: 'Strength Training', image: 'https://th.bing.com/th/id/OIP.Dzw39DB5DIUJ2XumpBGTDAAAAA?w=165&h=349&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Stretching', benefits: 'Flexibility', image: 'https://th.bing.com/th/id/OIP.6y7SmHTmVVSMP_63njt29QHaKe?w=186&h=263&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
//       { name: 'Tai Chi', benefits: 'Balance, Coordination', image: 'https://example.com/tai_chi.jpg' }
//     ]
//   };

//   exerciseData[weightCategory].forEach(item => {
//     exerciseImages += `
//       <div class="card">
//         <img src="${item.image}" alt="${item.name}">
//         <div class="card-title">${item.name}</div>
//         <div class="card-description">${item.benefits}</div>
//       </div>
//     `;
//   });

//   document.getElementById('exercise-chart').innerHTML = `<h3>Recommended Exercises for ${weightCategory}:</h3>`;
//   document.querySelector('.exercise-images').innerHTML = exerciseImages;
// }

// window.onload = function() {
//   const storedWeight = localStorage.getItem('weight');
//   const storedHeight = localStorage.getItem('height');

//   if (!storedWeight || !storedHeight) {
//     form.weight.value = 0;
//     form.height.value = 0;
//   } else {
//     form.weight.value = storedWeight;
//     form.height.value = storedHeight;
//   }
// };

const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  descText.textContent = "N/A";
  document.getElementById('bot-interface').style.display = 'none';
  document.getElementById('chatbot-tag').style.display = 'none';
}

function handleSubmit(e) {
  e.preventDefault();

  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / Math.pow(heightInMeters, 2);
  const desc = interpretBMI(bmi);

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `You are <strong>${desc}</strong>`;

  localStorage.setItem('bmi', bmi.toFixed(2));
  localStorage.setItem('weight', weight);
  localStorage.setItem('height', height);

  document.getElementById('bot-interface').style.display = 'block';
  document.getElementById('bot-text').innerHTML = "Would you like to see diet options or exercise plans?";
  document.getElementById('bot-options').style.display = 'block';

  // Show the chatbot tag
  document.getElementById('chatbot-tag').style.display = 'block';
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi < 25) {
    return "healthy";
  } else if (bmi < 30) {
    return "overweight";
  } else {
    return "obese";
  }
}

function showDietSection(dietType) {
  localStorage.setItem('dietType', dietType);
  window.location.href = '/diet';
}

function showExerciseSection() {
  window.location.href = '/exercise';
}

function openChatbot() {
  window.location.href = '/chatbot';
}

function updateDietChart() {
  const bmi = parseFloat(localStorage.getItem('bmi'));
  const dietType = localStorage.getItem('dietType') || 'veg';
  let weightCategory = '';

  if (bmi < 18.5) {
    weightCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    weightCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    weightCategory = 'Overweight';
  } else {
    weightCategory = 'Obesity';
  }

  let foodImages = '';

  const dietData = {
    'veg': {
      'Underweight': [
        {
          name: 'Avocado',
          benefits: [
            'Rich in healthy fats',
            'High in fiber',
            'Promotes heart health',
            'Aids in digestion',
            'Contains essential vitamins and minerals'
          ],
          image: '../images/avocado-image.png'
        },
        {
          name: 'Sweet Potatoes',
          benefits: [
            'High in carbohydrates',
            'Rich in vitamin A',
            'Supports immune function',
            'Promotes gut health',
            'Provides sustained energy'
          ],
          image: '../images/sweetpotato-image.jpg'
        },
        {
          name: 'Whole Grain Bread',
          benefits: [
            'High in fiber',
            'Promotes digestive health',
            'Helps control blood sugar levels',
            'Rich in B vitamins',
            'Aids in weight management'
          ],
          image: '../images/wholegrain-bread.jpg'
        },
        {
          name: 'Nuts',
          benefits: [
            'Rich in healthy fats',
            'High in protein',
            'Promotes heart health',
            'Aids in weight management',
            'Contains essential minerals'
          ],
          image: '../images/nuts-image.jpg'
        },
        {
          name: 'Cottage Cheese',
          benefits: [
            'High in protein',
            'Rich in calcium',
            'Promotes muscle recovery',
            'Aids in bone health',
            'Low in lactose'
          ],
          image: '../images/cottage-cheese.jpg'
        },
        {
          name: 'Bananas',
          benefits: [
            'High in potassium',
            'Provides quick energy',
            'Promotes heart health',
            'Aids in digestion',
            'Rich in vitamin C'
          ],
          image: '../images/banana-image.webp'
        }
      ],
      'Normal weight': [
        {
          name: 'Broccoli',
          benefits: [
            'Rich in vitamins',
            'High in fiber',
            'Promotes digestive health',
            'Supports immune function',
            'Contains antioxidants'
          ],
          image: '../images/brocolli2.jpg'
        },
        {
          name: 'Paneer',
          benefits: [
            'High in protein',
            'Rich in calcium',
            'Promotes bone health',
            'Aids in muscle recovery',
            'Versatile in cooking'
          ],
          image: '../images/paneer.jpg'
        },
        {
          name: 'Carrots',
          benefits: [
            'High in vitamin A',
            'Promotes eye health',
            'Rich in fiber',
            'Supports immune function',
            'Aids in digestion'
          ],
          image: '../images/carrot.jpg'
        },
        {
          name: 'Quinoa',
          benefits: [
            'High in protein',
            'Rich in fiber',
            'Promotes digestive health',
            'Contains essential amino acids',
            'Gluten-free'
          ],
          image: '../images/quinoa.jpg'
        },
        {
          name: 'Beans',
          benefits: [
            'High in protein',
            'Rich in fiber',
            'Promotes heart health',
            'Aids in digestion',
            'Contains essential minerals'
          ],
          image: '../images/beans.jpg'
        },
        {
          name: 'Lentils',
          benefits: [
            'High in protein',
            'Rich in iron',
            'Promotes heart health',
            'Aids in digestion',
            'Contains essential vitamins'
          ],
          image: '../images/lentils.jpg'
        }
      ],
      'Overweight': [
        {
          name: 'Spinach',
          benefits: [
            'High in iron',
            'Low in calories',
            'Rich in antioxidants',
            'Promotes eye health',
            'Aids in digestion'
          ],
          image: '../images/spinach.jpg'
        },
        {
          name: 'Brown Rice',
          benefits: [
            'High in fiber',
            'Rich in magnesium',
            'Promotes heart health',
            'Aids in digestion',
            'Helps control blood sugar levels'
          ],
          image: '../images/brownrice.jpg'
        },
        {
          name: 'Oats',
          benefits: [
            'High in fiber',
            'Low in calories',
            'Promotes heart health',
            'Aids in digestion',
            'Helps control blood sugar levels'
          ],
          image: '../images/oats.png'
        },
        {
          name: 'Bell Peppers',
          benefits: [
            'Rich in vitamins',
            'High in fiber',
            'Promotes eye health',
            'Supports immune function',
            'Aids in digestion'
          ],
          image: '../images/bellpepper.jpg'
        },
        {
          name: 'Chickpeas',
          benefits: [
            'High in protein',
            'Low in fat',
            'Promotes heart health',
            'Aids in digestion',
            'Rich in essential minerals'
          ],
          image: '../images/chickpeas.jpg'
        },
        {
          name: 'Cucumbers',
          benefits: [
            'High in water content',
            'Low in calories',
            'Promotes hydration',
            'Aids in digestion',
            'Rich in vitamin K'
          ],
          image: '../images/cucumber.webp'
        }
      ],
      'Obesity': [
        {
          name: 'Lentils',
          benefits: [
            'High in protein',
            'Rich in fiber',
            'Promotes heart health',
            'Aids in digestion',
            'Contains essential minerals'
          ],
          image: '../images/lentils.jpg'
        },
        {
          name: 'Quinoa',
          benefits: [
            'High in protein',
            'Low in fat',
            'Promotes digestive health',
            'Contains essential amino acids',
            'Gluten-free'
          ],
          image: '../images/quinoa.jpg'
        },
        {
          name: 'Cauliflower',
          benefits: [
            'Low in carbohydrates',
            'Rich in vitamin C',
            'Promotes digestive health',
            'Supports immune function',
            'Aids in weight management'
          ],
          image: '../images/cauliflower.jpg'
        },
        {
          name: 'Brussels Sprouts',
          benefits: [
            'High in fiber',
            'Rich in vitamin K',
            'Promotes bone health',
            'Supports immune function',
            'Aids in digestion'
          ],
          image: '../images/brusselssprouts.jpg'
        },
        {
          name: 'Pumpkin Seeds',
          benefits: [
            'Rich in magnesium',
            'High in zinc',
            'Promotes heart health',
            'Aids in immune function',
            'Supports prostate health'
          ],
          image: '../images/umpkinseeds.jpg'
        },
        {
          name: 'Broccoli',
          benefits: [
            'Rich in vitamins',
            'High in fiber',
            'Promotes digestive health',
            'Supports immune function',
            'Contains antioxidants'
          ],
          image: '../images/brocolli2.jpg'
        }
      ]
    },
    'non-veg': {
      'Underweight': [
        {
          name: 'Chicken Breast',
          benefits: [
            'High in protein',
            'Low in fat',
            'Promotes muscle growth',
            'Aids in weight management',
            'Versatile in cooking'
          ],
          image: '../images/chickenbreasts.jpg'
        },
        {
          name: 'Salmon',
          benefits: [
            'Rich in omega-3 fatty acids',
            'High in protein',
            'Promotes heart health',
            'Aids in brain function',
            'Reduces inflammation'
          ],
          image: '../images/salmon.jpg'
        },
        {
          name: 'Eggs',
          benefits: [
            'High in protein',
            'Rich in vitamins',
            'Promotes muscle growth',
            'Aids in brain function',
            'Versatile in cooking'
          ],
          image: '../images/egg.jpg'
        },
        {
          name: 'Fish',
          benefits: [
            'High in protein',
            'Low in fat',
            'Promotes muscle recovery',
            'Aids in weight management',
            'Rich in B vitamins'
          ],
          image: '../images/fish.png'
        },
        {
          name: 'Mutton',
          benefits: [
            'High in protein',
            'Rich in iron',
            'Promotes muscle growth',
            'Aids in preventing anemia',
            'Rich in B vitamins'
          ],
          image: '../images/mutton.jpg'
        },
        {
          name: 'Shrimp',
          benefits: [
            'High in protein',
            'Low in calories',
            'Rich in omega-3 fatty acids',
            'Promotes heart health',
            'Aids in weight management'
          ],
          image: '../images/shrimp.jpg'
        }
      ],
      'Normal weight': [
        {
          name: 'Chicken Breasts',
          benefits: [
            'High in protein',
            'Low in fat',
            'Promotes muscle recovery',
            'Aids in weight management',
            'Versatile in cooking'
          ],
          image: '../images/chickenbreasts.jpg'
        },
        {
          name: 'Tuna',
          benefits: [
            'High in protein',
            'Rich in omega-3 fatty acids',
            'Promotes heart health',
            'Aids in brain function',
            'Reduces inflammation'
          ],
          image: '../images/una.jpg'
        },
        {
          name: 'Mutton',
          benefits: [
            'High in protein',
            'Rich in vitamins',
            'Promotes muscle growth',
            'Aids in immune function',
            'Versatile in cooking'
          ],
          image: '../images/mutton.jpg'
        },
        {
          name: 'Sardines',
          benefits: [
            'High in protein',
            'Rich in calcium',
            'Promotes bone health',
            'Aids in brain function',
            'Reduces inflammation'
          ],
          image: '../images/sardines.jpg'
        },
        {
          name: 'Fish',
          benefits: [
            'High in protein',
            'Low in fat',
            'Promotes muscle recovery',
            'Rich in iron',
            'Aids in weight management'
          ],
          image: '../images/fish.png'
        },
        {
          name: 'Oysters',
          benefits: [
            'High in protein',
            'Rich in zinc',
            'Promotes immune function',
            'Aids in wound healing',
            'Supports reproductive health'
          ],
          image: '../images/Oysters.jpg'
        }
      ],
      'Overweight': [
        {
          name: 'Chicken Breasts',
          benefits: [
            'High in protein',
            'Low in calories',
            'Promotes hydration',
            'Aids in digestion',
            'Supports immune function'
          ],
          image: '../images/chickenbreasts.jpg'
        },
        {
          name: 'Baked Cod',
          benefits: [
            'High in protein',
            'Low in fat',
            'Promotes heart health',
            'Aids in weight management',
            'Rich in vitamin B12'
          ],
          image: '../images/cod.jpg'
        },
        {
          name: 'Fish',
          benefits: [
            'High in protein',
            'Low in fat',
            'Promotes muscle recovery',
            'Aids in weight management',
            'Rich in B vitamins'
          ],
          image: '../images/fish.png'
        },
        {
          name: 'Shrimp',
          benefits: [
            'High in protein',
            'Low in calories',
            'Rich in omega-3 fatty acids',
            'Promotes heart health',
            'Aids in digestion'
          ],
          image: '../images/shrimp.jpg'
        },
        {
          name: 'Salmon',
          benefits: [
            'High in protein',
            'Rich in omega-3 fatty acids',
            'Promotes heart health',
            'Aids in brain function',
            'Reduces inflammation'
          ],
          image: '../images/salmon.jpg'
        },
        {
          name: 'Mutton',
          benefits: [
            'High in protein',
            'Rich in iron',
            'Promotes muscle growth',
            'Aids in preventing anemia',
            'Rich in B vitamins'
          ],
          image: '../images/mutton.jpg'
        }
      ],
      'Obesity': [
        {
          name: 'Boiled Eggs',
          benefits: [
            'High in protein',
            'Rich in vitamins',
            'Promotes muscle growth',
            'Aids in brain function',
            'Versatile in cooking'
          ],
          image: '../images/egg.jpg'
        },
        {
          name: 'Grilled Chicken Breast',
          benefits: [
            'High in protein',
            'Low in fat',
            'Promotes muscle recovery',
            'Aids in weight management',
            'Versatile in cooking'
          ],
          image: '../images/chickenbreasts.jpg'
        },
        {
          name: 'Baked Cod',
          benefits: [
            'High in protein',
            'Low in fat',
            'Promotes muscle recovery',
            'Aids in weight management',
            'Rich in B vitamins'
          ],
          image: '../images/cod.jpg'
        },
        {
          name: 'Canned Tuna',
          benefits: [
            'High in protein',
            'Rich in omega-3 fatty acids',
            'Promotes heart health',
            'Aids in brain function',
            'Reduces inflammation'
          ],
          image: '../images/una.jpg'
        },
        {
          name: 'Lean Mutton Chops',
          benefits: [
            'High in protein',
            'Rich in vitamins',
            'Promotes muscle growth',
            'Aids in immune function',
            'Versatile in cooking'
          ],
          image: '../images/lamb2.jpg'
        },
        {
          name: 'Grilled Shrimp',
          benefits: [
            'High in protein',
            'Low in calories',
            'Rich in omega-3 fatty acids',
            'Promotes heart health',
            'Aids in weight management'
          ],
          image: '../images/shrimp.jpg'
        }
      ]
    }
  };

  dietData[dietType][weightCategory].forEach(item => {
    foodImages += `
      <div class="card">
        <img src="${item.image}" alt="${item.name}">
        <div class="card-title">${item.name}</div>
        <div class="card-description">${item.benefits.join(', ')}</div>
      </div>
    `;
  });

  document.getElementById('diet-chart').innerHTML = `<h3>${dietType.charAt(0).toUpperCase() + dietType.slice(1)} Diet Plan for ${weightCategory}:</h3>`;
  document.querySelector('.food-images').innerHTML = foodImages;
}

function updateExerciseChart() {
  const bmi = parseFloat(localStorage.getItem('bmi'));
  let weightCategory = '';

  if (bmi < 18.5) {
    weightCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    weightCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    weightCategory = 'Overweight';
  } else {
    weightCategory = 'Obesity';
  }

  let exerciseImages = '';

  const exerciseData = {
    'Underweight': [
      {
        name: 'Yoga',
        benefits: [
          'Improves flexibility',
          'Promotes strength',
          'Reduces stress',
          'Enhances balance',
          'Aids in digestion'
        ],
        image: '../images/yoga.jpg'
      },
      {
        name: 'Light Cardio',
        benefits: [
          'Enhances endurance',
          'Promotes heart health',
          'Aids in weight management',
          'Improves mood',
          'Boosts energy levels'
        ],
        image: '../images/cardio.png'
      },
      {
        name: 'Bodyweight Exercises',
        benefits: [
          'Builds strength',
          'Improves muscle tone',
          'Enhances flexibility',
          'Promotes fat loss',
          'No equipment needed'
        ],
        image: '../images/body.jpg'
      },
      {
        name: 'Pilates',
        benefits: [
          'Strengthens core muscles',
          'Improves posture',
          'Enhances flexibility',
          'Promotes relaxation',
          'Aids in injury prevention'
        ],
        image: '../images/pilates.webp'
      },
      {
        name: 'Walking',
        benefits: [
          'Low-impact exercise',
          'Promotes heart health',
          'Aids in weight management',
          'Improves mood',
          'Enhances joint health'
        ],
        image: '../images/walking.jpg'
      },
      {
        name: 'Swimming',
        benefits: [
          'Full-body workout',
          'Low-impact exercise',
          'Promotes heart health',
          'Improves lung capacity',
          'Aids in weight management'
        ],
        image: '../images/swimming.jpg'
      }
    ],
    'Normal weight': [
      {
        name: 'Walking',
        benefits: [
          'Promotes heart health',
          'Aids in weight management',
          'Improves mood',
          'Enhances joint health',
          'Low-impact exercise'
        ],
        image: '../images/walking.jpg'
      },
      {
        name: 'Strength Training',
        benefits: [
          'Builds muscle',
          'Enhances metabolism',
          'Improves bone density',
          'Promotes fat loss',
          'Boosts energy levels'
        ],
        image: '../images/strength.svg'
      },
      {
        name: 'HIIT',
        benefits: [
          'Promotes fat loss',
          'Improves cardiovascular health',
          'Enhances metabolism',
          'Boosts endurance',
          'Time-efficient workout'
        ],
        image: '../images/hiit.jpg'
      },
      {
        name: 'Cycling',
        benefits: [
          'Improves cardiovascular health',
          'Strengthens leg muscles',
          'Promotes fat loss',
          'Low-impact exercise',
          'Enhances joint mobility'
        ],
        image: '../images/cycling.webp'
      },
      {
        name: 'Swimming',
        benefits: [
          'Full-body workout',
          'Low-impact exercise',
          'Promotes heart health',
          'Improves lung capacity',
          'Aids in weight management'
        ],
        image: '../images/swimming.jpg'
      },
      {
        name: 'Skipping',
        benefits: [
          'Improves coordination',
          'Enhances cardiovascular health',
          'Promotes fat loss',
          'Strengthens leg muscles',
          'Boosts endurance'
        ],
        image: '../images/jumprope.webp'
      }
    ],
    'Overweight': [
      {
        name: 'Brisk Walking',
        benefits: [
          'Promotes heart health',
          'Aids in weight management',
          'Improves mood',
          'Enhances joint health',
          'Low-impact exercise'
        ],
        image: '../images/walking.jpg'
      },
      {
        name: 'Swimming',
        benefits: [
          'Full-body workout',
          'Low-impact exercise',
          'Promotes heart health',
          'Improves lung capacity',
          'Aids in weight management'
        ],
        image: '../images/swimming.jpg'
      },
      {
        name: 'Aerobics',
        benefits: [
          'Promotes cardiovascular health',
          'Aids in weight management',
          'Improves mood',
          'Enhances flexibility',
          'Low-impact exercise'
        ],
        image: '../images/yoga.jpg'
      },
      {
        name: 'Swimming',
        benefits: [
          'Strengthens upper body muscles',
          'Promotes cardiovascular health',
          'Improves posture',
          'Aids in weight management',
          'Low-impact exercise'
        ],
        image: '../images/swimming.jpg'
      },
      {
        name: 'Strength Training',
        benefits: [
          'Promotes cardiovascular health',
          'Low-impact exercise',
          'Aids in weight management',
          'Improves mood',
          'Enhances endurance'
        ],
        image: '../images/strength.svg'
      },
      {
        name: 'Cycling',
        benefits: [
          'Improves cardiovascular health',
          'Strengthens leg muscles',
          'Promotes fat loss',
          'Low-impact exercise',
          'Enhances joint mobility'
        ],
        image: '../images/cycling.webp'
      }
    ],
    'Obesity': [
      {
        name: 'Yoga',
        benefits: [
          'Promotes cardiovascular health',
          'Aids in weight management',
          'Improves mood',
          'Enhances flexibility',
          'Low-impact exercise'
        ],
        image: '../images/yoga.jpg'
      },
      {
        name: 'Cycling',
        benefits: [
          'Improves cardiovascular health',
          'Strengthens leg muscles',
          'Promotes fat loss',
          'Low-impact exercise',
          'Enhances joint mobility'
        ],
        image: '../images/cycling.webp'
      },
      {
        name: 'Swimming',
        benefits: [
          'Low-impact exercise',
          'Promotes cardiovascular health',
          'Aids in weight management',
          'Improves flexibility',
          'Enhances joint health'
        ],
        image: '../images/swimming.jpg'
      },
      {
        name: 'Resistance Band Exercises',
        benefits: [
          'Promotes muscle strength',
          'Improves flexibility',
          'Aids in injury prevention',
          'Enhances range of motion',
          'Portable and convenient'
        ],
        image: '../images/band.webp'
      },
      {
        name: 'Stretching',
        benefits: [
          'Improves flexibility',
          'Promotes relaxation',
          'Aids in injury prevention',
          'Enhances range of motion',
          'Improves posture'
        ],
        image: '../images/stretching.png'
      },
      {
        name: 'Strength Training',
        benefits: [
          'Improves balance',
          'Promotes relaxation',
          'Enhances coordination',
          'Aids in stress reduction',
          'Low-impact exercise'
        ],
        image: '../images/strength.svg'
      }
    ]
  };

  exerciseData[weightCategory].forEach(item => {
    exerciseImages += `
      <div class="card">
        <img src="${item.image}" alt="${item.name}">
        <div class="card-title">${item.name}</div>
        <div class="card-description">${item.benefits.join(', ')}</div>
      </div>
    `;
  });

  document.getElementById('exercise-chart').innerHTML = `<h3>Recommended Exercises for ${weightCategory}:</h3>`;
  document.querySelector('.exercise-images').innerHTML = exerciseImages;
}

window.onload = function() {
  const storedWeight = localStorage.getItem('weight');
  const storedHeight = localStorage.getItem('height');

  if (!storedWeight || !storedHeight) {
    form.weight.value = 0;
    form.height.value = 0;
  } else {
    form.weight.value = storedWeight;
    form.height.value = storedHeight;
  }
};

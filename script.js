'use strict'


const card = document.getElementById('myDisplay')

function myFunction() {
  let x = document.getElementById("myDisplay");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


 function calculate(){
     let bmi;
     let height = parseInt(document.getElementById("height").value);
let weight = parseInt(document.getElementById("weight").value);
    
document.getElementById('weight-val').textContent = weight + "kg";
document.getElementById('height-val').textContent = height + "cm";

 bmi = (weight / Math.pow( (height/100), 2)).toFixed(1);


  result.textContent = bmi;

  if(bmi < 18.5){
    category.textContent = "Underweight 😒, Try to eat more food with lots of nutrients.";
     result.style.color = "#ffc44d";
     
 }

// If (BMI is >=18.5 and <=24.9){


else if( bmi >= 18.5 && bmi <= 24.9 ){
  category.textContent = "Healthy Weight 😍, Try to maintain your healthy life.";
   result.style.color = "#0be881";
   
 }

 //If BMI is >= 25 and <= 29.9 

 else if( bmi >= 25 && bmi <= 29.9 ){
   category.textContent = "Overweight 😮, Eat a balanced-calorie-controlled diet as recommended by your health professional.";
     result.style.color = "#ff884d";
     
 }

 //If BMI is <= 30
 
 else{
  category.textContent = "Obese 😱, Take up any sport activities such as fast walking, jogging for 150 to 300 minutes a week.";
   result.style.color = "#ff5e57";
   
}

 document.getElementById("category")= category;


 }


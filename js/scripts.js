var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};
var BMI = function (weight,height) {return (weight/(height*height));

};

var conversion = function(Farenheit,celcius)
var weight = parseFloat(prompt("Enter your weight in lbs."));
var height = parseInt(prompt("Enter your height in inches."));
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//var result = add(number1,number2);
//var result = subtract(number1,number2);
//var result = multiply(number1,number2);
// var result = divide(number1,number2);

var result = BMI(weight,height)*703;




alert(result);

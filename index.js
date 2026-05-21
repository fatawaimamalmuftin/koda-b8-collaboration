// TODO: Uncomment after implemented
const {
  celsiusToKelvin,
  celsiusToRankine,
  celsiusToFahrenheit,
} = require("./utils/celsius.js");

const {
  // kelvinToCelsius,
  // kelvinToRankine,
  // kelvinToFahrenheit,
} = require("./utils/kelvin.js");

const {
  // rankineToCelsius,
  rankineToKelvin,
  rankineToFahrenheit,
} = require("./utils/rankine.js");

const {
  // fahrenheitToCelsius,
  // fahrenheitToKelvin,
  // fahrenheitToRankine,
} = require("./utils/fahrenheit.js");

const inputSuhu = 100;

// TODO: Do user input and calculation.

console.log(rankineToKelvin(5))
console.log("Celcius ke fahrenheit : " + celsiusToFahrenheit(inputSuhu));
console.log("Celcius ke Kelvin     : " + celsiusToKelvin(inputSuhu));
console.log("Celcius ke Rankine    : " + celsiusToRankine(inputSuhu));

console.log("Rankine ke fahrenheit    : " + rankineToFahrenheit(inputSuhu));


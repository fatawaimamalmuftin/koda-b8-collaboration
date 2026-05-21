const converter = require('./fromcelcius.js');

const inputSuhu = 100;

console.log("Celcius ke fahrenheit : " + converter.celsiusToFahrenheit(inputSuhu));
console.log("Celcius ke Kelvin     : " + converter.celsiusToKelvin(inputSuhu));
console.log("Celcius ke Rankine    : " + converter.celsiusToRankine(inputSuhu));
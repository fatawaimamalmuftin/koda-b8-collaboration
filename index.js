const { input, closeInput } = require("./utils/inputData.js");

// TODO: Uncomment after implemented
const {
  celsiusToKelvin,
  celsiusToRankine,
  celsiusToFahrenheit,
} = require("./utils/celsius.js");

const {
  kelvinToCelcius,
  kelvinToRankine,
  kelvinToFahrenheit,
} = require("./utils/kelvin.js");

const {
  // rankineToCelsius,
  rankineToKelvin,
  rankineToFahrenheit,
} = require("./utils/rankine.js");

const {
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  fahrenheitToRankine,
} = require("./utils/fahrenheit.js");

const inputSuhu = 100;

try {
  console.log("Celcius ke fahrenheit : " + celsiusToFahrenheit(inputSuhu));
  console.log("Celcius ke Kelvin     : " + celsiusToKelvin(inputSuhu));
  console.log("Celcius ke Rankine    : " + celsiusToRankine(inputSuhu));
} catch (err) {
  console.log("Error :", err);
}

console.log(rankineToKelvin(5));
console.log("Celcius ke fahrenheit : " + celsiusToFahrenheit(inputSuhu));
console.log("Celcius ke Kelvin     : " + celsiusToKelvin(inputSuhu));
console.log("Celcius ke Rankine    : " + celsiusToRankine(inputSuhu));

async function callKelvin() {
  let value = await input("Input Suhu Kelvin: ");
  value = parseFloat(value);
  console.log(`${value}°K = ${kelvinToCelcius(value)}°C`);
  console.log(`${value}°K = ${kelvinToRankine(value)}°R`);
  console.log(`${value}°K = ${kelvinToFahrenheit(value)}°F`);
  closeInput("Berhasil Rubah Suhu Kelvin");
}
callKelvin();

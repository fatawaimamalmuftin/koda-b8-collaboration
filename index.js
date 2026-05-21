const { input, closeInput } = require("./utils/inputData.js");

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
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  fahrenheitToRankine,
} = require("./utils/fahrenheit.js");

// TODO: Do user input and calculation.

async function main() {
  const nilai = await input("Masukkan suhu : ");
  const from = await input("Dari satuan asal (C/K/R/F) : ");

  const value = Number(nilai);
  const unit = from.toUpperCase();

  if (isNaN(value)) {
    closeInput("Input harus berupa angka");
    return;
  }

  console.log(`\n---- Hasil konversi---- `);

  switch (unit) {
    case "C":
      console.log("Celsius ke Kelvin     : " + celsiusToKelvin(value));
      console.log("Celsius ke Rankine    : " + celsiusToRankine(value));
      console.log("Celsius ke fahrenheit : " + celsiusToFahrenheit(value));
      break;
    case "K":
      console.log("Kelvin ke Celcius     : " + kelvinToCelsius(value));
      console.log("Kelvin ke Rankine    : " + kelvinToRankine(value));
      console.log("Kelvin ke fahrenheit : " + kelvinToFahrenheit(value));
      break;
    case "R":
      console.log("Rankine ke Celcius    : " + rankineToCelsius(value));
      console.log("Rankine ke Kelvin     : " + rankineToKelvin(value));
      console.log("Rankine ke fahrenheit : " + rankineToFahrenheit(value));
      break;
    case "F":
      console.log("Fahrenheit ke Celcius : " + fahrenheitToCelsius(value));
      console.log("Fahrenheit ke Kelvin  : " + fahrenheitToKelvin(value));
      console.log("Fahrenheit ke Rankine : " + fahrenheitToRankine(value));
      break;
    default:
      closeInput("Input salah");
  }

  closeInput(`\nProgram selesai.`);

}
main();

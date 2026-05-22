function validateNumber(value) {
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error("Input harus berupa angka valid");
  }
}

function celsiusToKelvin(value) {
  validateNumber(value);
  return value + 273.15;
}
function celsiusToRankine(value) {
  validateNumber(value);
  return (value + 273.15) * 1.8;
}
function celsiusToFahrenheit(value) {
  validateNumber(value);
  return (value * 9 / 5) + 32;
}



module.exports = {
  celsiusToKelvin,
  celsiusToRankine,
  celsiusToFahrenheit
};
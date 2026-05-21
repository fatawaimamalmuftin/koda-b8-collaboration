function kelvinToCelcius(value) {
  return value - 273.15;
}
function kelvinToRankine(value) {
  return (value * 9) / 5;
}
function kelvinToFahrenheit(value) {
  return ((value - 273.15) * 9) / 5 + 32;
}

module.exports = {
  kelvinToCelcius,
  kelvinToRankine,
  kelvinToFahrenheit,
};

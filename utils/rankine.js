// Implement functions here 👇
function rankineToKelvin (value) {
    if (typeof value === "number") {
        return value * 5/9;
    } else {
        throw (new Error ("Input must be number"));
        retun 
    }
}

// TODO: Uncomment after implemented
module.exports = {
  // rankineToCelsius,
  rankineToKelvin,
  // rankineToFahrenheit,
};

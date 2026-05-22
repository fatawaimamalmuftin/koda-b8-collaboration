// Implement functions here 👇
function rankineToKelvin (value) {
  if (typeof value === "number") {
    return value * 5/9;
  } else {
    throw (new Error ("Input must be number"));
  return; 
  }
}

function rankineToFahrenheit (value) { 
  if (typeof value !== "number") { 
    throw new Error("Input must be number"); 
  }
  return value - 459.67;
}

function rankineToCelsius(value){
  if(typeof value !== "number"){
    throw new Error("Input must be number");
  }else{
    return (value - 491.67) * 5/9;
  }    
}


// TODO: Uncomment after implemented
module.exports = {
  rankineToCelsius,
  rankineToKelvin,
  rankineToFahrenheit,
};

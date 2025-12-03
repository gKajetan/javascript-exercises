const convertToCelsius = function(temp) {
  let calculated = (temp-32)*5/9;
  let calculatedRounded = Math.round(calculated * 10) / 10;
  return calculatedRounded;
};

const convertToFahrenheit = function(temp) {
  let calculated = (temp*9/5)+32;
  let calculatedRounded = Math.round(calculated * 10) / 10;
  return calculatedRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

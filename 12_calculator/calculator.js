const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, current) => accumulator + current, 0); // 0 is start value of accumulator
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b);
};

const power = (base, exponent) => {
  return base**exponent;
};

const factorial = (f) => {
  let wynik = 1;
  
  for (let i = f; i > 0; i--) {
    wynik *= i;
  }
  return wynik;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

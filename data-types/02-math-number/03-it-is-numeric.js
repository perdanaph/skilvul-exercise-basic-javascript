const isItNumeric = function (number) {
  if (parseFloat(number)) {
    return true;
  } else {
    return false;
  }
};

console.log(isItNumeric(12));
console.log(isItNumeric('abcd'));
console.log(isItNumeric('12'));
console.log(isItNumeric(' '));
console.log(isItNumeric(1.201));
console.log(isItNumeric(-200));

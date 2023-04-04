chooseDecimals = (n, d) => {
  if (isNaN(n) || isNaN(n)) {
    return 0;
  } else if (d < 0) {
    d = 0;
  }
  return Number(n).toFixed(Number(d));
};

console.log(chooseDecimals(2.100212, 2));
console.log(chooseDecimals(2.100212, 3));
console.log(chooseDecimals(2100, 2));

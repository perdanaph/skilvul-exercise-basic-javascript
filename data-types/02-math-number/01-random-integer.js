function rand(min, max) {
  if (min == null && max == null) {
    return 0;
  }
  if (max == null) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * Number(Math.abs(max) - Number(min) + 1) + Number(min));
}
console.log(rand(20, 1));
console.log(rand(1, 10));
console.log(rand(6));
console.log(rand());

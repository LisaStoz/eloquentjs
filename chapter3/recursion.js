function isEven(number) {
  if (number === 0) return true;
  if (number === 1) return false;
  if (number < 0) return isEven(-number);
  return isEven(number - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));

function every(a, p) {
  var result = true, count = 0;
  while(result && count < a.length) {
    result = p(a[count]);
    count++;
  }
  return result;
}

function some(a, p) {
  var result = false, count = 0;
  while(!result && count < a.length) {
    result = p(a[count]);
    count++;
  }
  return result;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));

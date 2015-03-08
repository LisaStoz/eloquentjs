function range(start, end, step) {
  var result = [];
  step = step || 1;
  for (var i = start; (i < end == step > 0 || i === end) ; i+=step) {
    result.push(i);
  }
  return result;
}

function sum(numbers) {
  if (numbers.length === 1)
    return numbers[0];
  else
    return numbers[0] + sum(numbers.slice(1));
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

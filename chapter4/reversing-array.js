function reverseArray(a) {
  var result = [];
  for (var i = a.length - 1; i >= 0; i--)
    result.push(a[i]);
  return result;
}

function reverseArrayInPlace(a) {
  var tmp;
  for (var i = a.length - 1; i >= a.length / 2; i--) {
    tmp = a[i];
    a[i] = a[i - a.length + 1];
    a[i - a.length + 1] = tmp;
  }
  return a;
}

var arr = [1, 2, 3, 4];
console.log(reverseArray(arr));
console.log(reverseArray(arr));

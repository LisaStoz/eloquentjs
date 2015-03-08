function arrayToList(arr){
  var list = null;
  if (arr.length > 0) {
    list = {
      value: arr[0],
      rest: arrayToList(arr.slice(1))
    };
  }
  return list;
}

function prepend(element, l){
  return {value: element, rest: l};
}

function nth(l, e){
  if (l == null) return undefined;
  if (l.value === e) return 1;
  return 1 + nth(l.rest, e) || undefined;
}

function listToArray(l){
  var a = [];
  if (l.value) {
    a.push(l.value)
    if (l.rest)
      a = a.concat(listToArray(l.rest))
  }
  return a;
}

var a = [1, 2, 3];
var l = arrayToList(a);
console.log(l);
console.log(listToArray(l));
console.log(prepend(0, l));
l = prepend(10, l);
console.log(nth(l, 5));

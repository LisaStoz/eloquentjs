var arrays = [[1, 2, 3], [4, 5], [6]];

var a = arrays.reduce(function(el1, el2){
  return el1.concat(el2);
});

console.log(a);

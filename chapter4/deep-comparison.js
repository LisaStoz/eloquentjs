function deepEqual(arg1, arg2){
  if (arg1 === arg2) return true;
  if (arg1 === null || arg2 === null) return false;
  var foundFalse = false;
  if (typeof arg1 === "object" && typeof arg2 === "object") {
    for (var property in arg1) {
      if (!deepEqual(arg1[property], arg2[property])) {
        foundFalse = true;
        break;
      }
    }
    for (var property in arg2) {
      if (!deepEqual(arg1[property], arg2[property])) {
        foundFalse = true;
        break;
      }
    }
  } else return false;
  return !foundFalse;
}

console.log(deepEqual(1, 1));
console.log(deepEqual({val: 1}, {val: 1}));
console.log(deepEqual(1, null));

var obj1 = {
  value1: "value1",
  value2: "value2",
  nr: 34
};

var obj2 = {
  value1: "value1",
  value2: "value2",
  nr: 34
};


var obj3 = {
  value1: "value1",
  value2: "value2",
  nr: 35
};
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

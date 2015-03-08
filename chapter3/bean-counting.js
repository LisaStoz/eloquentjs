function countChar(c) {
  return function(s){
    var count = 0;
    for (var i=0; i<s.length;i++) {
      if (s.charAt(i) === c) count++;
    }
    return count;
  }
}

var countBs = countChar("B");

console.log(countBs("BgbgB"));

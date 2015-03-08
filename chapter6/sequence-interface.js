// obj.next(); - returns next element
// obj.atTheEnd() - return true/false

function logFive(sequenceObject) {
  var loggedCount = 0;
  while (!sequenceObject.atTheEnd() && loggedCount < 5) {
    loggedCount++;
    console.log(sequenceObject.next());
  }
}

function ArraySeq(sequence) {
  this.index = -1;
  this.sequence = sequence;

  this.atTheEnd = function(){
    return this.index === this.sequence.length - 1;
  };

  this.next = function(){
    this.index++;
    return this.sequence[this.index];
  };
}

function RangeSeq(from, to) {
  this.current = from - 1;
  this.from = from;
  this.to = to;

  this.atTheEnd = function() {
    return this.current === this.to;
  };

  this.next = function(){
    this.current++;
    return this.current;
  };
}

// Your code here.

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104

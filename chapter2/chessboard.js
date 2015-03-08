var size = 8, board = "";
for (var v = 1; v <= size; v++) {
  for (var h = 1; h <= size; h++) {
    if (v % 2 !== h % 2)
      board += "#";
    else
      board += " ";
  }
  board += "\n";
}
console.log(board);

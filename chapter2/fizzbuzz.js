var line;
for (var nr = 1; nr <= 100; nr++) {
  line = "";
  if (nr % 3 === 0) line += "Fizz";
  if (nr % 5 === 0) line += "Buzz";
  if (!line) line = nr;
  console.log(line);
}

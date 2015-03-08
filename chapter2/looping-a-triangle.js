// All solutions making use of .length method

// 1. with do loop
var line1 = "";
do {
  line1 += "#";
  console.log(line1);
} while (line1.length < 7);

// 2. with for loop
for (line2="#";line2.length <= 7; line2+= "#") {
  console.log(line2);
}

// 3. while loop
var line3 = '#';
while(line3.length <= 7) {
  console.log(line3);
  line3 += "#";
}

// 4. while loop with break statement
var line4 = '';
while (true) {
  line4 += '#';
  console.log(line4);
  if (line4.length === 7) break;
}

// while Loop

// Don't repeat yourself
/*
let i = 0;

while (i <= 9) {
  console.log(1);
  i++;
}
*/
// Example while loop

let num = 10;
let total = 0;
let i = 0;

while (i <= num) {
  total = total + i;
  i++;
}

console.log(total);

// Math

// (n*(n+1))/2
total = (num * (num + 1)) / 2;
console.log(total); // same Ans

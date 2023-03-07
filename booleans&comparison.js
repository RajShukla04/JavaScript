// Booleans & comparison operator
// Booleans have two values
// true of false
let num1 = 5;
let num2 = 7;

console.log(num1 > num2); // false

num1 = 7;
console.log(num1 >= num2); // true
console.log(num1 === num2); // true
num1 = 6;

console.log(num1 < num2); // true
console.log(num1 <= num2); // true

// == vs ===

num1 = 7;
console.log(num1 == num2); // true
num1 = "7";
console.log(num1 == num2); // true
// == operator return true both string and numbers or any data type it checks only values
// == check only values not data type

console.log(num1 === num2); // false
// === operator check both data types and values then give us result

// != vs !==

console.log(num1 != num2); // it checks num1 and num2 is diff.
// false
num1 = 7;
console.log(num1 != num2); // false

// it's also check values not data type

console.log(num1 !== num2); // return false because num1 and num value same also it's data type same
num1 = "7";
console.log(num1 !== num2); // return true because num1 and num2 values same but it's data type is diff.

// !== checks data type and values both

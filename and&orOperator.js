// and or operator

let firstName = "raj";
let age = 18;
/*
if (firstName[0] === "r") {
  console.log("your name start with r");
}
if (age > 18) {
  console.log("you are above 18");
}
*/
if (firstName[0] === "r" && age >= 18) {
  // it checks whole condition and if it's true then if block Execute else else block execute
  console.log("Name starts with r and above 18");
} else {
  console.log("inside else");
}

if (firstName[0] === "r" || age >= 18) {
  // it checks one  condition and if it's true then if block Execute else else block execute
  console.log("inside if");
} else {
  console.log("inside else");
}

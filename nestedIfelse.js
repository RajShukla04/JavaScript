// Nested If Else

// Winning number 43
// 43 your guess is right
// 20 to low
// 45 to high

let WinningNum = 43;
let userGuess = +prompt("Guess a Number: "); // the prompt func takes input as a string
// ahed a string we put + then it will change to Number

if (userGuess === WinningNum) {
  console.log("your guess is right!");
} else {
  if (userGuess < WinningNum) {
    // nested if Else
    console.log("Too Low !!!");
  } else {
    console.log("Too High !!1");
  }
}
  
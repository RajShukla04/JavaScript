// string Practice

console.log('ok"'.length); // return 3
let text = "Hello world, welcome to the universe.";
console.log(text.includes("world")); // return true coz world is in the text variable

console.log(text.startsWith("H")); // return true coz the text string starts with H word
console.log(text.endsWith("l")); // return false coz the text string not ends with the l

// write a program to convert a given string to lowercase

console.log(text.toLowerCase()); // return  string to lowercase

//
let str2 = "please give Rs 1000";
console.log(str2.slice("please give Rs ".length));

// try to change 4th character of a given string
hehe = "babes";
hehe[2] = "y";
console.log(hehe);

// we can't change string character coz string is immutable

let string_01 = "lmao this is a string for perform tasks of string methods";
console.log(string_01.length); // gives the length of a string
console.log(string_01.toUpperCase()); // converts whole string to uppercase
console.log(string_01.toLowerCase()); // converts whole strings to lowercase
console.log(string_01.slice(2, 6)); // this method print the text which index you given on the function
let tr = string_01.trim(); // it removes all withe spaces from the both sides of string but it can not remove space from insite string
console.log(tr);

console.log(string_01.slice(4)); // it removes all text which index you are given
console.log(string_01.replace("is", "baby")); // it replace a text of string which is comming friest from index of 0
let string_02 = "this is a second string of your practice page";
console.log(string_01.concat(string_02)); // it concate (+) first string to last string
// we can concat (plus) string using + operator

/*
			Strings are immutable in order to access the character at an index we use the following syntex

	Ex. => {
								string_01[index that you want to access]
	}


*/
console.log(string_01[3]); // it print 3rd text from the string

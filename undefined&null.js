let firstName;
console.log(typeof firstName);
firstName = "jonh";
console.log(typeof firstName, firstName);

//null

let myVar = null;
// console.log(typeof myVar) // print "object" is is javaScript bug
console.log(myVar);
myVar = "jonh";
console.log(myVar, typeof myVar); 

//BigInt

let myNum = 123;
console.log(myNum);
console.log(Number.MAX_SAFE_INTEGER); // it tell us biggest number stored in javaScript

// for store max size of number we use bigInt
let num = BigInt(859258958747765678886785876665454475); // we can also use BigInt for small numbers +> No prob.
console.log(num);
console.log(BigInt.MAX_SAFE_INTEGER); // 859258958747765693986575763898368000n

// we have two ways to create BigInt
// first we can do like num variable

//second we can do like write n in the last number
//Ex.

let bigin = 123n;
console.log(bigin);
console.log(typeof bigin); //  bigint

//we can perform every operations with bigint

lol = 23n; 
console.log(num+lol)

// we can't change Number to BigInt.



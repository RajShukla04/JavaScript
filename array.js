/*



Arrays are mutable array can be changed
strings are immutable strings can't be changed





*/

// array is a collection of DATA
// we can acces an arry via index

// array are variable which can hold more than one value
// we can store any data type in array
let a = [1, 2, 3, 4, 5, null, undefined];
console.log(a);
// acess a value in array

console.log(a[3]); // print 4
console.log(a.length);

// .length return the length of an array
// we cam change the element of an aray
// we can change the length of element of array

a[2] = 98; // changed the value of 2nd index element
console.log(a);

// in javaScript arrays are objects. the typeof operator on array returns object. ok?

console.log(typeof a); // print "object"

// arrays can hold many values under a single Name

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

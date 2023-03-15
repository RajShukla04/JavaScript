let num = [1, 2, 3, 34, 5];
let b = num.toString(); // change an array to String type
// b is now string
console.log(b, typeof b);

let c = num.join("_");
console.log(c, typeof c); // join _ between each element of an array
// return string type

// pop() change the array
// .pop() remove last element of an array
/* let p = num.pop();
console.log(p, num)
*/
// pop returns the popped element

// push modify the original array and return a new array length.

/*
let pu = num.push(78);
console.log(pu, num)
*/
// push join at the end of the array

// shift remove 1st element and return new array

let s = num.shift(); // removes an element from the start of the array
console.log(s, num);
// .shift() modify the original array

// unshift adds element to the begening of the array

let k = num.unshift(98);
console.log(k, num);

// that's it

/*
	push and pop is faster than shift and unShift

*/

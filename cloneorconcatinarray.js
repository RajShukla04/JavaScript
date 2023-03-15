let arr1 = ["item1", "item2"];
// let arr2 =["item1", "item2" ]; // bad method

//let arr2 = arr1.slice(0) faster then others
//console.log(arr2)  // copid arr1 array

let arr2 = [].concat(arr1);
console.log(arr2); // copid arr1 array

// new way to clone array
// spread operator

let array2 = [...arr1];
console.log(array2);

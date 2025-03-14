// Arrays: Linear Data Structure

// array declaration
let array = [1, 'Ankush', true, null];
let pie = 3.14;

// push : pushes an element to the last of the array
array.push(undefined);
array.push(pie);

// push : pops an element from the last of the array
let poppedElement = array.pop();
// console.log(poppedElement)

// shift: removes an element from the starting of the array
let shiftedArray = array.shift()
// console.log(shiftedArray)

// unshift: adds an element to the starting of the array
array.unshift(0);

// slice: slices the array and return an array
let newArray = array.slice(0, 3);
// console.log(newArray);

// indexOf: returns the index of an element
// console.log(array.indexOf(undefined))

// includes: it checks if the element is part of the array and returns a boolean
// console.log(array.includes('Deshwal'))

// 0 -> 1
// 1 -> 'Ankush'
// 2 -> true
// 3 -> null
console.log(array);
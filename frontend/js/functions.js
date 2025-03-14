// Welcome to lecture of functions:
// Topics: function declaratoin & expression, arguments & parametres, return, callback function, Arrow functions

// piece of code, which executes itself when called

console.log('Ankush');

function add(a, b) {
    console.log(a + b);
}
var name = 'Ankush';
// add(2, 5)

function subtract(a, b, c) {
    console.log(a-b-c)
}

// subtract(6,4,1)

function multiply(a, b) {
    let mul = a * b;
    // console.log(mul);
    return mul;
}

let product = multiply(3, 3);

// console.log(product)
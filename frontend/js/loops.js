// ----------------------------Loops and conditionals in JavaScript

// --------------------if-else statements

// let age = 22;

// if (age < 18) {
//     console.log('you are not eligible!!')
// } else if (age > 18 && age < 21) {
//     console.log('You are partially eligible!!')
// } else {
//     console.log("you are eligible")
// }

// -------------ternary 

age = 17;

let isEligible = age > 18 ? 'Eligible' : 'Not Eligible';

// console.log(isEligible)

// ------------------------ for-loop

// console.log(2*1);
// let i = 0;
// for (i = 1; i <= 10; i++) {
//     for (let j = 1; j < i; j++) {
//         process.stdout.write("*");
//     }
//     console.log("")
// }

// i = 1;

// ------------------------ while-loop

// let k = 10; // 9
// while (k < 10) {
//     console.log(k);
//     k++;
// }

// k = 20;
// do {
//     console.log(k);
//     k++;
// } while (k < 20);

// -------------continue & break

for (let i = 0; i < 10; i++) {
    if (i == 2 || i == 5) {
        continue;
    }
    console.log(i);
}

// i = 5
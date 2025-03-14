// Objects in js

// Objects: key: values pairs

// let name = "Ankush";
// let age = 21;
// let profession  = 'Software Engineer';

let person = {
    name : "Ankush",
    age : 21,
    profession : "Software Engineer",

    write: function () {
        console.log('Ankush is writing')
    },
};

// console.log(person.age);
// console.log(person.name);
// console.log(person.profession);


//for-in loop
for (let i in person) {
    console.log(i, ':', person[i]);
}

// for-of loop

let arr = [1,2,3,4,5];
for (let i of arr) {
    console.log(i);
}

let name = 'Ankush';
for (let i of name) {
    console.log(i);
}
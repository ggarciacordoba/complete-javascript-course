'use strict';

let age = 31;
let oldAge = age;
age = 32;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Gonza',
    age: 30,
}

const friend = me;
friend.age = 27;
console.log('Friend:', friend); // Age 27  
console.log('Gonza:', me); //Age 27

let lastName = 'Willams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName,oldLastName); // They are different because of primitive types

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'; //Will change it in the heap but jessica and marriedJessica are the same

//marriedJessica = {} // Will not work because it's a const

//Copy objects but be able to modify one without affecting the other
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice','Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2, jessicaCopy);
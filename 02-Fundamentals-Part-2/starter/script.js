'use strict';

//Class 33 - Functions
function logger() {
    console.log('My name is Gonza');
}

// calling/invoking/running a function
logger();
logger();
logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//Class 34 - Declarations vs Expressions

//declaration of a function
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

console.log(calcAge1(1991));

//Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Gonza'));
console.log(yearsUntilRetirement(1980, 'Pepe'));


//Functions calling another Function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangesPieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//Review Functions
const calcAge4 = function (birthYear) {
    return 2022 - birthYear;
}

const calcRetirement = function (age) {
    return 65 - age;
}

const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calcAge4(birthYear);
    const retirement = calcRetirement(age);

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} is already retired.`
    }
}

console.log(yearsUntilRetirement2(1991, 'Gonza'));
console.log(yearsUntilRetirement2(1949, 'Pepe'));

//Class 39 - Arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);

//get the number of elements in the array
console.log(friends.length);

//get the last element of the array
console.log(friends[friends.length - 1]);

//Change an element of the array
friends[2] = 'Jay';
console.log(friends);

//You can't replace the entire array if it's declared with const 

const firstName = 'Jonas';
const jonas = [firstName, 'Smith', 2022 - 1991, 'Engineer', friends];
console.log(jonas);
console.log(jonas.length);
console.log(jonas[4][0]);
console.log(jonas[4].length);

//Exercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const years2 = [1990, 1967, 2002, 2010, 2018]

const age4 = calcAge(years2[0]);
const age5 = calcAge(years2[1]);
const age6 = calcAge(years2[years2.length - 1]);
console.log(age4, age5, age6);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);

//Class 40 - Methods
//Push add elements to the end of the array
// const friends = ['Michael', 'Steven', 'Jay'];
friends.push('Carlos');
console.log(friends);

//Unshift - Adds an element at the beginning of an array
friends.unshift('John');
console.log(friends);

//Pop - Remove the last element of the array
friends.pop();
console.log(friends);

//Shift - Removes the first element of the array
friends.shift();
console.log(friends);

//Find the position of an element in the array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Giusseppe'));

//Know if an element exists in an array
console.log(friends.includes('Steven'));
console.log(friends.includes('Giusseppe'));

if (friends.includes('Steven')) {
    console.log('You have a friend called steven');
}

//Class 42 - Objects
/*const gonza = {
    firstName: 'Gonzalo',
    lastName: 'Garcia Cordoba',
    age: 2022 - 1991,
    job: 'Product Manager',
    friends: ['Ima', 'Papu', 'Capu']
}

console.log(gonza);
console.log(gonza.lastName); //Dot notation
console.log(gonza['lastName']); //Bracket notation

const nameKey = 'Name';
console.log(gonza['first' + nameKey]);
console.log(gonza['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Gonza? Choose between firstName, lastName, age, job and friends');
console.log(gonza[interestedIn]);

//Handle undefined values
if (gonza[interestedIn]) {
    console.log(gonza[interestedIn]);
} else {
    //the undefined will come here because it's a false value
    console.log('Wrong request!');
}

//Add new properties to an object

gonza.location = 'Buenos Aires'
gonza['twitter'] = '@gonzagc';

//Challenge
console.log(`${gonza.firstName} has ${gonza.friends.length} friends, and his best friend is called ${gonza.friends[0]}`);
*/
//Object Methods
const gonza2 = {
    firstName: 'Gonzalo',
    lastName: 'Garcia Cordoba',
    birthYear: 1991,
    job: 'Product Manager',
    friends: ['Ima', 'Papu', 'Capu'],

    /*calcAge: function(birthYear){
        return 2022-birthYear;
    } */

    calcAge: function () {
        console.log(this);
        return 2022 - this.birthYear;
    },

    //If we are going to read the age many times we can calculate it once and store it in the object
    calcAge2: function () {
        this.age = 2022 - this.birthYear;
        return this.age
    }
};

console.log(gonza2.calcAge());
console.log(gonza2.age);
console.log(gonza2.age);
console.log(gonza2.age);

//Challenge
//Write a summary about the object in a single string.
const gonzalito = {
    firstName: 'Gonzalo',
    lastName: 'Garcia Cordoba',
    birthYear: 1991,
    job: 'Product Manager',
    friends: ['Ima', 'Papu', 'Capu'],
    hasDriverLicense: false,

    //If we are going to read the age many times we can calculate it once and store it in the object
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age
    },

    getSummary: function () {
        let draftString = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and`;
        if (this.hasDriverLicense) {
            this.sumString = draftString + ` he has a driver's license`;
            return this.sumString;
        } else {
            this.sumString = draftString + ` he doesn't have a driver's license.`
            return this.sumString;
        }
    },

    getSummaryJonasWay: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
    }

};

console.log(gonzalito.getSummary());
console.log(gonzalito.getSummaryJonasWay());

//Class 46 - The FOR Loops
//For loop keeps running while condition is true (second parameter)
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

//Class 47 - Looping Arrays, Breaking and Continuing

const gonzaArray = [
    'Gonzalo',
    'Garcia Cordoba',
    2022 - 1991,
    'Product Manager',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < gonzaArray.length; i++) {
    console.log(gonzaArray[i], typeof gonzaArray[i]);

    //types[i] = typeof gonzaArray[i];
    types.push(typeof gonzaArray[i]);
}

console.log(types);

const yearsLoop = [1991, 2007, 1969, 2020];
const agesLoop = [];

for (let i = 0; i < yearsLoop.length; i++) {
    agesLoop.push(2022 - years[i]);
}

console.log(agesLoop);

//continue and brake
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < gonzaArray.length; i++) {
    if (typeof gonzaArray[i] !== 'string') continue;

    console.log(gonzaArray[i], typeof gonzaArray[i]);
}

for (let i = 0; i < gonzaArray.length; i++) {
    if (typeof gonzaArray[i] === 'number') break;

    console.log(gonzaArray[i], typeof gonzaArray[i]);
}

//Class 48 - Looping Backwards and Loops in Loops
for (let i = gonzaArray.length - 1; i >= 0; i--) {
    console.log(i, gonzaArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------------- Starting exercise ${exercise}`);

    for (let repetition = 1; repetition < 6; repetition++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${repetition}`);
    }
}

//Class 49 - The WHILE loop

let rep = 1;

while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

//Roll a dice until we get a number 6
const rollDice = () => Math.trunc(Math.random() * 6) + 1;
let dice = rollDice();
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = rollDice();
    if (dice === 6) console.log('Loop is about to end...');
}
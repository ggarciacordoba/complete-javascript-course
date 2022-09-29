//This is how we declare a variable
/*let js = 'amazing';

console.log(40 + 8 + 23 - 10);

let firstName = "Gonza";
console.log(firstName);*/

/*let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Gonza')

//Dynamic typing example
javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

//Undefined a variable
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

//Let, const and var
//Let can change its value later
let age = 30;
age = 31

//Const can't change the value later
const birthYear = 1991;
//birthYear = 1990; -> Not possible
//const job; -> Needs an initial value

//Var -> Similar to Let. It's the old way of doing it
var job = 'programmer';
job = 'teacher';

//Class 14 Basic Operations
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3

//Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 === 25
x *= 4; // x = x *4 === 100
x++; // x = x+1
x--;

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=*/

//Operator Predence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);


//Class 17 String and Template Literals
// const firstName = 'Gonza'
// const job = 'Product Manager'
// const birthYear = 1991;
// const year = 2022;

// const gonza = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(gonza)

//Template Literals - New way of doing it
// const gonzaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(gonzaNew);

//If/Else Statements
// const age = 15;

// if (age >= 18) {
//     console.log(`Sarah can start driving license.`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

//Types conversion and coercion
//Conversion - Manually convert to another type
// const inputYear = '1991';
// console.log(inputYear + 18); //This will show '199118' as a string
// console.log(Number(inputYear) + 18); //We convert the string to a number and then add 18

// console.log('Jonas') //NaN (Not a number or invalid number)

// console.log(String(23), 23); //'23' 23

//Type coercion
// console.log('I am ' + 23 + ' years old'); //'I am 23 years old'
// console.log('I am ' + String(23) + ' years old'); //'I am 23 years old'

// console.log('23' - '10' - 3); //10 Converted as a number because of the - operator
// console.log('23' + '10' + 3); //23103 Converted as a string because of the concat operator
// console.log('23' * '2'); //46 Converted as a number because of the * operator
// console.log('23' / '2'); //11.5 Converted as a number because of the / operator

// let n = '1' + 1; //'11'
// n = n - 1;
// console.log(n); //10 as a number

// //Truthy and Falsy values
// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean('Jonas')); //true
// console.log(Boolean({})); //true
// console.log(Boolean('')); //false

// const money = 0;
// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job');
// }

//Check if a variable is defined
// let height; //we can have a bug is height = 0; as will be a falsy value but it's defined
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Heigh is UNDEFINED!');
// }

//Equality operators == vs ===
/*const age = 18;

if (age === 18) console.log('You just became an adult'); //Strict equal it will not produce type coercion

if (age == 18) console.log('You just became an adult (loose)'); //Loose equal it will produce type coercion to match.

//Prompt function
// const favourite = prompt("What's your favourite number?"); // loose don't use it
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite); //'$number'
console.log(typeof favourite) //string

// if (favourite == 23) { //loose don't use it
if (favourite === 23) {
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');*/

//Class 24 - Logical operators
const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision); //AND OPERATOR
console.log(hasDriversLicense || hasGoodVision); //OR OPERATOR
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

// Class 26 - The Switch Statement
const day = 'tuesday ';

switch (day) {
    case 'monday': // day === 'monday' (Always strict convert)
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples'); // Will execute this code when day is equal to wednesday or thursday
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!'); //Will execute this code if no case option matches.
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}


//Class 28 - The conditional (Ternary) operator
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

//You can define a variable directly\
const drink = age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

//Without ternary operator you have to do it like this
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

//You can also use it in a template literal
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
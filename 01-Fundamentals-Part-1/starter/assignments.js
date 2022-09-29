//Values and Variables
const country = "Argentina";
const continent = "America";
let population = 50;

console.log(country);
console.log(continent);
console.log(population);

//Data Types
const isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//let, const and var
language = 'spanish';
//isIsland = true;

//Basic Operators
console.log(population / 2);
population++;
console.log(population);

let finlandPopulation = 6
console.log(population > finlandPopulation);

//4
let avgPopulation = 33;
console.log(population < avgPopulation);

const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);

//Strings and Template literals
const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);

//If/Else Statements
if (population > 33) {
    console.log(`${country} population is above average`);
} else {
    console.log(`${country} population is ${33 - population} million below average`);
}

//Type of Conversion and Coercion
console.log('9' - '5'); //4 as a number
console.log('19' - '13' + '17'); //'617' as a string
console.log('19' - '13' + 17); //23 as a number
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143 as number

// Equality Operators: == vs. ===
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

//Switch statement
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too');
}

population > 33 ? console.log(`${country}'s population is above average!`) : console.log(`${country}'s population is below average!`)
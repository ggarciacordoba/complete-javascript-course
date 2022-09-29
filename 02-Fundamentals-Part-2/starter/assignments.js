'use strict';

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const argentina = describeCountry('Argentina', 50, 'Buenos Aires');
console.log(argentina);

const chile = describeCountry('Chile', 10, 'Santiago');
console.log(chile);

const brasil = describeCountry('Brasil', 180, 'Brasilia');
console.log(brasil);

console.log(argentina, chile, brasil);

//Function Declaration vs Expressions

function percentageOfWorld1(population) {
    return (population / 7900) * 100.00;
}

const peru1 = percentageOfWorld1(20);
const uruguay1 = percentageOfWorld1(30);
const usa1 = percentageOfWorld1(200);

console.log(peru1, uruguay1, usa1);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100.00;
}

const peru2 = percentageOfWorld1(20);
const uruguay2 = percentageOfWorld1(30);
const usa2 = percentageOfWorld1(200);

console.log(peru2, uruguay2, usa2);

//Arrow Functions
const percentageOfWorld3 = (population) => population / 7900 * 100;
console.log(percentageOfWorld3(100));

//Functions calling other Functions
const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world. `;

console.log(describePopulation('Argentina', 50));
console.log(describePopulation('Brasil', 180));
console.log(describePopulation('Chile', 16));

//Arrays
const populations = [120, 10, 1441, 20];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);

//Basic Array Operations (Methods);
const neighbours = ['Uruguay', 'Argentina'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf['Argentina']] = 'Brasil';
console.log(neighbours);
//Store Mark's and John's mass and height in variables
//Data 1
const markHeight = 1.69;
const markMass = 78;

const johnHeight = 1.95;
const johnMass = 92;

//Data 2
// const markHeight = 1.88;
// const markMass = 95;

// const johnHeight = 1.76;
// const johnMass = 85;

//Calculate Both BMI
//Mark
const markBMI = markMass / markHeight ** 2;

//John
const johnBMI = johnMass / johnHeight ** 2;

console.log(markHeight, markMass, markBMI);
console.log(johnHeight, johnMass, johnBMI);

//Create Boolean variable 'markHigherBMI'
const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);


/////// CHALLENGE 2
//1. Print a nice output to the console saying who has the higher BMI

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is higher than John's!`);
// } else {
//     console.log(`John's BMI is higher than Mark's!`);
// }

//2. Use template literal to include the BMI values in the outputs.
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}

////////// CHALLENGE 3
// There are two gymnastics teams, Dolphins and Koalas. They compete againts each other 3 times. The winner with the highest average score wins a trophy!

//1. Calculate the average score for each team, using the test data below
// Dolphins score 96, 108 and 89. Koalas score 88,91 and 110
// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

//Test data bonus 1
// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;

//Test data bonus 2
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;

// const koalasScore1 = 96;
// const koalasScore2 = 108;
// const koalasScore3 = 89;

const averageDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const averageKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(averageDolphins, averageKoalas);

//2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
// Don't forget that there can be a draw, so test for that as well
if (averageDolphins > averageKoalas) {
    console.log('Dolphins win the trophy!');
} else if (averageDolphins < averageKoalas) {
    console.log('Koalas win the trophy!');
} else {
    console.log(`It's a draw!`);
}

//Bonus 1: Include a requirement for a minimum score of 100. 
//With this rule, a team only wins if it has a higher score than the other team, and the same time a score 
// of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks

if ((averageDolphins > averageKoalas) && (averageDolphins >= 100)) {
    console.log('Dolphins win the trophy!');
} else if (averageDolphins < averageKoalas && (averageKoalas >= 100)) {
    console.log('Koalas win the trophy!');
} else {
    console.log(`It's a draw!`);
}

//Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams 
// have the same score and both have a score  greater or equal 100 points. Otherwise, no team wins the trophy.
if ((averageDolphins > averageKoalas) && (averageDolphins >= 100)) {
    console.log('Dolphins win the trophy!');
} else if ((averageDolphins < averageKoalas) && (averageKoalas >= 100)) {
    console.log('Koalas win the trophy!');
} else if ((averageDolphins === averageKoalas) && ((averageKoalas >= 100) && (averageDolphins >= 100))) {
    console.log(`It's a draw!`);
} else {
    console.log(`No team wins!`);
}

//CHALLENGE 4
// Steven wants to build a ver simple tip calculator for whenever he goes eating in a restaurant. 
// In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

//1. Calculate the tip depending on the bill value. Create a variable called 'tip' for this. It's not allow to use an if/else statement.
const bill = 40;

const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
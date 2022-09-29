'use strict';
/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
Data 1: [17, 21, 23]
Data 2: [12, 5, -5, 0, 4]

*/

//Display a string with the maximum forcasted temperatures.
//Can the array only have numbers?
//If there is something that is not a number, should I ignore it?
//How I'm going to print the string?

//Ignore the things that are not a number
//Get the maximum temperature
//Get the day
//Repeat

const displayForecastedTemp = function (temps) {
  let displayStr = '';

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    displayStr += `${temps[i]}ºC in ${i + 1} days ... `;
  }

  return '... ' + displayStr;
};

console.log(displayForecastedTemp([10, 12, 4, 35]));

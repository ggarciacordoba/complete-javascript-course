// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.*/

const temperatures = ['magic', 3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/*1) Understanding the problem
- What is the temp amplitude? Difference between the highest and lowest temp.
- How to compute the max and min temperatures?
- What does a sensor error look like? And what to do? We should probably ignore it
*/

/*
2) Breaking up into sub-problems
- How to ignore errors?
- Find max value in temp array
- Find min value in temp array
- Substract min from max (amplitude and return it)
*/

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (typeof max !== 'number' && typeof min !== 'number') {
      max = currentTemp;
      min = currentTemp;
    }
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude(temperatures);

//Problem 2, we should receive two arrays
//We should merge both arrays
// - How we can merge two arrays?
const calcTempAmplitude2Arrays = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (typeof max !== 'number' && typeof min !== 'number') {
      max = currentTemp;
      min = currentTemp;
    }
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const temperatures2 = [-50, 3, 5, 'falopita', 12];

console.log(calcTempAmplitude2Arrays(temperatures, temperatures2));

const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

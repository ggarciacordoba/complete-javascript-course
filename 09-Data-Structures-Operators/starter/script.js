'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // Destructure an object received in a function with defaults
  orderDelivery: function ({
    starterIndex = 1, 
    mainIndex = 0, 
    time = '20:00', 
    address}) {
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  }
};


//Class 103 - Deconstructing Arrays
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring and array
const [x,y,z] = arr; // Left side seems like an array but it's not.
console.log(x,y,z);

//Let's take the first two elements of an array
const [first, second] = restaurant.categories;
console.log(first,second); //Italian  & Pizzeria

//What happens if we want the first and the third
let [first1, , third] = restaurant.categories;
console.log(first1, third);

//Switch variables
[first1, third] = [third, first1];

//Destructuring from a function - Receive two return values from a function
const [starter, main] = restaurant.order(2,0);
console.log(starter, main );

//Nested array destructuring
const nested = [2,4,[5,6]];
const [i, , j] = nested;
console.log(i, j); //2 [5,6]

const [t, ,[s,r]] = nested;
console.log(t,s,r);

//Set default values if they don't exist
const [o=1, p=1, q=1] = [8,9];
console.log(o,p,q);// 8 9 1

//Class 104 - Destructuring Objects
//To destrucuture we use the curly braces we need to write the exact property name
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories); 

//What if we want different variable names
// Current name: new name
const {name: restaurantName, openingHours: hours, categories:tags} = restaurant;
console.log(restaurantName, hours, tags);

//Set default values in objects
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating variables
let a1 = 111;
let b1 = 999;
const obj = {a1: 23, b1: 7, c1:14};
({a1, b1} = obj);
console.log(a1, b1); //23, 7

//Nested Objects
// const {fri} = openingHours;
// console.log(fri);

//Get elements from an object inside an object
const {fri: {open, close}} = openingHours;
console.log(open, close); //11 , 23

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Adolfo Alsina 3045',
});
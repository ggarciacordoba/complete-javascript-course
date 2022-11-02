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

  order: function (starterIndex, mainIndex) {
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
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Class 103 - Deconstructing Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring and array
const [x, y, z] = arr; // Left side seems like an array but it's not.
console.log(x, y, z);

//Let's take the first two elements of an array
const [first, second] = restaurant.categories;
console.log(first, second); //Italian  & Pizzeria

//What happens if we want the first and the third
let [first1, , third] = restaurant.categories;
console.log(first1, third);

//Switch variables
[first1, third] = [third, first1];

//Destructuring from a function - Receive two return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//Nested array destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); //2 [5,6]

const [t, , [s, r]] = nested;
console.log(t, s, r);

//Set default values if they don't exist
const [o = 1, p = 1, q = 1] = [8, 9];
console.log(o, p, q); // 8 9 1

//Class 104 - Destructuring Objects
//To destrucuture we use the curly braces we need to write the exact property name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//What if we want different variable names
// Current name: new name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Set default values in objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a1 = 111;
let b1 = 999;
const obj = { a1: 23, b1: 7, c1: 14 };
({ a1, b1 } = obj);
console.log(a1, b1); //23, 7

//Nested Objects
// const {fri} = openingHours;
// console.log(fri);

//Get elements from an object inside an object
const {
  fri: { open, close },
} = openingHours;
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

//Class 105 - The spread operator

const arr2 = [7, 8, 9];
const badArr = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badArr);

//Spread operator ...
const newArr = [1, 2, ...arr2];
console.log(newArr);

console.log(...newArr); // 1 2 7 8 9

//Create a new menu based on the current one
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy Arrray
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);
console.log(...menu2);

//Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

//Call a function and put the paramerts with a spread
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Copy an object instead of using Assign
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
*** Class 106 - Rest Pattern and Parameters ***
We use rest patter to pack elements into an array
The syntax is the same as the Spread one (...)
*/
//1) Destructuring
//Rest of the elements and put them into an array
const [aa, bb, ...others] = [1, 2, 3, 4, 5];
console.log(aa, bb, others); // 1 2 [3,4,5]

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood); //Only includes the rest from the last element. The skip element in the middle (number 2) does not appear

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//2) Functions
const add = function (...numbers) {
  //Rest function
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x1 = [23, 5, 7];
add(...x1); //Spread function

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

/* The spead operator will be used when we otherwise right values 
separeted by a comma. 
On the other hand, the rest patters is basically used when we 
other wise we will write values separated by a comma.
*/

/*
Class 107 - Short Circuiting (&& AND ||)
*/

//Use ANY data type and return ANY data type, short-circuiting
// If the first value is a truthy value it will return that value

//OR Operator
console.log('--- OR ---');
console.log(3 || 'Jonas'); // 3
console.log(undefined || null); //null
console.log('' || 'Jonas'); //Jonas
console.log(true || 0); //true

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello because it's the first truthy value

//Old way of checking if a variable exists
//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//New way
const guests2 = restaurant.numGuests || 10;

//AND Operator
console.log('--- AND ---');
//The AND operator short circuting with the first falsy parameter
console.log(0 && 'Jonas'); // 0
console.log(undefined && null); //undefined
console.log('' && 'Jonas'); //''
console.log(true && 0); //0

console.log('Hello' && 23 && null && 'jonas'); //null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// && to do check if a method exists
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*
Class 108 - The nullish coalescing operator (??)
*/
//?? works with the idea of nullish values instead of falsy values
//Nullish: null and undefined
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0

/*
Class 109 - Logical Assignment Operators
*/

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//Set default values using short circuiting
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

//OR Logical Assignment operator ||= (Does the same as the example above)
//IF the value is 0, we will need the nullish one (??=)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish assignment operator (??=)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//Replace the name of the owner with anonymous
//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';

//AND Assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
 * Class 111 - The for-of loop
 * A way to loop arrays
 */

const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu3) console.log(item); //menu[i]

//What if we also want the current index besides the element
for (const item of menu3.entries()) {
  console.log(item); //[1, "Brusscheta] [2, "Garlic Bread"]
}

/* menu.entries() is an array iterator that generates an array per element with two things [pos, element] */

//We can destructure the array to have the pos and the elements
for (const [i, el] of menu3.entries()) {
  console.log(`${i + 1}: ${el}`);
}

/*
 * Class 112 - Enhanced Object Literals
 * restaurant in this case is an object literal
 */
// Data needed for first part of the section

//We can declare property names in a different way
const weekdays2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours2 = {
  //Declaring different property names
  [weekdays2[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays2[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Methods were written like this
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //Now you can
  orderNew(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //If we want to include the openingHours2 inside the restaurant we had to
  //openingHours2: openingHours2,

  //With enhanced object literals after ES6
  openingHours2,
};

/*
 * Class 113 - Optional chaining
 * Checks if a property exists and if it does, it will return it.
 */

/**** On objects ****/
//Old way
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//New way
console.log(restaurant.openingHours?.mon?.open);

//Another example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

console.log(restaurant.openingHours);

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

/**** On methods ****/
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

/**** On arrays ****/
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

/*
 * Class 114 - Looping objects: Object keys, values and entries
 */

//We generate an array with the object properties

//Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  console.log(day);
  openStr += day + ',';
}

console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire object (Key value in an array)
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close} `);
}

/*
 * Class 116 - Sets
 */

//Sets is a collection of unique values. It can't have duplicates
//ORders in a set are irrelevant but they are iterables

const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Pasta',
  'Risotto',
  'Pizza',
]);

console.log(ordersSet); //Set (3) {"Pasta","Pizza", "Risotto"}

console.log(new Set('Jonas')); //Set (5) {"J","o","n","a","s"}

//Get size of the set
console.log(ordersSet.size); //3

//Check if an element is on the set
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('Bread')); //false

//Add elements to the set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

//Delete elements from the set
ordersSet.delete('Risotto');

//You can't find a single element of the set like array[0]. The idea
// is to see if the element is on the set.

//Clear the set
ordersSet.clear();

//We can iterate sets
for (const order of ordersSet) console.log(order);

//Normally we use sets to remove duplicate from an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

//We want to know the unique roles
const staffUnique = new Set(staff);
console.log(staffUnique);

//Now we want to convert the set to an array.
const newArray = [...staffUnique];
console.log(newArray);

/*
 * Class 117 - Maps: Fundamentals
 */

//A data structure to map values to keys. On objects the key are always strings
// In maps they can be whatever we want.

//The best way is first to create an empty map
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
//When you do a set you get always the set updated as a return
console.log(rest.set(2, 'Lisbon, Portugal'));

//We can chain the set methods
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest);

//Find an element by key
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 6;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//Check if a map has a certain key
console.log(rest.has('categories'));

//Remove an element from the map
rest.delete(2);
console.log(rest);

//Check the SIZE of a map
console.log(rest.size);

//Clear MAP
rest.clear();

//We can put arrays as keys too
rest.set([1, 2], 'Test'); //If we do it this way we can't get it later. As it will have a different key
rest.get([1, 2]); //Undefined

//Corrent way
const arr3 = [1, 2];
rest.set(arr3, 'Test');
console.log(rest.get(arr3));

//We can also add DOM elements
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

/*
 * Class 117 - Maps: Iteration
 */

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 🎉'],
  [false, 'Try again'],
]);

console.log(question); //Similar to Object.entries()

//How to convert from an Object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iterate a Map
//Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  //We also apply destructuring
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(answer === question.get('correct')));

//Convert Map to Array
console.log(...question);
const mapToArray = [...question];
console.log(mapToArray);

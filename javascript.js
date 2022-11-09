import data from './data.json' assert { type: 'json' };

// ForEach Loop
const arraySparse = [1, 3 /* empty */, , 7];
arraySparse.forEach((element) => {
  console.log({ element });
});

// Includes Array
const array1 = [1, 2, 3];
console.log(array1.includes(2));

// Mapping
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// Some
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

let myFunction = (arg1, arg2, ...argN) => {
  statement(s);
};

// Check each individual element of an array
arrayOne.every((val, index) => val === arrayTwo[index]);

// Function that takes in Two names and a date to see if they met.
function ifMet(nameOne, nameTwo, date) {
  let getLocations = [];
  data.forEach((item) => {
    let personOneDates = [];
    let personTwoDates = [];
    item.persons.forEach((person) => {
      if (formatName(person.person) === nameOne) {
        personOneDates = person.dates;
      }
      if (formatName(person.person) === nameTwo) {
        personTwoDates = person.dates;
      }
    });
    if (checkIfDatesMatch(personOneDates, personTwoDates, date)) {
      getLocations.push(item.location);
    }
  });

  return getLocations;
}

function formatName(name) {
  return name.replace(/['"]+/g, '').replace(/\s+/g, '');
}

function formatDate(date) {
  return date.split('T')[0];
}

function checkIfDatesMatch(dateArrayOne, dateArrayTwo, date) {
  return dateArrayOne.includes(date) && dateArrayTwo.includes(date);
}

console.log(ifMet('Bronn', 'Gendry', '2021-02-25T00:00:00.000Z'));

//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
function FizzBuzz() {
  for (let i = 0; i < 100; i++) {
    if (i % 3 == 0) {
      console.log('Fizz', i);
    }
    if (i % 5 == 0) {
      console.log('Buzz', i);
    }
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz', i);
    }
  }
}

FizzBuzz();

function checkIfAnagram(wordOne, wordTwo) {
  let arrayOne = Array.from(wordOne.toLowerCase());
  let arrayTwo = Array.from(wordTwo.toLowerCase());
  arrayOne.sort();
  arrayTwo.sort();
  return (
    Array.isArray(arrayOne) &&
    Array.isArray(arrayTwo) &&
    arrayOne.length === arrayTwo.length &&
    arrayOne.every((val, index) => val === arrayTwo[index])
  );
}

console.log(checkIfAnagram('Mary', 'Army'));

// Palindrome Check

function checkPalindrome(wordOne) {
  let arrayOne = Array.from(wordOne.toLowerCase());
  let arrayTwo = Array.from(wordOne.toLowerCase());
  arrayTwo.reverse();
  return (
    Array.isArray(arrayOne) &&
    Array.isArray(arrayTwo) &&
    arrayOne.length === arrayTwo.length &&
    arrayOne.every((val, index) => val === arrayTwo[index])
  );
}

console.log(checkPalindrome('racecar'));

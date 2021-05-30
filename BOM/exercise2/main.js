/*
Global JavaScript Objects (homework)
Math
● Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it.
● Round
Create a function that uses the passed array of numbers and rounds all its
elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
● Floor
Create a function that uses the passed array of numbers and rounds all its
elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
● Max
Create a function that finds and prints out the biggest element in the passed
array of numbers.
Date
● Print out the whole date object in the console.

● Print out the current time in the console.
● Print out the current date in the console.
*/

function buildArrayRandom() {
  var randomArr = Array(10);
  for (var i = 0; i < randomArr.length; i++) {
    randomArr[i] = Math.round((50 - 10) * Math.random() + 10);
  }
  return randomArr;
}
console.log(buildArrayRandom());

// b  task //
function buildArrayRandom2(num) {
  var randomArr = Array(num);
  for (var i = 0; i < randomArr.length; i++) {
    randomArr[i] = Math.round(((50 - 10) * Math.random() + 10) * 100) / 100;
  }
  return randomArr;
}
console.log(buildArrayRandom2(50));

/*
● Floor
Create a function that uses the passed array of numbers and rounds all its
elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
*/

function roundElemInArray(num) {
  var newArr = buildArrayRandom2(num);
  var output = newArr.map(function (element) {
    return Math.ceil(element);
  });
  return output;
}
console.log(roundElemInArray(10));

/*
● Max
Create a function that finds and prints out the biggest element in the passed
array of numbers.
*/

function findBiggestElement(array) {
  var biggestElement;
  biggestElement = Math.max(array);
  return;
}

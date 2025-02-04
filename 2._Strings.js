// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

sum1 = parseFloat(numberOne);
sum2 = parseFloat(numberTwo);

// If I want to store their sum in one variable
sumOneTwo = sum1 + sum2

console.log(sum1 + sum2);
console.log(sumOneTwo);


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

sum3 = parseFloat(anotherNumberOne);
sum4 = parseFloat(anotherNumberTwo);

const total = sum3 + sum4;

console.log(total.toFixed(2));


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

sum5 = parseFloat(one);
sum6 = parseFloat(two);
sum7 = parseFloat(three);

const total1 = sum5 + sum6 + sum7;

console.log(total1.toFixed(5));

// Show in the console the avg. with 5 decimals

const total2 = total1 / 3;
console.log(total2.toFixed(5));


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters.charAt(2));


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
console.log(fact.replace("j", "J"));



// --------------------------------------




// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Hey friend";
}
var greet1 = greeting();
var greet2 = greeting();
console.log(greet1);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Hey ${name}`;
}
var name1 = customGreeting("Jill");
var name2 = customGreeting("Jim");
console.log(name2);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(fullName) {
    return `Hello esteemed ${fullName}.`;
}
var stranger1 = greetPerson(["John", "Jim", "Smith"]);
var stranger2 = greetPerson(["Lily", "Louise", "Smith"]);
console.log(stranger1);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
    var sq = number * number;
    return `The square of ${number} is ${sq}.`
}
var num1 = square(4);
var num2 = square(2);
console.log(num1);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock() {
    return
}
console.log();
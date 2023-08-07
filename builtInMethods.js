// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

"Hello World".includes("Hello");
// The includes() method is called on the string "Hello World"
// No arguments are passed; includes() has one clear job to check if a string includes the substring "Hello"
// The return value is true

"Hello World".endsWith("Hello");
// The endsWith() method is called on the string "Hello World"
// No arguments are passed; endsWith has one clear job to check if a string ends with the substring "Hello"
// The return value is false

"Hello World".endsWith("rld");
// The endsWith() method is called on the string "Hello World"
// No arguments are passed; endsWith has one clear job to check if a string ends with the substring "rld"
// The return value is true


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The toLowerCase() method is called on the progLanguage variable, which stores the string object "Ruby"
// The toLowerCase() method returns the string in all lowercase characters
// In this example, the resulting string would be "ruby"
// The console.log() statement prints the return value of the toLowerCase method to the console 
var progLanguage = "Ruby";
console.log(progLanguage.toLowerCase());

//
//
//
//


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.
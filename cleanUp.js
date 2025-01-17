// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  return "Hello, what is your name?"
}
console.log(askForName());
// I changed the console.log() placement from inside the curly brackets to outside the code block, and instructed the function to return the string when called.
// I wanted the console.log() outside of the code block so the function can be used elsewhere in a program without printing to the console each time.

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
return sum;
      }

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));
// I added console.log() to the last two lines so the return value is visible, and a semicolon after the contents of sum according to best practices.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();
// I changed line 29 to begin with <function> instead of <func>, as I was previously being shown a syntax error message of an unexpected identifier. I also adjusted the placement of the curly brackets slightly.

//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
    var avg = sum / 2;
return avg;
  }
  console.log(average(9, 7))
// I added a semicolon according to best practices, and added console.log() and two numbers so I could test the code in my terminal.
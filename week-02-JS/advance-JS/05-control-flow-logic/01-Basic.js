/**
 * The structure of an `if-statement` is as follows:
if (condition) {
  // code to execute if condition is true
}
 */

/**
 * The condition is a boolean expression that evaluates to true or false. 
 * In fact, we could put in true or false directly
 */

if (true) {
    // code to execute if condition is true
  }
  
  if (false) {
    // code to execute if condition is false
  }

//1
const x = 10;
if (x < 5) {
    console.log(`${x} is greater than 5`);
  }
  
if (x === 10) {
    console.log(`${x} is equal to 10`);
}

//SHORTHANDS
if (x > 5) console.log(`${x} is greater than 5`);

if (x > 5) console.log(`${x} is greater than 5`);
else console.log(`${x} is less than 5`);

// You actually can have multiple statements, but they need to be separated with a comma.

if (x > 5)
  console.log(`${x} is greater than 5`),
    console.log('another line'),
    console.log(`and another`); 
// While Loops & Do While Loops

// While Loop Syntax
// SYNTAX

while ([conditionExpression]) {
  statement
}

// There are a few differences between the `for` loop, which we have already talked about, 
// and the `while` loop.

// In a `while` loop, the variable is initialized before the loop runs and it is 
// initialized outside of the loop.

let i = 0;

while (i <= 20) {
  console.log('Number ' + i);
  i++;
}

// Looping Over Arrays
// We can loop over arrays with `while` loops as well

const arr = [10, 20, 30, 40];

let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Nested While Loops

let i = 1;

while (i <= 10) {
  console.log('Number ' + i);
  let j = 1;
  while (j <= 10) {
    console.log(i + ' * ' + j + ' = ' + i * j);
    j++;
  }
  i++;
}

// Do While Loops

// The `do while` loop is a little different from the `while` loop. 
// The `do while` loop will always run at least once, even if the condition is false.
// SYNTAX

do {
  statement
} while ([conditionExpression]);

// A simple example:

let i = 1;

do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);


// Now let's change the `i` value to 21.

let i = 21;

do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);

// You can also use the `break` and `continue` statements with while and do while loops.

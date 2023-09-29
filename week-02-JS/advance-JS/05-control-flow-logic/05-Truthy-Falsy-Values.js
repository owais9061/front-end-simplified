// Truthy & Falsy Values


const email = 'test@test.com';

if (email) {
  console.log('You passed in an email');
} else {
  console.log('Please enter email');
}

// This will return true because when you put something in an if statement, 
// it is coerced into a boolean. 

// A string with something in it is what we call a TRUTHY value.

// Converting a value to a boolean

console.log(Boolean(name)); // true

// Let's look at the values in JavaScript that are considered FALSY

// Falsy Values
/**
 
 - False (obviously)
 - 0 (also -0 and BigInt 0n)
 - "" (empty string)
 - null
 - undefined
 - NaN
 
 */

// If we test any of these in an if statement, it will evaluate to `false`.

const x = 0;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}



// Truthy Values

// Everything that is not falsy will evaluate to `true`, however, Some of these may surprise you.

/**
  
    Everything else that is not falsy
    true (obviously)
    '0' (string with 0)
    'false' (string with false)
    ' ' (space in a string)
    [] (empty array)
    {} (empty object)
    function() {} (empty function)
 
*/


// If we test any of these in an if statement, it will evaluate to `true`.

const x1 = '0';

if (x1) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}


// Truthy & Falsy Caveats
// Let's say we have a variable called `hasChildren` that refers to the number of children 
// someone has and we want to check it.

let hasChildren = 2;

if (hasChildren) {
  console.log(`You have ${hasChildren} Children`);
} else {
  console.log('Please enter the number of Children you have');
}

// You have 2 children


// Now that you understand that 0 is falsy, you will understand why the following will not work correctly.

let hasChildren1 = 0;

if (hasChildren1) {
  console.log(`You have ${hasChildren1} children`);
} else {
  console.log('Please enter the number of children you have');
}

// Please enter the number of children you have

// In this case, we want 0 to be a valid value for children, 
// but it is falsy, so the `else` block will run and say it is not defined.

// SOLUTION

if (hasChildren1!== undefined) {
    // It must have any number except for empty, in order to return True
  console.log(`You have ${hasChildren1} children`);
} else {
  console.log('Please enter the number of children you have');
}

// Checking For Empty Arrays and Objects

// Since empty arrays and objects are truthy, we can not simply check for the variable that holds them.

// Check for an empty array:

const arr = [];

if (arr.length === 0) {
  console.log('The array is empty');
}


// Check for an empty object:

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log('The object is empty');
}

// Loose Equality Comparison
// `false`, zero and empty strings are equivalent (when using ==)

false == 0; // true
false === 0; // false
false == ''; // true
0 == ''; // true


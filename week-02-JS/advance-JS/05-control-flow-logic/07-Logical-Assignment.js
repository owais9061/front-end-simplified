// Logical Assignment

// OR Logical Assignment (||=)

// We can do something similar with `||=`. 
// This will assigns the right side value only if the left is a falsy value.


let a = null;

if (!a) {
  a = 10;
}

a = a || 10; 

// An even shorter way would be to use the OR assignment operator 

a ||= 10;

// AND Logical Assignment (&&=)

// We can do something similar with the AND assignment operator

let b = 10;
if (b) {
  b = 20;
}
// If `b` is `truthy` then we are setting it to 20. 

// A shorter way would be to use the logical AND operator

b = b && 20; 


// We can make it even shorter by using the AND assignment operator
b &&= 20; 

// This returns 20 because the value of `b` is 10, which is truthy.

// If we try this with a falsy value, we get that falsy value.

let b1 = false;
b1 = b1 && 20; // false


// Nullish Coalescing Assignment (??=)

// We can us `??=` to assign a value to a variable if it is null or undefined.

// Here is the long version
let c = null;

if (c === null || c === undefined) {
  c = 20;
}

// Using the ?? operator
c = c ?? 20;

// Using the ??= assignment operator
c ??= 20; 
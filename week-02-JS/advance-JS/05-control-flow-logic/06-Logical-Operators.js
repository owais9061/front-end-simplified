// Logical Operators

// USE OF || and &&

console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
console.log(10 > 20 || 30 < 15); // Only one has to be true

// There may be cases where you want to conditionally assign a value based on if a value is `truthy`
// or `falsy`. We can use logical operators and logical assignment for this.

// AND Operator (&&)

// If we assign a value, using the `&&` operator, it will execute from left to right. 
// If any of the values are `falsy`, that value will be returned; otherwise, the last value will be returned.

x = 10 && 20; // 20
x = 10 && 20 && 30; // 30
x = 10 && 0 && 30; // 0 (30 is not evaluated)
x = 10 && false && 30; // false (30 is not evaluated)

// OR Operator (||)

// The `||` operator is the opposite of the `&&` operator. 
// It will return the first value that is `truthy`. 
// This is more common than using the `&&` operator.

y = 10 || 20; // 10 (20 is not evaluated)
y = 0 || 20; // 20
y = 10 || 0 || 30; // 10 (0 and 30 are not evaluated)
y = false || false || 30; // 30


// Nullish Coalescing Operator (??)

// The `??` operator will return the right side operand when its left side is either `null` or `undefined`. 
// It is similar to `||` operator except, it doesn't look at all falsey values, only `null` and `undefined`.

let owais;
owais = 10 ?? 20; // 10
owais = null ?? 20; // 20
owais = undefined ?? 20; // 20
owais = null ?? 0 ?? 20; // 0 (it will return 0 because it is not null or undefined)

/**
 * TYPES OF OPERATORS:
 * 1- Artihmetic (+, -, /, *, % (Modulus) ),
 * 2- Concatenation: 'Owais' + 'Gujjar'
 * 3- Exponent (**) : 2**5 = 32
 * 4- Increment ++ or += / Decrement -- or -=
 * 5- Assignemnt: = , +=, -=
 * 6- Comparison: (>, <, <=, >=, !, !=)
 * NOTE: == equates the value while === euqates the Data Types & Values: x=2 === x='2' 

*/

//Arithmetic
let result = 10 + 5; // Addition
let result2 = 20 - 8; // Subtraction
let result3 = 12 / 3; // Division
let result4 = 6 * 4; // Multiplication
let remainder = 15 % 7; // Modulus (Remainder)

//Concatenation
let fullName = 'Owais' + 'Gujjar'; // Concatenation of strings

//Exponent
let power = 2 ** 5; // Exponentiation: 2 raised to the power of 5

//Increment / Decrement
let num = 10;
num++; // Increment by 1 (num becomes 11)
num += 5; // Increment by 5 (num becomes 16)

let anotherNum = 20;
anotherNum--; // Decrement by 1 (anotherNum becomes 19)
anotherNum -= 3; // Decrement by 3 (anotherNum becomes 16)

//Assignment
let x = 5; // Assignment

let y = 10;
y += 3; // y is now 13 (y += 3 is equivalent to y = y + 3)

let z = 8;
z -= 2; // z is now 6 (z -= 2 is equivalent to z = z - 2)

//Comparison Operators
let a = 10;
let b = 5;

let greaterThan = a > b; // true (a is greater than b)
let lessThan = a < b; // false (a is not less than b)
let lessThanOrEqual = a <= 10; // true (a is less than or equal to 10)
let greaterThanOrEqual = b >= 5; // true (b is greater than or equal to 5)
let notEqual = a != b; // true (a is not equal to b)
let notOperator = !true; // false (Logical NOT operator negates the value)

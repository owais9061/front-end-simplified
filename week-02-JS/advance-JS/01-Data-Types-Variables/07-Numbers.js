const num = 5.345;
//OR
const num1 = new Number(5); //OBJECT with CONSTRUCTOR
console.log(num.toString()) //convert Number data type to String
console.log(num.toString().length) //show the length --> 1\
console.log(num.toFixed(2)) //Specifiy two Decimal point places. like 5 --> 5.00
console.log(num.toPrecision(3)) // it will round up values after 1 decimal point, and Putting 3 will after two decimal points
console.log(num.toExponential(3)) //Convert points after decimal to Exponent
console.log(num.toLocaleString('ar-EG')) //COnvert the representation of number in the specific region
/**
 * en-US
 * ar-EG
 */

//MATH OBJECTS
console.log(Math) //will display all methods of Math
//SO
let x1=25, x2=-45, x3=4.6;
console.log(Math.sqrt(x1)); //Square Root
console.log(Math.abs(x2)) // Return Positive always (Absolute)
console.log(Math.round(x3)) //Rounding Off
console.log(Math.ceil(x3)) //Rounding Up
console.log(Math.floor(x3)) //Rounding Down
console.log(Math.pow(x1,2)); //Power Exponentional
console.log(Math.min(x1,x2)) //Will return minimum between tese 2
console.log(Math.random()) // random values between 0 and 1
console.log(Math.random()*10 + 1) // random values between 1 and 10
console.log(Math.random()*100 + 1) // random values between 1 and 100
//Above will give decimal values so to rounding it up or down (down better)
console.log(Math.floor(Math.random()*10+1));


//CHALLENGE TO TRY
// Create a variable called X  which is a random number between 1 and 100 along with Y which is random between 1 and 50
// Create variables for sum, difference, quotient and product and log the answers in String with Operators and Answers
//SOltuion:

let X, Y;
X=Math.floor(Math.random()*100+1);
Y=Math.floor(Math.random()*50+1);
const add=X+Y,
diff=X-Y,
quotient=X/Y,
product=X*Y,
modul=X%Y;

console.log(`The Sum of X= ${X} and Y= ${Y} is = ${add} Respectively !!`)
console.log(`The Difference of X= ${X} and Y= ${Y} is = ${diff} Respectively !!`)
console.log(`The Quotient of X= ${X} and Y= ${Y} is = ${quotient} Respectively !!`)
console.log(`The Product of X= ${X} and Y= ${Y} is = ${product} Respectively !!`)
console.log(`The Modulus(Remainder) of X= ${X} and Y= ${Y} is = ${modul} Respectively !!`)
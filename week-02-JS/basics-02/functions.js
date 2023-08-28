//! VALUE PASSING

function welcomePerson() {
    console.log('Welcome to CANNY CODERS 2.0');
}

//! calling a function
welcomePerson();


//! PARAMETERS
function welcomeThePerson(firstName, lastName, address) { //parameters are firstName, lastName, address
    console.log(`Welcome to CannyCoders 2.0 ${firstName} ${lastName} - ${address}`);
}
welcomeThePerson('Owais','Gujjar','Karachi'); //these values are called the arguments.
// welcomeThePerson('Ammar','Zahid','Karachi');
// welcomeThePerson('Khubab','Siddiqui','Karachi');


//! RETURN VALUE ----> Output Driven
function fn() {
    // return 'CannyCoders 2.0';
    console.log('CannyCoders')
    return 5;
}
console.log(fn())


//! SUM OF TWO NUMBERS
function sumOfTwoNumbers () {
    return 10-20;
}
console.log(sumOfTwoNumbers());


//! PARAMTERE DRIVEN

function sumofNumbers (num1, num2){
    return num1 + num2 
}
console.log(sumofNumbers(40, 10));


//? CELCIUS TO FARANHEIT
function convertToFaranhiet (celcius) {
    let converted = (celcius * 1.8) + 32;
    return converted;
}
console.log(convertToFaranhiet(50));
console.log(convertToFaranhiet(40));
console.log(convertToFaranhiet(30));

//! Creating the same question, with ARROW function
const convertToFaranheit = (celcius) => {
    let converted = (celcius*1.8) +32;
    return converted;
}
console.log(convertToFaranheit(25));


//! ARROW FUNCTIONS

const convertToKilometer = (length) => {
    return length/1000;
}
console.log(convertToKilometer(6000)); //! User Defined --> Input


//! QUESTIONS BY CHATGPT
//Write a JavaScript function called printGreeting that prints the message "Hello, World!" 
//to the console. Call the function to display the greeting.

function printGreeting(){
    console.log("Hello World")
}
printGreeting();


//Create a function named calculateRectangleArea that takes two parameters, width and height, 
//representing the dimensions of a rectangle. The function should return the calculated area of the rectangle.

function calculateRectangleArea(width, height){
    area = width * height;
    return area;
}
console.log(calculateRectangleArea(20,20));


//Design a function called calculateFactorial that calculates the factorial of a given positive integer. 
//The function should take an integer parameter n and return the factorial value. 
//Factorial of a number n is the product of all positive integers from 1 to n.


function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(calculateFactorial(0));
console.log(calculateFactorial(1));
console.log(calculateFactorial(5));
console.log(calculateFactorial(10));


//Implement a function named isPalindrome that checks whether a given string 
//is a palindrome or not. A palindrome is a string that reads the same backward 
//as forward (ignoring spaces, punctuation, and capitalization). 
//The function should take a string parameter and return true if it's a palindrome, and false otherwise.


function isPalindrome(str) {
    // Remove spaces and convert to lowercase
    const cleanStr = str.replace(/\s/g, '').toLowerCase(); // \s replace all spaces, toLowerCase make sure the case senstivity
    
    // Compare the reversed string with the original
    return cleanStr === cleanStr.split('').reverse().join(''); // split converts the string (Owais) to ['O','W,'A','I','S;]
    //then join combines them back in the string after rveersing and === verifies the equality
}
// Test cases
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
console.log(isPalindrome("level"));   // Output: true
console.log(isPalindrome("world"));   // Output: false

//Create a function called findNthPrime that finds the Nth prime number. 
//The function should take an integer parameter n and return the Nth prime number. 
//Prime numbers are positive integers greater than 1 that have no positive divisors 
//other than 1 and themselves. The first few prime numbers are 2, 3, 5, 7, 11, and so on.

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function findNthPrime(n) {
    if (n <= 0) {
        throw new Error("Invalid input. n must be a positive integer.");
    }
    
    let primeCount = 0;
    let number = 2;
    
    while (primeCount < n) {
        if (isPrime(number)) {
            primeCount++;
        }
        if (primeCount === n) {
            return number;
        }
        number++;
    }
}

// Test cases
console.log(findNthPrime(1)); // Output: 2 (1st prime number)
console.log(findNthPrime(5)); // Output: 11 (5th prime number)
console.log(findNthPrime(10)); // Output: 29 (10th prime number)


//These are not very difficult but are very muchh needed, when you're practicing JS
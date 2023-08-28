// let count = 0
// while (count<3) {
//     console.log(count)
//     count=count+1;
// }
//print the counting till 3

// for ( let i=0; i<=10; i++) {
//     console.log(i);
// }
//print counting till 10

//! Write a for loop for values from 1 to 20
//? if ( i ) is divisible by 3, print (canny)
//? if ( i ) is divisible by 5, print (coders)
//? if ( i ) is divisible by 3 & 5, print (canny coders)
//? if ( i ) is not divisible by 3 or 5, print (numbers)
for (let i=0;i<=20;i++){
    if(i%3==0){
        console.log('CANNY')
    }
    else if(i%5==0){
        console.log('CODERS')
    }
    if(i%3==0 && i%5==0){
        console.log('CANNY CODERS')
    }
    else if(i%3!==0 && i%5!==0){
        console.log(i);
    }
}

//! WHAT THIS CODE DOES:
//THIS WILL PRINT couting from 0 to 20
//but on:
// 0,3,6,9,12,15,18 it will print CANNY
// 0,5,10,15 it will print CODERS
// 0,15 it will print CANNY CODERS
// 1,2,4,7,8,11,13,14,16,17,19 it will print the numbers.

//!TEST AGAIN:

// for(let i=0; i<20; i++){
//     if ( i%3 == 0 ) {
//         console.log(`${i} --> Canny`);
//     }
//     else if ( i%5 == 0 ) {
//         console.log(`${i} --> Coders`);
//     }
//     else if ( i%3 || i%5 == 0 ) {
//         console.log(`${i} --> Canny Coders`);
//     }
//     else {
//         console.log(`${i} --> ${i}`)
//     }
// }


//!print out every single character from a string
//! 'CANNY CODERS'
let str = 'CANNY CODERS'
for (let i = 0; i < str.length; i++) {
    console.log(str[i]); 
}

//! QUESTIONS GENERATED FOR PRACTICE (BY CHATGPT)
//? 1 What will be printed when you run this code?
// let count = 0;
// while (count < 5) {
//     console.log(count);
//     count = count + 1;
// }
// ANS ---> Counting from 0 to 4

//? 2 What numbers will be printed by the loop?
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

//ANS----> 2,4,6,8,10,12,14,16,18,20

//? 3 Q: What will the loop output?
//for (let i = 10; i >= 1; i--) {
//    console.log(i);
//}

//ANS -------> 10,9,8,7,6,5,4,3,2,1

//? How does the function factorial work?
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

//ANS ----> valeu of n is the number of which the factorial is to be find

//? Write a loop to generate the Fibonacci sequence up to the 
//?10th term, but instead of printing the actual numbers, 
//?print the sum of all previous terms.

// let a = 0;
// let b = 1;

// for (i=0;i<=22;i++){
//     console.log(b);
//     let temp = a;
//     a =b;
//     b=b+temp;
// }

//? Write a loop that checks whether a given number is prime or not.

//let number = 7;

// Check if the number is less than or equal to 1
//if (number <= 1) {
//    console.log("The number is not prime.");
//} else {
    // Loop starting from 2 up to the square root of the number
//    for (let i = 2; i <= Math.sqrt(number); i++) {
        // Check if the number is divisible by 'i'
//        if (number % i === 0) {
//            console.log("The number is not prime.");
//            break; // Exit the loop early if it's not prime
//        }
//    }
//    console.log("The number is prime.");
//}


//?Create a pattern tri using nested loops where each row contains
//?asterisks (*) based on the row number.

// for (let i = 1; i <= 10; i++) {
//     let pattern = '';
//     for (let j = 1; j <= i; j++) {
//         pattern += '+';
//     }
//     console.log(pattern);
// }
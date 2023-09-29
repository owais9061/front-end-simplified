// Basically
/**
 * String
 * Number
 * Boolean
 * Null (Intentional Empty)
 * Undefined
 * Symbol (Latest JS)
 * BigInt (For numbers larger than NUMBER data type can handle)
 */

/**You donot write vairables type becuase JS is Dynamic Typed,not like JAVA,C,C++ */

//STRING
let firstName="Owais";

//NUMBER
let age=19;
//OR
let marks = 98.5;

//Boolean
let adult = true;

//NULL
const houseNumber=null;
//Mean there exist some value, but it will be assigned later by some function/code, not right now.

//Undefined
let married;
//OR
let maritalStatus = undefined;

//SYMBOL
const id=Symbol('id')

//BigInt
const  bigNum= 947563534646;

//Reference Types
/**
 * Objects
 * Arrays
 * Functions
 */

const numbers = [1,2,3,4,5]
let person = [{
    name: 'Owais',
    age:19,
}]
//OR

function printAns(num1,num2){
    
    let ans=num1+num2;
    console.log(ans)
}
printAns(3,4)

//Using typeof funtion for data type
console.log(bigNum, typeof bigNum)

/**
 * Difference
 */

// PRIMITIVE --> Values Stored on Stack
const myName = "Owais Gujjar"
const myAge = 19;

//  REFERENCE ---> Values stored on Heap
let person1 =[{
    name:'Owais',
    age:18,
}]


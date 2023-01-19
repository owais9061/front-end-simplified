//! VALUE PASSING

function welcomePerson() {
    console.log('Welcome to CouchCoding');
}
welcomePerson();


//! PARAMETERS
function welcomeThePerson(firstName, lastName, address) {
    console.log(`Welcome to CouchCoding ${firstName} ${lastName} - ${address}`);
}
welcomeThePerson('Owais','Gujjar','Karachi');
welcomeThePerson('Ammar','Zahid','Karachi');
welcomeThePerson('Khubab','Siddiqui','Karachi');


//! RETURN VALUE ----> Output Driven
function fn() {
    return 'CouchCoding';
    // console.log('CannyCoders')
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


//! ARROW FUNCTIONS

const convertToKilometer = (length) => {
    return length/1000;
}
console.log(convertToKilometer(6000)); //! User Defined --> Input













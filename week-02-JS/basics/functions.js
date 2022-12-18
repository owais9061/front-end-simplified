//practicng Functions
const str = "Owais Gujjar"
function justPracticeQuestions() {
    for (str = 0; str<10; str++) {
        console.log(str);
    }
}
// this function will print Owais Gujjar 0- times
justPracticeQuestions();

//another type of functions
//user input based

function anotherPracticeQuestions (name) {
    console.log(`welcome to House, ${name}`);
}
//Call the function
//in the braces we will write what we need to print everytime after the keyword welcome to house
anotherPracticeQuestions('Owais');
anotherPracticeQuestions('Gujjar');
anotherPracticeQuestions('Owais');
anotherPracticeQuestions('Chaudhry');

//FUNCTIONS with 2 perimeters
function thirdPracticeQuestions (firstName, lastName) {
    console.log(`welcome to House, ${firstName} ${lastName}`);
}
//Call the function
//This function will ask for first and last name multiple times (reusable code).
anotherPracticeQuestions('Owais', 'Chaudhry');
anotherPracticeQuestions('Owais', 'Gujjar');
anotherPracticeQuestions('Owais', 'Khan');
anotherPracticeQuestions('The Foolish', 'Engineer');


//Return statement in functions
function fn() {
    return 6 +10
    console.log('Owais khan')
}
console.log(fn()); //output 16
//OR
console.log(5); //output 6
//this code will generate the output " 5" not the console.log value
//becuase tje fnction get terminated at tje return statement


//creating another type of function
function sumOfTwo(num1, num2) {
    return 5 + 10
}
console.log(sumOfTwo(5, 10));


function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}
console.log(sumOfTwoNumbers(5, 10)); 
//it will now give output 15 becuase the function has it's repeatable values which is num1 and num2
// and it will just ask for the values which are changebale like 5 or 10


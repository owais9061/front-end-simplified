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
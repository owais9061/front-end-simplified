// Array Method Challenges

// Challenge 1

// Take the `people` array and create an array called `youngPeople` 
// that stores objects with ONLY `name` and `email` properties of 
// all the people that are 25 and under. 
// The `name` property should have their first and last name.

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

//SOLUTION 
//const youngPeople = people.filter((person) => person.age <= 25).map((person) => ({name: person.firstName + ' ' + person.lastName, email: person.email,}));
//const youngPeople = people.filter(element=>element.age<=25).map((element)=>({name:element.firstName + ''+ element.lastName, Email:element.email}));


// Challenge 2

// Add all of the positive numbers in the array.

// LIKE THIS
// const numbers = [2, -30, 50, 20, -12, -9, 7];

console.log(positiveSum); // 79


//SOLUTION
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers.filter((number) => number > 0).reduce((acc, cur) => acc + cur, 0);
// BOTH
const addPositive = numbers.filter(element=>element>=0).map((element)=>element+=element);

console.log(positiveSum);


// Challenge 3

// Create a new array called `capitalizedWords` with the words from the `words` array with 
// the first letter of each word capitalized.

const words = ['coder', 'programmer', 'developer'];

console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']
const capitalizedWord = words.filter(element=>element.toString().charAt(0).toLocaleUpperCase());

const capitalWord = words.map((word)=>word[0].toUpperCase()+ word.slice(1,word.length))
// Explain: We first took the first word by word[0] then we upper case it, then slice the word array from 1 positoon to the lenght of whole word by word.length

// SOLUTION

const capitalizedWords = words.map((word) => word[0].toUpperCase() + word.slice(1, word.length));
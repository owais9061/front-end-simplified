// map() Method

// The `map()` creates a new array

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// Since the `map()` method returns a new array,
// we can assign the result to a variable and use it later.

// Using forEach()

const doubledNumbers2 = [];

numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2); // [2, 4, 6, 8, 10]

// Using map() with an array of objects

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];


// Let's create an array of company names:
const compNames=companies.map((element)=>element.name);
console.log(compNames);
// ['Company One', 'Company Two', 'Company Three', 'Company Four', 'Company Five', 'Company Six', 'Company Seven', 'Company Eight', 'Company Nine']


// Let's create an array of new objects with just the name and category properties
const compInfo=companies.map((element)=>{
    return{
        name: element.name,
        category: element.category,
    }
})


// Let's create an array of objects with the name and the length of each company in years:
 
const nameAndLength = companies.map((element)=>{
    return{
        name: element.name,
        LengthOfCompany: element.end = element.start + ' years',
    }
})

console.log(nameAndLength);


// Chaining map Methods

// We can chain methods together to create a more complex result.


const squareAndDouble = numbers.map((number) => Math.sqrt(number)) .map((number) => number * 2);

console.log(squareAndDouble);
// [2, 2.8284271247461903, 3.4641016151377544, 4, 4.47213595499958]

// We can chain different methods together to create more complex functionality. Let's say that we want to filter the even numbers and then double them, we can chain `map()` and `filter()` together:

const evenDouble = numbers.filter((number) => number % 2 === 0).map((number) => number * 2);
console.log(evenDouble); // [4, 8, 12, 16, 20]
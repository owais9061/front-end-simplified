// Filter() Method

// `filter()` is a useful method that filters an array based on a provided function. 
// Unlike `forEach`, it returns a value. That value is an array of items that pass a truth test.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]

// ShortHand

const evenNumbers2 = numbers.filter(function (number) {
  return number % 2 === 0;
});

//  Same thing with forEach
// We can get the same result with a longer block of code using a `forEach`


const evenNumbers3 = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers3.push(number);
  }
});

console.log(evenNumbers); // [2, 4, 6, 8, 10]

// CHALLENGE
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


// CHALLENGE
//Get only the companies that are in the **Retail** category:

const retailCompan = companies.filter(element=> element.category==='Retail')
console.log(retailCompan)

// Get companies that started in or after 1980 and ended in or before 2005

const specificYearCompany = companies.filter(element=> element.start<=1908 && element.end>=2005);
console.log(specificYearCompany)

// Get companies that lasted 10 years or more
const difference=companies.end - companies.start;
const decadeCompany = companies.filter(element=>element.end - element.start >=10)
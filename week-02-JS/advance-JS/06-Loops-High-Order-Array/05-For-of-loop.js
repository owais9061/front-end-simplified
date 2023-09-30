// For Of Loop

// The `for of` loop is used to loop through iterable objects, 
// such as arrays and strings as well as some things.

// For Of Syntax

for (variable of iterable) {
  // do something
}


// Let's look at a simple example that loops over an array.

const arr = [1, 2, 3, 4, 5];

for (const number of arr) {
  console.log(number);
}
// 1 2 3 4 5


// Iterating Over Strings

// You may not think of a string as an iterable, but it is. 
// If you needed to loop over every letter in a string, you could.

const greet = 'Hello World';

for (const letter of greet) {
  console.log(letter);
}

// H E L L O W O R L D

// Using this For Objects

let users =[
    {
        name:'Owais',
        age:19
    },
    {
        name:'Gujjar',
        age:20
    },
    {
        name:'Owais Gujjar',
        age:21
    },
] 
    

for(const user of users){
    console.log(user);
}


//  Iterating Over Maps

// We haven't talked about Maps yet, but they are very similar to arrays. 
// I will go over Maps later, but just to show you a quick example:


  const map = new Map();
  map.set('name', 'John');
  map.set('age', 30);

  for (const [key, value] of map) {
    console.log(key, value);
  }

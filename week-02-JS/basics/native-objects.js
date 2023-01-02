//NATIVE OBJECTS IN JS INCLUDES

// MATHS & NUMBERS
// DATES
// REGULAR EXPRESSIONS (MINI CODES SNIPPETS)
//PLAIN OBJECTS
//Application:--->  to predice unique words in a string

//! MATHS AND NUMBERS

//!MOSTLY  WORK DONE HERE IS ON NODE (CALLED ON TERMINAL)
// !NODE IS BASICALLY A REPL

// ?TRY FOLLOWING
// *Additon, Sibstraction, Multiplication & Division on Node
// *ALSO 
// *TRY THE FOLLOWING:

// *Math.PI
// *ALSO 
// *Math.pow(2,5)
// ?here Math is a constant universal variable for mathematical operations
// *ALSO MATH.log(Math.E)

//*Math.Log(10) gives exponential log
//*Math.Log10(10) gives you base to the 10 log of value
// ?convert a certain variable to string using .tostring method

//!TRY THESE
// > let s = new String("Owais, a Coder, a Boxer --Pakistani");   
// undefined
// > s;
// [String: 'Owais, a Coder, a Boxer --Pakistani']
// >

//!JAVASCRIPT HANDLE SCINTIFIC NOTATION VERY WELL

// ? let a = new Array();
// undefined
//  a;
// []
// * a.push(3);
// 1
// * a.push(5);
// 2
//  *a.push('Owais is KING');
// 3
//  a;
// ?[ 3, 5, 'Owais is KING' ]


//!ALSO TRY THE FOLLOWING CODE
let now = new Date();

now;

let moonlanding = new Date("July 20, 1969");

now - moonlanding

now.getYear();

now.getMonth();

now.getDay();

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "friday", "Saturday"];

daysOfWeek
[
  'Sunday',
  'Monday',
  'Tuesday',
  'wednesday',
  'Thursday',
  'friday',
  'Saturday'
]
daysOfWeek[now.getDay()];
'friday'
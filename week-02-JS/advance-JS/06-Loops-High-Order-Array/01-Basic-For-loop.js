// LOOPS AND ITERATION IN JS
// For Loop

// A loop is a control structure. It provides a way to do `iteration` in programming. 
// Iteration is a process where you repeat something over and over again until a certain condition is or is met. 

// There are many different kinds of loops in programming, 
// and one of the most common loop is the `for` loop.

// For Loop Syntax

 for ([initialExpression]; [conditionExpression]; [incrementExpression])
  // {statement}

  /** 
   The initial expression usually initializes a variable/counter
   The condition expression is the condition that the loop will continue to run a long as it is met or until the condition is false
   The increment/decrement expression is the expression that will be executed after each iteration of the loop
   The statement is the code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

   */

   // SIMPLE FOR LOOP FOR NUMBER 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log("Number " + i);
}

// Output:
// Number 1
// Number 2
// Number 3
// Number 4
// Number 5
// Number 6
// Number 7
// Number 8
// Number 9
// Number 10

// Can go upto 20,50,100 as much as you want.

// Block scope

// Loops are considered a `block`, just like if statements. 
// Remember that variables using `let` and `const` are scoped to the block they are defined in. 
// So if we define a variable in a loop, we can not access it outside of the loop.


for (let i = 0; i <= 100; i += 5) {
  const message = 'Number ' + i;
  console.log(message);
}

console.log(message); // ReferenceError: message is not defined

// However, if we use `var`, we can access the variable outside of the loop. This is not a good practice, but it is possible.

for (let i = 0; i <= 100; i += 5) {
  var message = 'Number ' + i;
  console.log(message);
}

console.log(message); // Number 100

// Testing Conditions

for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log('7 is my favorite number');
  }

  console.log('Number ' + i);
}

// In the code above, we are testing the value of `i` to see if it is equal to 7. 
// If it is, we will log the message "7 is my favorite number".

// Nested For Loops

for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);
  for (let j = 1; j <= 10; j++) {
    console.log(i + ' * ' + j + ' = ' + i * j);
  }
}

for(let k=0;k<=2;k++){
    console.log('Number' + k);
    for( let l=0;l<=10;l++){
        console.log(k +' * ' + l + ' = ' + k*l)
    }
}

// Looping Over Arrays

// Arrays have a `forEach()` method that allows you to loop over them. 
// This is the most common way to loop over an array.

const names = ['Owais','Gujjar','Owais Gujjar'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// CHALLENGE Add  ANY NAME IN CONSOLE
// Add ' in JS ' after FullStack Coder in Console.

const names1=['Owais','Owais Gujjar','Gujjar','Owais G.','FullStack Coder']
for(let i=0;i<names1.length;i++){
  if(i===4){
    console.log(names[i]+' in JS')
  }
  else{
    console.log(names[i])
  }
}


// If you wanted to find a specific iteration and index, you could do something like this

for (let i = 0; i < names.length; i++) {
  if (i === 2) {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}

// Infinite Loops

// Infinite loops are something that you will probably run into at one point or another.
// To purposely create an infinite `for` loop, we could do this:

for (let i = 0; i < Infinity; i++) {
  console.log('Number ' + i);
}

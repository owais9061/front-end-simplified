//  Ternary operator

// In addition to `if-else` and `switch`, there is a third way to write conditional logic. 
// This is called the `ternary` operator. 
// It is basically a shorthand, one line `if-else` statement.

// condition ? true : false;

// STRUCTURE:
// First, we have the condition to be evaluated as a boolean.
// Then we have a `?`, which is the TERNARY OPERATOR and after that is the expression 
// that we want to happen if the condition is `true`. 
// The `:` is the else. So the expression after that will execute if the condition is `false`.

const age = 19;

if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote!');
}

//We can do the same thing using the ternary operator:

age >= 18 ? console.log('You can vote!') : console.log('You can not vote!');
// You can vote!

// Assigning result to a variable

// In many cases, we want to store the result of the ternary operator in a variable.

const canVote1 = age >= 18 ? 'You can vote!' : 'You can not vote!';

console.log(canVote1); // You can vote!


// This is much more compact than this:

let canVote;

if (age >= 18) {
  canVote = 'You can vote!';
} else {
  canVote = 'You can not vote!';
}

console.log(canVote); // You can vote!


// Multiple statements

// In most cases, you will just have a single expression in the true/false part of the ternary operator,
// however you can have Multiple statements by using a comma.

const auth = true;

const redirect = auth
  ? (alert('Welcome To The Dashboard'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);


// Multiple Ternary Operators

// We can also have multiple ternary operators and conditions. Much like an else-if.

const canDrink =
  age >= 21
    ? 'You can drink!'
    : age >= 18
    ? 'You can have 1 beer'
    : 'You can not drink';

console.log(canDrink);

auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');
// This is the same as:

if (auth) {
console.log('Welcome to the dashboard');
}

// Using the `&&` operator as a shorthand is a popular thing to do in React templates. 
// Many times, you will see something like:


// {!loading && (
//   <Fragment>Some UI</Fragment>
// )}


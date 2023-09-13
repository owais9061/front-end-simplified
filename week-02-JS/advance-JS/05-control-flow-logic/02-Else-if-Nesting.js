// SIMPLE IF within IF, WITHIN IF or Else

//First we are getting DATE OBEJCT so we cna access Hours, Minutes, seconds. miliseconds etc.
const d = new Date();
// accessing
const hour = d.getHours();



if (hour < 12) {
  console.log('Good Morning!');
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Night!');
}

// Nesting

// There may be cases where you need to have `if statements` inside of `if statements`. 
// In this case, you can use a `nested` `if statement`.


if (hour < 12) {
  console.log('Good Morning!');

  if (hour === 6) {
    console.log('Wake up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Night!');

  if (hour >= 20) {
    console.log('zzzzzzzzzzz!');
  }
}


// We can test for multiple conditions in the same if statement by using the `&&` (AND)
//  and the `||` (OR) logical operators.


if (hour >= 7 && hour < 15) {
  console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
  console.log('Brush your teeth!');
}

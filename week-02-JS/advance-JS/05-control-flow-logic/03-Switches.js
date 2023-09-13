//  Switches

//  If you find yourself with a lot of else-if statements and you are testing a single value, 
//  you may want to consider using a switch statement. The switch evaluates an expression 
//  and then executes the first case that matches the value.
//  The format for a switch statement is as follows:

/**
 *   
switch (expression) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
  default:
    statement3;
}
 */

// NOW USING IT
const d = new Date(2022, 1, 20, 8, 0, 0);
const month = d.getMonth();

// Basically cases will be changed when the value of month in above Date object changes
//EXAMPLE:
// const d = new Date(2022, 2, 20, 8, 0, 0);
// const d = new Date(2022, 3, 20, 8, 0, 0);

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not January, February or March');
}


// Something else to practice
const hour = d.getHours();

switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Night');
}
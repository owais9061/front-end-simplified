/* 

In JavScript, we need to first declare a variable with one of three keywords

- var
- let
- const 

When it comes to variables as well as functions and classes with multiple words, 
it's really up to you on how you format the case. What you'll typically see 
in JavaScript and what I usually do is `camelCase`. This where we start with 
a lowercase letter but every word after that starts with an uppercase letter.

let firstName = 'John';

You may also see underscores like this
let first_name = 'Sara';

There's also pascal case, where the first word is also capitalized. You typically see this for class names in object oriented programming.
let FirstName = 'Tom';

You might also see all lowercase, which I wouldn't recommend
let firtstname = 'Bob';

*/

let firstName="Owais";
let lastname=" Gujjar"
console.log(firstName+lastname)


//SIMPLY going over Array
const arr=[1,2,3,4,5]
//Now const can't be changed, so
// we will push the new vales using
arr.push(6,7,8)

//now if i console log it
// It'll give 1,2,3,4,5,6,7,8
console.log(arr);

//testing it with some objects
const person ={
    name: 'Owais',
}

// Since const donot changes values of variable sbut it surely change values of it's properties (in thi case : name);
person.name="Gujjar"
console.log(person)
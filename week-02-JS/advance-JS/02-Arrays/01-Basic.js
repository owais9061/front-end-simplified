//ARRAY is a Data Sructure, use to store Data. It's and Oject type

let x;
//ARRAY LITERAL
let number=[12,13,14,15,16]
console.log(number)

//ARRAY CONSTRUCTOR
const fruits = new Array('apple','banana','orange')
console.log(fruits)

//MIXED ARRAY

const mixed = [19,20,'Owais','Gujjar',true,null]

x= number[0]
x= number[0]+number[3];
x=`My favourite fruit is ${fruits[0]} & ${fruits[2]}. They are very juicy`
console.log(x)

console.log(x.length)
// CHANGE VALUE
fruits[2]='Gujjar';
//Change Length
fruits.length=2; //Eliminate Gujjar
x=fruits
console.log(x)
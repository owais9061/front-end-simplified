//SIMPLY PUTTING ONE ARRAY WITHIN ANOTHER
//REAL LIFE EXAMPLE:
//Array#01 --> class1,class2,class3 --> Nested Array#02 (Class1)=['owais','Gujjar','Chaudhry'] etc

 //Testing
 const fruits = ['apple','mango','banana','pear']
 const berries = ['strawberry', 'bluberry','cherry']
 fruits.push(berries)
 //  [
     //     'apple',
     //     'mango',
//     'banana',
//     'pear',
//     [ 'strawberry', 'bluberry', 'cherry' ]
//   ]
 console.log(fruits)

 // BASICALLY PUSH creates a new Array within already created Array, 
 // it donot just include the items, it include the whole arrays
 
 //Accessing the item of nested 
 let x;
 // x= fruits[4] --->  4 is the position on which a new ARRAY is added.
 x=fruits[4][2] //cherry
 console.log(x)

 //COMBINING BOTH ARRAYS
 
 const fruits1 = ['apple','mango','banana','pear']
 const berries1 = ['strawberry', 'bluberry','cherry']
 const allFruits = [fruits1,berries1]
//  [
//     [ 'apple', 'mango', 'banana', 'pear' ],
//     [ 'strawberry', 'bluberry', 'cherry' ]
//   ]
x=allFruits[1][2] // --> 1 means the second array (berries) and 2 is the item of array (cherry)
 console.log(allFruits)
 console.log(x)

 //Now combing the two Arrays
 //USING CONCATINATION
 x=fruits1.concat(berries1)
 console.log(x)

 //ALSO USING SPREAD OPERATORS ( ... ) --> ... only fetch the items of ARRAY
 x=[...fruits1, ...berries1]
 console.log(x)

 //FLATTEN ARRAY
 const arr2=[1,2,3,[4,5],6,[7,8],9] //ARRAY WITHIN AN ARRAY
 x=arr2.flat();
 console.log(x)

 //STATIC METHODS
 /**
  * isArray
  * from
  * of
  */

// isArray
x = Array.isArray(fruits1) // it will return thether it is a Array or Not
x = Array.isArray('Hello') //ERROR --> False
console.log(x)

//FROM --> Conevrt string to Array
x=Array.from('12345');
console.log(x)

// OF --> COnvert values of variables to a Array
const a=1,b="Owais",c=3
x=Array.of(a,b,c)
console.log(x)
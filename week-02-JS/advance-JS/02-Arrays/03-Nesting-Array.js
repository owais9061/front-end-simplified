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
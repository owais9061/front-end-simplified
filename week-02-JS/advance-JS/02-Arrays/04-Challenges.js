// USE SOME OF THE METHODS WE LEARN AND CONVERT 
// arr = [1,2,3,4,5 ]  ---> arr1=[6,5,4,3,2,1,0]

let x;
const arr=[1,2,3,4,5]
arr.push(6)
arr.unshift(0);
arr.reverse();
console.log(arr)




//ALSO
 // combine arr1 and arr2 into new ARRAY arr3 with the following elements
 //arr1=[1,2,3,4,5]
 // arr2=[5,6,7,8,9,10]
 // Remove the extra 5 and then console --> arr3=[1,2,3,4,5,6,7,8,9,10]
 let arr1=[1,2,3,4,5];
 let arr2=[5,6,7,8,9,10]
 let arr3=arr1.concat(arr2.splice(1));
 console.log(arr3)
const arr =[12,13,14,15,16,17]
/**
 * METHODS OF ARRAYS:
 * push
 * pop
 * unshift
 * reverse
 * includes
 * index of
 * charAt
 * Slice
 * Splice
 */


//PSUH ---> Add value to Array
arr.push(100);
console.log(arr)

//POP ---> Remove the last item
arr.pop();
console.log(arr)

//UNSHIFT ---> Add new Element in the Beginning
arr.unshift(10,11)
console.log(arr)

//REVERSE
arr.reverse()
console.log(arr)

//INCLUDE ----> Check if the speicifc value is in the array or not
x= arr.includes(14) //TRUE
x= arr.includes(9) //FALSE
console.log(x)

//INDEX OF ---> Know the Position in an ARRAY
x=arr.indexOf(14); //3
console.log(x)

//SLICE ---> TRIM the Array from the specific index
x=arr.slice(1) //It will eliminates 9 , because of the Reverse Array --> 
// [
    //   16, 15, 14, 13,
    //   12, 11, 10
    // ]
x=arr.slice(1,4) //It will eliminates 9,10,11,12 , because of the Reverse Array --> 
// [ 16, 15, 14 ]
console.log(x)

//SPLICE ---> TRIM the original array (not temporarily)
x=arr.splice(1,3)
x.push(100) // 16,15,14 and then it will add 100 becuase splice remove the original elements
// [ 16, 15, 14, 100 ]
console.log(x)

//Creating a New Array becuase of Splice
const newArr = [1,2,3,4,5,6,7,8,9]
x=newArr.reverse().toString().charAt(1); //just testing
console.log(x)
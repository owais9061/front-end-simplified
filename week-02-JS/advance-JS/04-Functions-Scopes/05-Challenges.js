/** 
 * Create a FUnction that takes one paramtere as input and then return the output in argument
 * Craete an Arrow function, which takes an ARRAY as inut and then return the minimum and maximum value of it, in an object
 * Create and IMEF that takes two paramteres and return the argument, as soon as page relaods.
 */

// 1
function getCeclius(temp){
    const faranheit=(temp*1.8)+32;
    return faranheit;
}
console.log(getCeclius(24))

// OR
const getCelcius =(temp)=>(temp*1.8)+32;
console.log(getCelcius(24))

//2

// Mine
// const minMax =(arr)=>{
//     let newArr= new Object();
//     return newArr = Math.min(...arr) +''+ Math.max(...arr);
// }
// console.log(minMax([1,2,3,4,5]))

function minMax(arr){
    const min=Math.min(...arr);
    const max=Math.max(...arr);
    return{
        min,
        max
    }
}
console.log(minMax([2,5,3,34,5,6]))

// 3
// (()=>{})
(function(length,width){
    let area = width * length;
    const output =( `Area of Rectangle with Length: ${length} & Width: ${width} is ${area}`);
    console.log(output)
})(2,4);

const area1=(length,width)=>length*width;
console.log(area1(4,2));
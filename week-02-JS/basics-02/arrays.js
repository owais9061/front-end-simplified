let item1= 20
let item2= 50
let item3= 40
let item4= 40
let item5= 30

// //! AARAY
let item=[20,50,40,40,40]
console.log(item)

// //! ARRAY --->
// //? STRINGS
// //? NUMBERS
// //? BOOLEAN

let arr = ['Owais',20,true]
console.log(arr);
let canny = [10,20,30,40,50]
console.log(canny.length)

// //! TO ACCESS THE LAST ELEMENT OF AN ARRAY
console.log(canny[canny.length-1])

// //! ELEMENT ADD

// //! .push method of an array
canny.push(60,70,80)
console.log(canny)
//Real life usecase: Add to Cart function on ECommerce stores.


//! ARRAY FILTER METHOD
//CALLBACK

let arr1 = [10,20,30,40,50,'Owais']
arr1.filter((element) => {
    console.log(element)
})

// //! WEHN WE HAVE TO MAE CHANGES TO SOME OTHER ARRAY USIN THE VALUES OF ONE ARRAY
let arr2 = [10,20,'CANNY']
let newArr = arr2.filter((element) => {
    console.log(element);
    return true;
})
console.log(newArr)

// //! LESS ------->
let arr3 = [10,20,30,40]
let newArr1 = arr3.filter(element => {
    return element<40
})
console.log(newArr1)

//! PRACTICE QUESTIONS BY CHATGPT
//Given an array numbers, write a function filterEvenNumbers that uses the Array.filter method to filter
// out all even numbers from the array. The function should return a new array containing only the even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterEvenNumbers = (arr) => {
    return arr.filter(element => element % 2 === 0);
};
//In this we just have to provide the process, which is filtering out evens, in the function.
console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]

//! ALSO

//Write a function filterWordsByLength that takes an array of words and an integer 
//length as parameters. Use the Array.filter method to filter out words from 
//the array that have a length less than or equal to the given length. 
//The function should return a new array containing only the filtered words.

const words = ['Coders', 'Canny', 'Gujjar', 'Owais', 'CannyCoders'];
const filterWordsByLength = (wordArray, length) => {
    return wordArray.filter(word => word.length <= length);
};
console.log(filterWordsByLength(words, 7));


//!ALSO (DIFFICULT)
//Given an array of objects representing students, each with a name and score property, 
//write a function filterTopStudents that uses the Array.filter method to filter out the 
//students with scores higher than a given threshold score. The function should return a new array 
//containing only the top-scoring students.

const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
    { name: 'David', score: 95 },
    { name: 'Eve', score: 88 }
];
const filterTopStudents = (studentArray, threshold) => {
    return studentArray.filter(student => student.score > threshold);
};
console.log(filterTopStudents(students, 90)); // Output: [{ name: 'Bob', score: 92 }, { name: 'David', score: 95 }]











// //! EXERCISE
// //? FILTER OUT FAIL GRADE FROM THE FOLLOWING ARRAY

let grades = ['A+','A','B','FAIL']
let newGrades = grades.filter(element => {
    console.log(element)
    if(element !== 'FAIL'){
        return true
    }
})
console.log(newGrades)

//! LESS------------>
let newGrades1 = grades.filter(element => element !=='FAIL')
console.log(newGrades1)


//! WITHOUT FILTER METHOD

//! MUST
let grades1 = ['A+','A','B','FAIL']
let newGrades2 = [];
for(let i=0; i<grades1.length; i++){
    if(grades1[i] !== 'FAIL' ){
        newGrades2.push(grades1[i])
    }
}
console.log(newGrades2)

//! TESTING 

let testGrades=['A+','A','B+','B','C','Owais']
let upgradeTestGrades=[];
for(let i=0;i<testGrades.length;i++){
    if(testGrades[i]!=='Fail'){upgradeTestGrades.push(testGrades[i])}
}
console.log(upgradeTestGrades);

//Filter our FAILS from the given Array
let aArr=['A','B','F','F']
let bArr=['A','B','C','F']
let cArr=['A','F','F','F']
let dArr= aArr.filter(element => element !=='F')+ bArr.filter(element => element !=='F')+ cArr.filter(element => element !=='F')
console.log(''+dArr);

//! .MAP
// USED WHEN YOUW ANT TO CHNAGE ALL THE ELEMNTS OF AN ARRAY

let grades2 = ['A+','A','B','F']
grades2.map((element)=> {
    console.log(element) //PRINT ALL ELEMENTS A+,A,B,F
})


let grades3 = ['A+','A','B','F']
let newGrades3 = grades3.map((element)=> {
    console.log(element)
    return undefined
})
console.log(newGrades3) //PRINT ALL ELEMENTS, but UNDEFINED


//! LESS ---------------->
let newGrades4 = grades3.map(element=>{
    return 'CANNY CODERS 2.0' //? CONVERSION
})
console.log(newGrades4)


//? 1- Dollar to cent / KM to m

let km = [1,2,3,4,5,6,7,8,9]
let meters = km.map(element=>{
    return element * 1000 + ' meters '
})
console.log(meters)

//KM TO METER
let arrKm = [1,34,23,54,11,12,87] //values is KM
let arrM = [];
for (let i=0;i<arrKm.length;i++){
    arrM.push(arrKm[i]*1000)
}
console.log(arrM)


//! LOOOOOOOOOOOOOOOOOOP
let km1 = [1,2,3,4,5]
let meter=[];
for(let i=0; i<km1.length; i++){
    meter.push(km1[i]*1000)
}
console.log(meter)


//! .push  / .filter + looping  /  .map + looping
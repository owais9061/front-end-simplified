// let item1= 20
// let item2= 50
// let item3= 40
// let item4= 40
// let item5= 30

// //! AARAY
// let item=[20,50,40,40,40]
// console.log(item)

// //! ARRAY --->
// //? STRINGS
// //? NUMBERS
// //? BOOLEAN

// let arr = ['Owais',20,true]

// let canny = [10,20,30,40,50]
// console.log(canny.length)

// //! TO ACCESS THE LAST ELEMENT OF AN ARRAY
// console.log(canny[canny.length-1])

// //! ELEMENT ADD

// //! .push method of an array
// canny.push(60,70,80)
// console.log(canny)


//! ARRAY FILTER METHOD
//CALLBACK

// let arr1 = [10,20,30,40,50,'Owais']
// arr1.filter((element) => {
//     console.log(element)
// })

// //! WEHN WE HAVE TO MAE CHANGES TO SOME OTHER ARRAY USIN THE VALUES OF ONE ARRAY
// let arr2 = [10,20,'CANNY']
// let newArr = arr2.filter((element) => {
//     console.log(element);
//     return true;
// })
// console.log(newArr)

// //! LESS ------->
// let arr3 = [10,20,30,40]
// let newArr1 = arr3.filter(element => {
//     return element<40
// })
// console.log(newArr1)



// //! EXERCISE
// //? FILTER OUT FAIL GRADE FROM THE FOLLOWING ARRAY

// let grades = ['A+','A','B','FAIL']
// let newGrades = grades.filter(element => {
//     console.log(element)
//     if(element !== 'FAIL'){
//         return true
//     }
// })
// console.log(newGrades)


// //! LESS------------>
// let newGrades1 = grades.filter(element => element !=='FAIL')
// console.log(newGrades1)


//! WITHOUT FILTER METHOD
//? LOOOOOOOOOOOOOOOOOOP

let grades1 = ['A+','A','B','FAIL']
let newGrades2 = [];
for(let i=0; i<grades1.length; i++){
    if(grades1[i] !== 'FAIL' ){
        newGrades2.push(grades1[i])
    }
}
console.log(newGrades2)

//! .MAP

let grades2 = ['A+','A','B','F']
grades2.map((element)=> {
    console.log(element)
})


let grades3 = ['A+','A','B','F']
let newGrades3 = grades3.map((element)=> {
    console.log(element)
    return undefined
})
console.log(newGrades3)


//! LESS ---------------->
let newGrades4 = grades3.map(element=>{
    return 'Canny' //? CONVERSION
})
console.log(newGrades4)

//? 1- Dollar to cent / KM to m

let km = [1,2,3,4,5,6,7,8,9]
let meters = km.map(element=>{
    return element * 1000 + ' meters '
})
console.log(meters)



//! LOOOOOOOOOOOOOOOOOOP
let km1 = [1,2,3,4,5]
let meter=[];
for(let i=0; i<km1.length; i++){
    meter.push(km1[i]*1000)
}
console.log(meter)
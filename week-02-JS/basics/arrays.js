//Creating 5 variables
let item1 = 10 
let item2 = 20 
let item3 = 30 
let item4 = 40 
let item5 = 50 
console.log(item1, item2,item3,item4,item5)

//ANOTHER METHOD IS TO USE ARRAY
let arr = [10, 20, 30, 40,50]
console.log("Prices of items are:", arr);

//PRINT SPECIFIC VALUE
console.log(arr[0]); //change 0 to any number

//Print the length of array
console.log(arr(arr[arr.length]));


//Understand the .push command of JS for arrays
//Use to insert values in array
//Think it as a shopping cart

//STEP 1 ----> Cart is empty
//so
let cart = []

//STEP 2-----> if i click on add to cart below a shirt then
cart.push('shirt')

//STEP 3 -----> Now the cart has Shirt listing
console.log(cart);






//ARRAY FILTER METHOD  --> CALLBACK FUNCTION
let arr1 = [10,20,30,40,'Owais']
arr1.filter( (element)=>{
    console.log (element)
} )  // () => {} is the indication for callback function

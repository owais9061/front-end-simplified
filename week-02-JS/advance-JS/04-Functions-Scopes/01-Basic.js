// SIMPLE OUTPUT --> No Paramter, no Return
function sayHello(){
    console.log("Hello")
}
sayHello();

// PARAMETERS BASED
function sumOfNum(num1,num2){
    console.log(num1+num2)
}
sumOfNum(5,10) // ---> Arguments

// RETURNING BASED
function subtract(num1,num2){
    return num2-num1;
}
const ans=subtract(5,10)
console.log(ans)
console.log(ans,subtract(10,15))


// MORE ON PARAMETERS AND ARGUMENTS

//DEFAULT PARAMS
function registerUser(user){
    return user + ' is registered';
}
console.log(registerUser('Owais'))


//REST PARAMS
function sum(...numbs){ //Unlimited arguments can be passed
    let total=0;
    for(const num of numbs){ // here the num represents the elements of numbs
        total+=num;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6,7,8))

// Objects as Prarams
function loginUser(user){
    return `The user ${user.name} with the Id of ${user.id} is Logged In`
}
const user={
    id:9061,
    name:"Owais Gujjar",
}
console.log(loginUser(user))
// OR
console.log(loginUser({ //Directly without Initiating
    id:9066,
    name:"Owais"
}))


// NOW ARRAYS AS PARAMETERS
function getRandom(arr){
    const randomIndex=Math.floor(Math.random()*arr.length) // Means We firsly ROUND down the decimal 
    // values and then Multiple it to the length of array which is 9 in htis 
    // case so random values between 0 and 9
    const item =arr[randomIndex]
    console.log(item)
}
getRandom([1,2,3,4,5,6,7,8,9])

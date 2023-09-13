function add(a,b){
    return a+b;
}
console.log(add(1,2))

// REWRITE USING ARROW FUNCTION
const addTwo =(a,b,c,d )=>{
    return  a+b+c+d;
}
console.log(addTwo(1,2,3,4))

// Shortening It --> Implicit Method becuase Return is not defined
const addThree =(a,b,c)=>a+b+c
console.log(addThree(1,2,3))

// ALSO IF Function has signgle paramter, we can shorter it more ---> No Paranthesis Required
const double= a => a*2;
console.log(double(23))

// NOW IF YOU WANT TO RETURN AN OBJECT THEN
const createdObj = () => ({
    name:"owais",
    age:19,
});
console.log(createdObj())
// { name: 'owais', age: 19 }
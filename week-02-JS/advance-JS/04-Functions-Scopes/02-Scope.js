// Conext or Rule of Certain piece of Code.

// function run(){
//     console.log(window.innerWidth);
// }
// run();

// GLOBAL SCOPED
let x;
function add(num1,num2){
    x=num1+num2;
    console.log(x)
}
add(1,2)

//FUNCTION SCOPED --> Only accessible within Function
function sub(num1,num2){
    let ans=num2-num1;
    console.log(ans)
}
sub(2,6)
// console.log(ans) // --> Error


// Block SCOPE 
// const  OR let --> Block
// var --> GLobal

if(true){
    const a=10,b=30
    var c= 25; // var is not mostly used 
    const add = a+b+c;
    console.log(add)
}

// console.log(a) //ERROR
// console.log(b) //ERROR
console.log(c )// -> Output 25


// NESTED SCOPE
// You can directly acess the childs of parents, but you can't dirctly access the parents of childs

// second is accessed before the first
function first(){
    const x=100;
    function second(){
        var y=20;
        console.log(x+y)
    }
    second()
}
first()
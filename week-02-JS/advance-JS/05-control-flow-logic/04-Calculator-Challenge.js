/** 

Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`. 
The operator can be `+`, `-`, `*` or `/`. The function should return 
the result of the calculation. If anything other than the four operators 
is passed in, the function should return an error message.

1- calculator(5, 2, '+') // returns 7
2- calculator(5, 2, '-') // returns 3
3- calculator(5, 2, '*') // returns 10
4- calculator(5, 2, '/') // returns 2.5
5- calculator(5, 2, '%') // returns an error message

 */

function calculator(num1,num2,op){
    //NOW
    if(op=='+'){
        return num1+num2;
    }
    else if(op=='-'){
        return num1-num2;
    }
    else if(op=='*'){
        return num1*num2;
    }
    else if(op=='/'){
        return num1/num2;
    }
    else {
        console.log("No Operation");
    }
}
console.log(calculator(2,5,'+')) //return 7
console.log(calculator(10,2,'-')) //return 8
console.log(calculator(3,7,'*')) //return 21
console.log(calculator(10,3,'/')) //return 3.333333333
console.log(calculator(2,5,'%')) //return No Operation
// EXECUTION CONTEXT

// SIMPLY JS has 2 Areas - Memory Context and Execution Context
// Means evey variable initiated is in UNDEFINED state, until it gets to work or called out, then it get tranfer to
// Execution state and it is where the value of that variable is loaded.
//SUCH AS:

let x=10,y=10;
function getSum(n1,n2){
    const asn=n1+n2;
    return asn;
}
const sum1 = getSum(x,y) // --> Expression driven Function
const sum2 = getSum(2,10) // --> Expression driven Function
console.log(sum1,sum2)

// in this code X and Y are initially UNDEFINED but when they are called out on line 13, JS retrieves their value from MEMORY
// to Execution context and it is where the magic happens.
// as the values of n1,n2 are not UNDEFINED they are EMPTY, because of the FUNCTION BLOCK.

// CALL STACK
/**
 * JS is SIngle Thread , Asynchronous Language so it operates of LIFO principle
 * LIFO = LEAST IS FIRST ONE
 * EXAMPLE BELOW:
 */
function first(){
    console.log('first...')
    second();
}
function second(){
    console.log('second...')
    third();
}
function third(){
    console.log('third...')
}

first()
second()
third()

/**
 * OUTPUT 
first...
second...
third...
second...
third...
third...

In CALL STACK they are:
Third
Second
First
 */
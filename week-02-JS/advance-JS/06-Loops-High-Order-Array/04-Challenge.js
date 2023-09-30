// FizzBuzz Challenge


// Instructions:

// Print/log the numbers from 1 to 100
// For multiples of three print "Fizz" instead of the number
// For multiples of five print "Buzz"
// For numbers which are multiples of both three and five print "FizzBuzz".


// SOLUTION #1 (Using FOR loop)
for (let i=0;i<=100;i++){
    if(i%3==0){
        console.log('Number '+i+' Fizz')
    }
    else if(i%5==0){
        console.log('Number '+i+' Buzz')
    }
    else if(i%3==0 && i%5==0){
        console.log('Number '+i+' Fizz Buzz')
    }
    else {
        console.log("")
    }
}

// SOLUTION #2 (Using WHILE loop)
let i=0;
while(i<100){
    i++;
    if(i%3==0){
        console.log('Number '+i+' Fizz')
    }
    else if(i%5==0){
        console.log('Number '+i+' Buzz')
    }
    else if(i%3==0 && i%5==0){
        console.log('Number '+i+' Fizz Buzz')
    }
    else {
        console.log("")
    }
}
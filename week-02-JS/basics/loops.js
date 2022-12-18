//for loop is much better choice when it comes to large apps
///Loops information

// let count = 1
// while(count<=100) {
//     console.log(count);
//     count = count + 1;
// }

//above code as for loop
for(let i=1; i<100; i++) { //i+=2 means increase by 2
    console.log(i)
}

//practice question for js
//write a for-loop that through 1 to 20
// if the number divisible by 3, print CANNY
//if the number divisible y 5, print  CODERS
// if the number divisible by 3 and 5, print CANNY CODERS
// if not divisible by 3 or 5 print number

for(i=1; i<=20; i++)
{
    if (i%3 == 0) {
        console.log('CANNY');
    }
    else if (i%5 == 0) {
        console.log('CODERS');
    }
    else if (i%3 == 0 && i%5 == 0) {
        console.log('CANNY CODERS');
    }
    else {
        console.log('Number')
    }
}

//print every character from the given string
// string is OWAIS CHAUDHRY
//so
const str = "OWAIS CHAUDHRY"
for (let i=0; i<=str.length; i++) {
    console.log(str[1])
}
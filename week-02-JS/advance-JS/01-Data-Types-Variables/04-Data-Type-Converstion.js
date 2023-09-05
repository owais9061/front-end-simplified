//Since amount should be a number so it should not include '' but we will convert it to integer using Parsing Method
let amount='100'
let amount1=parseInt(amount)
console.log(amount1, typeof amount1)

//OR
let amount2='1000'
amount2=parseInt(amount2)
amount2+=amount2; //act same
amount2=Number(amount2) //Same as parseInt
console.log(amount2, typeof amount2)

/**
 * You can also use:
 * parseFloat
 * Boolean (Output True on 1, and False on0)
 */

//NOW NUMBER TO STRING
let amount3=100
amount3=amount3.toString();
console.log(amount3, typeof amount3)

//Trying Squaring Methods
console.log(Math.sqrt(36))
// But on negative vale it will return NAN = (Not A Number), but it will still be considered a number value by JS
console.log(Math.sqrt(-36))

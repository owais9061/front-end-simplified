//IF ELSE IN JAVASCRIPT

let subscribed = false
let loggedIn = false
if (subscribed == true){
    console.log('Owais Chaudhry')
}
else if (loggedIn == true) {
    console.log('Tell user to upgrade susbscription')
}
else {
    console.log('Tell User to Login')
}


//EXAMPLE
let cash = 100
let price = 40
let difference = cash - price
if (cash>price)
{
    console.log('You have +  amount left')
}
else if ( cash==price) {
    console.log('You have no money left')
}
else {
    console.log('you are {cash - price} amount short')
}

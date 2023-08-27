// let subscribed = true
// if (subscribed === false) {
//     console.log('Not Subscribed')
// }
// else {
//     console.log('Not Subscriber')
// }


//! also...
// let subscribed = false
// let loggedIn = true
// if (subscribed != true){console.log('Subscriber')}
// else if (loggedIn != true){console.log('Not a Subscriber')}
// else{console.log('Error')}

// // PROBLEM #03
// //STORE
// let cash = 100;
// let price = 60;
// let difference = cash - price;

// if(cash>price)
// {
//     console.log('You paid some extra amount ' + difference + ' rupees left')
// }
// else if( cash == price ) {
//     console.log("You left no balanace")
// }
// else {
//     console.log('You are out of money')
// }

let cash = 100;
let price = 600;
let difference = cash-price;
//NOW
if(cash>price){
    console.log('You purchased X, for $'+price+' & $'+difference+' left');
}
else if (cash==price){
    console.log('You have no balance left, after purchasing X for $'+price);
}
else {
    console.log("You have no money to pruchase X");
}



let cash1 = 50;
let price1 = 40;
let storeIsOpen = true;
//if( cash1>=price1 &&  storeIsOpen == true ) {
if( cash1>=price1 &&  storeIsOpen !== true ) {
    console.log('Print the Reciept')
}
else {
    console.log('store is closed');
}

// let subscribed = true;
// let loggedIn = false;
// let str = subscribed && loggedIn ? 'Owais':'Raza'
// console.log(str)

// let cash = 50
// let price =40
// let storeIsOpen = true
// let str = cash>price && storeIsOpen !== false ? 'give reciept':'donot print'
// console.log(str)

//Ternary
let hot = true
hot ? console.log('Weatther is Hot'):console.log('Weather is not Hot')
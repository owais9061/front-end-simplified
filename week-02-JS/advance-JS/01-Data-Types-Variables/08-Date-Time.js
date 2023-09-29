let date;
date = new Date(); //Display Latest Date

console.log(date)
console.log(typeof date)

// Alphabetical Representation
date = date.toString();
console.log(date);

//ALSO
date =  new Date('2023-07-21T12:43:35')
console.log(date)

//Set custome date
console.log(date = new Date(2023,0,27)) //will give January (1) because month is 0 index based
//so
console.log(date = new Date(2023,8,25)) //September (9)
//OR Hours, Minutes and Seconds
console.log(date = new Date(2023,8,25,17,30,35)) //September (9)

date = Date.now() // Miliseconds passed since January 1970's
console.log(date)

//SOmething cool

date = Math.floor(Date.now()/1000) // mili to centi
date = Math.floor(Date.now()/10000) // mili to Deci
console.log(date)
console.log("")


// NOW SOME IMPORTANT METHODS
/**
 * TO String
 * Get Time
 * Get Value of (Miliseconds)
 * Get Year
 * Get Month
 */

let x;
let d= new Date();

x=d.toString();
x=d.getTime();
x=d.valueOf();
x=d.getFullYear();
x=d.getMonth(); // 0 Index Based
x=d.getDate(); // 0 Index Based
x=d.getDay(); // 0 Index Based
x=d.getHours();
x=d.getMinutes();
x=d.getSeconds();
x=d.getMilliseconds();
//Try Template Literals
x=`It was ${d.getFullYear()} & ${d.getMonth()}th Month when I was Hospitalized.`

//Date Formats
x= Intl.DateTimeFormat('en-US').format(d)
x= Intl.DateTimeFormat('en-GB').format(d)
x= Intl.DateTimeFormat('ar-EG').format(d) //Favourite ❤
x= Intl.DateTimeFormat('ur-PK').format(d)

//Try
x= d.toLocaleString('default',{month: 'long'}); 

//FINALLY
x= d.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute:"numeric",
    second:"numeric",
    timeZone: "America/New_York",
}) // a beautiful looking custom Date object for all the stuff that has been done above.

x=d.toLocaleString('default',{
    weekday: "long",
    year:"numeric",
    month:"short",
    day: "numeric",
    hour:"numeric",
    minute: "numeric",
    second:"numeric",
    timeZone:"America/New_York", //Go check the DOCS on Mozilla for further timezones of the date objects
})

console.log(x)
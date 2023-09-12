let x;

//CONSTRUCTOR
const todo = new Object();
todo.id=1;
todo.name='Buy Grocery';
todo.status=false;
x=todo;

// NESTING CHECKING

const person={
    address:{
        coords:{
            long:13422,
            latt:-25543,
        }
    }
}
x=person['address']['coords']['latt']
//OR
x=person.address.coords.latt;

console.log(x)

//JOINING VALUE OF 2 OBJECTS

const obj1={a:1,b:2};
const obj2={c:3,d:4};

//SEPERATOR METHODS
const obj3={...obj1,...obj2};
console.log(obj3);

//ASSIGNING METHOD

const obj4= Object.assign({},obj1,obj2) // ---> {} here identity obj4 as Object and then add values of obj1
console.log(obj4);

//ALSO NOW IF I HAVE TO CREATE MULTIPLE OBJECTS WITHIN A OBJECT THEN

const user =[
    {
        name:'Owais ',
        age:19,
        Address: 'Karachi',
    },
    {
        name:'Gujjar ',
        age:20,
        Address: 'Karachi',
    },
    {
        name:'Owais Gujjar',
        age:18,
        Address: 'Karachi',
    }
]

console.log(user[0].name) // --> 0 means First User and then .name means the name of it --> Owais
console.log(user[0]['name'] + user[1]['name'])

// TO ACCESS THE PROPERTIES OR KEYS OF A OBJECT
x= Object.keys(user);
// [ '0', '1', '2' ]

x= Object.keys(todo);
// [ 'id', 'name', 'status' ]
console.log(x)

// VALUES ACCESSING
x=Object.values(todo)
// [ 1, 'Buy Grocery', false ]
console.log(x)

// to Check Whether an object has a property mentioned or not
x=todo.hasOwnProperty('age')
// False
x=todo.hasOwnProperty('status')
// True
console.log(x)


// Destructuring the Obejcts ---> IMPORTANT
const todo1 ={
    id:1,
    title:"Ride Bicycle",
}

const { id, title} = todo1 // Extract ID and TITLE from Todo1
// 1 Ride Bicycle
console.log(id, title)


// Destructuring Arrays
const numb =[1,2,3,4,5,6]
const [third,fourth,fifth]= numb;
// 1 2 3
console.log(third,fourth,fifth)

//OR

const numb1 =[1,2,3,4,5,6]
const [first,second,...rest]= numb1;
// 1 2 [ 3, 4, 5, 6 ]
console.log(first,second,rest)


// JUST INTRO TO JSON ( Pronounce: Jay Sun)
const post={
    sNo:1,
    title:"Advantages of JSON",
    pera:"I don't know any of them, But SOON !!!"
}
const post1={
    sNo:1,
    title:"Advantages of JSON",
    pera:"I don't know any of them, But SOON !!!"
}

const str = JSON.stringify(post)
// GIVE THIS KIND OF STRING OUTPUT, NO TOGGLE LIST
// DATA TO SERVER IS SEND IN THIS FORMAT 
// {"sNo":1,"title":"Advantages of JSON","pera":"I don't know any of them, But SOON !!!"}
console.log(str)

// ANOTHER METHOD " PARSE " use to convert that Stirngfyied Data to Objects
const str2 = JSON.parse(str)
/**
 * {
  sNo: 1,
  title: 'Advantages of JSON',
  pera: "I don't know any of them, But SOON !!!"
}
 */

console.log(str2)

// CHALLENGE
// Create and ARRAY of 3 ojects, and then create three properties 
// of objects (one must be String) and then one must be a nested object
// NOW update one of the properties using dot (.) notation and
// Destructre one of the properties
// convert it into a JSON String

// EXAMPLE TAKEN --> Library

//TASK 1
const library = [
    {
        id:112,
        title1:"Atomic Habbits",
        author:"James Clear",
        status:{
            own:true,
            reading:false,
            read:false,
        }
    },
    {
        id:113,
        title1:"10X Rule",
        author:"Grant Cardone",
        status:{
            own:true,
            reading:false,
            read:false,
        }
    },
    {
        id:113,
        title1:"Rich Dad Poor Dad",
        author:"Robert Kiyosaki",
        status:{
            own:true,
            reading:false,
            read:false,
        }
    },
]

// TASK 2 --> I've read the Rich dad poor dad so update the reading status
library[0].status.read=true;
library[1].status.reading=true;
library[2].status.read=true;
console.log(library)

// TASK 3
const { title1 } = library[0]; //TITLE of FIRST BOOK ---> Atomic Habbits
console.log(title1)

// TASK 4
const str3 = JSON.stringify(library);
console.log(str3)

// ANSWER:
// [{"id":112,"title1":"Atomic Habbits","author":"James Clear","status":{"own":true,"reading":false,"read":false}},
// {"id":113,"title1":"10X Rule","author":"Grant Cardone","status":{"own":true,"reading":false,"read":false}},
// {"id":113,"title1":"Rich Dad Poor Dad","author":"Robert Kiyosaki","status":{"own":true,"reading":false,"read":true}}]
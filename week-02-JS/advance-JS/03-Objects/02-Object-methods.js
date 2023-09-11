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
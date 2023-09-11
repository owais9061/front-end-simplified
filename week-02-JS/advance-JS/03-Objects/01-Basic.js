let x;
const person ={
    name:'Owais Gujjar',
    age:19,
    address:'Karachi',
}
console.log(person)
//OR Access Specific Value
console.log(person.name);
// ALSO
x= person['age']
console.log(x)

//Objects Nesting

const person1 ={
    name:'Owais Gujjar',
    age:19,
    address:{
        City: 'Karachi',
        Street: 5,
        Building: 'Lane - 6',
    },
    hobbies: ['Coding','Boxing','Learning New Things'] //ARRAY
}

console.log(person1.hobbies[0]) //Coding
//OR
x= `hey I'm ${person1.name}, I'm currently living in ${person1.address.City} - Street: ${person1.address.Street}. I like to do ${person1.hobbies[0]} mostly, but sometimes ${person1.hobbies[2]} is something that excites me.`
//OR USING ANOTHER METHOD
x= `hey I'm ${person1['name']}, I'm currently living in ${person1['address']['City']} - Street: ${person1.address.Street}. I like to do ${person1.hobbies[0]} mostly, but sometimes ${person1.hobbies[2]} is something that excites me.`
console.log(x)

//ADDING

person1.isStudent=true;
console.log(person1)

//REMOVING ANY PROPERTY
// let's check
console.log(person1.address.Building);
delete person1.address.Building;
console.log(person1.address.Building);

//ANOTHER METHOD FOR CREATING PROPERTIES OF OBJECTS
let person3={
    'First Name':'OWais ',
    'Last Name':'Gujjar',
}

console.log(person3["First Name"] + person3["Last Name"])
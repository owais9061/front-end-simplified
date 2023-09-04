console.log("Owais")
console.log('Owais')
console.warn("Testing");

//Just for simple objects within JS
console.table({name:'Owais',age:19});
console.table({name:'Owais Gujjar',age:20});

console.group('Collaspe Menu');
console.log('Item 1')
console.warn("Test")


//Magical Printing Styled String in Console
const style ='padding:10px;background-color:whitesmoke;color:purple'

// %c is the indicator here and then parameter styles is passed along.
console.log('%cOwais',style)
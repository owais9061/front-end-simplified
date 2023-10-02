// For In Loop

// The `for in` loop is used to loop through the properties of an object.

// For In Syntax

for (let key in object) {
  // do something
}

// Let's look at the object below.
// It is a set of key/value pairs for colors.

const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'green',
  color4: 'yellow',
  color5: 'orange',
  color6: 'purple'
};


for (let key in colorObj) {
  console.log(key);
}

// OUTPUT: color1,color2,color3,color4,color5,color6

// If we want to get the values, we can simply use the key like so:

for (let key in colorObj) {
  console.log(colorObj[key]);
}
// red blue green yellow orange purple


// Using For In With Arrays

// We could use a regular for or while loop as well as an array method called `forEach()`, 
// which I will go over soon, but we can also use a `for in` loop.


const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

for (let key in colors) {
  
    // console.log(colors); ---> Output 0,1,2,3,4,5 index of elements of Array
    // For values
    console.log(colors[key]);
}

// red blue green yellow orange purple
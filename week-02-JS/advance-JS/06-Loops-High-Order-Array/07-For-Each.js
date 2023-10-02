// ForEach

// High Order Array Methods

// If we create an array and then look at the `prototype chain`, we can see all of the available methods
const socials = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'];
console.log(socials.__proto__);

// forEach Method

// The forEach method is simply a method to loop through an array. 
// It does not return anything, we can just loop through and do whatever we want on each iteration.

socials.forEach(function(item) {
	console.log(item);
});

// We can use arrow functions to shorten this.....
socials.forEach((item) => console.log(item));


// In addition to the item passed into the callback, 
// we can also pass in and get access to the current index (stars at 0) and the entire array itself.


socials.forEach((item, index) => {
  console.log(item, index);
});

// OR
socials.forEach((item, index, arr) => {
  console.log(item, index, arr);
});


// Let's say we want to also console log something if we are on the last iteration of the loop, 
// or the last element in the array

socials.forEach((item, index, arr) => {
  if (index === arr.length - 1) {
    console.log('The End');
  }
  console.log(item);
});

socials.forEach((item,index)=>{
    if(index=== arr.length -1){
        console.log('End of the Array')
    }
    console.log(item)
});

// You can also use a separate named function as your callback rather than pass in an anonymous one

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item));
socialObjs.forEach((item) => console.log(item.url));

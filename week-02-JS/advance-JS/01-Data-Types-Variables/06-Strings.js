let name='Owais';
let age=19;

// USING TEMPLATE LITERALS -->
let x;
x= `Hi, My Name is ${name} and I'm ${age}  yrs. old`
//OR
// x="Hi, My Name is" + name+ "and I'm "+age+"yrs. old";
console.log(x)

//ALSO
let user={
    name: 'Owais Gujjar',
    age:19,
    city:'Karachi',
    number: 'xxxx-xxxxxx-x',
}

const info= `Hellow , I'm testing this Template Literal here, My name is ${user.name} & I'm ${user.age} years old Developer from ${user.city}. here's my contact number: ${user.number}`;
console.log(info)
// String Properties & Methods
/**
 *  .length
 * .uppercase
 * .lowercase
 * .split
 * charAt
 * Substring
 * Trim
 * Include
 * Replace
 */
//Creating a new string here
let newStr='Owais Gujjar'
//Length
console.log(newStr.length);
//Uppercase
console.log(newStr.toUpperCase());
//LOWERCASE
console.log(newStr.toLocaleLowerCase());
//Split
console.log(newStr.split(5));
//Access by index
console.log(newStr[0])
console.log(newStr[6])
//ALSO
console.log(newStr.charAt(3))

//ALSO
console.log(newStr.indexOf('G'));

//Split --> Subsitute a String from a Major String
console.log(newStr.substring(0,5)) //will give Owais O=0, W=1, A=2, I=3 & S=4

//ALSO
console.log(newStr.substring(5))// will print GUJJAR just

// NOW using TRIM for removing special charatcers or Space
let newStr1='         Owais'
console.log(newStr1.trim());

//Replacing
console.log(newStr.replace('Gujjar','Chaudhry'))

//Include
console.log(newStr.includes('Owais')) //Will varify that whether newStr includes 'OWAIS' or Not...

//Split
console.log(newStr.split())// this will seperate each character of String [O,W,A,I,S]
console.log(newStr.split(""))// this will seperate each character of String , within a QUotation ["O","W","A","I","S"]

//WHAT IF YOU DONTO REMEBER ALL THEN
let o = newStr.__proto__;
//it will print all the methods from which you can access data of Strings
console.log(o)

//CHALLENGE TO TRY
//Capitalize the words of a String, by initializing it first
//Capitalize the Fist Letter of a String. and store it in different variable

//Solution:
//1
let testStr = 'FullStack JS Developer'
console.log(testStr.toUpperCase());

//2
let testStr1 = 'fullStack'
let tempStr = testStr1.charAt(0);
console.log(tempStr.toUpperCase());

//Other Ways

tempStr = testStr1.charAt(o).toLocaleUpperCase() + testStr1.substring(1) // both will return FullStack with Capital F
console.log(tempStr)
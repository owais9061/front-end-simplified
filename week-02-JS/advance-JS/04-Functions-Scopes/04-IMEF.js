// IMMEDIATELY INVOKED FUNCTION (SPECIAL TYPE)
// When you have 2 variables (gobal) same in 2 scripts files and they are connected to same HTML file that this make occur
// then we use this
// such as: ()() --> First () is for function and other is for calling like:
(function(){
    const user='Owais'
    console.log(user)
    // ALSO
    const hello =()=> console.log("Hello");
    hello();
})();

// ALSO
(function(name){
    console.log('Hello '+name)
})('Owais');

// NO FUNCTION NAME IS REQUIRED
(function(anyName){
    console.log("my name is: "+anyName);
})('Gujjar')
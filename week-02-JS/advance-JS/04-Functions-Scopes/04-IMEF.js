// IMMEDIATELY INVOKED FUNCTION (SPECIAL TYPE)
// When you have 2 variables (gobal) same in 2 scripts files and they are conencted to same HTML file that this make occur
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
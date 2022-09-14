let x = 10;

// Uncaught SyntaxError: Identifier 'x' has already been declared
// let x = 20;

var y = 5;
function scope(){

}

// scope for let
{
    let z = 2;
    console.log(z);
}
// Uncaught ReferenceError: z is not defined
// console.log(z);

// var
{
    var a = 10;
    console.log(a);
}
// a can be used here
console.log(a);

// Redeclaring var

var b = 100;
console.log(b)

{
    var b = 1;
    console.log(b);
}
console.log(b);

var c = 1; //allowed
// Uncaught SyntaxError: Identifier 'd' has already been declared
// let c = 2;  //not allowed
{
    let c = 2; //allowed

    // Uncaught SyntaxError: Identifier 'c' has already been declared
    //let c = 3; //not allowed
}
{
    let d = 2; //allowed

    // Uncaught SyntaxError: Identifier 'd' has already been declared
    // var d = 5; //not allowed
}

let f = 3; //allowed
{
    let f = 3; //allowed
}
{
    let f = 10; //allowed
}

// var Hoisting
// var carName (JS hoist variable declaration then assign value)
// carName = undefined
carName = "Volvo";
var carName;
console.log(carName);

// Let Hoisting  (JS hoist variable declaration then assign value)
// name = undefined (in case of let variable not initialized with undefined (temporal dead zone))

// Let.js:71 Uncaught ReferenceError: Cannot access 'name' before initialization
// name = "Volvo";
// let name;
// console.log(name);
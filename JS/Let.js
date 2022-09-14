let x = 10;

// Uncaught SyntaxError: Identifier 'x' has already been declared
// let x = 20;

var y = 5;
function scope(){

}

// scope
{
    let z = 2;
    console.log(z);
}
// Uncaught ReferenceError: z is not defined
console.log(z);
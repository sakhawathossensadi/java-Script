function myFunction(p1, p2) {
    let sum;
    sum = p1 + p2;
    console.log("Sum : ",sum);
}

myFunction(10,20);

function multiply(a1, a2) {
    return a1 * a2;
}

let mul = multiply(10,20);
console.log("Result : ",mul);

//from function if we return nothing JS return by default undefined
function subtraction(val1, val2) {
    console.log("subtraction");
}

let sub = subtraction(10,5);
console.log("Sub : ",sub);

function localVariable() {
    let carname = "Volvo";
    console.log("Car name : ",carName);
}

localVariable();

// carname is not available outside of function
// console.log(carname);
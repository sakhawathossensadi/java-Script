let num1 = 12;
console.log(num1);
//Floating point arithmetic is not always 100% accurate:
console.log(.1 +.2);

//JavaScript will try to convert strings to numbers in all numeric operations:
let x1 = "100";
let y1 = "10";
let z1 = x1 / y1;
console.log(z1);

let cc = "sadi";
let cc1 = 10;
console.log(isNaN(cc));
console.log(isNaN(cc1));

//If we use NaN in a mathematical operation, the result will also be NaN
console.log(5 + NaN);

//NaN is a number: typeof NaN returns number:
console.log(typeof NaN);
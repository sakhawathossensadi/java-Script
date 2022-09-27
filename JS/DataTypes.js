let xz = 16 + " World";
console.log(xz);

// JavaScript evaluates expressions from left to right.
let zz = 16 + 4 + "Hello";
console.log(zz);

// since the first operand is a string, all operands are treated as strings.
let az = "Volvo" + 16 + 4;
console.log(az);

// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
let sa;
sa = 5;
sa = "Hello";

// Array
const carList = ["Audi", "Volvo", "BMW"];
console.log(carList[0]);

//Object
const person = {
    name : "Sakhawat Hossen",
    age : 27
}

console.log("Details", person);

console.log(typeof person);
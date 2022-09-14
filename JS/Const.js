// 'const' does not define a constant value. It defines a constant reference to a value.

const PI = 3.1416;

// Uncaught TypeError: Assignment to constant variable.
// PI = 2; 
// PI = PI + 2;


// JavaScript const variables must be assigned a value when they are declared:
// Uncaught SyntaxError: Missing initializer in const declaration
// const b;


// array
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";

// we can add an element:
cars.push("Audi");
console.log(cars)

// object
const car = {type:"Fiat", model:"500", color:"white"};

car.color = "red";

// we can add a property:
car.owner = "Johnson";
console.log(car);

// Block scope

const z = 10;
console.log(z);
{
    const z = 100;
    console.log(z);
}
console.log(z);


// const Hoisting  (JS hoist variable declaration then assign value)
// name = undefined (in case of const variable not initialized with undefined (temporal dead zone))

// Uncaught SyntaxError: Missing initializer in const declaration
// name = "Volvo";
// const name;
// console.log(name);

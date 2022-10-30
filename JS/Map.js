// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

fruits.set("apples", 1000);

console.log(fruits.get("apples"));

console.log("Set size : ", fruits.size);

fruits.delete("apples");
console.log(fruits.has("apples"));

let text1 = "";
// The entries() method returns an iterator object with the [key, values] in a Map:
for (const x of fruits.entries()) {
  text1 += x;
  console.log(x);
}

console.log(text1);

let text2 = "";
fruits.forEach (function(value, key) {
  text2 += key + ' = ' + value;
})

console.log(text2);

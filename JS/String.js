let string = "Sakhawat Hossen";
console.log("String Length : ",string.length);

//Escape Character

let str1 = "We are the so-called \"Vikings\" from the north.";
console.log(str1);

let str2= 'It\'s alright.';
console.log(str2);

let str3 = "Address : 58\\B\\2 West Rajabazar";
console.log(str3);

//String Object

let st = "Sakhawat Hossen";
let sp = new String("Sadi");
console.log(typeof st);
console.log(typeof sp);

let s1 = "Sadi";
let s2 = new String("Sadi");

console.log(s1 == s2);
// ===  check type and value
console.log(s1 === s2);

let a1 = new String("sadi");
let a2 = new String("sadi");

// Comparing two JavaScript objects always returns false.
console.log(a1 == a2);
console.log(a1 === a2);

// toString()
let n = 122;
console.log(n.toString());
console.log(typeof n.toString());
console.log((10+20).toString());

//Number()
console.log(Number(true));
console.log(Number(" 100"));
console.log(Number(" 10 "));
console.log(Number(" 10.34 "));
console.log(Number(" 10,34 "));
console.log(Number(" 10 34 "));

//parseInt()
//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

//Number Properties
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Number Properties Cannot be Used on Variables, return undefined
let mmm = 6;
console.log(mmm.MAX_VALUE);
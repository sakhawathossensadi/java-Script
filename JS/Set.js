const setValue = new Set();
setValue.add("a");
setValue.add("b");
setValue.add("c");
setValue.add("d");
setValue.add("d");

console.log(setValue);

let txt = "";
setValue.forEach(function(value) {
    txt = txt + value;
});

console.log(txt);

console.log(setValue.values());

let txt1 = "";

for (const letter of setValue.values()) {
    txt1 = txt1 + letter;
}

console.log(txt1);
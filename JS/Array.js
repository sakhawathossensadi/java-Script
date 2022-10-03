const colors = ["Red", "Blue", "Black"];
console.log("Colors array : ",colors);
console.log(typeof colors);
console.log("First color : ",colors[0]);
console.log("Last element : ",colors[colors.length-1]);
console.log("Length : ",colors.length);

//print all colors
for(i=0; i<colors.length; i++)
{
    console.log("element "+(i+1) +" is : "+colors[i]);
}

let text = "<ul>"
    for(i=0;i<colors.length; i++)
    {
        text = text+"<li>"+ colors[i]+"</li>";
    }
text =text+"</ul>"

document.getElementById("colorName").innerHTML = text;

//add color
colors.push("White")
console.log("Update colors : ", colors);

console.log(Array.isArray(colors));
console.log(colors instanceof Array);


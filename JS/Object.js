const carDetails = {
    name : "Audi",
    color : "Red",
    weight : "850kg",
    start : function () {
        console.log("Car has started");
    },
    drive : function () {
        console.log("Car is driving");
    },
    details : function () {
        console.log(this.name+ " A8 model color is "+this.color);
    }

}

console.log("Weight : ",carDetails.weight);
console.log("color : ",carDetails['color']);

//Object method call
carDetails.start();
carDetails.details();


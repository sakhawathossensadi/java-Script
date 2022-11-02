function display(sum) {
    console.log("Sum : ",sum);
}

function calculator(num1, num2, callback) {
    let sum = 0;
    sum = num1 + num2;

    if (callback) {
        callback(sum)
    }

    return sum;
}

let summation = calculator(10, 11, function show(total){
    console.log(total);
});
// display(summation);
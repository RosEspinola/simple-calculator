const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===== SIMPLE CALCULATOR =====");

input.question("Enter first number: ", function(firstNumber) {

    input.question("Enter operator (+, -, *, /): ", function(operator) {

        input.question("Enter second number: ", function(secondNumber) {

            firstNumber = Number(firstNumber);
            secondNumber = Number(secondNumber);

            let result;

            if (operator === "+") {
                result = firstNumber + secondNumber;
            } else if (operator === "-") {
                result = firstNumber - secondNumber;
            } else if (operator === "*") {
                result = firstNumber * secondNumber;
            } else if (operator === "/") {

                if (secondNumber === 0) {
                    console.log("Cannot divide by zero.");
                    input.close();
                    return;
                }

                result = firstNumber / secondNumber;

            } else {
                console.log("Invalid operator.");
                input.close();
                return;
            }

            console.log("\n===== RESULT =====");
            console.log(firstNumber + " " + operator + " " + secondNumber);
            console.log("Result:", result);

            input.close();
        });
    });
});
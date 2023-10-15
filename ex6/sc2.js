document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let currentOperator = "";
    let result = null;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonValue = this.textContent;

            if (buttonValue === "=") {
                if (currentOperator && currentInput) {
                    switch (currentOperator) {
                        case "+":
                            result += parseFloat(currentInput);
                            break;
                        case "-":
                            result -= parseFloat(currentInput);
                            break;
                        case "*":
                            result *= parseFloat(currentInput);
                            break;
                        case "/":
                            if (currentInput !== "0") {
                                result /= parseFloat(currentInput);
                            } else {
                                display.value = "Error";
                                return;
                            }
                            break;
                    }
                    display.value = result;
                    currentInput = "";
                    currentOperator = "";
                }
            } else if (buttonValue === "C") {
                display.value = "";
                currentInput = "";
                currentOperator = "";
                result = null;
            } else if (buttonValue === "&larr;") {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += buttonValue;
                if (/\d/.test(buttonValue)) {
                    currentInput += buttonValue;
                } else {
                    currentOperator = buttonValue;
                    if (result === null) {
                        result = parseFloat(currentInput);
                    } else {
                        display.value = "Error";
                        return;
                    }
                    currentInput = "";
                }
            }
        });
    });
});

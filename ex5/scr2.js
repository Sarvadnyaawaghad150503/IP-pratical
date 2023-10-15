
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
const multiplyArrow = (a, b) => a * b;
const divideArrow = (a, b) => {
    if (b === 0) {
        return "Division by zero is not allowed";
    }
    return a / b;
};

console.log("Regular Functions:");
console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(5, 3));
console.log("\nArrow Functions:");
console.log("Multiplication:", multiplyArrow(5, 3));
console.log("Division:", divideArrow(5, 3));

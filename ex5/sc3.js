// Symbol data type
const mySymbol = Symbol("My unique symbol");
console.log(typeof mySymbol); // "symbol"

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Rest operator
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Template literals
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, John!"

// Generators and Iterators
function* countUpTo(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}

const generator = countUpTo(5);
for (const value of generator) {
    console.log(value); // 1, 2, 3, 4, 5
}

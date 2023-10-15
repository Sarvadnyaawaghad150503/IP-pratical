function calculateFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

function generateFibonacciSeries() {
    let fibonacciSeries = [0, 1];
    for (let i = 2; i < 20; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
    return fibonacciSeries;
}

function main() {
    console.log("Menu:");
    console.log("1. Find the factorial of a number");
    console.log("2. Display the first 20 terms of the Fibonacci series");
    
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter your choice (1 or 2): ", (choice) => {
        switch (choice) {
            case '1':
                rl.question("Enter a number: ", (number) => {
                    const factorial = calculateFactorial(parseInt(number));
                    console.log(`Factorial of ${number} is ${factorial}`);
                    rl.close();
                });
                break;
            case '2':
                const fibonacciSeries = generateFibonacciSeries();
                console.log("The first 20 terms of the Fibonacci series are:");
                console.log(fibonacciSeries.join(", "));
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please enter 1 or 2.");
                rl.close();
                break;
        }
    });
}

main();

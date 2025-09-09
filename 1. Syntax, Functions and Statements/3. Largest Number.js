// Write a function that takes three number arguments as input and finds the largest of them. 
// Print the following text on the console: `The largest number is {number}.`.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.

function solve(num, num1, num2) {
    if (num > num1 && num > num2) {
        console.log(`The largest number is ${num}.`);
    }
    else if (num1 > num && num1 > num2) {
        console.log(`The largest number is ${num1}.`);
    }
    else if (num2 > num1 && num2 > num) {
        console.log(`The largest number is ${num2}.`);
    }
}

solve(5, -3, 16);
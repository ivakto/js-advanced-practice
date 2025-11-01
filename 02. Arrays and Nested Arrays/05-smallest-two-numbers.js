//Write a function that prints the two smallest elements from an array of numbers.
//The input comes as an array of number elements.
//The output is printed on the console on a single line, separated by space.

function solve(array) {
    let newArr = array.sort((a, b) => a - b);
    let firstEl = newArr[0];
    let secondEl = newArr[1];
    console.log(`${firstEl} ${secondEl}`);
}

solve([30, 15, 50, 5]);
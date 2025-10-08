// Write a program that performs different operations on an array of elements. Implement the following operations:
// · Sum(ai) - calculates the sum of all elements from the input array
// · Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// · Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.

function solve(array) {

    let sum = 0;
    for (let number of array) {
        sum+= number;
    }
    console.log(sum);

    let reversedSum = 0;
    for (let number of array) {
        reversedSum += 1/number;
    }
    console.log(reversedSum);

    let concat = '';
    for (let number of array) {
        concat += number;
    }
    console.log(concat);
}

solve([1, 2, 3]);
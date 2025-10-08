// Write a program that keeps a number inside its context and returns a new function that adds a given number to the previous one.

function solution(number) {

    return function(numToAdd) {
        return number + numToAdd;
    }
}

let add5 = solution(5);

console.log(add5(2));

console.log(add5(3)); 
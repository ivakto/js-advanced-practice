// Write a function that takes a single argument as an input. Check the type of input argument. If it is a number, assume it is the radius of a circle and calculate the circle area. Print the area rounded to two decimal places.
//If the argument type is NOT a number, print the following text on the console: `We can not calculate the circle area, because we receive a {type of argument}.`
//The input comes as a single argument passed to your function.
//The output should be printed on the console.

function solve(argument) {
    let inputType = typeof(argument);
    if (inputType === 'number') {
        let circleArea = Math.PI*(argument**2);
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }

}

solve(5);
solve('name');
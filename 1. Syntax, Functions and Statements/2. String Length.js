// Write a JS function that takes three string arguments as an input. 
// Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console in two lines.

function solve(str, str1, str2) {
    let sum = str1.length + str2.length + str.length;
    let avrgLength = Math.floor(sum/3);
    console.log(sum);
    console.log(avrgLength);
}

solve('chocolate', 'ice cream', 'cake');
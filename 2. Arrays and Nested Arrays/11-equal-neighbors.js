//Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
//The input comes as an array of arrays, containing string elements (2D matrix of strings).
//The output is the return value of your function. Save the number of equal pairs you find and return it.

function solve(matrix) {

    let count = 0;

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
            if (colIndex+1 < matrix[rowIndex].length && matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex+1]) {
                count++;
            }
            if (rowIndex+1 < matrix.length &&matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
                count++;
            }

        }
    }
    console.log(count);
}

solve([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']]);
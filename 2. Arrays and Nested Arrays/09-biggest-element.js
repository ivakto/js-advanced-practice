//Write a function that finds the biggest element inside a matrix.
//The input comes as an array of arrays, containing number elements (2D matrix of numbers).
//The output is the return value of your function. Find the biggest element and return it.

function solve(matrix) {
    
    let biggestNum = Number.NEGATIVE_INFINITY;

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        console.log(matrix[rowIndex]); // Тука още не сме почнали да обхождаме елементите, това става чак във вторич цикъл
        for (let columIndex = 0; columIndex < matrix[rowIndex].length; columIndex++) { 
            if (matrix[rowIndex][columIndex] > biggestNum) {
                biggestNum = matrix[rowIndex][columIndex];
            }
        }
    }
    return biggestNum;

}

solve([[20, 50, 10], [8, 33, 145]]);
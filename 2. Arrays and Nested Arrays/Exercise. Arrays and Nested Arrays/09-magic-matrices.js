//Write a function that checks if a given matrix of numbers is magical. 
//A matrix is magical if the sums of the cells of every row and every column are equal.
//The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
//The output is a Boolean result indicating whether the matrix is magical or not.

function solve(matrix) {

    
    for (let rowIndex = 0; rowIndex < matrix.length -1; rowIndex++) {
        let sumFirstRow = 0;
        let sumSecondRow = 0;
        let sumFirstCol = 0;
        let sumSecondCol = 0;

        matrix[rowIndex].forEach(el => sumFirstRow += el);
        matrix[rowIndex+1].forEach(el => sumSecondRow += el);
        matrix.forEach(row => sumFirstCol += row[rowIndex]);
        matrix.forEach(row => sumSecondCol += row[rowIndex + 1]);

        if (sumFirstRow !== sumSecondRow || sumFirstCol !== sumSecondCol) {
            return false;
        }
    }
    return true;
}
    

//A square matrix of numbers comes as an array of arrays, each array holding numbers. 
//Write a function that finds the sum at the main and the secondary diagonals.
//The input comes as an array of arrays, containing number elements (2D matrix of numbers).
//The output is printed on the console, on a single line separated by space. 
//First print the sum at the main diagonal, then the sum at the secondary diagonal. 

function solve(matrix) {
   let main = 0;
   let secondary = 0;
   
   for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        let colIndex = rowIndex;
        main+=matrix[rowIndex][colIndex];
   }

   for (let rowIndex = 0; rowIndex<matrix.length; rowIndex++) {
        let colIndex = matrix.length - rowIndex - 1;
        secondary += matrix[rowIndex][colIndex];
   }

   console.log(main, secondary);
}

solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);
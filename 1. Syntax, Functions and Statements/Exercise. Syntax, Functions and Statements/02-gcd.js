// Write a function that takes two positive numbers as input and computes the greatest common divisor.
// The input comes as two positive integer numbers.
// The output should be printed on the console.

function solve(a, b) {
    
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log(a);
}

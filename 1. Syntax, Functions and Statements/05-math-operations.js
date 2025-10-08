//Write a JS function that takes two numbers and a string as an input.
//The string may be one of the following: '+', '-', '*', '/', '%', '**'.
//Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
//The input comes as two numbers and a string argument passed to your function.
//The output should be printed on the console.

function solve(num1, num2, str) {

    let result = 0;
    switch(str) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
    }
    console.log(result);
}

solve(3, 5.5, '*');
solve(5, 6, '+' );
//You will receive an array of names. 
//Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.

function solve(array) {

    array.sort((a, b) => a.localeCompare(b))
        .forEach((value, index) => console.log(`${index+1}.${value}`));
    
}

solve(["John", "Bob", "Christina", "Ema"]);
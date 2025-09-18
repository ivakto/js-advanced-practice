//Write a function that orders a given array of strings, by a length in ascending order as primary criteria,
//and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
//The input comes as an array of strings.
//The output is the elements of the ordered array of strings, printed each on a new line. 

function solve(array) {
    array.sort((a, b)=> {
        
        if(a.length !== b.length) {
            return a.length - b.length;
        }
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    array.forEach(str => console.log(str));  
}

solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);

//  An array can be sorted by passing a comparing function to the Array.sort() function.
//· Creating a comparing function by 2 criteria can be achieved by first comparing by the main criteria, 
// if the 2 items are different (the result of the compare is not 0) - return the result as the result of the comparing function. 
// If the two items are the same by the main criteria (the result of the comparison is 0), we need to compare by the second criteria 
// and the result of that comparison is the result of the comparing function. 
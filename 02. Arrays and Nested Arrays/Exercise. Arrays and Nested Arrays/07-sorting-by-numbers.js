//Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, 
//the third is the second smallest one, the fourth is the second biggest one, and so on.
//Return the resulting array

function solve(arr) {

    arr.sort((a, b) => a - b);
    
    let result = [];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (left === right) {
            result.push(arr[left]); // if only one element left
        } else {
            result.push(arr[left]);  // smallest
            result.push(arr[right]); // biggest
        }
        left++;
        right--;
    }

    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
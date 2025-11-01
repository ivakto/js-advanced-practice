//Write a program that receives a total of 4 parameters in the format x1, y1, x2, y2. 
// Check if the distance between each point (x, y) and the beginning of the Cartesian coordinate system (0, 0) is valid. 
// A distance between two points is considered valid if it is an integer value.
//Note: You can use the following formula to help you calculate the distance between the points (x1, y1) and (x2, y2).
//The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.
//In case a distance is valid, print: `{x1, y1} to {x2, y2} is valid`
//If the distance is invalid, print: `{x1, y1} to {x2, y2} is invalid`
//The input consists of two points given as 4 numbers.
//For each comparison print either `{x1, y1} to {x2, y2} is valid` if the distance is valid, or `{x1, y1} to {x2, y2} is invalid` if it is invalid.

function solve(...data) {

    let x1 = Number(data[0]);
    let y1 = Number(data[1]);
    let x2 = Number(data[2]);
    let y2 = Number(data[3]);

    function checker(x1, y1, x2, y2) {
        let distanceX = (x2-x1);
        let distanceY = (y2-y1);

        return Math.sqrt(distanceX ** 2 +distanceY ** 2);
    }

    if (Number.isInteger(checker(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(checker(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(checker(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
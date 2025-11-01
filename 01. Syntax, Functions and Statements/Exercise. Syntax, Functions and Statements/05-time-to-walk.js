// Write a function that calculates how long it takes a student to get to university. The function takes three numbers:
// · The first is the number of steps the student takes from their home to the university
// · The second number is the length of the student's footprint in meters
// · Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
// The input comes as three numbers.
// The output should be printed on the console. 

function solve(steps, lengthFoot, speed) {

    let distanceMeters = steps * lengthFoot;
    let speedMPS = speed * 1000 / 3600;
    let timeWalkingS = distanceMeters / speedMPS;

    let breaks = Math.floor(distanceMeters / 500);

    let totalTimeS = timeWalkingS + breaks * 60;

    let hours = Math.floor(totalTimeS / 3600).toString().padStart(2, '0');
    let minutes = Math.floor((totalTimeS % 3600) / 60).toString().padStart(2, '0');
    let seconds = Math.ceil(totalTimeS % 60).toString().padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(4000, 0.60, 5);

// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit:
//· On the motorway, the limit is 130 km/h
//· On the interstate, the limit is 90 km/h
//· In the city, the limit is 50 km/h
//· Within a residential area, the limit is 20 km/h
//If the driver is within the limits, there should be a printed speed and the speed limit.
//`Driving {speed} km/h in a {speed limit} zone`
//If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds.
//`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
//For speeding up to 20 km/h over the limit, the status should be speeding.
//For speeding up to 40 km/h over the limit, the status should be excessive speeding.
//For anything else, status should be reckless driving.
//The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
//The output should be printed on the console.

function solve(speed, area) {

    let speedLimit = {
        'motorway' : 130,
        'interstate' : 90,
        'city' : 50,
        'residential' : 20
    }
    
    if (speed > speedLimit[area]) {
        let speedDiff = Number(speed - speedLimit[area]);
       console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit[area]} - ${calculateStatus(speedDiff)}`); 
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit[area]} zone`);
    }

    function calculateStatus (speedDiff) {
        if (speedDiff <= 20) {
            return "speeding";
        } else if (speedDiff <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
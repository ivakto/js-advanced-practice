// Write a function that calculates the area and the volume of a figure, which is defined by its coordinates (x, y, z).
// You will receive 3 parameters - the functions area and vol and a string, which contains the figures' coordinate

function solve(area, vol, jsonString) {

    const data = JSON.parse(jsonString);
    const result = [];

    for (let entry of data) {

        const obj = {
            area: area.call(entry),
            volume: vol.call(entry)
        };

        result.push(obj);
    }

    return result;
}

function area() {
        return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

console.log(solve (area, vol, `[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]`));




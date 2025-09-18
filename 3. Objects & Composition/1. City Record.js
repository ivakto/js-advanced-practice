// You will receive a city’s name (string), population (number), and treasury (number) as arguments, 
// which you will need to set as properties of an object and return it.

function solve(cityName, population, treasury) {
    
    let city = {
        name: cityName,
        population: population,
        treasury: treasury
    };

    return city;
}

console.log(solve('Tortuga', 7000, 15000));
// You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties 
// of an object and return it. 
// In addition to the input parameters, the object must have a property taxRate with an initial value of 10, 
// and three methods for managing the city:
// · collectTaxes() - Increase treasury by population * taxRate
// · applyGrowth(percentage) - Increase population by given percentage
// · applyRecession(percentage) - Decrease treasury by given percentage
// Round down the values after each calculation.

function solve(cityName, population, treasury) {
    
    let city = {
        name: cityName,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population*this.taxRate;
            this.treasury = Math.floor(this.treasury);
        },
        applyGrowth(percent) {
            this.population += this.population*(percent/100);
            this.population = Math.floor(this.population);
        },
        applyRecession(percent) {
            this.treasury -= this.treasury*(percent/100);
            this.treasury = Math.floor(this.treasury);
        }
    };

    return city;
}

const city =

solve('Tortuga',

7000,

15000);

console.log(city);
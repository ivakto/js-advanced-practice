// The input comes as array of strings. 
// Each element will contain data for a town and its population in the following format: "{townName} <-> {townPopulation}"
// If you receive the same town twice, you should add the given population to the current one. 

function solve(array) {

    let town = {};
    
    for (let el of array) {
        let tokens = el.split(' <-> ');
        let townName = tokens[0];
        let population = Number(tokens[1]);

        if (town.hasOwnProperty(townName) == false) {
            town[townName] = 0;
        } 
        
        town[townName] += population;
        
        
    }
    
    for (let key in town) {
        console.log(`${key} : ${town[key]}`);
    }
}

solve(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000']);
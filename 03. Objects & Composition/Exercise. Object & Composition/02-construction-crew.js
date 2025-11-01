function solve(worker) {

    if (worker.dizziness === true) {
        let amountNeeded = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += amountNeeded; 
        worker.dizziness = false;
    } 
    return worker;
}

const input = { 
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true 
};

const result = solve(input);
console.log(result);
// Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram.
// Print the following text on the console:
//`I need ${money} to buy {weight} kilograms {fruit}.`
//Print the weight and the money rounded to two decimal places.
//The input comes as three arguments passed to your function.
//The output should be printed on the console.

function solve(fruitName, weightGrams, pricePerKg) {

    function convertGramsKG(grams) {
        return grams / 1000;
    }

    let weightKg = convertGramsKG(weightGrams);

    let totalMoney = weightKg * pricePerKg;

    console.log(`I need $${totalMoney.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruitName}.`);

}

solve('orange', 2500, 1.80);
// Create a function that can compose objects by copying functions from a given library of functions. 
// You will receive two parameters – a library of functions as an associative array (object) and an array of orders, 
// represented as objects. You must return a new array – the fulfilled orders.
//The first parameter will be an object where each property is a function. You will use this library of functions to compose new objects.
//The second parameter is an array of orders. Each order is an object with the following shape:
//{
//template: [Object],
//parts: string[]
//}
//A template is an object that must be copied. The parts array contains the names of required functions as strings.
//You must create and return a new array, by fulfilling all orders from the orders array. 
// To fulfill an order, create a copy of the object’s template and then add to it all functions, 
// listed in the parts array of the order, by taking them from the function library (the first parameter to your solution).

function solve(library, orders) {
    // create buffer variable
    // for each order 
    // - clone template
    // - for each part of order
    // -- compose behaviour from library
    // store order
    // return result

    const result=[];

    for (let order of orders) {
        const product = { ...order.template };
        console.log(product); // Обектите са референтни типове! След като модофицираме ще променим целия масив.
        // Тука правим ПЛИТКО КОПИЕ. Най-лесно се прави с деструктуриране. (Пръсни на отделни променливи обекта template и после 
        // тези отделни променливи ние сме ги композирали в един нов обект => напрактика прави копие на обекта) И двете референции не са еднакви!
        for (let part of order.parts) {
            product[part] = library[part]; // Добавяме функцията да е стойност на ключа product, като го взимаме стойността направо от обекта
        }
        result.push(product);
    }
    return result;
}

const library = {

    print() {
        console.log(`${this.name} is printing a page`);
    },
    scan() {
        console.log(`${this.name} is scanning a document`);
    },
    play(artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },

};

const orders = [

    {
    template: { name: 'ACME Printer'},
    parts: ['print']
    },

    {
    template: { name: 'Initech Scanner'},
    parts: ['scan']
    },

    {
    template: { name: 'ComTron Copier'},
    parts: ['scan', 'print']
    },

    {
    template: { name: 'BoomBox Stereo'},
    parts: ['play']
    }

];


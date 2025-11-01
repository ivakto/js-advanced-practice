let person = {name: 'Alex'};

function greet(p1, p2, p3) {
    console.log(this.name, p1, p2, p3);
}

console.log('.call():')
greet.call(person, 1, 2, 3);

console.log('.apply():')
greet.apply(person, [1, 2, 3]);

console.log('.bind():')
let boundGreet = greet.bind(person, 1, 2, 3);
boundGreet();




function sayHello() {
    return 'Hello';
}

function sayGoodbye() {
    return 'Goodbye';
}

function printMessage(messageFunc) {
    console.log('Message:', messageFunc());
}

printMessage(sayHello);
printMessage(sayGoodbye);



function createMessagePrinter() { // Външна функция
    return function(message) { // Вътрешна (анонимна) функция
        return message + '!';
    };
}


const messagePrinter = createMessagePrinter(); //Извикваме външната функция. 
// Тя връща вътрешната функция и се присвоява на константата messagePrinter.
// Сега messagePrinter е името на вътрепната функция, т.е. тя е функция.
console.log(messagePrinter('Hello')); // Подаваме аргумент
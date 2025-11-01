/* Write a function that returns an array of Person objects.
Use the class from the previous task, create the following instances, and return them in an array:  */

function solve() {

    class Person {
    firstName;
    lastName;
    age;
    email;

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
    
            const fullName = this.lastName ? 
                `${this.firstName} ${this.lastName}` : 
                this.firstName;
        
            const details = [];

            if (this.age !== undefined) {
                details.push(`age: ${this.age}`);
            }

            if (this.email) {
                details.push(`email: ${this.email}`);
            }

            const detailsPart = details.length > 0 ? 
                `(${details.join(', ')})` : 
                '';

            return `${fullName} ${detailsPart}`.trim();
        }   

    }

    const persons = [
        
        new Person("Anna", "Simpson", 22, "anna@yahoo.com"),
        new Person("SoftUni"),
        new Person("Stephan", "Johnson", 25),
        new Person("Gabriel", "Peterson", 24, "g.p@gmail.com")
    ];

    return persons;
}

const personArray = solve();
console.log(personArray.map(p => p.toString()).join('\n'));
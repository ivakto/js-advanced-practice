/* Write a class that represents a Circle. It has only one data property - its radius, and it is set through the constructor. 
The class needs to have getter and setter methods for its diameter - the setter needs to calculate the radius and change it 
and the getter needs to use the radius to calculate the diameter and return it.
The circle also has a getter area(), which calculates and returns its area. */

class Circle {
    radius;

    constructor(r) {
        this.radius = r;
    }

    set diameter(value) {
        if (typeof value != 'number') {
            throw new TypeError('Diameter must be number');
        }
        if (value <= 0) {
            throw new RangeError('Diameter can not be negative.')
        }
        this.radius = value/2;
    }

    get diameter() {
        return this.radius * 2;
    }

    get area() { //getter 
        return Math.PI * this.radius ** 2; // дава това, което функцията е върнала, а не самата функция
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
/* Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the constructor, 
and a static method for finding the distance between two points, called distance(). */

class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x-b.x;
        const dy = a.y-b.y;

        return Math.sqrt(dx**2 + dy**2);
    }
}

let p1 = new Point(5, 5);

let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));
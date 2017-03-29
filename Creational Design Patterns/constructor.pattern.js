'use strict';

// create objects from functions
function Point(x, y) {
    this.x = x;
    this.y = y;
    this.toString = () => `Point[x:${this.x},y:${this.y}]`;
}

let point = new Point(10, 20);

console.log(point.toString());


let Graph = function (point, type) {
    this.x = point.x;
    this.y = point.y;
    this.type = type;

    this.move = function (x, y) {
        console.log(`Type[${this.type}]: source(${this.x},${this.y}) moveTo(${x},${y})`);
    };
};

// use Prototype
Graph.prototype = {
    draw: function () {
        console.log('drawing ' + this.type);
    },
    remove: function () {
        console.log('clean ' + this.type);
    }
};

let graphSquare = new Graph(point, 'square');
let graphCircle = new Graph(new Point(20, 40), 'circle');

graphSquare.move(8, 8);
graphCircle.move(12, 12);
graphSquare.draw();
graphCircle.draw();
graphSquare.remove();
graphCircle.remove();

// node js exports
module.exports = Point;


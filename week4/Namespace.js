"use strict";
var Utils;
(function (Utils) {
    Utils.PI = 3.14;
    function square(x) {
        return x * x;
    }
    Utils.square = square;
    class Circle {
        radius;
        constructor(radius) {
            this.radius = radius;
        }
        area() {
            return Utils.PI * this.radius * this.radius;
        }
    }
    Utils.Circle = Circle;
})(Utils || (Utils = {}));
const c = new Utils.Circle(5);
console.log(c.area()); // 78.5
console.log(Utils.square(4)); // 16

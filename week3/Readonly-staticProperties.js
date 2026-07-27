"use strict";
//read only
class Car {
    brand;
    year;
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    showDetails() {
        return `${this.brand} - ${this.year}`;
    }
}
const car1 = new Car("Tesla", 2024);
console.log(car1.showDetails());
//static
class MathUtils {
    static PI = 3.14159;
    static calculateCircleArea(radius) {
        return MathUtils.PI * radius * radius;
    }
}
console.log(MathUtils.PI);
console.log(MathUtils.calculateCircleArea(5));

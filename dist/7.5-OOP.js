"use strict";
// ? Abstract classes focus on the class inheritance and sharing common functionality
console.log("Abstract");
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculate() {
        return Math.PI * this.radius ** 2;
    }
    displayArea() {
        return { areaCMsqr: this.calculate().toFixed(2), color: this.color };
    }
}
const circle0 = new Circle("red", 5);
const circle0Area = circle0.displayArea();
console.log(circle0Area);
//! Abstract Class:
//* Cannot be instantiated directly.
//* Acts as a blueprint for derived(child) classes.
//* Contains abstract methods(methods without implementation) that must be implemented by derived classes.
//* May also include non - abstract methods with implementation.

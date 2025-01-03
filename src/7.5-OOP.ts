// ? Abstract classes focus on the class inheritance and sharing common functionality
console.log("Abstract");

abstract class Shape {
    constructor(protected color: string) { }
    abstract calculate(): number;
    abstract displayArea(): void;
}


class Circle extends Shape {
    constructor(protected color: string, protected radius: number) {
        super(color);
    }
    public calculate(): number {
        return Math.PI * this.radius ** 2;
    }
    public displayArea(): void | {} {
        return { areaCMsqr: this.calculate().toFixed(2), color: this.color }
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
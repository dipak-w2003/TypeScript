# UseCases of Interface, Base Class, Abstract Class

# 1. Interface (with class) : use when there's no functionality that you want to define concretely
# Use an interface when you only want to define the structure of a class without any actual functionality
interface Animal {
    speak(): void; 
    // No implementation, just the structure
}

class Dog implements Animal {
    speak() {
        console.log("Woof!"); 
        // Dog's specific implementation
    }
}
class Cat implements Animal {
    speak() {
        console.log("Meow!"); 
        // Cat's specific implementation
    }
}
const dog = new Dog();
dog.speak();  
const cat = new Cat();
cat.speak();  

# 2. Abstract Class: A behavior that will be reuse by one of the concrete classes
# Use an abstract class when you want to define a base class with common functionality that is shared among subclasses but still needs some methods to be implemented by the subclasses.
abstract class Shape {
    // Common functionality in abstract class
    abstract calculateArea(): number; 
    // Abstract method (no implementation)
    displayArea() {
        console.log(`Area: ${this.calculateArea()}`);
    }}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
    // Concrete implementation of calculateArea()
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    // Concrete implementation of calculateArea()
    calculateArea(): number {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
circle.displayArea();  
const rectangle = new Rectangle(4, 6);
rectangle.displayArea(); 

# Base Class: Use a base class when you want to define common functionality and properties that can be inherited by subclasses, but don't necessarily need to force subclasses to implement any specific methods.

class Vehicle {
    constructor(public color: string, public speed: number) {}
    move() {
        console.log(`The vehicle is moving at ${this.speed} km/h.`);
    }
}
class Car extends Vehicle {
    constructor(color: string, speed: number, private brand: string) {
        super(color, speed);
    }
    displayInfo() {
        console.log(`This is a ${this.color} ${this.brand} car.`);
    }
}

class Bike extends Vehicle {
    constructor(color: string, speed: number, private type: string) {
        super(color, speed);
    }

    displayInfo() {
        console.log(`This is a ${this.color} ${this.type} bike.`);
    }
}

const car = new Car("red", 120, "Toyota");
car.move();  
car.displayInfo();  

const bike = new Bike("blue", 30, "Mountain");
bike.move();  
bike.displayInfo();  

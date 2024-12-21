// !  Traditional V/S Abstract classes

// Traditional Class
class TraditionalClass {
    greet() {
        console.log("Hello from the Traditional Class!");
    }
}

// Can be instantiated (can use new keyword) directly
const traditionalInstance = new TraditionalClass();
traditionalInstance.greet();

// ? Abstract Class
abstract class AbstractClass {
    abstract greet(): void;
    sayGoodbye() {
        console.log("Goodbye from the Abstract Class!");
    }
}
// ? Derived class extending the Abstract Class
class DerivedClass extends AbstractClass {
    // Must implement the abstract method
    greet() {
        console.log("Hello from the Derived Class!");
    }
}



// TODO : Note, Instantiation refers to creating an object from a class using new.
// ? Instantiating the Derived Class (not the Abstract Class)
// const abstractInstance = new AbstractClass(); ❎

const abstractInstance = new DerivedClass()
abstractInstance.greet();
abstractInstance.sayGoodbye();


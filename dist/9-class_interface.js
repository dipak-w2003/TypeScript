"use strict";
class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        console.log(`Dog ${this.name} is spelling color ${this.color}`);
    }
    test() {
        return 0;
    }
}
// ? normal way to pass args for class
const lucy1 = new Dog("Lucy", "red");
// lucy1.test()
const lucy = new Dog("Lucy", "red");
// ? we cannot access the class void/funcs(test()) after defining animal interface to dog, cause it uses the blue print / interface / obj of "Animal"
function trySpeak(animal) {
    animal.speak();
}
trySpeak(lucy);
//  TODO: In The example:
// The Animal interface says every animal must have a speak() method.
// The Dog class follows this blueprint and also has extra methods, like test().
// You create a Dog object(Lucy) and use the speak() method, but can't access test() unless you know it's a Dog object, not just an Animal.

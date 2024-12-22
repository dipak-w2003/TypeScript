"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color,
        ;
    }
    speak() {
        console.log(`Dog ${this.name} is spelling color ${this.color}`);
    }
    test() {
        return 1;
    }
}
exports.Dog = Dog;

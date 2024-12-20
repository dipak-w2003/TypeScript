"use strict";
// ? Classes and Abstract Classes
class Person_1 {
    constructor(nickName) {
        this.nickName = nickName;
    }
    greet() {
        console.log(`Hello, ${this.nickName}`);
    }
    getName() {
        if (this.nickName.length < 3)
            return " ";
        return this.nickName;
    }
    setName(name) {
        if (name.length < 5)
            return;
        this.nickName = name;
    }
}
// const p_1 = new Person_1("Senpai");
// p_1.greet();
// console.log(p_1.getName());
// p_1.setName("Hakku Madata");
// console.log(p_1.getName());
// ? ## Access Modifiers => 3 class keywords after/before constructor :
// ? public : default; before constructor => nickName:string == public nickName:string
// ! private -> syntax : private nickName : string, by cannot we access p_1.name
// TODO : By making private, you tell other programmers that this method is not intended to be accessed directly
// * Note, but we can get returned value inside from like this -> p_1.getName()
// ? protected

"use strict";
console.log("Static Attributes And Methods");
// ? In other word, static value are the global value of class itself so we don't need to use instance
class MathOperatins {
    static add(x1, x2) {
        return x1 + x2;
    }
    static evenNs(start, end) {
        // ? start  -> end value
        let store = [];
        if (start < 0)
            return [start];
        if (end === undefined) {
            for (let i = 0; i <= start; i++) {
                if (i % 2 === 0)
                    store.push(i);
            }
        }
        else {
            if (start > end)
                return [];
            for (let i = start; i <= end; i++) {
                if (i % 2 === 0)
                    store.push(i);
            }
        }
        return store;
    }
    constructor() { }
    // Todo, to get static value inside getter/setter func
    static adminInfo() {
        return this.admin;
    }
}
MathOperatins.admin = {
    role: "admin",
    pass: "admin22",
    phone: 977
};
MathOperatins.PI = Math.PI;
// console.log(MathOperatins.PI);
const _add = MathOperatins.add(10, 2);
console.log(_add);
const _evenNs = MathOperatins.evenNs(100, 400);
console.log(_evenNs);
const adminInfo = MathOperatins.adminInfo();
console.log(adminInfo);
// * In TS, static methods and properties belongs to the class itself rather than to instance of the class. By making methods and properties static, we can access them directly form the class without to create an instance of the class. This is useful for utility functions or properties that don't rely on instance-specific data.

"use strict";
class stock {
    constructor(name) {
        this.name = name;
    }
    static incrementRate() {
        this.rate++;
    }
    static decrementRate() {
        this.rate--;
    }
}
stock.rate = 0;
console.log(stock.rate);
stock.incrementRate();
stock.incrementRate();
stock.incrementRate();
stock.incrementRate();
console.log(stock.rate);

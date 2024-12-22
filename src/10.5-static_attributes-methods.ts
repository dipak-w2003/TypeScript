class stock {
    public static rate: number = 0
    constructor(public name?: string) { }
    static incrementRate() {
        this.rate++
    } static decrementRate() {
        this.rate--
    }
}

console.log(stock.rate);

stock.incrementRate()
stock.incrementRate()
stock.incrementRate()
stock.incrementRate()
console.log(stock.rate);

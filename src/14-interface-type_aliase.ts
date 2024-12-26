console.log("Interface And Type Aliase");
// ? Usecases:
// * Use Cusom types when you need unions, intersections or mapped types.
type battery = {
    bttr_model: string,
    status: number
}
type car = {
    car_model: string,
}
// unions & intersection
let carInfo0: battery | car
let carInfo1: battery & car
const getCar = (carObj: battery & car) => { }



// * Interface can extend other interfaces to inherit their members
interface eBike {
    batteryType: string,
    batteryStatus: number
}
interface eBike {
    model: string,
    powerCC: number
}
interface eBike {
    priceDollar: number
    stock: boolean
}

// ? 'extends' keyword use (line : '47')
type gameTupple = [string, string]
interface ps1 {
    game_ps1: gameTupple
}
interface ps2 {
    game_ps2?: gameTupple
}
interface ps3 {
    game_ps3?: gameTupple
}
interface ps4 {
    game_ps4?: gameTupple
}
interface psDB extends ps1, ps2, ps3, ps4 { }
const collectGames = (game: psDB): psDB => game
const collectedGames: psDB = {
    game_ps1: ["spider-man 1", "Resident Evil 1"],
    game_ps2: ["God Hand", "God of War 2"]
}
console.log(collectGames(collectedGames));






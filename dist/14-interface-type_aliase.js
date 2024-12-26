"use strict";
console.log("Interface And Type Aliase");
// unions & intersection
let carInfo0;
let carInfo1;
const getCar = (carObj) => { };
const collectGames = (game) => game;
const collectedGames = {
    game_ps1: ["spider-man 1", "Resident Evil 1"],
    game_ps2: ["God Hand", "God of War 2"]
};
console.log(collectGames(collectedGames));

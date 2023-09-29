"use strict";
var Level;
(function (Level) {
    Level[Level["Kids"] = 40] = "Kids";
    Level[Level["low"] = 30] = "low";
    Level[Level["mid"] = 20] = "mid";
    Level[Level["high"] = 10] = "high";
})(Level || (Level = {}));
let fName = "Eltayeb";
console.log(`${fName}'s Level is ${Level.mid}`);

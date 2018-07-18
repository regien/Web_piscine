class Lannister {
    constructor() {
       console.log("A Lannister is born !"); 
    }
    getSize() {
        return "Average";
    }
    houseMotto() {
        return "Hear me roar!";
    }
}

module.exports = Lannister;

var Tyrion = require('./Tyrion.class.js');

var pendejo = new Tyrion;

console.log(pendejo.getSize());
console.log(pendejo.houseMotto());
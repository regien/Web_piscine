var Targaryen = require('./Targaryen.class');

class Viserys extends Targaryen {
}

class Daenerys extends Targaryen {
    resistsFire() {
        return true;
    }
}

var mayor = new Daenerys;
var menor = new Viserys;

console.log("Viserys " + menor.getBurned());
console.log("Daenerys " + mayor.getBurned());
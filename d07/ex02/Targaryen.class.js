class Targaryen {
    resistsFire() {
        return false;
    }
    getBurned() {
        if (this.resistsFire() === true)
            return ("emerges naked but unharmed");
        else
            return ("burns alive");
    }
}

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
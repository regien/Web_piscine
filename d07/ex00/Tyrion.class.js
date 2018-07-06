var Lannister = require('./test');

class Tyrion extends Lannister {
    constructor() {
        super();
        console.log("My name is Tyrion");
    }
    getSize() {
        return "Short";
    }
}

module.exports = Tyrion;
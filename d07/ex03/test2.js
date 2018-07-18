var House = require('./House.class');

class DrHouse extends House {
    diagnose() {
        console.log("It's not lupus !");
    }
}

var Drhouse = new DrHouse;

Drhouse.introduce();
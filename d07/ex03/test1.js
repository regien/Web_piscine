var House = require('./House.class');


class HouseStark extends House {
    getHouseName() {
        return "Stark";
    }
    getHouseMotto() {
        return "Winter is coming"
    }
    getHouseSeat() {
        return "Winterfell";
    }
}

class HouseMartell extends House {
    getHouseName() {
		return "Martell";
    }
    getHouseMotto() {
		return "Unbowed, Unbent, Unbroken";
    }
    getHouseSeat() {
		return "Sunspear";
    }
}

var stark = new HouseStark;
var martell = new HouseMartell;

stark.introduce();
martell.introduce();
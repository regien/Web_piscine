class House {
    introduce() {
        console.log(`House ${this.getHouseName()} of ${this.getHouseSeat()} : \"${this.getHouseMotto()}\"`);
    }
}

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

class DrHouse extends House {
    diagnose() {
        console.log("It's not lupus !");
    }
}

var stark = new HouseStark;
var martell = new HouseMartell;
//var Drhouse = new DrHouse;

stark.introduce();
martell.introduce();
//Drhouse.introduce(); nide just like the testcase
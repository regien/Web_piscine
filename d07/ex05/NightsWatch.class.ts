interface IFighter {
    fight()
}

// interfaces are just there at compilation time, because they dont exist in
// javascript
// check implementation of this function - TYPE GUARDS
function isOfIFighter(object: any): object is IFighter {
    return object.fight !== undefined;
}

class NightsWatch implements IFighter {
    stacker = [];

    recruit(fighter) {
        if (isOfIFighter(fighter))
            this.stacker.push(fighter); 
    }
    fight() {
        this.stacker.forEach(element => {
            element.fight();
        });
    }
}

class JonSnow implements IFighter {
    fight() {
        console.log("* looses his wolf on the enemy, and charges with courage *");
    }
    isABastard() {
        return true;
    }
}

class MaesterAemon {
    sendRavens() {
        console.log("* sends a raven carrying an important message *");
    }
}

class SamwellTarly implements IFighter {
    fight() {
        console.log("* flees, finds a girl, grows a spine, and defends her to the bitter end *");
    }
    makeHisFatherProud() {
        return false;
    }
}


var jon = new JonSnow();
var aemon = new MaesterAemon();
var sam = new SamwellTarly();
var nw = new NightsWatch();


nw.recruit(jon);
nw.recruit(aemon);
nw.recruit(sam);
nw.fight();
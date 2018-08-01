abstract class Fighter {
    type_soldier: any;

    constructor(value) {
        this.type_soldier = value;
    }
    getType() {
        return (this.type_soldier);
    }
//    clone() {
//    }
}

class unholyFactory {
    private array: any;
    private fabricador: any;
//    private absorb:any;
    private type_fighter: any;
    

    constructor() {
        this.array = new Array();
        this.fabricador = new Array();
//        this.absorb;
 //       this.type_fighter;

    }
    private find_fightype(value) {
        if (value === "foot soldier")
            return 'Footsoldier';
        else if (value === "llama")
            return 'Llama';
        else if (value === 'archer')
            return 'Archer';
        else if (value === 'assassin')
            return 'Assassin';
    }

    absorb(tipo) {
        if (tipo instanceof Fighter) {
            if (this.array.find(function (element) { element === tipo; }))
                process.stdout.write("(Factory already absorb a fighter type of");
            else
                process.stdout.write("(Factory absorbed a fighter of type");
            process.stdout.write(`${tipo.getType()})\n`);
        }
        else
            console.log("(Factory can't absorb this, it's not a fighter)");
    }
    
    fabricate(value) {
        this.type_fighter = this.find_fightype(value);
        // continue - stop for cleaning
    }

    fight(value) {
        
    }
}


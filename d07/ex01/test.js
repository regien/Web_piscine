/*class Pendejo {
    constructor(algo) {
        var pendejo = "this is a private variables";
        algo = algo || {};
        
        algo.protejido = "vainas";
    }

    llamada() {
        console.log(algo.protejido);
    }
}

class hijo extends Pendejo {
    constructor() {
        var algo = {};
        super(algo);
        console.log(algo);
        console.log("hijo creado");
    }
}
*/

function Parent(protecteds) {
    protecteds = protecteds || {};
    var alpha = 'private var';
    protecteds.beta = "pene";
    this.gamma = "public var";
}

function Son() {
    var supers = {};
    var child = new Parent(supers);
    
    child.delta = "public var child";
    child.getbeta = function() {
        return  `EXAMPLE : ${supers.beta}`;
    }
    
    return child;
}

var something = new Son();

console.log(something.getbeta());
console.log(something.beta);
/*
var pendejo = new hijo;

console.log(pendejo);
pendejo.llamada();
*/
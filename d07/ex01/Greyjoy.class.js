function Greyjoy(protecteds) {
    protecteds = protecteds || {};
    
    protecteds.familyMotto = "We do not sow";
    this.annonceMotto = function() {
        console.log(protecteds.familyMotto);
    }
}

function Euron() {
    var supers = {};
    var child = new Greyjoy(supers);
    
    return child;
}

var pendejo = new Euron();

pendejo.annonceMotto();
console.log(pendejo.familyMotto);
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

module.exports = Euron;
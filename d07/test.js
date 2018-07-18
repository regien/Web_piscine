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
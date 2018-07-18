class Pene {
    constructor(algo) {
        this.pene = algo;
    }
}

var algo = new Pene("something");

console.log(algo);
console.log(algo instanceof Pene);
console.log(new Pene);
console.log(Pene);
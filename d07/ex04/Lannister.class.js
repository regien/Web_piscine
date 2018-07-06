class Lannister {
    sleepWith(objeto) {
        console.log(this.with(objeto));
    }
}

class Tyrion extends Lannister {
    with(objeto) {
        if (!(objeto instanceof Lannister))
            return ("Let's do this");
        else
            return ("Not even if I'm drunk !");
    }
}

class Jaime extends Lannister {
    with(holder) {
        if (!(holder instanceof Lannister))
            return ("Let's do this");
        else if (holder instanceof Cersei)
            return ("With pleasure, but only in a tower in Winterfall, then");
        else
            return ("Not even if I'm drunk !");
    }
}

class Stark {
}

class Cersei extends Lannister {
}

class Sansa extends Stark {
}

var j = new Jaime();
var c = new Cersei();
var t = new Tyrion();
var s = new Sansa();

j.sleepWith(t);
j.sleepWith(s);
j.sleepWith(c);

t.sleepWith(j);
t.sleepWith(s);
t.sleepWith(c);

// REMEMBER TO SPLIT THESE
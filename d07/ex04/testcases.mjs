import Lannister from './Lannister.class.mjs';
import Jaime from './Jaime.class.mjs';
import Tyrion from './Tyrion.class.mjs';

class Stark {
}

class Cersei extends Lannister {
}

class Sansa extends Stark {
}

export default Cersei;

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

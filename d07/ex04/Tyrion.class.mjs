import Lannister from './Lannister.class.mjs';

class Tyrion extends Lannister {
    with(objeto) {
        if (!(objeto instanceof Lannister))
            return ("Let's do this");
        else
            return ("Not even if I'm drunk !");
    }
}

export default Tyrion;
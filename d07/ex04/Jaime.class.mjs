import Lannister from './Lannister.class.mjs';
import Cersei from './testcases.mjs';

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

export default Jaime;
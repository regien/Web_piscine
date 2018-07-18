class Targaryen {
    resistsFire() {
        return false;
    }
    getBurned() {
        if (this.resistsFire() === true)
            return ("emerges naked but unharmed");
        else
            return ("burns alive");
    }
}

module.exports = Targaryen;
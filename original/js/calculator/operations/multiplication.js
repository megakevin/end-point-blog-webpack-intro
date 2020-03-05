class Multiplication extends Operation {
    constructor(a, b) {
        super(a, b);
    }

    operate() {
        return this.a * this.b;
    }
}
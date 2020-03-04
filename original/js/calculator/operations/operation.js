class Operation {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    operate() {
        throw new Error("This method needs to be implemented by a subclass");
    }
}
import Operation from "./operation.js";

export default class Division extends Operation {
    constructor(a, b) {
        super(a, b);
    }

    operate() {
        return this.a / this.b;
    }
}
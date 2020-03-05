import Addition from "./operations/addition.js";
import Substraction from "./operations/substraction.js";
import Multiplication from "./operations/multiplication.js";
import Division from "./operations/division.js";

export default class Calculator {
    add(a, b) {
        let operation = new Addition(a, b);
        return operation.operate();
    }

    substract(a, b) {
        let operation = new Substraction(a, b);
        return operation.operate();
    }

    multiply(a, b) {
        let operation = new Multiplication(a, b);
        return operation.operate();
    }

    divide(a, b) {
        let operation = new Division(a, b);
        return operation.operate();
    }
}
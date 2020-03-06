import Addition from "./operations/addition.js";
import Subtraction from "./operations/subtraction.js";
import Multiplication from "./operations/multiplication.js";
import Division from "./operations/division.js";

export default class Calculator {
    add(a, b) {
        let operation = new Addition(a, b);
        return operation.operate();
    }

    substract(a, b) {
        let operation = new Subtraction(a, b);
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
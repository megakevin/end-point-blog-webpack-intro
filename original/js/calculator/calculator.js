class Calculator {
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
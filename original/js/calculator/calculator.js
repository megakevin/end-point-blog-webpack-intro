class Calculator {
    add(a, b) {
        let operation = new Addition(a, b);
        return operation.operate();
    }

    substract(a, b) {
        let operation = new Substraction(a, b);
        return operation.operate();
    }

    multiply(a, b) {
        let operation = new Multiplicaion(a, b);
        return operation.operate();
    }

    divide(a, b) {
        let operation = new Division(a, b);
        return operation.operate();
    }
}
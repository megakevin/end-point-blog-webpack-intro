class App {
    constructor() {
        this.calculator = new Calculator();

        this.operand1Field = document.getElementById("operand_1");
        this.operand2Field = document.getElementById("operand_2");
        this.calculateButton = document.getElementById("run_operations");

        this.additionResultField = document.getElementById("addition_result");
        this.subtractionResultField = document.getElementById("subtraction_result");
        this.multiplicationResultField = document.getElementById("multiplication_result");
        this.divisionResultField = document.getElementById("division_result");
    }

    run() {
        this.calculateButton.addEventListener("click", () => {
            let operand1 = parseFloat(this.operand1Field.value);
            let operand2 = parseFloat(this.operand2Field.value);

            this.additionResultField.value = this.calculator.add(operand1, operand2);
            this.subtractionResultField.value = this.calculator.substract(operand1, operand2);
            this.multiplicationResultField.value = this.calculator.multiply(operand1, operand2);
            this.divisionResultField.value = this.calculator.divide(operand1, operand2);
        });
    }
}

console.log("Starting application");

let app = new App();
app.run();

console.log("Application started");

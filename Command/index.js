const Calculator = require("./calculator.js");

const calculator = new Calculator();

calculator.add(5);
calculator.multiply(2);
calculator.subtract(3);
calculator.divide(2);

calculator.undoLastOperation();
calculator.undoLastOperation();
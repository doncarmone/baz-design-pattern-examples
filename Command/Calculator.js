const {
    AdditionCommand,
    SubtractionCommand,
    MultiplicationCommand,
    DivisionCommand,
  } = require('./Commands.js');

class Calculator {
    constructor() {
      this.value = 0;
      this.history = [];
    }
  
    add(value) {
      this.value += value;
      console.log(`Suma: ${this.value}`);
      this.history.push(new AdditionCommand(this, value));
    }
  
    subtract(value) {
      this.value -= value;
      console.log(`Resta: ${this.value}`);
      this.history.push(new SubtractionCommand(this, value));
    }
  
    multiply(value) {
      this.value *= value;
      console.log(`Multiplicación: ${this.value}`);
      this.history.push(new MultiplicationCommand(this, value));
    }
  
    divide(value) {
      this.value /= value;
      console.log(`División: ${this.value}`);
      this.history.push(new DivisionCommand(this, value));
    }
  
    undoLastOperation() {
      const lastCommand = this.history.pop();
      if (lastCommand) {
        lastCommand.execute();
      }
    }
}
module.exports = Calculator;
  
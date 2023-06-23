const Command = require("./Command.js")

class AdditionCommand extends Command {
    constructor(calculator, value) {
      super();
      this.calculator = calculator;
      this.value = value;
    }
  
    execute() {
      this.calculator.add(this.value);
    }
  }
  
  class SubtractionCommand extends Command {
    constructor(calculator, value) {
      super();
      this.calculator = calculator;
      this.value = value;
    }
  
    execute() {
      this.calculator.subtract(this.value);
    }
  }
  
  class MultiplicationCommand extends Command {
    constructor(calculator, value) {
      super();
      this.calculator = calculator;
      this.value = value;
    }
  
    execute() {
      this.calculator.multiply(this.value);
    }
  }
  
  class DivisionCommand extends Command {
    constructor(calculator, value) {
      super();
      this.calculator = calculator;
      this.value = value;
    }
  
    execute() {
      this.calculator.divide(this.value);
    }
  }

  module.exports = {
    AdditionCommand,
    SubtractionCommand,
    MultiplicationCommand,
    DivisionCommand,
  };
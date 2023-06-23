class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    accept(visitor) {
      visitor.visit(this);
    }
  }
  
  class Developer extends Employee {}
  
  class Manager extends Employee {
    constructor(name, salary, bonus) {
      super(name, salary);
      this.bonus = bonus;
    }
  }
  
  module.exports = { Employee, Developer, Manager };
  
const Visitor = require('./visitor');

class SalaryVisitor extends Visitor {
  constructor() {
    super();
    this.totalSalary = 0;
  }

  visit(employee) {
    this.totalSalary += employee.salary;
  }

  getTotalSalary() {
    return this.totalSalary;
  }
}

module.exports = SalaryVisitor;

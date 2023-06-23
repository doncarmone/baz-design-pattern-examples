const { Employee, Developer, Manager } = require('./employees');
const SalaryVisitor = require('./salaryVisitor');
const BonusVisitor = require('./bonusVisitor');

// Uso del código

const employees = [
  new Developer('John Doe', 5000),
  new Developer('Jane Smith', 6000),
  new Manager('Tom Wilson', 8000, 2000),
];

const salaryVisitor = new SalaryVisitor();
const bonusVisitor = new BonusVisitor();

employees.forEach(employee => {
  employee.accept(salaryVisitor);
  employee.accept(bonusVisitor);
});

console.log(`Total de salarios: ${salaryVisitor.getTotalSalary()}`);
console.log(`Total de bonificaciones: ${bonusVisitor.getTotalBonus()}`);

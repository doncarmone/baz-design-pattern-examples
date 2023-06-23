const Visitor = require('./visitor');
const { Manager } = require('./employees')
class BonusVisitor extends Visitor {
  constructor() {
    super();
    this.totalBonus = 0;
  }

  visit(employee) {
    if (employee instanceof Manager) {
      this.totalBonus += employee.bonus;
    }
  }

  getTotalBonus() {
    return this.totalBonus;
  }
}

module.exports = BonusVisitor;

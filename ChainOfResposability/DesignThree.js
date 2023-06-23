const BaseDesign = require("./BaseDesign");

class DesignThree extends BaseDesign {
  run(role){
    if(this.isMyResponsability(role)){
      return "DesignThree"
    }

    return this.next(role);
  }

  isMyResponsability(role){
    return role == 3;
  }
}

module.exports = DesignThree;
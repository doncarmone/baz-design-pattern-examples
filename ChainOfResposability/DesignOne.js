const BaseDesign = require("./BaseDesign");

class DesignOne extends BaseDesign {
  
  run(role){
    if(this.isMyResponsability(role)){
      return "DesignOne";
    }

    return this.next(role);
  }

  isMyResponsability(role){
    return role == 1;
  }
}
module.exports = DesignOne;
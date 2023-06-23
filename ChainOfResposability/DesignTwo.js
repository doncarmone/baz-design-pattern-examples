const BaseDesign = require("./BaseDesign");

class DesignTwo extends BaseDesign {
  run(role){
    if(this.isMyResponsability(role)){
      return "DesignTwo";
    }

    return this.next(role);
  }

  isMyResponsability(role){
    return role == 2;
  }
}

module.exports = DesignTwo;
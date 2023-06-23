const DesignOne = require("./DesignOne");
const DesignTwo = require("./DesignTwo");
const DesignThree = require("./DesignThree");

const designOne = new DesignOne();
const designTwo = new DesignTwo();
const designThree = new DesignThree();

const role = 2;

designTwo.setNext(designThree);
designOne.setNext(designTwo);

let finalDesign = designOne.run(role);

console.log(finalDesign);
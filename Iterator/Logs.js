class Logs {
    constructor(){
      this._data = [];
      this.currentPointer = 0;
    }
  
    set data(values){
      this._data = values;
    }
  
    next(){
      let current = this._data[this.currentPointer];
      this.currentPointer++;
      return current;
    }
  
    hasNext(){
      return this._data[this.currentPointer];
    }
  }
  
  module.exports = Logs;
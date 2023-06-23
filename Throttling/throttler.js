class Throttler {
    constructor(limit, interval) {
      this.limit = limit;
      this.interval = interval;
      this.queue = [];
      this.timeoutId = null;
    }
  
    enqueue(callback) {
      this.queue.push(callback);
      if (!this.timeoutId) {
        this.processQueue();
      }
    }
  
    processQueue() {
      const nextCallback = this.queue.shift();
      if (nextCallback) {
        nextCallback();
        this.timeoutId = setTimeout(() => {
          this.processQueue();
        }, this.interval);
      } else {
        this.timeoutId = null;
      }
    }
  }
  
  module.exports = Throttler;
  
class CircuitBreaker {
    constructor(service, threshold = 3, timeout = 5000) {
      this.service = service;
      this.threshold = threshold;
      this.timeout = timeout;
      this.failureCount = 0;
      this.lastFailureTime = null;
      this.isCircuitOpen = false;
    }
  
    async call() {
      if (this.isCircuitOpen) {
        const elapsedTime = Date.now() - this.lastFailureTime;
        if (elapsedTime >= this.timeout) {
          this.isCircuitOpen = false;
          this.failureCount = 0;
        } else {
          throw new Error('Circuit is open. Service unavailable.');
        }
      }
  
      try {
        const result = await this.service();
        this.reset();
        return result;
      } catch (error) {
        this.recordFailure();
        throw error;
      }
    }
  
    recordFailure() {
      this.failureCount++;
      if (this.failureCount >= this.threshold) {
        this.tripCircuit();
      }
    }
  
    tripCircuit() {
      this.isCircuitOpen = true;
      this.lastFailureTime = Date.now();
      console.log('Circuit breaker tripped. Service unavailable.');
    }
  
    reset() {
      this.failureCount = 0;
      this.lastFailureTime = null;
    }
  }
  
  module.exports = CircuitBreaker;
  
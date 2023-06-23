class Publisher {
    constructor() {
      this.subscribers = [];
    }
  
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    unsubscribe(subscriber) {
      const index = this.subscribers.indexOf(subscriber);
      if (index !== -1) {
        this.subscribers.splice(index, 1);
      }
    }
  
    notify(event) {
      this.subscribers.forEach(subscriber => {
        subscriber.update(event);
      });
    }
  }
  
  module.exports = Publisher;
  
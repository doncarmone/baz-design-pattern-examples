const Publisher = require('./publisher.js');
const Subscriber = require('./subscriber.js');

const publisher = new Publisher();

const subscriber1 = new Subscriber();
const subscriber2 = new Subscriber();
const subscriber3 = new Subscriber();

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);
publisher.subscribe(subscriber3);

publisher.notify('Evento 1');

publisher.unsubscribe(subscriber2);

publisher.notify('Evento 2'); 

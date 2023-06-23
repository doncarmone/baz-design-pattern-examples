const CircuitBreaker = require('./circuitBreaker');
const serviceCall = require('./service');

const circuitBreaker = new CircuitBreaker(serviceCall, 3, 5000);

async function makeServiceCall() {
  try {
    const result = await circuitBreaker.call();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

makeServiceCall();
makeServiceCall();
makeServiceCall();
makeServiceCall();
makeServiceCall();
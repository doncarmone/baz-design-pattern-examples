const Throttler = require('./throttler');

const throttler = new Throttler(3, 1000);

function makeRequest(requestId) {
  console.log(`Making request ${requestId}`);
}

for (let i = 1; i <= 10; i++) {
  throttler.enqueue(() => makeRequest(i));
}

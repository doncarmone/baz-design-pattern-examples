const Logs = require("./Logs");

const logs = new Logs();

logs.data = [1,2,3,4];

while(logs.hasNext()){
  let currentLog = logs.next();

  console.log(currentLog);
  // complex login using log content
}
const os = require('os')
const user = os.userInfo()

console.log(user);

console.log(`the system suptime is ${os.uptime()}`);

const usemem = {
  name: os.type(),
  date: os.release(),
  total: os.totalmem(),
  free: os.freemem(),
}
console.log(usemem);

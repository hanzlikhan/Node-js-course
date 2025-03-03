const chalk = require('chalk');

// Use chalk for colorful output
console.log(chalk.red('Success: Everything is working perfectly!'));

const os = require('os');

// info about the current user 
const user = os.userInfo() 
console.log(user);

// method returns the system uptime in seconds

console.log(`the system Uptime is ${os.uptime()} seconds`);

const currOS = {
  name: os.type(),
  release: os.release(),
  totalMem : os.totalmem(),
  freeMem : os.freemem(),
}
console.log(currOS);




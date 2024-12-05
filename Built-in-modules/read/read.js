const fs = require('fs');
fs.readFileSync('example.txt','utf8', (err, data)=>{
  if (err){
console.log(err);
 return;
  } else{
    console.log(data);
  }
})
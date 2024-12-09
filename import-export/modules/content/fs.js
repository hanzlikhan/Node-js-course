// const { readFileSync, writeFileSync } = require('fs');
// const first = readFileSync('first.txt', 'utf8');
// const sec = readFileSync('sec.txt', 'utf8');
// console.log(first, sec);


// writeFileSync('third.txt', `hello this is the third file and this is the text of the ${first} and this is ${sec}`)
// const third = readFileSync('third.txt', 'utf8')
// console.log(third);

const {readFile , writeFile} = require('fs');
readFile('first.txt', 'utf8', (err, data) => {
  if (err) return console.log(err);
  else{
    const first = data;
    writeFile('fourth.txt', 'this is the fourth file', (err, res)=>{
      if (err) return console.log(err);
      else{
        console.log(res, first);
        const four = readFile('fourth.txt', 'utf8' , (err, data) => {
          if(err) return console.log(err);
          else{
            console.log(data);
          }
        })
      }
    })
    
  }
}
)
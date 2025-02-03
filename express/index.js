const express = require('express');
// it help to make server side app
const app = express();

// ports are the logical endpoints of a netwok connection that is used to exhange information between a web server and a web client.
let port = 3000;

app.listen(port, ()=>{
  console.log('listening on port ' + port);
})


// method ->  app.use()
// every method request will listen by this method 

// app.use((req, res)=>{
//     console.log("request recieved ");
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li><li>banana</li></ul>";
//     res.send(code);
    
// })

// app.get("/apple", (req, res)=>{
//   res.send("you are contacted by Apple")
// })

// app.get("/orange", (req, res)=>{
//   res.send("you are contacted by orange")
// })

// app.get("/banana", (req, res)=>{
//   res.send("you are contacted by banana")
// })

// app.get("*",(req,res)=>{
//   res.send("you are searching for the wrong path")
// })



app.get("/:username/:id", (req, res)=>{
  let {username , id} = req.params
  console.log(req.params);
  res.send(`welcome to the page of @${username}`)
  
})
//http request are text base 

// console.log(app)

// Define a route
// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });

// // Start the server
// const PORT = process.env.PORT || 3001; // Change port to 3001 or any other free port
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

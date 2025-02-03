const express = require("express");
const app = express();
const  path = require("path");
const port  = 3000;
app.use(express.static(path.join(__dirname, 'public')));
// set different things 
// template engine = > to create a template 
app.set('view engine', 'ejs');

// giving right path to the right directory then it should necessary to set view path
app.set("views", path.join(__dirname, '/views'))
app.get('/', (req, res) =>{
  res.render("home.ejs");
})

app.get('/hello', (req, res) =>{
  res.send(" hello i am hanzla ")
})

app.get("/roledice", (req, res) =>{
  let diceValue = Math.floor(Math.random() * 6) + 1;
  res.render("roledice.ejs",{num: diceValue})
})

app.get('/ig/:username', (req, res) => {
  const instaData = require('./data.json'); 
  const username = req.params.username; // ✅ Extract username from URL
  const data = instaData[username]; // ✅ Get the user data

  if (!data) {
    return res.send("User not found"); // Handle case where username does not exist
  }

  res.render("instagram.ejs", { data });
});


app.listen(port,()=>{
  
  console.log(`Server running at http://localhost:${port}`);
});
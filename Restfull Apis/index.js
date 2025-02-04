const express = require('express');
const app = express();
const port = 3000; 
const path = require('path');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.set(express.static(path.join(__dirname, "public")));
app.listen(port , ()=>{
    console.log('Server is running on port 3000');
})
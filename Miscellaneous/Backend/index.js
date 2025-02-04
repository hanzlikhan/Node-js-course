const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Allow dynamic port assignment

//Middleware for the post request 

// handle post requests
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// GET route for /register
app.get('/register', (req, res) => {
  let {user , password} = req.query   // all info which is sent from client side through get method is stored in req.query
  res.send(`Standard GET response, Welcome ${user}`);
});

// POST route for /register
app.post('/register', (req, res) => {
// we can't use req.query here coz we have to pass sensitive information which is vidible in this method and we can't use req.query here.

// can use req.body here but it is not specify the information that's why we need to use other two lines 
  let {user , password} = req.body;
  res.send('Standard POST response ' + user);
});

// Start server with error handling
const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use. Trying a different port...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
};

startServer(port);

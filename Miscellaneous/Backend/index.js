const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Allow dynamic port assignment

app.get('/register', (req, res) => {
  res.send('standard GET response from server');
});

app.post('/register', (req, res) => {
  res.send('standard POST response from server');
});

// Handle port in use error
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is in use. Trying a different port...`);
    server.listen(port + 1);
  } else {
    console.error(err);
  }
});

const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
const PORT = process.env.PORT || 3001; // Change port to 3001 or any other free port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

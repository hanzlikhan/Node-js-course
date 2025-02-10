
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Hello, JSON!' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
    }
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

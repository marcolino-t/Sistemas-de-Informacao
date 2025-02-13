const http = require('http');
const hostman = '127.0.0.1';
const port = 3001;
const serv = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Imundo!');
});

serv.listen(port, hostman, () => {
    console.log(`Server running at http://${hostman}:${port}/`);
});

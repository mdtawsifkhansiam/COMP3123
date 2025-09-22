nvvar http = require('http');
var employeeModule = require('./Employee');
console.log('Lab 03 - NodeJs');

const port = process.env.PORT || 8081;

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({error: http.STATUS_CODES[405]}));
        return;
    }

    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Welcome to Lab Exercise 03</h1>');
        return;
    }

    if (req.url === '/employee') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(employeeModule.getAll()));
        return;
    }

    if (req.url === '/employee/names') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(employeeModule.getNamesSorted()));
        return;
    }

    if (req.url === '/employee/totalsalary') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({total_salary: employeeModule.getTotalSalary()}));
        return;
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({error: http.STATUS_CODES[404]}));
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

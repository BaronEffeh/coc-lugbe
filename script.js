const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-type', 'text/plain');

    if (req.url == '/index') {
        res.write('Home Page');
    } else if (req.url == '/about') {
        res.write('About Page');
    } else if (req.url == '/contact') {
        res.write('Contact Page');
    } else if (req.url == '/sermon') {
        res.write('Weekly Sermon');
    } else {
        res.write('Error 404! Page not found');
    }
    res.end();
})

server.listen(8000, 'localhost', () => {
    console.log('Server is listening on port 8000');
});
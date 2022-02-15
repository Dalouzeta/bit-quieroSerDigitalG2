const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Este es mi servidor B)</h1>`);
    res.end();
});

server.listen(3000, () => {
    console.log("Mi pagina se esta ejecutando");
})
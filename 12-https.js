const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end("Here is our about page");
    }
    res.end(`
    <h1>Oppsss!!!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back to home</a>
    `)
    // res.write('Welcome to our home page');
    // res.end()
})

server.listen(5000)
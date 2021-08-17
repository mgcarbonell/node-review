const http = require('http');



const server = http.createServer((req, res) => {
  // function body
  // console.log(req);
  // console.log(req.url, req.method, req.headers);
  // process.exit()
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit"></button></form></body>');
    res.write('</html>');
    res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  // write allows us to write data in a response
  res.write('<html>');
  res.write('<head><title>Hello, World</title></head>');
  res.write('<body><h1>Hello from a node.js server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
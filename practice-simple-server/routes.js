const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write(`
      <body>
        <h1>Hello!</h1>
        <form action="/create-user" method="POST">
          <input type="text" name="username">
            <button type="submit">
              Send
            </button>
        </form>
      </body>
    `)
    res.write('</html>');
    return res.end();
  };

  if (url === '/users') {
    // return a list of dummy users
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<ul><li>User1</li></ul>');
    res.write('</html>');
    return res.end();
  };

  if (url === '/create-user') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  };


  // if (url != '/users' && url != '/') {
  //   res.write('<html>')
  //   res.write('<body><h1>Page Not Found</h1></body>')
  //   res.write('</html>')
  // };

}

module.exports = requestHandler;
const http = require('node:http');
const data = require('./data.js');

const server = http.createServer((req, res) => {
res.end(`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navidad</title>
  </head>
  <body>
    <h1>${data.title}</h1>
    <h2>${data.subtitle}</h2>
    <p>${data.description}</p>
  </body>
</html>`);

});
server.listen(0, () => {
  console.log(
    `Server listening on port http://localhost:${server.address().port}`
  );
});



  /*res.writeHead(200, { 'Content-Type': 'text/html' });

  const htmlContent = `<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Navidad</title>
      </head>
      <body>
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>
        <p>${data.description}</p>
      </body>
    </html>`;

  res.end(htmlContent);
});

server.listen(0, () => {
  console.log(
    `Server listening on port http://localhost:${server.address().port}`
  );
});*/

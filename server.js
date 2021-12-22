const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    if (req.url.split("/")[1] == "salom") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("vaaleykum assalom");
    }
    if (req.url.split("/")[1] == "alek") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("Assalomu aleykum");
    }
    if (req.url.split("/")[1] == "ismingiz") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Abduhalim");
    }
    if (req.url.split("/")[1] == "yoshingiz") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("22");
    }
    if (req.url.split("/")[1] == "univeringiz") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("Inha");
    }
  }
});

server.listen(9999, () => {
  console.log(9999);
});

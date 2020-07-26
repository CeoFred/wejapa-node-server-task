const http = require("http");

http
  .createServer((req, res) => {
    const sendHtml = (messge) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(messge);
      res.end();
    };

    if (req.method === "POST" && req.url === "/") {
      const name = req.body.name;
      return sendHtml(`Hello ${name}, Welcome to WeJapa Internships`);
    } else if (req.method === "GET" && req.url === "/") {
      return sendHtml("Hello World, Welcome to WeJapa Internships");
    }
  })
  .listen(3000, () => {
    console.log("server start at port http://localhost:3000");
  });

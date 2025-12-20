const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to Home page");
  } else if (req.url === "/about") {
    res.write("This is about page");
  } else {
    res.write("Route not found");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});

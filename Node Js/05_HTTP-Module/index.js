const http = require("node:http");
const fs = require("node:fs");

//send json
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("serve json");
//   } else if (req.url === "/api") {
//     const data = { name: "Tejas", age: 31, success: true };
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(data));
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not Found");
//   }
// });

//send html
const server = http.createServer((req, res) => {
  if (req.url === "/html") {
    const html = fs.readFileSync("index.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});

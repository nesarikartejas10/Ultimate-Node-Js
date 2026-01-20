const express = require("express");
const status = require("express-status-monitor");
const fs = require("node:fs");
const zlib = require("zlib");

const app = express();
app.use(status());

// app.get("/", (req, res) => {
//   const readable = fs.createReadStream("50MB-TXT-FILE.txt", "utf-8");
//   readable.on("data", (chunk) => {
//     res.write(chunk.toString());
//   });

//   readable.on("end", () => {
//     res.end();
//   });
// });

app.get("/", (req, res) => {
  fs.createReadStream("./50MB-TXT-FILE.txt", "utf-8").pipe(
    zlib.createGzip().pipe(fs.createWriteStream("./sample.zip")),
  );
  res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

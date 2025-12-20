const fs = require("node:fs");
const path = require("node:path");

const fileName = "sync.txt";
const filePath = path.join(__dirname, fileName);
console.log(filePath);

//1. write file

fs.writeFileSync(filePath, "write initial data\n", { encoding: "utf-8" });

//2. read file data
const data = fs.readFileSync(filePath, { encoding: "utf-8" });

console.log(data);

//3. append file data
fs.appendFileSync(filePath, "append a new data\n", { encoding: "utf-8" });

//4. delete file
// fs.unlinkSync(filePath);

//5. stat
const stats = fs.statSync(filePath);
console.log(stats);

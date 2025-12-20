const fs = require("node:fs");
const path = require("node:path");

const fileName = "async.txt";
const filePath = path.join(__dirname, fileName);

//1. write file
fs.writeFile(
  filePath,
  "This is asyn file data\n",
  { encoding: "utf-8" },
  (err) => {
    if (err) console.log(err);

    console.log("File is successfully created");
  }
);

//2. read file data

fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

//3. append file data
fs.appendFile(
  filePath,
  "new asyc data added\n",
  { encoding: "utf-8" },
  (err) => {
    if (err) console.log(err);
    console.log("new data added successfully");
  }
);

//4. delete file
fs.unlink(filePath, (err) => {
  if (err) console.log(err);
  console.log("File deleted successfully");
});

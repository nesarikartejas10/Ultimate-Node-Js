const fs = require("node:fs/promises");
const path = require("node:path");

const fileName = "async-promise.txt";
const filePath = path.join(__dirname, fileName);

//1. write file

const writeFile = async () => {
  try {
    await fs.writeFile(filePath, "Hello i am tejas...\n", {
      encoding: "utf-8",
    });

    console.log("File is successfully created");
  } catch (error) {
    console.log(error);
  }
};

// writeFile();

//2. read file

const readFile = async () => {
  try {
    const data = await fs.readFile(filePath, { encoding: "utf-8" });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// readFile();

//3. append file

const addData = async () => {
  try {
    await fs.appendFile(filePath, "new promise data added", {
      encoding: "utf-8",
    });
    console.log("New data added successfully");
  } catch (error) {
    console.log(error);
  }
};

addData();

//4. delete file

const deleteFile = async () => {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    console.log(error);
  }
};

deleteFile();

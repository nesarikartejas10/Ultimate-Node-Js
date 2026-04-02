const fs = require("node:fs");

//Synchronous Operation

//1.Reading Data
// const data = fs.readFileSync("./sample.txt", "utf-8");
// console.log(data);

//2.Writing in a file
// fs.writeFileSync(
//   "./sample2.txt",
//   "Twinkle twinkle little star\nHow I wonder what you are?",
// );

// fs.writeFileSync(
//   "./sample.txt",
//   "For detailed information,\nsee the documentation of the asynchronous version of this API",
// );

//3.Appending data in file
// fs.appendFileSync("./sample.txt", "\nTwinkle twinkle little star");

//4.Deleting file
// fs.unlinkSync("./sample2.txt");

//5.Copying data in file
// fs.copyFileSync("./sample.txt", "./demo.txt");

//6.Statistical data
// const data = fs.statSync("./demo.txt");
// console.log(data);

// Asynchronous Opeartion

//1.Reading Data
// fs.readFile("./demo.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error while reading file data", err.message);
//   }
//   console.log(data);
// });

//2.Writing in a file
// fs.writeFile("./demo2.txt", "Welcome to node js env", (err) => {
//   if (err) {
//     console.log("Error while writing data in file", err.message);
//   }
//   console.log("File writing successfully");
// });

//3.Appending data in file
// fs.appendFile("./demo2.txt", "\nHello, I am Tejas", (err) => {
//   if (err) {
//     console.log("Error while appending data in file", err.message);
//   }
//   console.log("File append successfully");
// });

//4.Deleting file
fs.unlink("./demo2.txt", (err) => {
  if (err) {
    console.log("Error while deleting file", err.message);
  }
  console.log("File deleted successfully");
});

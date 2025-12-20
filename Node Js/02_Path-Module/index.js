const path = require("node:path");

console.log(__filename);

console.log(__dirname);

console.log(path.parse(__filename));

console.log(path.basename(__filename)); //index.js

console.log(path.basename(__filename, ".js")); //index

console.log(path.extname(__filename)); //.js

console.log(path.dirname(__filename));

console.log(path.join(__filename, "upload", "Image.png"));

console.log(path.resolve("upload", "image.png")); //complete absolute path from root

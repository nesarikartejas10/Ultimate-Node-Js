const crypto = require("node:crypto");

//Hashing
const hash = crypto.createHash("sha256");

hash.update("password123");
const hashedPassword = hash.digest("hex");
console.log(hashedPassword);

//generate secure random values(token/otp)
const OTP1 = crypto.randomBytes(2).toString("hex"); //4 digit otp in string
console.log(OTP1);

//or

const OTP2 = crypto.randomInt(1000, 9999); //4 digit otp in number
console.log(OTP2);

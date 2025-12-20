const { name, luckyNumber, add, sub } = require("./mathOperation");
const { currentDate, currentYear } = require("./logger");

console.log(add(20, 30));
console.log(sub(50, 30));

console.log(currentDate());
console.log(currentYear());

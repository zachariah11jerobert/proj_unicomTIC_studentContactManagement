const ps = require("prompt-sync");
const prompt = ps({ sigint: true });

let num1 = parseFloat(prompt("Enter Number 1 : "));
let num2 = parseFloat(prompt("Enter Number 2 : "));

let answer = num1 + num2;
console.log(`Total is : ${answer}`);

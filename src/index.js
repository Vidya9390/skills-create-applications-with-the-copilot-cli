#!/usr/bin/env node
/**
Node.js CLI Calculator
Supports: add (+), subtract (-), multiply (*), divide (/)
Usage: node src/index.js <operator> <num1> <num2>
Operators: add, subtract, multiply, divide or + - * /
*/
const calc = require('./calculator');
const [,, op, aStr, bStr] = process.argv;
if (!op || !aStr || !bStr) { console.error('Usage: node src/index.js <operator> <num1> <num2>'); process.exit(1); }
const a = Number(aStr), b = Number(bStr);
if (Number.isNaN(a) || Number.isNaN(b)) { console.error('Both operands must be numbers'); process.exit(1); }
try {
  let result;
  switch (op) {
    case 'add': case '+': result = calc.add(a, b); break;
    case 'subtract': case 'sub': case '-': result = calc.subtract(a, b); break;
    case 'multiply': case 'mul': case '*': result = calc.multiply(a, b); break;
    case 'divide': case 'div': case '/': result = calc.divide(a, b); break;
    default: console.error('Unsupported operator. Use add, subtract, multiply, divide or + - * /.'); process.exit(2);
  }
  console.log(result);
} catch (e) {
  console.error('Error:', e.message);
  process.exit(1);
}

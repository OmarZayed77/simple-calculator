const mul = (num1, num2) => num1*num2;

module.exports = (first, ...args) => args.reduce(mul, first);
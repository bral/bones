var
  esprima = require('esprima');

console.log(JSON.stringify(esprima.parse('var answer = 42', {
  loc: false,
  range: false,
  raw: false,
  tokens: false,
  comment: false
}), null, 2));

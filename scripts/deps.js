var
  fs = require('fs'),
  esprima = require('esprima'),
  parseopts = {
    comment: false,
    raw: false,
    loc: false,
    range: false,
    tokens: false
  };

function findDeps (ast) {
  var deps = [];

  if (ast.type && ast.type == 'Program') {
    try {
      ast.body[0].expression.arguments[0].elements.forEach(function (d) {
        var
          fn = 'src/' + d.value + '.js',
          idx = fn.lastIndexOf('/');
        deps.push(fn);
        deps.push(fn.slice(0,idx+1) + '.' + fn.slice(idx+1) + '.d');
      });
    } catch (o_O) { }
  }

  return deps;
}

process.argv.slice(2).forEach(function (v, i, a) {
  try {
    var
      jsFileName = v,
      jsFileContents = fs.readFileSync(v),
      ast = esprima.parse(jsFileContents, parseopts)
      deps = findDeps(ast);
      console.log('build/plain/' + jsFileName + ': ' + (findDeps(ast)).join(' '));
  } catch (o_O) {
    console.log('o_O');
    console.log(o_O);
  }
});

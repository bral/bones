var
  fs = require('fs'),
  sn = require('source-map').SourceNode,
  esprima = require('esprima'),
  escodegen = require('escodegen'),
  parseopts = {
    comment: true,
    raw: true,
    loc: true,
    range: true,
    tokens: true
  },
  genopts = {
    format: {
      indent: {
        style: '\t'
      },
      compact: false
    },

    comment: true
  };

process.argv.slice(2).forEach(function (v, i, a) {
  try {
    var
      jsFileName = v,
      jsFileContents = fs.readFileSync(v),
      ast = esprima.parse(jsFileContents, parseopts),
      gen;
      
      //genopts.sourceMap = jsFileName;
      gen = escodegen.generate(ast, genopts);

      console.log('====[ ' + jsFileName + ' ]====');
      console.log(gen);
  } catch (o_O) {
    console.log('o_O');
    console.log(o_O);
  }
});

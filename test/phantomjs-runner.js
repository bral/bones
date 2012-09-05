(function () {
  var
    system = require('system'),
    passes = 0,
    failures = 0,
    page = new WebPage();

  page.onConsoleMessage = function (msg) {
    console.log(msg);
    if (msg.indexOf('PASS') === 0) {
      passes++;
    } else if (msg.indexOf('FAIL') === 0) {
      failures++;
    } else if (msg == 'DONE') {
      console.log('Passed: ' + passes);
      console.log('Failed: ' + failures);
      phantom.exit(failures > 0 ? -1 : 0);
    }
  };

  page.onResourceRequested = function (req) {
  };

  page.onResourceReceived = function (resp) {
  };

  page.open('test/index.html', function (status) {
    if (status == 'success') {
    } else {
      console.log('There was an error loading test/index.html');
      phantom.exit(-1);
    }
  });
})();

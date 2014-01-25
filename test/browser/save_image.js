var page = require('webpage').create();
page.open('http://localhost:9000/', function() {
  page.render('example.png');
  phantom.exit();
});

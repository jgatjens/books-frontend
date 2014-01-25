var page = require('webpage').create();
var system = require('system');

address = system.args[1];

page.open(address, function(status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is ' + title);
  
  phantom.exit();

});
var page = require('webpage').create(),
  system = require('system');


page.onResourceRequested = function(request) {
  console.log('Request ' + JSON.stringify(request.url, undefined, 4));
};
page.onResourceReceived = function(response) {
  console.log('Receive ' + JSON.stringify(response.url, undefined, 4));
};

url = system.args[1];

if (url) {
	page.open(url, function() {
		 phantom.exit();
	});

} else {

	page.open('http://www.google.com', function() {
		 phantom.exit();
	});
} 
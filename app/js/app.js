

App.init = function() {
	// global scope to test
	books = new App.models.Books();
	
	books.fetch();

	books.fetch(function(data) {
		console.log(data);
	});
}

$(document).ready( function() {
	App.init();	
});

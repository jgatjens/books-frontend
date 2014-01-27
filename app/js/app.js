/**
* @title: Main entry
* @author: Jairo Gätjens
* @created-date: 01-20-2014
* @email: jgatjens@gmail.com
*/

'use strict';

var App = App || {};

// start application
App.init = function() {

  // create an instace of Books model
	var books = new App.models.Books();

  // fetch all the books inside books mongo collection
	books.fetch(function(data) {
    console.log(data);
	});

};

// Waits for dom to be ready to manipulate it
$(document).ready( function() {
	App.init();
});

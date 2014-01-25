'use strict';

var App = App || {};

// initialize model obj container
App.models = {};

// Constructor pattern
function Books( url, data) { 
  this.type = 'model';		
  this.url = url || 'books';
  this.data = data || {};
}


Books.prototype.fetch = function(cb) {
	var _self = this;
	$.get(App.conf.rootUrl + this.url  , function( data ) {
		// console.log('xhr request send it successfully'); 	
	}).done(function(data) {

  		_self.data = data;
  		if (cb) cb(data);

	}).fail(function(err) {			
  		if (cb) cb(err);
	});
};

Books.prototype.get = function(id) {};
Books.prototype.edit = function(id, put) {};
Books.prototype.delete = function(id) {};

App.models.Books = Books;
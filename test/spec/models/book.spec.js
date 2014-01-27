describe("Api v1 Book's App", function() {

  	// console.log($);

	describe("Models", function() {

	// beforeEach(function() {
	// });
	// afterEach(function() {
	// });

	  it('We need an object to namespace all the funcionality', function() {

	  	// we validate that the var app has been created
		App.should.exist;

		// also that the type must be an object
	  	expect(App).to.be.a('object');

	  });

	  it('User can retrieve the book list paginated', function(done) {
		var bookCollection = new App.models.Books();
			bookCollection.fetch(function(data) {

				expect(data).to.be.an('array');
				expect(data).to.not.be.a('null');
				expect(data).to.have.length.above(3);

 				done();
			});

	  });

	});


});

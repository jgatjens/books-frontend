define(['text!./book.hbs'], function(template) {
	return {
    initialize: function() {
      this.html(template);
    }
  };
});
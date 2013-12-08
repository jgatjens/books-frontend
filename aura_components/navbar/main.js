require.config({
  paths: {
    dropdown:  'bower_components/bootstrap/js/dropdown'
  }
});

define(['text!./navbar.hbs', 'dropdown'], function(template) {
  return {


    
    initialize: function() {
      this.html(template);
      this.sandbox.dom.attachEvents(this.events, this);
    },

    // Book events
    events: {

    	// active books list display
      'click .js-display-list': function (e) {
      	// this.container.addClass('grid-list');
      	this.sandbox.dom.changeView('grid-list');
      },

    	// active books block display
      'click .js-display-block': function (e) {
      	this.sandbox.dom.changeView();
      }
    }

  };
});


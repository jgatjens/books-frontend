require.config({
  paths: {
    dropdown:  'bower_components/bootstrap/js/dropdown'
  }
});

define(['text!./navbar.hbs', 'dropdown'], function(template) {
  return {
    initialize: function() {
      this.html(template);
    }
  };
});


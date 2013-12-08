define({

  initialize: function(app) {

    // Backbone like delegateEvents...
    
    app.sandbox.dom.attachEvents = function(events, context) {
      var delegateEventSplitter = /^(\S+)\s*(.*)$/;
      _.each(events || [], function(fn, key) {
        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        if (_.isString(fn)) { fn = this[fn]; }
        this.$el.find(selector).on(eventName, fn.bind(this));
      }.bind(context));
    };

    // jQuery container id

    app.sandbox.dom.containerId = $('body > .container');

    // Change list display

    app.sandbox.dom.changeView = function (className) {
      
      if (className) {
        app.sandbox.dom.containerId.addClass(className);
        this.className = className;
      } else {
        console.log(this.className);
        if (this.className) {
          app.sandbox.dom.containerId.removeClass(this.className);
        }
      }

    };
  }

});
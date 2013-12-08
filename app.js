require(['bower_components/aura/lib/aura'], function(Aura) {
  

	var app = new Aura({
    github: { }
  });
  // app.use('aura_extensions/aura-github');
  app.use('aura_extensions/aura-utils');
  
  app.use(function(app) {
    window.App =  app;
  });

  // Aura
  app.start({ widgets: 'body' });

});

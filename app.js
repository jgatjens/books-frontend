require(['bower_components/aura/lib/aura'], function(Aura) {
  Aura()
    .start({ components: 'body' }).then(function() {
      console.warn('Aura started...');
    });
});

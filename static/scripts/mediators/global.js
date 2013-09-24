(function() {
  define(['jquery', 'modules/documentation'], function($, Documentation) {
    return $(function() {
      var documentation;
      documentation = new Documentation({
        elements: {
          nav: '.nav',
          humans: '.for-humans',
          machines: '.for-machines'
        }
      });
      return documentation.load();
    });
  });

}).call(this);

/*
//@ sourceMappingURL=global.js.map
*/
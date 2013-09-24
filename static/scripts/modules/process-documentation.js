(function() {
  define(['jquery', 'prettify', 'jquery.fixto', 'modules/scrollspy'], function($, __prettify, __fixTo, Scrollspy) {
    var ProcessDocumentation;
    return ProcessDocumentation = (function() {
      function ProcessDocumentation(options) {
        this.options = options;
        this.elements = options.elements;
      }

      ProcessDocumentation.prototype.initPrettyPrint = function() {
        $('pre').addClass('prettyprint');
        return prettyPrint();
      };

      ProcessDocumentation.prototype.initFixTo = function() {
        var el;
        el = this.elements;
        $(el.nav).fixTo('body');
        $(el.humans).fixTo('.document');
        return $(el.machines).each(function(i, obj) {
          var $document;
          $document = $(obj).parents('.document');
          return $(obj).fixTo($document);
        });
      };

      ProcessDocumentation.prototype.addTableWrapper = function() {
        return $('.content').find('table').wrap('<div class="definitions" />');
      };

      ProcessDocumentation.prototype.initProcess = function() {
        var scrollSpy;
        this.addTableWrapper();
        this.initPrettyPrint();
        this.initFixTo();
        scrollSpy = new Scrollspy();
        return scrollSpy.init();
      };

      return ProcessDocumentation;

    })();
  });

}).call(this);

/*
//@ sourceMappingURL=process-documentation.js.map
*/
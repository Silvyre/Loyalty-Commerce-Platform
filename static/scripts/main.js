(function() {
  require.config({
    baseUrl: '/static/scripts/',
    waitSeconds: 30,
    shim: {
      'bootstrap.scrollspy': {
        deps: ['jquery']
      },
      'jquery.fixto': {
        deps: ['jquery']
      },
      'Handlebars': {
        exports: 'Handlebars'
      }
    },
    paths: {
      'jquery': '../components/jquery/jquery',
      'Handlebars': '../components/handlebars.js/dist/handlebars',
      'prettify': '../components/google-code-prettify/src/prettify',
      'showdown': '../components/showdown/src/showdown',
      'jquery.fixto': '../components/fixto/dist/fixto',
      'bootstrap.scrollspy': '../components/bootstrap/js/scrollspy',
      'json': '../components/requirejs-plugins/src/json',
      'mdown': '../components/requirejs-plugins/src/mdown',
      'text': '../components/requirejs-plugins/lib/text',
      'markdownConverter': '../components/requirejs-plugins/lib/Markdown.Converter',
      'hbars': '../components/requirejs-handlebars/hbars',
      'global': 'mediators/global'
    }
  });

  require(['global'], function(global) {});

}).call(this);

/*
//@ sourceMappingURL=main.js.map
*/
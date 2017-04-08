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
      'nprogress': {
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
      'nprogress': '../components/nprogress/nprogress',
      'jquery.fixto': '../components/fixto/dist/fixto',
      'bootstrap.scrollspy': '../components/bootstrap/js/scrollspy',
      'async': '../components/requirejs-plugins/src/async',
      'json': '../components/requirejs-plugins/src/json',
      'mdown': '../components/requirejs-plugins/src/mdown',
      'text': '../components/requirejs-plugins/lib/text',
      'markdownConverter': '../components/requirejs-plugins/lib/Markdown.Converter',
      'hbars': '../components/requirejs-handlebars/hbars',
      'global': 'mediators/global'
    }
  });

  require(['nprogress'], function(NProgress) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) !== true) {
      NProgress.configure({
        showSpinner: false
      });
      NProgress.start();
    } else {
      $('body').addClass('mobile');
    }
    return require(['global'], function(global) {
      return NProgress.done();
    });
  });

}).call(this);

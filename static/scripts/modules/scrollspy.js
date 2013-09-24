(function() {
  define(['bootstrap.scrollspy'], function(__scrollSpy) {
    var Scrollspy;
    Scrollspy = (function() {
      function Scrollspy() {}

      Scrollspy.prototype.init = function() {
        $('body').scrollspy({
          target: '#main-navigation',
          offest: 0
        });
        return $('#main-navigation').on('activate.bs.scrollspy', function(evt) {
          var $active, $ct, $dom, $navLi, hash, id;
          $ct = $(evt.currentTarget);
          $active = $ct.find('.active');
          $navLi = $('.nav li');
          $navLi.removeClass('open-subnav');
          $active.addClass('open-subnav');
          if ($active.parents('active')) {
            $active.parents('li').removeClass('active').addClass('open-subnav');
          }
          hash = $active.find('> a').attr('href');
          id = hash.replace('#', '');
          $dom = $(hash);
          $dom.attr('id', '');
          window.location.hash = hash;
          return $dom.attr('id', id);
        });
      };

      return Scrollspy;

    })();
    return Scrollspy;
  });

}).call(this);

/*
//@ sourceMappingURL=scrollspy.js.map
*/
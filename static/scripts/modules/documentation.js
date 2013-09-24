(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['modules/process-documentation', 'jquery', 'json!/Voyager/documents.json', 'hbars!../../templates/navigation', 'hbars!../../templates/section', 'hbars!../../templates/article'], function(ProcessDocumentation, $, documents, tmplNavigation, tmplSection, tmplArticle) {
    var Documentation, _ref;
    Documentation = (function(_super) {
      __extends(Documentation, _super);

      function Documentation() {
        _ref = Documentation.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Documentation.prototype.attachArticleAndNav = function(id, parent) {
        var $parentLink;
        if (parent === '') {
          $('.nav').append(tmplNavigation(this.oneArticle));
          $('#documentation').append(tmplSection(this.oneArticle));
          return $('#section-' + id).append(tmplArticle(this.oneArticle));
        } else {
          $parentLink = $('a[href="#' + parent + '"]');
          if ($parentLink.parent().children('ul').length === 0) {
            $parentLink.parent().append('<ul />');
          }
          $parentLink.parent().find('ul').append(tmplNavigation(this.oneArticle));
          return $('#section-' + parent).append(tmplArticle(this.oneArticle));
        }
      };

      Documentation.prototype.createArticle = function(article, content, example) {
        var id, parent;
        id = article.url.replace('/', '').replace('.md', '');
        parent = article.parent;
        this.oneArticle = {
          id: id,
          title: article.title,
          content: content,
          example: example
        };
        return this.attachArticleAndNav(id, parent);
      };

      Documentation.prototype.load = function() {
        var _this = this;
        return $.each(documents.articles, function(i, article) {
          var markdownFiles;
          markdownFiles = ['mdown!' + documents.baseUrl + article.url];
          if (article.exampleUrl !== '') {
            markdownFiles.push('mdown!' + documents.baseUrl + article.exampleUrl);
          }
          return require(markdownFiles, function(content, example) {
            _this.createArticle(article, content, example);
            if ((i + 1) === documents.articles.length) {
              return _this.initProcess();
            }
          });
        });
      };

      return Documentation;

    })(ProcessDocumentation);
    return Documentation;
  });

}).call(this);

/*
//@ sourceMappingURL=documentation.js.map
*/

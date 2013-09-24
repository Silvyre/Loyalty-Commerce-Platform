define [
  'modules/process-documentation'
  'jquery'
  'json!/documents.json'
  'hbars!../../templates/navigation'
  'hbars!../../templates/section'
  'hbars!../../templates/article'
], (
  ProcessDocumentation
  $
  documents
  tmplNavigation
  tmplSection
  tmplArticle
) ->

  class Documentation extends ProcessDocumentation
    attachArticleAndNav: (id, parent) ->
      if parent is ''
        $('.nav').append tmplNavigation @oneArticle
        $('#documentation').append tmplSection @oneArticle
        $('#section-'+id).append tmplArticle @oneArticle
      else
        $parentLink = $('a[href="#'+parent+'"]')

        if $parentLink.parent().children('ul').length is 0
          $parentLink.parent().append '<ul />'

        $parentLink.parent().find('ul').append tmplNavigation @oneArticle
        $('#section-'+parent).append tmplArticle @oneArticle

    createArticle: (article, content, example) ->
      id      = article.url
                  .replace('/', '')
                  .replace('.md','')
      parent  = article.parent

      @oneArticle =
        id      : id
        title   : article.title
        content : content
        example : example

      @attachArticleAndNav(id, parent)

    load: ->
      $.each documents.articles, (i, article) =>

        markdownFiles = [
          'mdown!'+documents.baseUrl+article.url
        ]

        if article.exampleUrl isnt ''
          markdownFiles.push 'mdown!'+documents.baseUrl+article.exampleUrl

        require markdownFiles, (content, example) =>
          @createArticle(article, content, example)
          if (i+1) is documents.articles.length then @initProcess()

  return Documentation

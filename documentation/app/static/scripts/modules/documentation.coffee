define [
  'modules/process-documentation'
  'jquery'
  'json!../documents.json'
  'hbars!../../templates/navigation'
  'hbars!../../templates/section'
  'hbars!../../templates/article'
  'modules/load-markdown-documents'
], (
  ProcessDocumentation
  $
  documents
  tmplNavigation
  tmplSection
  tmplArticle
  markdownDocuments
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
      id      = article.id
      parent  = article.parent

      @oneArticle =
        id      : id
        title   : article.title
        content : content
        example : example

      @attachArticleAndNav(id, parent)

    load: ->
      $.each documents.articles, (i, article) =>

        id = article.id.replace(/\-/g, '_')
        content = markdownDocuments[id]

        if article.exampleId isnt ''
          exampleId = article.exampleId.replace(/\-/g, '_')
          example = markdownDocuments[exampleId]

        @createArticle(article, content, example)
        if (i+1) is documents.articles.length then @initProcess()

  return Documentation

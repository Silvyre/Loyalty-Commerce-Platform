define [
  'modules/process-documentation'
  'jquery'
  'json!../api-documents.json'
  'hbars!../../templates/navigation'
  'hbars!../../templates/api-section'
  'hbars!../../templates/api-article'
  'modules/load-markdown-documents'
], (
  ProcessDocumentation
  $
  documents
  tmplNavigation
  tmplApiSection
  tmplApiArticle
  markdownDocuments
) ->

  class ApiDocumentation extends ProcessDocumentation
    md: markdownDocuments

    attachArticleAndNav: (id, parent) ->
      if parent is ''
        $(@elements.nav).append tmplNavigation @oneArticle
        $(@elements.doc).append tmplApiSection @oneArticle
        $('#section-'+id).append tmplApiArticle @oneArticle
      else
        $parentLink = $(@elements.nav).find('a[href="#'+parent+'"]')

        if $parentLink.parent().children('ul').length is 0
          $parentLink.parent().append '<ul />'

        $parentLink.parent().find('ul').append tmplNavigation @oneArticle
        $('#section-'+parent).append tmplApiArticle @oneArticle

    createArticle: (article, content, example) ->
      id      = article.id
      parent  = article.parent

      @oneArticle =
        id      : id
        title   : article.title
        content : content
        example : example

      @attachArticleAndNav(id, parent)

    loadApiDocs: ->
      $('body').addClass 'api-page'
      $('#documentation').html '<div class="dark-bg" />'

      $.each documents.articles, (i, article) =>

        id = article.id.replace(/\-/g, '_')
        content = @md[id]

        if article.exampleId isnt ''
          exampleId = article.exampleId.replace(/\-/g, '_')
          example = @md[exampleId]

        @createArticle(article, content, example)
        if (i+1) is documents.articles.length then @initProcess()

  return ApiDocumentation

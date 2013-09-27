define [
  'modules/api-documentation'
  'jquery'
  'hbars!../../templates/navigation'
  'hbars!../../templates/article'
], (
  ApiDocumentation
  $
  tmplNavigation
  tmplArticle
) ->

  class Documentation extends ApiDocumentation
    groupHtml = (obj, el) ->
      id = $(obj).text().replace(/[\. ,():-]+/g, '-').toLowerCase()
      $set = $()
      $set.push obj
      next = obj.nextSibling

      while next
        if !$(next).is el
          $set.push next
          next = next.nextSibling
        else
          break

      if el is 'h2'
        $set.wrapAll '<section id="section-'+id+'" class="content-one-md" />'
      else
        $set.wrapAll '<article class="document" id="'+id+'">'

    urlQueryResult = (name) ->
      name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]')
      regex = new RegExp '[\\?&]' + name + '=([^&#]*)'
      results = regex.exec location.search

      decodeURIComponent(results[1].replace(/\+/g, " ")) if results isnt null


    buildNav: (obj, regularArticleNav, parent) ->
      if $(obj).is('h2')
        $('#doc-navigation .nav').append tmplNavigation regularArticleNav
      else
        $parentLink = $('a[href="#'+parent+'"]')

        if $parentLink.parent().children('ul').length is 0
          $parentLink.parent().append '<ul />'

        $parentLink.parent().find('ul').append tmplNavigation regularArticleNav

    cleanUpAndCreateNav: ->
      @regularArticle.find('h2').each (i, obj) ->
        groupHtml obj, 'h2'

      @regularArticle.find('h2, h3').each (i, obj) ->
        groupHtml obj, 'h3'

      @regularArticle.find('h2, h3').each (i, obj) =>
        id = $(obj).text().replace(/[\. ,():-]+/g, '-').toLowerCase()
        title = $(obj).text()
        parent = $(obj).parents('section').attr('id').replace('section-', '')

        regularArticleNav =
          id: id
          title: title

        @buildNav(obj, regularArticleNav, parent)


    loadDoc: (doc) ->
      id = doc.replace(/\-/g, '_')
      content =
        content: @md[id]

      @regularArticle = $(tmplArticle content)
      @cleanUpAndCreateNav()

      $('#documentation').append @regularArticle
      @initProcess()

    init: ->
      @doc = urlQueryResult 'doc'

      if @doc is 'api-reference'
        @loadApiDocs()
      else if @doc is undefined
        @loadDoc('getting-started')
      else
        @loadDoc(@doc)

  return Documentation

$ = require('jquery')
ApiDocumentation = require('./api-documentation.coffee')

tmplNavigation = require('../../templates/navigation.html')
tmplArticle = require('../../templates/article.html')


module.exports = class Documentation extends ApiDocumentation
  groupHtml = (obj, el) ->
    id = $(obj).text().replace(/[\. ,#():-]+/g, '-').toLowerCase()
    id = id.replace('\'','')
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
      $set.wrapAll '<section id="section-'+id+'" class="documents" />'
    else
      $set.wrapAll '<article class="document" id="'+id+'">'

  urlQueryResult: (query_string, parameter) ->
    parameter = parameter.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]')
    regex = new RegExp '[\\?&]' + parameter + '=([^&#]*)'
    results = regex.exec query_string

    decodeURIComponent(results[1].replace(/\+/g, " ")) if results isnt null

  buildNav: (obj, regularArticleNav, parent) ->
    if $(obj).is('h2')
      $(@elements.nav).append tmplNavigation regularArticleNav
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
      id = $(obj).text().replace(/[\. ,#():-]+/g, '-').toLowerCase()
      id = id.replace('\'','')
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

    $(@elements.doc).append @regularArticle
    @initProcess()

  init: ->
    @doc = @urlQueryResult location.search, 'doc'

    if @doc is 'api-reference'
      @loadApiDocs()
    else if @doc
      @loadDoc(@doc)
    else
      @loadDoc('getting-started')

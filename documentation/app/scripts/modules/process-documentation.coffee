$ = require('jquery');
require('fixto');

prettify = require('google-code-prettify');

Scrollspy = require('./scrollspy.coffee')
responsiveTables = require('./responsive-tables.coffee')


module.exports = class ProcessDocumentation
  constructor: (@options) ->
    if @options then {@elements} = @options

  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  initFixTo: ->
    el = @elements

    $(el.humans).fixTo '.document', mind: el.header
    $(el.machines).each (i, obj) ->
      $document = $(obj).parents '.document'
      $(obj).fixTo $document, mind: el.header

  scrollSpyController: (type) ->
    if type is 'init' then scrollSpy = new Scrollspy()
    hash = window.location.hash

    $imgs = $(@elements.doc).find 'img'
    imgLength = $imgs.length
    imgLoaded = 0

    initOrRefresh = =>
      if type is 'init'
        scrollSpy.init()
      else
        $('body').scrollspy 'refresh'
        $(@elements.nav).find('a[href="'+hash+'"]').parent().addClass 'active'

    @scrollToHash(hash, 200)

    if imgLength is 0
      initOrRefresh()
    else
      $imgs.on 'load', =>
        imgLoaded++

        if imgLoaded is imgLength
          initOrRefresh()

  processHtml: ->
    $('pre').addClass 'prettyprint'
    prettyPrint()

    $(@elements.doc).find('img').parent().addClass('center')
    $(@elements.doc).find('table').wrap '<div class="definitions" />'

    title = $('h1').text()
    $('title').text 'Points - '+title

    if @doc is undefined
      $(@elements.header).find('li:first').addClass 'active'
    else
      $(@elements.header).find('a:contains("'+title+'")').parent().addClass 'active'

  bindDocNavEvents: ->
    $(@elements.nav).find('a').on 'click', (evt) =>
      evt.preventDefault()
      hash = $(evt.currentTarget).attr('href')
      @scrollToHash(hash, 0)

  scrollToHash: (hash, time) ->
    if hash
      $('html, body').animate
        scrollTop: $(hash).offset().top, time

  bindHeaderNavEvents: ->
    $(@elements.header).find('a').on 'click', (evt) =>
      if history.pushState and @isMobile isnt true
        NProgress.start()
        evt.preventDefault()

        $ct = $(evt.currentTarget)
        currentUrl = $(@elements.header).find('.active a').attr 'href'
        url = $ct.attr 'href'
        title = $ct.text

        $(@elements.header).find('li').removeClass 'active'
        $ct.parent().addClass 'active'
        $('body').removeClass 'api-page'

        history.pushState(url: currentUrl, title, url)

        $(@elements.nav).empty()
        $(@elements.doc).empty()
        window.scrollTo(0,0)

        @reload()
        NProgress.done()

  bindPopstate: ->
    $activeLink = $(@elements.header).find('a[href="'+url+'"]')
    title = $activeLink.text()
    url = $activeLink.attr 'href'
    history.pushState(url: url, title, url)

    $(window).on 'popstate', (evt) =>
      $(@elements.header).find('li').removeClass 'active'
      $('body').removeClass 'api-page'
      $(@elements.nav).empty()
      $(@elements.doc).empty()

      @reload()

  reload: ->
    @init()
    @scrollSpyController()

  initProcess: ->
    @processHtml()
    responsiveTables 'table'
    if @isMobile isnt true then @initFixTo()
    @bindDocNavEvents()

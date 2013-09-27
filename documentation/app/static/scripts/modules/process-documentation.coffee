define [
  'jquery'
  'prettify'
  'jquery.fixto'
  'modules/scrollspy'
], (
  $
  __prettify
  __fixTo
  Scrollspy
) ->
  class ProcessDocumentation
    constructor: (@options) ->
      {@elements} = options

    initPrettyPrint: ->
      $('pre').addClass 'prettyprint'
      prettyPrint()

    initFixTo: ->
      el = @elements

      $(el.header).fixTo 'body'
      $(el.nav).fixTo 'body', mind: el.header
      $(el.humans).fixTo '.document', mind: el.header
      $(el.machines).each (i, obj) ->
        $document = $(obj).parents '.document'
        $(obj).fixTo $document, mind: el.header

    addTableWrapper: ->
      $(@elements.doc).find('table').wrap '<div class="definitions" />'

    centerImages: ->
      $(@elements.doc).find('img').parent().addClass('center')

    scrollToHash: (hash, time) ->
      if hash
        $('html, body').animate
          scrollTop: $(hash).offset().top, time

    bindDocNavEvents: ->
      $(@elements.nav).find('a').on 'click', (evt) =>
        evt.preventDefault()
        hash = $(evt.currentTarget).attr('href')
        @scrollToHash(hash, 0)

    activateTopNav: ->
      if @doc is undefined
        $('#lcp-nav').find('li:first').addClass 'active'
      else
        $('a[href="index.html?doc='+@doc).parent().addClass 'active'

    initProcess: ->
      @addTableWrapper()
      @centerImages()
      @initPrettyPrint()
      @initFixTo()
      @activateTopNav()
      @bindDocNavEvents()

      scrollSpy = new Scrollspy()
      hash = window.location.hash

      $imgs = $(@elements.doc).find 'img'
      imgLength = $imgs.length
      imgLoaded = 0

      if imgLength is 0
        scrollSpy.init()
        @scrollToHash(hash, 50)
      else
        $imgs.on 'load', =>
          imgLoaded++

          if imgLoaded is imgLength
            scrollSpy.init()
            @scrollToHash(hash)


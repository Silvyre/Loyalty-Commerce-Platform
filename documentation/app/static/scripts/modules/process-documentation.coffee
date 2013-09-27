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
      $('#documentation').find('table').wrap '<div class="definitions" />'

    centerImages: ->
      $('#documentation').find('img').parent().addClass('center')

    scrollToHash: ->
      hash = window.location.hash

      if hash isnt ''
        $('html, body').animate
          scrollTop: $(hash).offset().top, 50

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

      scrollSpy = new Scrollspy()
      scrollSpy.init()

      @scrollToHash()
      @activateTopNav()

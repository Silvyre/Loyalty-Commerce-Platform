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

      $(el.nav).fixTo 'body'
      $(el.humans).fixTo '.document'
      $(el.machines).each (i, obj) ->
        $document = $(obj).parents '.document'
        $(obj).fixTo $document

    addTableWrapper: ->
      $('.content').find('table').wrap '<div class="definitions" />'

    initProcess: ->
      @addTableWrapper()
      @initPrettyPrint()
      @initFixTo()

      scrollSpy = new Scrollspy()
      scrollSpy.init()

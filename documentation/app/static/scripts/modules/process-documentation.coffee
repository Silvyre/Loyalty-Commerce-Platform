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

    destroyFixTo: ->
      el = @elements

      $(el.header).fixTo 'destroy'
      $(el.nav).fixTo 'destroy'

    initScrollSpy: ->
      scrollSpy = new Scrollspy()
      hash = window.location.hash

      $imgs = $(@elements.doc).find 'img'
      imgLength = $imgs.length
    initScrollSpy: ->
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

    addTableWrapper: ->
      $(@elements.doc).find('table').wrap '<div class="definitions" />'

    centerImages: ->
      $(@elements.doc).find('img').parent().addClass('center')

    scrollToHash: (hash, time) ->
      if hash
        $('html, body').animate
          scrollTop: $(hash).offset().top, time

    bindHeaderNavEvents: ->
      $(@elements.header).find('a').on 'click', (evt) =>
        if history.pushState
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

          @destroyFixTo()
          @init()
          $('body').scrollspy 'refresh'

    bindPopstate: ->
      $activeLink = $(@elements.header).find('a[href="'+url+'"]')
      title = $activeLink.text()
      url = $activeLink.attr 'href'
      history.pushState(url: url, title, url)

      $(window).on 'popstate', (evt) =>
        url = evt.originalEvent.state.url

        $(@elements.header).find('li').removeClass 'active'
        $('body').removeClass 'api-page'
        $(@elements.nav).empty()
        $(@elements.doc).empty()

        @destroyFixTo()
        @init()
        $('body').scrollspy 'refresh'

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

    responsiveTables: ->
      $('table').each (table_id, table) ->
        $table = $(table)
        $th = $table.find('thead').find('th')
        $tr = $table.find('tbody').find('tr')
        labels = []
        entries = []
        entry = {}

        $th.each (i, th) ->
          labels[i] = $(th).text()

        $tr.each (row, tr) ->
          $(tr).find('td').each (i, td) ->
            value = $(td).html()
            entry['"'+labels[i]+'"'] = value

          entries.push entry
          entry = {}

        ul = '<ul id="table-list-id-'+table_id+'" class="list-from-table" />'
        $table.after(ul)

        $.each entries, (entry_id, entry) ->
          li = '<li><dl id="entry-id-'+entry_id+'"></dl></li>'

          $('#table-list-id-'+table_id).append(li)

          $.each labels, (i, label) ->
            dt = '<dt>'+label+'</dt>'
            dd = '<dd>'+entry['"'+label+'"']+'</dd>'

            $('#table-list-id-'+table_id).find('#entry-id-'+entry_id).append(dt + dd)

    initProcess: ->
      @addTableWrapper()
      @centerImages()
      @responsiveTables()
      @initPrettyPrint()
      @initFixTo()
      @activateTopNav()
      @bindDocNavEvents()

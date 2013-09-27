define ['jquery', 'modules/documentation'], ($, Documentation) ->

  $ ->
    documentation = new Documentation
      elements:
        doc: '#documentation'
        header: '#header'
        nav: '#doc-navigation .nav'
        humans: '.for-humans'
        machines: '.for-machines'

    documentation.init()


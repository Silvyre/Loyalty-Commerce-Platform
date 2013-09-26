define ['jquery', 'modules/documentation'], ($, Documentation) ->

  $ ->
    documentation = new Documentation
      elements:
        header: '#header'
        nav: '#doc-navigation .nav'
        humans: '.for-humans'
        machines: '.for-machines'

    documentation.init()


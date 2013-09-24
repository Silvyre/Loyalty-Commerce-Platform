define ['jquery', 'modules/documentation'], ($, Documentation) ->

  $ ->
    documentation = new Documentation
      elements:
        nav: '.nav'
        humans: '.for-humans'
        machines: '.for-machines'

    documentation.load()

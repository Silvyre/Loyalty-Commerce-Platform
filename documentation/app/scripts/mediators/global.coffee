Documentation = require('../modules/documentation.coffee');

module.exports = () =>
  documentation = new Documentation
    elements:
      doc: '#documentation'
      header: '#header'
      nav: '#doc-navigation .nav'
      humans: '.for-humans'
      machines: '.for-machines'

  documentation.init()
  documentation.scrollSpyController('init')
  documentation.bindHeaderNavEvents()
  if history.pushState and documentation.isMobile isnt true
    documentation.bindPopstate()

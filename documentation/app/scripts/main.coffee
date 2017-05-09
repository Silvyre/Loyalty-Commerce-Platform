window.jQuery = require('jquery');

nprogress = require('nprogress')
mediators = require('./mediators/global.coffee')

require('../styles/app.less')

if /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(global.navigator.userAgent) isnt true
  nprogress.configure showSpinner: false
  nprogress.start()
else
  $('body').addClass 'mobile'

mediators();
nprogress.done()

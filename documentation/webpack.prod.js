var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackMerge = require('webpack-merge');

var defaults = require('./webpack.default');

module.exports = webpackMerge(defaults, {
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '/static/documentation.css'
    })
  ]
});

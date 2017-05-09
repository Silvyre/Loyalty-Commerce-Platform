var webpackMerge = require('webpack-merge');

var defaults = require('./webpack.default');


module.exports = webpackMerge(defaults, {
  output: {
    publicPath: `/`
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          }
        ]
      }
    ],
  }
});

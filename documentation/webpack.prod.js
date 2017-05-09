var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var marked = require("marked");
var path = require('path');
var webpackMerge = require('webpack-merge');

var defaults = require('./webpack.default');


var resolve = function resolve(target) {
  return path.resolve(__dirname, target);
};

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
    new CleanWebpackPlugin(
      resolve('dist'),
      {
        exclude: ['.git']
      }
    ),
    new CopyWebpackPlugin([
      {
        context: resolve('app'),
        from: '*',
        to: resolve('dist')
      }
    ]),
    new ExtractTextPlugin({
      filename: 'documentation.css'
    })
  ]
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var marked = require("marked");
var path = require('path');

var renderer = new marked.Renderer();

const resolve = function resolve(target) {
  return path.resolve(__dirname, target);
};

module.exports = {
  entry: resolve('app/static/scripts/main.coffee'),
  output: {
    path: resolve('dist'),
    pathinfo: true,
    filename: 'static/documentation.js',
  },
  resolve: {
    modules: [
      resolve('.'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(coffee)$/,
        include: resolve('app/'),
        use: [{
          loader: 'coffee-loader',
          query: {
            name: '/static/[name].[ext]'
          }
        }]
      },
      {
        test: /\.(js)$/,
        include: resolve('app/'),
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.(md)$/,
        include: resolve('app/static/documents'),
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: 'markdown-loader',
            options: {
              renderer: renderer
            }
          }
        ],
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(html)$/,
        include: resolve('app/static/templates'),
        use: [{
          loader: 'handlebars-loader'
        }]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: '/static/media/[name].[ext]'
        }
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '/static/documentation.css'
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

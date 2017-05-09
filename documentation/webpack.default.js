var marked = require("marked");
var path = require('path');


var renderer = new marked.Renderer();

var resolve = function resolve(target) {
  return path.resolve(__dirname, target);
};

module.exports = {
  entry: resolve('app/scripts/main.coffee'),
  output: {
    path: resolve('dist'),
    pathinfo: true,
    filename: 'documentation.js',
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
        include: resolve('app/documents'),
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
        test: /\.(html)$/,
        include: resolve('app/templates'),
        use: [{
          loader: 'handlebars-loader'
        }]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'images/[name].[ext]'
        }
      }
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

var chalk = require('chalk');
var path = require('path');
var url = require('url');
var formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
var openBrowser = require('react-dev-utils/openBrowser');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('../webpack.dev');


var HOSTNAME = 'localhost';
var PORT = '3000';


var setupCompiler = function () {
  var compiler = webpack(webpackConfig);

  compiler.plugin('done', (stats) => {
    // We have switched off the default Webpack output in WebpackDevServer
    // options so we are going to "massage" the warnings and errors and present
    // them in a readable focused way.
    var messages = formatWebpackMessages(stats.toJson({}, true));
    if (!messages.errors.length && !messages.warnings.length) {
      console.log(chalk.green('Compiled successfully!'));
    }

    // If errors exist, only show errors.
    if (messages.errors.length) {
      console.log(chalk.red('Failed to compile.'));
      console.log();
      messages.errors.forEach((message) => {
        console.log(message);
        console.log();
      });
      return;
    }

    // Show warnings if no errors were found.
    if (messages.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.'));
      console.log();
      messages.warnings.forEach((message) => {
        console.log(message);
        console.log();
      });
      // Teach some ESLint tricks.
      console.log('You may use special comments to disable some warnings.');
      console.log(`Use ${chalk.yellow('// eslint-disable-next-line')} to ignore the next line.`);
      console.log(`Use ${chalk.yellow('/* eslint-disable */')} to ignore all warnings in a file.`);
    }
  });

  return compiler;
};


var runServer = function (hostname, port) {
  var compiler = setupCompiler();
  var publicPath = webpackConfig.output.publicPath;

  var server = new WebpackDevServer(compiler, {
    clientLogLevel: 'none',
    contentBase: path.resolve(process.cwd(), 'app'),
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    host: hostname,
    hot: true,
    publicPath: publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    }
  });

  // eslint-disable-next-line
  server.listen(port, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log(chalk.cyan('Starting the development server...'));
    console.log();
    openBrowser(url.format({
      hostname: hostname,
      port: port
  }));
  });
};


runServer(HOSTNAME, PORT);

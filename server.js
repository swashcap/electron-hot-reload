'use strict';

const config = require('./webpack.config');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  hot: true,
  publicPath: config.output.publicPath,
}).listen(config.port, error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error);
  } else {
    console.log(`Listening on port ${config.port}`);
  }
  /* eslint-enable no-console */
});


'use strict';

const config = require('./webpack.config');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const { port } = config;

new WebpackDevServer(webpack(config), {
  contentBase: path.join(__dirname, 'app'),
  colors: true,
  hot: true,
  publicPath: config.output.publicPath,
}).listen(port, 'localhost', error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error);
  } else {
    console.log(`Listening on port ${port}`);
  }
  /* eslint-enable no-console */
});


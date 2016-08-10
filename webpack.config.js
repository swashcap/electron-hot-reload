'use strict';

const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');

const port = 3000;

module.exports = {
  bail: false,
  devtool: 'eval',
  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'app', 'render', 'index.js'),
  ],
  external: Object.keys(pkg.dependencies).concat('electron'),
  module: {
    loaders: [{
      include: path.join(__dirname, 'app', 'render'),
      loaders: ['react-hot', 'babel'],
      test: /\.js$/,
    }],
  },
  output: {
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.tmp'),
    publicPath: `http://localhost:${port}/static/`,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  port, // exported for dev-server
};

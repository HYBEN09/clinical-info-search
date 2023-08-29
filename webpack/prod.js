const { merge } = require('webpack-merge');
const commonConfig = require('./config');
const { resolve } = require('node:path');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: resolve('build'),
    filename: 'main.min.js',
  },
});

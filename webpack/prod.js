const { merge } = require('webpack-merge');
const commonConfig = require('./config');
const { resolve } = require('node:path');
const imageMinWebpackPlugin = require('./plugin/imageMin');
const copyWebpackPlugin = require('./plugin/copy');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: resolve('build'),
    filename: '[name].min.js',
  },
  plugins: [copyWebpackPlugin()].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [imageMinWebpackPlugin()],
  },
});

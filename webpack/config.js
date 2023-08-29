const { merge } = require('webpack-merge');
const commonConfig = require('./common');

const webpackConfig = ({ env }) => {
  const envConfig = require(`./${env}.js`);
  return merge(commonConfig, envConfig);
};

module.exports = webpackConfig;

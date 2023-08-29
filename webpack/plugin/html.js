const { resolve } = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = (options = {}) => {
  const config = Object.assign(
    {
      title: 'pre-onboarding-12th-17',
      template: resolve('public/index.html'),
      templateParameters: {
        lang: 'ko-KR',
        charset: 'UTF-8',
        rootId: 'root',
      },
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#377ae6',
      },
      xhtml: true,
    },
    options,
  );

  return new HtmlWebpackPlugin(config);
};

module.exports = htmlWebpackPlugin;

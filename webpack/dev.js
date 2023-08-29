const { resolve } = require('node:path');

const devConfig = {
  mode: 'development',
  output: {
    path: resolve('public'),
    filename: 'scripts/bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    client: {
      progress: true,
    },
  },
};

module.exports = devConfig;

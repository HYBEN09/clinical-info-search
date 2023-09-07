const { resolve } = require('node:path');
const htmlWebpackPlugin = require('./plugin/html');
const copyWebpackPlugin = require('./plugin/copy');
const dotEnvWebpackPlugin = require('./plugin/dotEnv');

const commonConfig = {
  target: ['web', 'browserslist'],
  resolve: {
    extensions: '.ts .tsx .js .jsx .json .wasm'.split(' '),
    alias: {
      '@': resolve('src'),
    },
  },
  entry: {
    main: resolve('./src/index.tsx'),
  },
  plugins: [dotEnvWebpackPlugin(), htmlWebpackPlugin()].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = commonConfig;

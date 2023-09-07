const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const imageMiPluginsConfig = [
  ['imagemin-gifsicle', { interlaced: true }],
  ['imagemin-jpegtran', { progressive: true }],
  ['imagemin-optipng', { optimizationLevel: 7 }],
  [
    'imagemin-svgo',
    {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
              addAttributesToSVGElement: {
                params: {
                  attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                },
              },
            },
          },
        },
      ],
    },
  ],
];

const imageMinWebpackPlugin = (options = {}) => {
  const config = Object.assign(
    {
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: imageMiPluginsConfig,
        },
      },
      generator: [
        {
          type: 'asset',
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: imageMiPluginsConfig,
          },
        },
      ],
    },
    options,
  );
  return new ImageMinimizerPlugin(config);
};

module.exports = imageMinWebpackPlugin;

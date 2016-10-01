const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'lib/js/background.js': './src/js/background.js',
    'lib/js/background-helper.js': './src/js/background-helper.js',
    'lib/js/content.js': './src/js/content.js',
    'lib/js/options.js': './src/js/options.js'
  },
  output: {
    path: '.',
    filename: '[name]'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/html',
        to: './lib/html'
      },
      {
        from: './src/css',
        to: './lib/css'
      },
      {
        from: './src/icons',
        to: './lib/icons'
      }
    ])
  ]
};

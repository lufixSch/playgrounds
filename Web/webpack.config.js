const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'none',
  entry: {
    vendor: './src/js/vendor/vendor.js',
    polyfills: './src/js/polyfills.js',
    main: './src/js/index.js'
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'img'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

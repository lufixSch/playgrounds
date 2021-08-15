const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractWP = require('mini-css-extract-plugin');

const terserWP = require('terser-webpack-plugin');

const optimizeCssAssetsWP = require('optimize-css-assets-webpack-plugin');

const common = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          miniCssExtractWP.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new miniCssExtractWP({ filename: '[name].[contentHash].css' }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [new optimizeCssAssetsWP(), new terserWP()]
  }
});

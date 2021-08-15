const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'none',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dev'),
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
						},
					},
				],
			},
		],
	},
});

var path = require('path');
var webpack = require('webpack');

module.exports = {
	//context: './app',
	entry: './app/main.jsx',
	output: { path: __dirname + '/dist', filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{ test: /\.css$/, loader: "style!css" }
		],
		postLoaders: [{ loader: "transform?brfs" }]
	},
	devServer: {
		contentBase: './dist',
		hot: true
	}
};
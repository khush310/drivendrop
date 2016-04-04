var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'./src/cordova'
	],
	output: {
		path: path.join(__dirname, "..", "..", "..", "workshop", "www", "js"),
		filename: 'bundle.js',
		publicPath: 'http://localhost:5000/static/'
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
		}
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.jsx?$/,
				loaders: [ 'react-hot', 'babel'],
				exclude: /node_modules/
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.png$/, loader: "url-loader?limit=100000" },
			{ test: /\.jpg$/, loader: "file-loader" }
		]
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: "empty",
		readline: "empty",
		__filename: true,
		__dirname: true
	}
};
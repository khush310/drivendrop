var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./dev/config');
var port = process.env.PORT || 5000;

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:' + port);
});

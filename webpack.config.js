const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/script/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		host: '0.0.0.0',
		port: 8080,
		hot: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};

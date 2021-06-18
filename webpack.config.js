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
	module: {
		rules: [
			{
				//#this rule looks for jpg and png files to emit in dist folder
				test: /\.(jpg|png|svg)$/,
				type: 'asset/resource',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
};

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/',
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
			},
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
	]
};

module.exports = (env, options) => {
	const production = options.mode === 'production';
	conf.devtool = production
		? 'source-map'
		: 'eval-sourcemap';
	return conf;
}

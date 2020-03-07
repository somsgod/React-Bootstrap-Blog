const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
        './src/index.js',
        './src/style.css'
  ],
  module: {
    rules: [
	{
		test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
    },
    { 
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    //liveReload: true,
    //watchContentBase: true,
    contentBase: __dirname + '/dist'
  },
};
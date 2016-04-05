var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var fs = require('fs');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true
  },

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],

  output: {
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&localIdentName=[name]__[local]&sourceMap'],
        // loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]&sourceMap'),
        include: path.join(__dirname, 'src')
      }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin('app.css', { allChunks: true })
  ]
};

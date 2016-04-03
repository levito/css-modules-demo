var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var fs = require('fs');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    // 'webpack/hot/dev-server',
    './src/app.js'
  ],

  output: {
    filename: 'app.js',
    path: path.resolve('./dist')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        // loaders: ['react-hot', 'babel'],
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },

  plugins: [
    new ExtractTextPlugin('app.css', { allChunks: true })
  ]
};

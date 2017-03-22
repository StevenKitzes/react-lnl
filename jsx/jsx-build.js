var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, '.');

var plugins = [];

var config = {
  entry: APP_DIR + '/jsx.js',
  output: {
    path: APP_DIR,
    filename: 'jsx-out.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  plugins: plugins
};

module.exports = config;

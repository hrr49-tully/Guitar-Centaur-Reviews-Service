const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist')
  },
  module: {
    rules: [{ test: /\.jsx?/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  watch: true,
  node: {
    fs: 'empty',
    net: 'empty'
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
}


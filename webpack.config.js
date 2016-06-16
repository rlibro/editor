var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

var common = {
  entry: "./example/index.jsx",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: './example',
    filename: "example.bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: '/Users/realrap/git/rlibro-editor/node_modules/'
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      include: './example',
      loaders: ['babel']
    }]
  },
  plugins: []

};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      quite: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel']
        },
        {
          test: /\.less$/,
          loader: 'style!css!less'
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

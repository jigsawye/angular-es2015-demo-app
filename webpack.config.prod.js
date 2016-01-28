var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: [
    'babel-polyfill',
    './src',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
      },
      {
        test: /\.html$/,
        loader: 'raw',
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff(2)?)\??.*$/,
        loader: 'url',
        query: {
          limit: 10000,
        }
      },
    ]
  },
  postcss: () => [autoprefixer, precss],
};

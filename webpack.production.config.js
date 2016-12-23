/**
 * Created by pingfengafei on 16/11/16.
 */
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var autoprefixer = require('autoprefixer');

var environment = process.env.NODE_ENV || 'production';


loaders.push({
  test: /[\/\\]src[\/\\].*\.css$/,
  loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
});

loaders.push({
  test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
  loader: ExtractTextPlugin.extract('style', 'css')
});

module.exports = {
  entry: {
    app: './src/index.jsx',
    libs: [
      'immutable',
      'react',
      'react-dom',
      'react-router',
      'react-redux',
      'redux'
    ]
  },
  
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  },
  postcss: [autoprefixer({remove: false})],
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: environment
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[contenthash].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title: 'Bad Friends'
    }),
    new webpack.optimize.CommonsChunkPlugin('libs', 'libs.[chunkhash].js')
  ]
};

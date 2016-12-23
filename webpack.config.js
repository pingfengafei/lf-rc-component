/**
 * Created by pingfengafei on 16/11/16.
 */
"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

const HOST = process.env.HOST || "127.0.0.1";
//const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "8888";

console.log(process.env.WEBPACK_DEVTOOL);

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    `webpack/hot/only-dev-server`,
    `./src/index.jsx`
  ],
  
  // devtool: process.env.WEBPACK_DEVTOOL
  devtool: '#source-map',
  
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders
  },
  postcss: [autoprefixer({remove: false})],
  devServer: {
    contentBase: "/",
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title:'rc-ant-design'
    })
  ]
};

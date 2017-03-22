"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

console.log(process.env.WEBPACK_DEVTOOL);

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    `webpack/hot/only-dev-server`,
    `./src/index.jsx`
  ],
  
  devtool: process.env.WEBPACK_DEVTOOL,
  
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:8888/', //指定output，解决font-face和sourceMap冲突问题
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.j(s|sx)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders
  },
  postcss: [autoprefixer({remove: false})],
  devServer: {
    contentBase: '/',
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
      title: 'rc-ant-design'
    })
  ]
};

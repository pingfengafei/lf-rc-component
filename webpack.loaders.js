/**
 * Created by pingfengafei on 16/11/16.
 */
module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['react-hot', 'babel'],
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'file?hash=sha512&digest=hex&name=imgs/[hash].[ext]'
  },
  {
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts&name=fonts/[hash].[ext]'
  }, {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts&name=fonts/[hash].[ext]'
  }, {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts&name=fonts/[hash].[ext]'
  }, {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml&prefix=fonts&name=fonts/[hash].[ext]'
  },
  {
    test: /\.(le|c)ss$/,
    loader: "style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss!less"
  }
];

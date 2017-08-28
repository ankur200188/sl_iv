var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    //'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        loader: "babel-loader",
        query: {
            presets:['react','es2015']
        },
        include: path.join(__dirname, 'src')
    },
    {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
    },
    {
        test: /\.(jpe?g|png|gif|svg|eot|svg|ttf|woff|woff2)$/i,
        loader: "file-loader"
    }],

    noParse: /\.min\.js/
  }
};
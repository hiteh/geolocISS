const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractPlugin = new ExtractTextPlugin({
    filename: '../dist/css/style.css'
});

module.exports = {
  entry: ['whatwg-fetch','./src/js/app.jsx'],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename : 'app.js',
    publicPath: 'dist/',
  },

  devServer: {
    contentBase: './',
    port: 3002,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2', 'react']
          },
        },
      },
      {
        test: /\.scss$/,
        use: ExtractPlugin.extract({
          use: [
          {loader: 'css-loader',options:{importLoaders: 1}},
          'postcss-loader',
          {loader: 'sass-loader',options: { precision: 8 }}
        ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['file-loader?limit=10000&name=img/[name].[ext]']
      },
      {
        test: /\.css$/,
        use: [
        {loader: 'style-loader'},
        {loader: 'css-loader',options:{importLoaders: 1}},
        'postcss-loader',
        ]
      }
    ]
  },
  plugins: [ExtractPlugin, new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery"})]
};

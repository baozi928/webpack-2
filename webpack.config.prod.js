const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,//把base属性拿过来
  mode: 'production',
  plugins: [new HtmlWebpackPlugin({
        title: '派大星',
        template: 'src/assets/index.html'
   }),
   new MiniCssExtractPlugin({
    ...base.plugins,//把base的plugins拿过来
    filename: '[name].[contenthash].css',
    chunkFilename:'[id].[contenthash].css',
    ignoreOrder:false,
  }),],
   module: {
    rules: [
      {
        test: /\.css$/,
        use:[{
            loader:MiniCssExtractPlugin.loader,
            options:{
                publicPath:'../',
            },
        },
        'css-loader',
    ],
      }
    ]
  }
};



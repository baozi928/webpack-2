const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const loader = require("sass-loader");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
        title: '派大星',
        template: 'src/assets/index.html'
   }),],
   module: {
    rules: [
      {
        test: /\.styl$/i,
        loader:['style-loader','css-loader','stylus-loader']
      },
      {
        test: /\.less$/i,
        loader:['style-loader','css-loader','less-loader']
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
        { loader:'sass-loader',
        options:{
          implementation:require('dart-sass'),
        }
      }
    ],
      },
    ],
  },
};



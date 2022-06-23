var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
        title: '派大星',
        template: 'src/assets/index.html'
   })],
   module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};



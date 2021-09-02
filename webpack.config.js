const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?wrapper=window',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
    }),
    new webpack.ProvidePlugin({
      join: ['lodash', 'join'],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
}
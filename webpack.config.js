const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }, {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      }, {
        test: /\.xml$/i,
        use: ['xml-loader'],
      }, {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      }, {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      }, {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
}
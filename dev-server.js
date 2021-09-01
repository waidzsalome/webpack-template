const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DevServer = require('webpack-dev-server');
const config = {
  mode: 'development',
  entry: [
    // Runtime code for hot module replacement
    'webpack/hot/dev-server.js',
    // Dev server client for web socket transport, hot and live reload logic
    // 'webpack-dev-server/client?http://localhost:8080/?hot=true&live-reload=true',
    'webpack-dev-server/client?http://localhost:8080/',
    // 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    // Your entry
    './src/index.js',
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
    }),
    // Plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
};
const compiler = webpack(config);
// `hot` and `client` options are disabled because we added them manually
const devServerConfig = {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
  hot: false,
  client: false,
};
const server = new DevServer(devServerConfig, compiler);
server.listen(8080);

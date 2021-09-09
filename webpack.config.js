const path = require('path');
// const MiniCssExtraPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   mode: 'development',
//   entry: {
//     home: ['./src/home.js', './src/home.scss'],
//     account: ['./src/account.js', './src/account.scss'],
//   },
//   // entry: {
//   //   main: './home.js',
//   // },
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: [
//           process.env.NODE_ENV !== 'production'
//             ? 'style-loader'
//             : MiniCssExtraPlugin.loader,
//           'css-loader',
//           'sass-loader',
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new MiniCssExtraPlugin({
//       filename: '[name].css',
//     })
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   }
// }

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    home: ['./src/home.js', './src/home.scss'],
    account: ['./src/account.js', './src/account.scss'],
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
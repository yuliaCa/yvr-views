const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }

    ]
  },
  // devServer: {
  //   historyApiFallback: true,
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'public/index.html'
  //   })
  // ]

};
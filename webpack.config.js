const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve(__dirname, 'app'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-0', 'react'],
            plugins: ['transform-async-to-generator']
          }
        }
      },
      {
        test: /\.css/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    },
    port: 7000,
    clientLogLevel: 'none'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

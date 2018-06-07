const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch', // 激活HMR
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: [
              "react-hot-loader/babel" // 添加HMR支持
            ]
          }
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Test',
      template: 'index.html', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    new webpack.NamedModulesPlugin(), // 执行热替换时打印模块名字
    new ExtractTextPlugin('style.bundle.css'),
  ],
  resolve: {
    extensions: ['.js', '.json']
  },
  devtool: 'source-map',
  devServer: {
    hot: true, // 激活服务器的HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true
  }
}

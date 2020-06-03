const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => ({
  mode: argv.mode === 'development' ? 'development': 'production',
  entry: './src/index.ts',
  devtool: argv.mode === 'development' ? 'inline-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  }
})
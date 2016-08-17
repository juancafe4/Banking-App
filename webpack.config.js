const path = require('path')
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname + '/public'),
    filename: 'bundle.js' 
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: ['node_modules ']
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: ['node_modules ']
      }
    ]
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      React: path.resolve(__dirname, './node_modules/react')
    },
    fallback: path.resolve(__dirname, './node_modules')
  },
  resolveLoader: {
      fallback: path.resolve(__dirname, './node_modules')
  },
}
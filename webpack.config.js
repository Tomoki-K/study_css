const path = require('path');

module.exports = {
  entry: "./assets/js/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },{
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },{
        test: /\.(jpg|png|eot|ttf|otf)$/,
        loaders: 'file-loader?name=[path][name].[ext]'
      },
    ]
  }
}

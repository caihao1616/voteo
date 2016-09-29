 module.exports = {
  entry: {
    app: './public/javascripts/app.js',
    admin: './public/javascripts/admin.js'
  },
  output: {
    path: './public/javascripts',
    filename: '[name].bundle.js',
  },
  module: {
   loaders: [{
     test: /\.js$/,
     exclude: /node_modules/,
     loader: 'babel-loader',
   }]
  }
}
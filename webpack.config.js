const path = require('path');

module.exports = {
  entry: {
    javascript: './src/js/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    }, 
    extensions: ['.js', '.jsx']
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {loader: 'babel-loader'}        
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },          
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          { loader: 'file-loader' }
        ] 
      }
    ]
  }
}
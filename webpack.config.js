const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    'app': './src/app.js',
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:[
            'css-loader',
            'postcss-loader'
          ]
        })
      }
    ]
  },

  plugins: [
     new ExtractTextPlugin('style.css'),
     new webpack.LoaderOptionsPlugin({
       options: {
         postcss: [
           require('postcss-import'),
           require('autoprefixer')({
             browsers: ['last 2 versions']
           })
         ]
       }
     }),
  ],

  devServer: {
    contentBase: 'dist',
    port: 3000
  }
};

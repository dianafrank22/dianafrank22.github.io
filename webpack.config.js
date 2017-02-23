const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const INPUT_DIR  = path.resolve(__dirname, 'src')
const PUBLIC     = path.resolve(__dirname, 'public')


module.exports = {
  entry: `${INPUT_DIR}/app.js`,
  output: {
    filename: "./bundle.js",
  },
  watch: true,
  devtool: 'eval-source-map',
  module:{
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,    
      query:{
        presets: ['es2015', 'react', "stage-0"]
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    { 
      test: /\.(png|jpg)$/, 
      loader: 'url-loader?limit=8192' 
    }
    ]
  }
}
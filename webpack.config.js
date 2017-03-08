const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const INPUT_DIR  = path.resolve(__dirname, 'src')
const PUBLIC     = path.resolve(__dirname, 'public')


module.exports = {
  devtool: 'eval-source-map',
  entry:[
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/app.js')
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: "bundle.js",
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Diana Frank Development',
      xhtml: true,
      template: require('html-webpack-template'),
      appMountId: 'main'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
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
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ReactDOM = require('react-dom');

module.exports = {
  entry: {
    background: './src/background.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|\jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/loadingscreen.css'), 
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
                minimize: true,
                sourceMap: true
            }
          },
          {
              loader: "sass-loader"
          }
        ],
        sideEffects: true,
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/options.html',
      filename : 'options.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "public"}
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'loadingscreen.css'
    }),
  ],
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React',
    'react-dom': 'ReactDOM'

  }
};
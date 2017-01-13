const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  loaders: {
    stylus: {
      develop: {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      production: {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!stylus-loader'
        })
      }
    },

    fonts: {
      develop: {
        test: /\.woff2/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[hash].[ext]'
        }
      },
      production: {
        test: /\.woff2/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[hash].[ext]'
        }
      }
    }
  },

  plugins: {
    html: {
      develop: new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      production: new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    },
    js: {
      production: new BabiliPlugin()
    },
    css: {
      production: new ExtractTextPlugin('[hash].css')
    },
    options: {
      production: new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: false
      })
    }
  }
};

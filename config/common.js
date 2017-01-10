const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    }
  }
};

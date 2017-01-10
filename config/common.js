const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  loaders: {
    // stylus
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
}

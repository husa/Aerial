const base = require('./webpack.base');
const common = require('./common');

const config = Object.assign(base, {
  plugins: [
    common.plugins.html.develop
  ],

  devServer: {
    contentBase: './build',
    host: '127.0.0.1',
    port: 8888,
    noInfo: false,
    colors: true,
    progress: true,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    port: 8888
  }
});

module.exports = config;

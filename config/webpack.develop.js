const base = require('./webpack.base');
const common = require('./common');

const config = Object.assign(base, {

  devtool: 'cheap-source-map',

  module: {
    rules: [
      common.loaders.stylus.develop,
      common.loaders.fonts.develop
    ]
  },

  plugins: [
    common.plugins.html.develop
  ]
});

module.exports = config;

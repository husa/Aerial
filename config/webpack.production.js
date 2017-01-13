const base = require('./webpack.base');
const common = require('./common');

const config = Object.assign(base, {

  devtool: false,

  module: {
    rules: [
      common.loaders.stylus.production,
      common.loaders.fonts.production
    ]
  },

  plugins: [
    common.plugins.options.production,
    common.plugins.html.production,
    common.plugins.css.production
  ]
});

module.exports = config;

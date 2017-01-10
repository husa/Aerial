const base = require('./webpack.base');
const common = require('./common');

const config = Object.assign(base, {
  module: {
    rules: [
      common.loaders.stylus.production
    ]
  },

  plugins: [
    common.plugins.html.production
  ]
});

module.exports = config;

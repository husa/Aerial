const base = require('./webpack.base');
const common = require('./common');

const config = Object.assign(base, {

  module: {
    rules: [
      common.loaders.stylus.develop
    ]
  },

  plugins: [
    common.plugins.html.develop
  ]
});

module.exports = config;

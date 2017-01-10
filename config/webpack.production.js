const base = require('./webpack.base');
const common = require('./common');

const config = Object.assign(base, {
  plugins: [
    common.plugins.html.production
  ]
});

module.exports = config;

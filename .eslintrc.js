module.exports = {
  "root": true,
  "extends": [
    'eslint:recommended',
    '@eleks/eleks',
  ],
  "env": {
    "browser": true
  },
  "globals": {
    "chrome": false,
    "ENV": false
  },
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },

  "rules": {
    'arrow-body-style': [1, 'as-needed'],
    "newline-after-var": 0,
    "curly": [2, 'multi-line', 'consistent'],
    "indent": [2, 2, {"SwitchCase": 1}],
    "one-var": 0,
    "no-magic-numbers": 0,
    "prefer-const": 0,
    "no-extra-parens": 0,
    "guard-for-in": 0
  }
};

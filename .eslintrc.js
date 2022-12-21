/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules:
  {
    'linebreak-style': ['error', 'windows'],
    indent: 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'eol-last': 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-tabs': 0,
    'react/prop-types': 0,
    'react/jsx-indent': [0, 2],
    'react/jsx-indent-props': [2, 'tab'],
    'import/no-cycle': 0,
    'no-console': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'max-len': [2, 250],
    'object-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'no sparse-arrays': 0,
    'no-array-index-key': 0,
    camelcase: 0,
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'jsx-quotes': [2, 'prefer-double'],

  },
};
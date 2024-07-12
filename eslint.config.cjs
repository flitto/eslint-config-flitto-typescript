const love = require('eslint-config-love')
const prettier = require('eslint-config-prettier')
const pluginPrettier = require('eslint-plugin-prettier/recommended')

module.exports = [
  love,
  prettier,
  pluginPrettier,
  {
    rules: {
      'prettier/prettier': ['error', {
        'singleQuote': true,
        'semi': false,
        'tabWidth': 2,
        'printWidth': 140,
        'bracketSameLine': false,
      }],
    },
    files: ['**/*.js', '**/*.ts'],
  }
]
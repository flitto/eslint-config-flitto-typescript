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
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: true,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false,
        },
      ],
    },
    files: ['**/*.js', '**/*.ts'],
  }
]
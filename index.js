module.exports = {
  extends: [
    'standard-with-typescript',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'prefix': ['I'],
      },
      {
        'selector': 'class',
        'format': ['PascalCase'],
      },
      {
        'selector': ['classProperty', 'objectLiteralProperty'],
        'format': ['snake_case', 'camelCase'],
      },
      {
        'selector': ['classProperty', 'objectLiteralProperty'],
        'modifiers': ['readonly', 'static'],
        'format': ['UPPER_CASE'],
      },
      {
        'selector': ['enum'],
        'format': ['UPPER_CASE', 'PascalCase'],
      },
      {
        'selector': ['enumMember'],
        'format': ['UPPER_CASE'],
      },
      {
        'selector': 'variable',
        'format': ['camelCase', 'UPPER_CASE'],
      },
      {
        'selector': 'variable',
        'modifiers': ['destructured'],
        'format': null,
      },
    ],
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'semi': false,
      'tabWidth': 2,
      'printWidth': 140
    }]
  },
  reportUnusedDisableDirectives: true,
}

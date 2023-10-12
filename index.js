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
        'format': ['StrictPascalCase'],
        'prefix': ['I'],
      },
      {
        'selector': 'class',
        'format': ['StrictPascalCase'],
      },
      {
        'selector': ['classProperty', 'objectLiteralProperty'],
        'format': ['snake_case', 'strictCamelCase'],
      },
      {
        'selector': ['classProperty', 'objectLiteralProperty'],
        'modifiers': ['readonly', 'static'],
        'format': ['UPPER_CASE'],
      },
      {
        'selector': ['enum'],
        'format': ['UPPER_CASE', 'StrictPascalCase'],
      },
      {
        'selector': ['enumMember'],
        'format': ['UPPER_CASE'],
      },
      {
        'selector': 'variable',
        'format': ['strictCamelCase', 'UPPER_CASE'],
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

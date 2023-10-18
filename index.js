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
      },
      {
        'selector': 'class',
        'format': ['PascalCase'],
      },
      {
        'selector': ['property'],
        'format': ['snake_case', 'camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        'selector': ['property'],
        'modifiers': ['requiresQuotes'],
        'format': null,
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
      'printWidth': 140,
      'bracketSameLine': false,
    }]
  },
  reportUnusedDisableDirectives: true,
}

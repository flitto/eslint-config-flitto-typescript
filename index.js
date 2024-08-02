module.exports = {
  extends: ['love', 'prettier'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'class',
        format: ['StrictPascalCase'],
      },
      {
        selector: ['property'],
        format: ['snake_case', 'strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['property'],
        modifiers: ['requiresQuotes'],
        format: null,
      },
      {
        selector: ['property'],
        filter: {
          regex: '^(_id|__v)$',
          match: true,
        },
        format: null,
      },
      {
        selector: ['enum'],
        format: ['UPPER_CASE', 'StrictPascalCase'],
      },
      {
        selector: ['enumMember'],
        format: ['UPPER_CASE'],
      },
      {
        selector: 'variable',
        format: ['strictCamelCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        printWidth: 140,
        bracketSameLine: false,
      },
    ],
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
  reportUnusedDisableDirectives: true,
}

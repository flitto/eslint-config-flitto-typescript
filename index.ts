import { Linter } from 'eslint'

const config: Linter.Config = {
  extends: 'standard-with-typescript',
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
        'filter': { regex: '(__uuid|)', match: false },
      },
      {
        'selector': ['classProperty', 'objectLiteralProperty'],
        'modifiers': ['readonly', 'static'],
        'format': ['UPPER_CASE'],
      },
      {
        'selector': ['enum', 'enumMember'],
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

    'comma-dangle': ['error', 'always-multiline'],
    'camelcase': 'off',
  },
  reportUnusedDisableDirectives: true,
}

export = config

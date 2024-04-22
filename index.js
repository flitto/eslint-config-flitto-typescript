module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'love',
    'prettier'
  ],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/ban-types': ['error', {
      extendDefaults: false,
      types: {
        String: {
          message: 'Use string instead',
          fixWith: 'string'
        },
        Boolean: {
          message: 'Use boolean instead',
          fixWith: 'boolean'
        },
        Number: {
          message: 'Use number instead',
          fixWith: 'number'
        },
        Symbol: {
          message: 'Use symbol instead',
          fixWith: 'symbol'
        },
        BigInt: {
          message: 'Use bigint instead',
          fixWith: 'bigint'
        },
        Function: {
          message: [
            'The `Function` type accepts any function-like value.',
            'It provides no type safety when calling the function, which can be a common source of bugs.',
            'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
            'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.'
          ].join('\n')
        },
        // object typing
        Object: {
          message: [
            'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.'
          ].join('\n')
        },
        '{}': {
          message: [
            '`{}` actually means "any non-nullish value".',
            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.'
          ].join('\n')
        }
      }
    }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['StrictPascalCase'],
      },
      {
        'selector': 'class',
        'format': ['StrictPascalCase'],
      },
      {
        'selector': ['property'],
        'format': ['snake_case', 'strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
      },
      {
        'selector': ['property'],
        'modifiers': ['requiresQuotes'],
        'format': null,
      },
      {
        'selector': ['property'],
        'filter': {
          'regex': '^(_id|__v)$',
          'match': true,
        },
        'format': null,
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
      'printWidth': 140,
      'bracketSameLine': false,
    }]
  },
  reportUnusedDisableDirectives: true,
}

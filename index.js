module.exports = {
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
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "ignoredNodes": [
          "FunctionExpression > .params[decorators.length > 0]",
          "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
        ]
      }
    ]
  },
  reportUnusedDisableDirectives: true,
}

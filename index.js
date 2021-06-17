module.exports = {
    extends: 'standard-with-typescript',
    rules: {
        // '@typescript-eslint/explicit-function-return-type': 'off', // TODO
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': [ // 💬
            'error',
            {
                'selector': 'interface',
                'format': ['PascalCase'],
                'custom': {
                    'regex': '^I[A-Z]',
                    'match': true
                }
            },
            {
                'selector': 'class',
                'format': ['PascalCase'],
            },
            {
                'selector': ['classProperty', 'objectLiteralProperty'],
                'format': ['snake_case'],
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
        'no-void': ['error', { 'allowAsStatement': true }]
    }
}

const abc = 3

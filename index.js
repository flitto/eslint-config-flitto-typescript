module.exports = {
    extends: 'standard-with-typescript',
    rules: {
        // '@typescript-eslint/explicit-function-return-type': 'off', // TODO
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': [
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
                'selector': 'classProperty', // 💬
                'format': ['snake_case'], // 💬
            },
            {
                'selector': 'objectLiteralProperty', // 💬
                'format': ['snake_case'], // 💬
            },
            {
                'selector': 'objectLiteralProperty', // 💬
                'format': ['snake_case'], // 💬
            },
            {
                'selector': 'enum', // 💬
                'format': ['UPPER_CASE'], // 💬
            },
            {
                'selector': 'enumMember', // 💬
                'format': ['UPPER_CASE'], // 💬
            },
        ],

        'comma-dangle': ['error', 'always-multiline'],
        "camelcase": ["error", { "properties": "never", "ignoreDestructuring": true, "ignoreImports": true }],
    }
}

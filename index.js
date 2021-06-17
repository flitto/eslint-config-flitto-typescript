module.exports = {
    extends: 'standard-with-typescript',
    rules: {
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
            }
        ],

        'comma-dangle': ['error', 'always-multiline'],
        "camelcase": ["error", { "properties": "never", "ignoreDestructuring": true, "ignoreImports": true }],
    }
}

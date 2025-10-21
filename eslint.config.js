import eslintConfigLove from 'eslint-config-love'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'

/**
 * @type {import('eslint').Linter.Config][]} Flitto Eslint Config
 */
const flittoEslintConfig = [
  eslintConfigLove,
  eslintConfigPrettier,
  { plugins: { prettier: eslintPluginPrettier } },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
        ...globals.mocha,
      },
    },
  },
  {
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
  },
  {
    rules: {
      'prettier/prettier': ['error', {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        printWidth: 140,
        bracketSameLine: false,
      }],
    },
  },
  {
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
    },
  },
]

export default flittoEslintConfig

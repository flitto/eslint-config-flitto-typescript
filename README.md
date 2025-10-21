# eslint-config-flitto-typescript

Flitto Typescript Style Guide

## Get Started

### 1. Installing packages
```
npm install --save-dev eslint-config-flitto-typescript@latest
```
### 2. Create Eslint configuration file

Create `eslint.config.mjs` file at the top of the project directory like below.
(Packages with `"type": "module"` can also use `eslint.config.js`)
```js
import { defineConfig } from 'eslint/config'
import eslintConfigFlittoTypescript from 'eslint-config-flitto-typescript'

export default defineConfig([
  {
    extends: [eslintConfigFlittoTypescript],
    rules: {
      // Define custom rules for each project here.
    }
  },
])
```

## Configuration On WebStorm

1. Open `Preferences` ( <kbd>⌘</kbd> + <kbd>,</kbd>)
2. `Language & Frameworks` ▸ `javascript Code` ▸ `Quality tools` ▸ `Eslint`
3. Select `Manual ESLint Configuration` (or you can also choose `Automatic ESLint Configuration`)
    * ESLint package: `/{project_path}/node_modules/eslint`
    * Configuration file: `/{project_path}/eslint.config.mjs`
4. (Optional) check `Run eslint --fix on save`
5. Click `OK`

## Rules
* [eslint-config-love](https://www.npmjs.com/package/eslint-config-love)
* [standardjs(original)](https://standardjs.com/rules.html)
* [extended rules for typescript originated from standardjs](https://github.com/standard/eslint-config-standard-with-typescript/blob/master/src/index.ts)

## Flags

* [Configure Rules](https://eslint.org/docs/v9.x/use/configure/rules)
* [Disabling Rules](https://eslint.org/docs/v9.x/use/configure/rules#disabling-rules)
* [Sample Files](https://github.com/flitto/eslint-config-flitto-typescript/tree/master/examples) (You can apply eslint
  to these files) 

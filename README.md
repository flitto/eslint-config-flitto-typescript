# eslint-config-flitto-typescript

Flitto Typescript Style Guide

## Get Started

### 1. Installing packages
**npm@>=7**
```
npm install --save-dev eslint-config-flitto-typescript@latest
```
(npm@<7 is not supported)

### 2. Create Eslint configuration file

Create `.eslintrc.json` file at the top of the project directory like below.
```json
{
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": "flitto-typescript",
  "rules": {
  }
}
```

## Configuration On WebStorm

1. Open `Preferences` ( <kbd>⌘</kbd> + <kbd>,</kbd>)
2. `Language & Frameworks` ▸ `javascript Code` ▸ `Quality tools` ▸ `Eslint`
3. Select `Manual ESLint Configuration `
    * ESLint package: `/{project_path}/node_modules/eslint`
    * Configuration file: `/{project_path}/.eslintrc.json`
4. (Optional) check `Run eslint --fix on save`
5. Click `OK`

## Rules

* [standardjs(original)](https://standardjs.com/rules.html)
* [extended rules for typescript originated from standardjs](https://github.com/standard/eslint-config-standard-with-typescript/blob/master/src/index.ts)

## Flags

* [Configuring Rules](https://eslint.org/docs/user-guide/configuring/rules#configuring-rules)
* [Disabling Rules](https://eslint.org/docs/user-guide/configuring/rules#disabling-rules)
* [Sample Files](https://github.com/flitto/eslint-config-flitto-typescript/tree/master/examples) (You can apply eslint
  to these files) 

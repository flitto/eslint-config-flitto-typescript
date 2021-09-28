# eslint-config-flitto-typescript
Flitto Typescript Style Guide

## Get Started
### 1. Installing packages
```shell
npm install --save-dev \
  typescript@^4 \
  eslint@^7.32.1 \
  eslint-plugin-import@^2.22.1 \
  eslint-plugin-node@^11.1.0 \
  eslint-plugin-promise@^5.0.0 \
  @typescript-eslint/eslint-plugin@^4.0.1 \
  eslint-config-flitto-typescript@latest
``` 
Most of the packages need to be installed as `Peer Dependency` of [eslint-config-standard-with-typescript](https://www.npmjs.com/package/eslint-config-standard-with-typescript) package.

This list of dependencies is(same with [eslint-config-standard-with-typescript](https://www.npmjs.com/package/eslint-config-standard-with-typescript)):
* TypeScript, which you may already have installed
* ESLint
* 3 Peer dependencies of eslint-config-standard
@typescript-eslint/eslint-plugin; ESLint rules for TypeScript.
* This package
    
### 2. Create Eslint configuration file
Create `.eslintrc.js` file at the top of the project directory like below.
```js
module.exports = {
  "extends": "flitto-typescript",
  "rules": {}
}
```

## Configuration On WebStorm
  1. Open `Preferences` ( <kbd>⌘</kbd> + <kbd>,</kbd>)
  2. `Language & Frameworks` ▸ `javascript Code` ▸ `Quality tools` ▸ `Eslint`
  3. Select `Manual ESLint Configuration `
      * ESLint package: `/{project_path}/node_modules/eslint`
      * Configuration file: `/{project_path}/.eslintrc.js`
  4. (Optional) check `Run eslint --fix on save`
  5. Click `OK`

## Rules
* [standardjs(original)](https://standardjs.com/rules.html)
* [extended rules for typescript originated from standardjs](https://github.com/standard/eslint-config-standard-with-typescript/blob/master/src/index.ts)

## Flags
* [Configuring Rules](https://eslint.org/docs/user-guide/configuring/rules#configuring-rules)
* [Disabling Rules](https://eslint.org/docs/user-guide/configuring/rules#disabling-rules)
* [Sample Files](https://github.com/flitto/eslint-config-flitto-typescript/tree/master/examples) (You can apply eslint to these files) 

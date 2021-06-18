<h1 align="center">eslint-config-flitto-typescript</h1>

<p align="center">ESLint <a href="http://eslint.org/docs/developer-guide/shareable-configs.html">shareable config</a> for the <a href="https://github.com/flitto/eslint-config-flitto-typescript/blob/master/examples/standardjs.ts">Flitto JavsScript style guide(based on <code>standardjs</code>)</a> & <a href="https://github.com/flitto/eslint-config-flitto-typescript/blob/master/examples/ts-standard.ts">Flitto Typescript style guide(based on <code>ts-standard</code>)</a></p>

<p align="center"><!-- badges --></p>

<br>

## Installation
**Using github repository**
```bash
$ npm install --save-dev git+https://github.com/flitto/eslint-config-flitto-typescript.git
```
**Using npm package**
```
// TODO
```


## Usage
### Configuring `.eslintrc.js`
Once the `eslint-config-flitto-typescript` package is installed, you can use it by specifying `flitto-typescript` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
// .eslintrc.js
{
  "extends": "flitto-typescript",
  "rules": {
    // Additional, per-project rules...
  }
}
```
### Basic Usage in source code
* Disabling specific eslint rule (See Also: [Disabling Rules with Inline Comments](https://eslint.org/docs/2.13.1/user-guide/configuring#disabling-rules-with-inline-comments))
```js
// 💬 At the top of file, you can suppress multiple lints at once.
/* eslint-disable no-lone-blocks,@typescript-eslint/no-unused-vars */

// 💬 You can disable(suppress) eslint rule for specific line.
function test1 (): void {
  return // eslint-disable-line no-useless-return
}
```


## Configuration On WebStorm
  1. Open preferences ( <kbd>⌘</kbd> + <kbd>,</kbd> )
  2. Language & Frameworks ▸ javascript Code ▸ Quality tools ▸ Eslint
      * or simply enter 'eslint' into the search bar.
  3. Select Automatic ESLint configuration
      * or select Manual ESLint Configuration 
          * ESLint package: `/{project_path}/node_modules/eslint`
          * Configuration file: `/{project_path}/.eslintrc.js`
  4. (Optional) check `Run eslint --fix on save`
  5. Click `OK`


## TODO
  - Configuration as Global Package
  - Deploy to npm
  - sync with import optimization
  - Defining contributing method

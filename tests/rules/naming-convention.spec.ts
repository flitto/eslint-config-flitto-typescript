import { ESLint } from 'eslint'
import * as Path from 'path'
import config from '../../index'

const INVALID = 'invalid'
const VALID = 'valid'

describe('Flitto Custom Naming Convention Linting Rule Test', () => {
  let lint: ESLint
  beforeAll(() => {
    config.parserOptions = { project: ['tsconfig.json'] }
    config.rules = { ...config.rules, '@typescript-eslint/no-unused-vars': 'off' } // 테스트시에 no-unused-vars 규칙은 제외합니다.
    lint = new ESLint({ baseConfig: config })
  })

  describe('@typescript-eslint/naming-convention', () => {
    const targetDir = 'tests/rules/target/naming-convention'
    it('인터페이스의 이름은 PascalCase 이어야 합니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, INVALID, 'interface_name_as_camel_case.ts'))
      expect(results[0].messages.length).toEqual(1)
      expect(results[0].messages[0].message).toEqual('Interface name `interfaceCamelCase` must match one of the following formats: PascalCase')
    })

    it('클래스의 이름은 PascalCase 이어야 합니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, VALID, 'class_name_casing.ts'))
      expect(results[0].messages.length).toEqual(0)
    })

    it('클래스의 readonly 멤버가 UPPER_CASE 가 아니라면 린트에러가 발생합니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, INVALID, 'class_property_static_readonly_no_upper_casing.ts'))
      expect(results[0].messages.length).toEqual(1)
      expect(results[0].messages[0].message).toEqual('Class Property name `upperCase` must match one of the following formats: UPPER_CASE')
    })

    it('클래스의 static readonly 멤버는 UPPER_CASE 이어야 합니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, VALID, 'class_property_static_readonly_upper_casing.ts'))
      expect(results[0].messages.length).toEqual(0)
    })

    it('클래스의 프로퍼티가 PascalCase 인 경우 린트에러가 발생합니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, INVALID, 'class_property_as_pascal_case.ts'))
      expect(results[0].messages.length).toEqual(1)
      expect(results[0].messages[0].message).toEqual('Class Property name `PropertyPascal` must match one of the following formats: snake_case, camelCase')
    })

    it('클래스의 프로퍼티는 camelCase 이거나 snake_case 이어야 합니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, VALID, 'class_property_casing.ts'))
      expect(results[0].messages.length).toEqual(0)
    })

    it('object 의 프로퍼티는 camelCase 이거나 snake_case 이어야 합니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, VALID, 'object_property_casing.ts'))
      expect(results[0].messages.length).toEqual(0)
    })

    it('enum 명이 pascalCase 라면 린트에러가 발생합니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, INVALID, 'enum_name_as_pascal_case.ts'))
      expect(results[0].messages.length).toEqual(1)
      expect(results[0].messages[0].message).toEqual('Enum name `pascalCaseEnum` must match one of the following formats: UPPER_CASE, PascalCase')
    })

    it('enum 프로퍼티가 UPPER_CASE 가 아니라면 린트에러가 발생합니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, INVALID, 'enum_property_not_upper_case.ts'))
      expect(results[0].messages.length).toEqual(1)
      expect(results[0].messages[0].message).toEqual('Enum Member name `member` must match one of the following formats: UPPER_CASE')
    })

    it('enum 명은 pascalCase 이거나 UPPER_CASE 이고, enum 프로퍼티은 모두 UPPER_CASE 이어야 합니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, VALID, 'enum_name_casing.ts'))
      expect(results[0].messages.length).toEqual(0)
    })

    it('snake_case 인 변수는 허용되지 않습니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, INVALID, 'variable_as_snake_case.ts'))
      expect(results[0].messages.length).toEqual(1)
      expect(results[0].messages[0].message).toEqual('Variable name `snake_case_var` must match one of the following formats: camelCase, UPPER_CASE')
    })

    it('PascalCase 인 변수는 허용되지 않습니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, INVALID, 'variable_as_pascal_case.ts'))
      expect(results[0].messages.length).toEqual(1)
      expect(results[0].messages[0].message).toEqual('Variable name `PascalCaseVar2` must match one of the following formats: camelCase, UPPER_CASE')
    })

    it('변수이름에는 camelCase, UPPER_CASE 만이 허용됩니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, VALID, 'variable_name_casing.ts'))
      expect(results[0].messages.length).toEqual(0)
    })
  })
})

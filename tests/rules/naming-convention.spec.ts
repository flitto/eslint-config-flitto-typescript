import * as Path from 'path'
import { ESLint } from 'eslint'
import { expect } from 'chai'
import config from '../../eslint.config'

const INVALID = 'invalid'
const VALID = 'valid'

describe('Flitto Custom Naming Convention Linting Rule Test', () => {
  const eslint = new ESLint({ baseConfig: config, overrideConfig: { rules: { '@typescript-eslint/no-unused-vars': 'off' } } })

  describe('@typescript-eslint/naming-convention', () => {
    const targetDir = 'tests/rules/target/naming-convention'
    it('인터페이스의 이름이 StrictPascalCase(e.g., ID(X)->Id(O) or DTO(X)->Dto(O)) 가 아닌 경우 린트에러가 발생합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'interface_name_not_as_strict_camel_case.ts'))
      expect(results[0].messages).length(1)
      expect(results[0].messages[0].message).to.equal(
        'Interface name `NotStrictCamelCaseID` must match one of the following formats: StrictPascalCase',
      )
    })

    it('인터페이스의 이름은 StrictPascalCase(e.g., ID(X)->Id(O) or DTO(X)->Dto(O)) 이어야 합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, VALID, 'interface_name_as_strict_camel_case.ts'))
      expect(results[0].messages.length).to.equal(0)
    })

    it('클래스의 이름이 PascalCase 가 아니라면 린트에러가 발생합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'class_name_as_camel_case.ts'))
      expect(results[0].messages.length).to.equal(1)
      expect(results[0].messages[0].message).to.equal(
        'Class name `camelCaseClass` must match one of the following formats: StrictPascalCase',
      )
    })
    //
    it('클래스의 이름은 PascalCase 이어야 합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, VALID, 'class_name_casing.ts'))
      expect(results[0].messages.length).to.equal(0)
    })

    it('클래스의 이름이 StrictPascalCase(e.g., ID(X)->Id(O) or DTO(X)->Dto(O)) 가 아닌 경우 린트에러가 발생합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'class_name_not_as_strict_camel_case.ts'))
      expect(results[0].messages.length).to.equal(1)
      expect(results[0].messages[0].message).to.equal(
        'Class name `NotStrictCamelCaseID` must match one of the following formats: StrictPascalCase',
      )
    })

    it('클래스의 이름은 StrictPascalCase(e.g., ID(X)->Id(O) or DTO(X)->Dto(O)) 이어야 합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, VALID, 'class_name_as_strict_camel_case.ts'))
      expect(results[0].messages.length).to.equal(0)
    })

    it('클래스의 프로퍼티는 camelCase, snake_case, PascalCase 또는 UPPER_CASE 이어야 합니다. (requiresQuotes 인 경우 네이밍 룰 해제)', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, VALID, 'class_property_casing.ts'))
      expect(results[0].messages.length).to.equal(0)
    })

    it('변수의 이름 앞 뒤로 underscore(`_`) 가 포함된 경우 린트 에러가 발생합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'class_property_underscored.ts'))
      expect(results[0].messages.length).to.equal(6)
    })

    it('object 의 프로퍼티는 camelCase 이거나 snake_case 이어야 합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, VALID, 'object_property_casing.ts'))
      expect(results[0].messages.length).to.equal(0)
    })

    it('enum 명이 pascalCase 라면 린트에러가 발생합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'enum_name_as_pascal_case.ts'))
      expect(results[0].messages.length).to.equal(1)
      expect(results[0].messages[0].message).to.equal(
        'Enum name `pascalCaseEnum` must match one of the following formats: UPPER_CASE, StrictPascalCase',
      )
    })

    it('enum 프로퍼티가 UPPER_CASE 가 아니라면 린트에러가 발생합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'enum_property_not_upper_case.ts'))
      expect(results[0].messages.length).to.equal(1)
      expect(results[0].messages[0].message).to.equal('Enum Member name `member` must match one of the following formats: UPPER_CASE')
    })

    it('enum 명은 pascalCase 이거나 UPPER_CASE 이고, enum 프로퍼티은 모두 UPPER_CASE 이어야 합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, VALID, 'enum_name_casing.ts'))
      expect(results[0].messages.length).to.equal(0)
    })

    it('snake_case 인 변수는 허용되지 않습니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'variable_as_snake_case.ts'))
      expect(results[0].messages.length).to.equal(1)
      expect(results[0].messages[0].message).to.equal(
        'Variable name `snake_case_var` must match one of the following formats: strictCamelCase, UPPER_CASE',
      )
    })

    it('PascalCase 인 변수는 허용되지 않습니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'variable_as_pascal_case.ts'))
      expect(results[0].messages.length).to.equal(1)
      expect(results[0].messages[0].message).to.equal(
        'Variable name `PascalCaseVar2` must match one of the following formats: strictCamelCase, UPPER_CASE',
      )
    })

    it('변수이름이 StrictPascalCase(e.g., ID(X)->Id(O) or DTO(X)->Dto(O))로 작성되지 않은 경우 린트 에러가 발생합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'variable_not_as_strict_camel_case.ts'))
      expect(results[0].messages.length).to.equal(1)
      expect(results[0].messages[0].message).to.equal(
        'Variable name `usingStrictNamingDTO` must match one of the following formats: strictCamelCase, UPPER_CASE',
      )
    })

    it('변수이름에는 camelCase, UPPER_CASE 만이 허용됩니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, VALID, 'variable_name_casing.ts'))
      expect(results[0].messages.length).to.equal(0)
    })

    it('변수이름이 camelCase 인 경우 strictCamelCase(e.g., ID(X)->Id(O) or DTO(X)->Dto(O)) 이어야 합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, VALID, 'variable_as_strict_camel_case.ts'))
      expect(results[0].messages.length).to.equal(0)
    })

    it('변수이름에는 StrictPascalCase(e.g., ID(X)->Id(O) or DTO(X)->Dto(O)) 만이 허용됩니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'variable_not_as_strict_camel_case.ts'))
      expect(results[0].messages.length).to.equal(1)
      expect(results[0].messages[0].message).to.equal(
        'Variable name `usingStrictNamingDTO` must match one of the following formats: strictCamelCase, UPPER_CASE',
      )
    })

    it('클래스의 프로퍼티가 _id, __v 인 경우 예외적으로 허용합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, VALID, 'class_property_casing_by_filter.ts'))
      expect(results[0].messages.length).to.equal(0)
    })

    it('클래스의 프로퍼티가 _id, __v 가 아닌 경우 기존 린트에러가 발생 합니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'class_property_not_as_filter.ts'))
      expect(results[0].messages.length).to.equal(4)
      expect(results[0].messages[0].message).to.equal(
        'Class Property name `_id_` must match one of the following formats: snake_case, strictCamelCase, StrictPascalCase, UPPER_CASE',
      )
      expect(results[0].messages[2].message).to.equal(
        'Class Property name `___v` must match one of the following formats: snake_case, strictCamelCase, StrictPascalCase, UPPER_CASE',
      )
    })
  })
})

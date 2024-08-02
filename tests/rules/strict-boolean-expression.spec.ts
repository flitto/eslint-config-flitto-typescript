import { ESLint } from 'eslint'
import * as Path from 'path'
import config from '../../index'

const INVALID = 'invalid'
const VALID = 'valid'

describe('Flitto Custom Strict Boolean Expression Linting Rule Test', () => {
  let lint: ESLint
  beforeAll(() => {
    config.parserOptions = { project: ['tsconfig.json'] }
    config.rules = { ...config.rules, '@typescript-eslint/no-unused-vars': 'off' } // 테스트시에 no-unused-vars 규칙은 제외합니다.
    lint = new ESLint({ baseConfig: config })
  })

  describe('@typescript-eslint/strict-boolean-expression', () => {
    const targetDir = 'tests/rules/target/strict-boolean-expression'
    it('number 타입일 수 있는 변수는 조건으로 사용할 수 없습니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, INVALID, 'number_as_condition.ts'))
      expect(results[0].messages.length).toEqual(1)
      expect(results[0].messages[0].messageId).toEqual('conditionErrorNullableNumber')
    })

    it('string 타입일 수 있는 변수는 조건으로 사용할 수 없습니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, INVALID, 'string_as_condition.ts'))
      expect(results[0].messages.length).toEqual(1)
      expect(results[0].messages[0].messageId).toEqual('conditionErrorNullableString')
    })

    it('object 타입일 수 있는 변수는 조건으로 사용할 수 있습니다.', async () => {
      const results = await lint.lintFiles(Path.join(targetDir, VALID, 'object_as_condition.ts'))
      expect(results[0].messages.length).toEqual(0)
    })
  })
})

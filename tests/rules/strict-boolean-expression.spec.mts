import { ESLint } from 'eslint'
import * as Path from 'path'
import { expect } from 'chai'
import config from '../../eslint.config'

const INVALID = 'invalid'
const VALID = 'valid'

describe('Flitto Custom Strict Boolean Expression Linting Rule Test', () => {
  const eslint = new ESLint({ baseConfig: config, overrideConfig: { rules: { '@typescript-eslint/no-unused-vars': 'off' } } })

  describe('@typescript-eslint/strict-boolean-expression', () => {
    const targetDir = 'tests/rules/target/strict-boolean-expression'
    it('number 타입일 수 있는 변수는 조건으로 사용할 수 없습니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'number_as_condition.ts'))
      expect(results[0].messages.length).to.equal(1)
      expect(results[0].messages[0].messageId).to.equal('conditionErrorNullableNumber')
    })

    it('string 타입일 수 있는 변수는 조건으로 사용할 수 없습니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, INVALID, 'string_as_condition.ts'))
      expect(results[0].messages.length).to.equal(1)
      expect(results[0].messages[0].messageId).to.equal('conditionErrorNullableString')
    })

    it('object 타입일 수 있는 변수는 조건으로 사용할 수 있습니다.', async () => {
      const results = await eslint.lintFiles(Path.join(targetDir, VALID, 'object_as_condition.ts'))
      expect(results[0].messages.length).to.equal(0)
    })
  })
})

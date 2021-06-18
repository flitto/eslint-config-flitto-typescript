// -== 임시 허용 ==-
// webstorm noinspection
// noinspection SpellCheckingInspection, JSUnusedLocalSymbols

// 코드 블럭을 구분하기 위해 이 파일에 대해서만 unused-vars 를 허용합니다.
/* eslint-disable no-lone-blocks,@typescript-eslint/no-unused-vars */

// -== Description ==-
// eslint-config-standard-with-typescript 로부터 가져온 룰셋입니다. (Rules exclusive to Standard TypeScript)
// standardjs 의 룰과 같은(유사한) 룰은 명시하지 않았습니다. (다음 링크의 파일 참조, Rules exclusive to Standard TypeScript only)
// 'eslint-disable-line' 처리된 코드는 해당 라인이 나타내고자 하는 특정 lint error 만을 표시하게 하기 위함입니다.
// 이 파일에서 발생하는 에러는 모두 의도된 에러입니다.

// -== Reference ==-
// https://github.com/standard/eslint-config-standard-with-typescript/blob/master/src/index.ts

// -== Rule Examples ==-

// '@typescript-eslint/adjacent-overload-signatures': 'error'
// Grouping overloaded members together can improve readability of the code.
// 오버로딩된 멤버들은 인접해있어야 합니다.
{ // 🚫 avoid
  interface IFooA {
    foo(s: string): void // eslint-disable-line @typescript-eslint/method-signature-style
    foo(n: number): void // eslint-disable-line @typescript-eslint/method-signature-style
    bar(): void // eslint-disable-line @typescript-eslint/method-signature-style
    foo(sn: string | number): void // eslint-disable-line @typescript-eslint/method-signature-style
  }

  class FooB {
    foo (s: string): void // eslint-disable-line @typescript-eslint/method-signature-style
    foo (n: number): void // eslint-disable-line @typescript-eslint/method-signature-style
    bar (): void {} // eslint-disable-line @typescript-eslint/method-signature-style
    foo (sn: string | number): void // eslint-disable-line @typescript-eslint/method-signature-style
  }
}
{ // 🟢 ok
  interface IFoo {
    foo(s: string): void // eslint-disable-line @typescript-eslint/method-signature-style
    foo(n: number): void // eslint-disable-line @typescript-eslint/method-signature-style
    foo(sn: string | number): void // eslint-disable-line @typescript-eslint/method-signature-style
    bar(): void // eslint-disable-line @typescript-eslint/method-signature-style
  }

  class Foo {
    foo (s: string): void
    foo (n: number): void
    foo (sn: string | number): void {}
    bar (): void {}
  }
}

// '@typescript-eslint/array-type': ['error', { default: 'array-simple' }]
// Using the same style for array definitions across your codebase makes it easier for your developers to read and understand the types.
// Array 타입을 지정할 때 일관성을 유지합니다.
{ // 🚫 avoid
  type MyType = string

  const a: (string | number)[] = ['a', 'b']
  const b: { prop: string }[] = [{ prop: 'a' }]
  const c: (() => void)[] = [() => {}]
  const d: Array<MyType> = ['a', 'b']
  const e: Array<string> = ['a', 'b']
  const f: ReadonlyArray<string> = ['a', 'b']

  console.log(a, b, c, d, e, f)
}
{ // 🟢 ok
  type MyType = string

  const a: Array<string | number> = ['a', 'b']
  const b: Array<{ prop: string }> = [{ prop: 'a' }]
  const c: Array<() => void> = [() => {}]
  const d: MyType[] = ['a', 'b']
  const e: string[] = ['a', 'b']
  const f: readonly string[] = ['a', 'b']

  console.log(a, b, c, d, e, f)
}

// '@typescript-eslint/consistent-type-assertions': [
//   'error',
//   {
//     assertionStyle: 'as',
//     objectLiteralTypeAssertions: 'never'
//   }
// ]
// 타입추론에 사용하는 문법의 일관성을 유지합니다.
// assertionStyle: 'as' - `<Foo> someVar` 대신 항상 `someVar as Foo` 를 사용합니다.
// objectLiteralTypeAssertions: 'as' - `const x = { ... } as T` 대신 항상 `const x: T = { ... }` 를 사용합니다.
{ // 🚫 avoid
  type T = string

  const x = { /* */ } as T

  function foo1 (): T {
    return { /* */ } as T
  }

  const a: number = <number>(<unknown>'3')
}
{ // 🟢 ok
  type T = object

  const x: T = { /* */ }
  const y = { /* */ } as any
  const z = { /* */ } as unknown

  function foo2 (): T {
    return { /* */ }
  }

  const a: number = '3' as unknown as number
}

// '@typescript-eslint/consistent-type-definitions': ['error', 'interface']
// This rule accepts one string option:
// "interface": enforce using interfaces for object type definitions.
// "type": enforce using types for object type definitions.
// object 타입 지정시 'interface' 와 'type' 중에 'interface' 만을 사용합니다.
{ // 🚫 avoid
  type T = { x: number }
}
{ // 🟢 ok
  type T1 = string
  type Foo = string | {}

  interface IT {
    x: number
  }
}

// '@typescript-eslint/default-param-last': 'error'
// This rule extends the base eslint/default-param-last rule. It adds support for optional parameters.
{ // 🚫 avoid
  function f1 (a = 0, b: number): void {}
  function f2 (a: number, b = 0, c: number): void {}
  function f3 (a: number, b?: number, c: number): void {}
  class Foo1 {
    constructor (public a = 10, private readonly b: number) {}
  }
  class Foo2 {
    constructor (public a?: number, private readonly b: number) {}
  }
}
{ // 🟢 ok
  function f4 (a = 0): void {}
  function f5 (a: number, b = 0): void {}
  function f6 (a: number, b?: number): void {}
  function f7 (a: number, b?: number, c = 0): void {}
  function f8 (a: number, b = 0, c?: number): void {}
  class Foo3 {
    constructor (public a, private readonly b = 0) {}
  }
  class Foo4 {
    constructor (public a, private readonly b?: number) {}
  }
}

// '@typescript-eslint/explicit-function-return-type': ['error', {
//   allowExpressions: true,
//   allowHigherOrderFunctions: true,
//   allowTypedFunctionExpressions: true,
//   allowDirectConstAssertionInArrowFunctions: true
// }]
// Require explicit return types on functions and class methods
// 함수와 클래스의 메서드에는 리턴타입을 명시합니다.
{ // 🚫 avoid
  // Should indicate that a number is returned
  const fn = function () {
    return // eslint-disable-line no-useless-return
  }

  // Should indicate that a string is returned
  const arrowFn = () => 'test'

  class Test {
    // Should indicate that no value is returned (void)
    method() {
      return
    }
  }
}
{ // 🟢 ok
  // No return value should be expected (void)
  function test1 (): void {
    return // eslint-disable-line no-useless-return
  }

  // A return value of type number
  const fn = function (): number {
    return 1
  }

  // A return value of type string
  const arrowFn = (): string => 'test'

  class Test {
    // No return value should be expected (void)
    method (): void {
      return // eslint-disable-line no-useless-return
    }
  }
}

// '@typescript-eslint/member-delimiter-style': [ 'error',
//   {
//     multiline: { delimiter: 'none' },
//     singleline: { delimiter: 'comma', requireLast: false }
//   }
// ]
// Require a specific member delimiter style for interfaces and type literals
// 인터페이스의 멤버를 정의할 때 구분자는 적어주지 않습니다.
{ // 🚫 avoid
  // missing semicolon delimiter
  interface IFoo {
    name: string
    greet(): string // eslint-disable-line @typescript-eslint/method-signature-style
  }

  // using incorrect delimiter
  interface IBar {
    name: string,
    greet(): string, // eslint-disable-line @typescript-eslint/method-signature-style
  }
}
{ // 🟢 ok
  interface IFoo {
    name: string
    greet(): string // eslint-disable-line @typescript-eslint/method-signature-style
  }

  interface IFoo { name: string }
}

// '@typescript-eslint/method-signature-style': 'error'
// Enforces using a particular method signature syntax.
// 메서드를 정의할 때에는 method signature syntax 를 사용합니다.
{ // 🚫 avoid
  interface IT3 {
    func (arg: number): void
    func (arg: string): void
    func (arg: boolean): void
  }
}
{ // 🟢 ok
  interface IT4 {
    func: (arg: string) => number
  }

  // this is equivalent to the overload
  interface IT5 {
    func: ((arg: number) => void) & ((arg: string) => void) & ((arg: boolean) => void)
  }
}

// 💙 flitto customized
// '@typescript-eslint/naming-convention'
// Enforces naming conventions for everything across a codebase
// 변수명은 camelCase 를 사용하고, property의 경우 snakeCase 를 사용합니다.
{ // 🚫 avoid
  const banana_juice = 'JMT'
  const BananaJuice = 'JMT'

  const bananas = {
    bananaKiwi: 'JMT',
  }

  class TempA {
    static readonly exchange_ratio = 0.3
    propertyName: 'must be snake_case'
  }
}
{ // 🟢 ok
  const CONST_VARIABLE_RATIO = 0.1
  const bananas = {
    banana_kiwi: 'JMT',
  }

  class TempB {
    static readonly EXCHANGE_RATIO = 0.3
    property_name: 'must be snake_case'
  }

  console.log((new TempB()).property_name)

  const { banana_kiwi } = bananas // destructured 변수는 허용합니다.

  const banana = 'JMT'
}

// '@typescript-eslint/no-base-to-string': 'error'
// Requires that .toString() is only called on objects which provide useful information when stringified
// .toString() 의 호출은 유효한 상태에서만 허용합니다.
{ // 🚫 avoid
  // Passing an object or class instance to string concatenation:
  const a = '' + {} // eslint-disable-line @typescript-eslint/restrict-plus-operands

  class MyClass {}
  const value = new MyClass()
  const b = value + ''

  // Interpolation and manual .toString() calls too:
  const c = `Value: ${value}`
  console.log({}.toString())
}
{ // 🟢 ok
  // These types all have useful .toString()s
  const a = true + 'Text' // eslint-disable-line @typescript-eslint/restrict-plus-operands
  const b = `Value: ${123}`
  const c = `Arrays too: ${[1, 2, 3]}` // eslint-disable-line @typescript-eslint/restrict-template-expressions
  console.log((() => {}).toString())

  // Defining a custom .toString class is considered acceptable
  class CustomToString {
    toString (): string {
      return 'Hello, world!'
    }
  }

  console.log(`Value: ${new CustomToString()}`) // eslint-disable-line @typescript-eslint/restrict-template-expressions

  const literalWithToString = {
    toString: () => 'Hello, world!',
  }

  console.log(`Value: ${literalWithToString}`) // eslint-disable-line @typescript-eslint/restrict-template-expressions
}
// '@typescript-eslint/no-dynamic-delete': 'error'
// Disallow the delete operator with computed key expressions
// 동적 삭제(런타임시 생성된 key를 참조시 해당 키가 없을 수 있는 문제) 문제와 최적화 문제로 동적으로 특정 property 를 삭제하지 않습니다.
{ // 🚫 avoid
  const container: { [i: string]: number } = {
    /* ... */
  }
  // Can be replaced with the constant equivalents, such as container.aaa
  delete container['aaa']
  delete container['Infinity']

  // Dynamic, difficult-to-reason-about lookups
  const name = 'name'
  delete container[name]
  delete container[name.toUpperCase()]
}
{ // 🟢 ok
  const container: { [i: string]: number } = {
    /* ... */
  }

  // Constant runtime lookups by string index
  delete container.aaa

  // Constants that must be accessed by []
  delete container[7]
  delete container['-Infinity']
}

// '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }]
// Disallow the declaration of empty interfaces
// 비어있는 인터페이스의 선언을 하지 않습니다.
{ // 🚫 avoid
  // an empty interface
  interface IFoo {}

  // an interface with an empty list of supertypes
  interface IBaz {}
}
{ // 🟢 ok
  // an interface with any number of members
  interface IFoo {
    name: string
  }

  // same as above
  interface IBar {
    age: number
  }

  // an interface with more than one supertype
  // in this case the interface can be used as a replacement of a union type.
  interface IBaz extends Foo, Bar {}

  // allowSingleExtends:true will silence warnings about extending a single interface without adding additional members
  // an interface with only one supertype (Bar === Foo)
  interface IBar extends Foo {}
}

// '@typescript-eslint/no-extra-non-null-assertion': 'error'
// Disallow extra non-null assertion
// non-null 타입추론을 제한합니다.
{ // 🚫 avoid
  {
    const foo: { bar: number } | null = null
    const bar = foo!!!.bar
  }
  {
    function foo10 (bar: number | undefined): void {
      const bar2: number = bar!!!
    }
  }
  {
    function foo11 (bar?: { n: number }): number | undefined {
      return bar!?.n
    }
  }
}
{ // 🟢 ok
  {
    const foo: { bar: number } | null = null
    const bar = foo!.bar // eslint-disable-line @typescript-eslint/no-non-null-assertion
  }
  {
    function foo12 (bar: number | undefined): void {
      const bar2: number = bar! // eslint-disable-line @typescript-eslint/no-non-null-assertion
    }
  }
  {
    function foo13 (bar?: { n: number }): number | undefined {
      return bar?.n
    }
  }
}

// '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }]
// Forbids the use of classes as namespaces
// 클래스를 네임스페이스로 사용하지 않습니다. 클래스를 static 상수의 집합, 또는 유틸리티성 함수의 집합으로 사용하지 않습니다. 이런 경우 대신 object literal 을 사용합니다.
{ // 🚫 avoid
  class EmptyClass {}

  class ConstructorOnly {
    constructor () {
      console.log('only log')
    }
  }

  // Use an object instead:
  class StaticOnly {
    static version = 42
    static hello () {
      console.log('Hello, world!')
    }
  }
}
{ // 🟢 ok
  class SuperClass {
    name: string
  }

  class EmptyClass extends SuperClass {}

  class ParameterProperties {
    constructor (public name: string) {}
  }

  const staticOnly = {
    version: 42,
    hello () {
      console.log('Hello, world!')
    },
  }
}

// '@typescript-eslint/no-floating-promises': 'error'
// Requires Promise-like values to be handled appropriately
//
{ // 🚫 avoid
  const promise = new Promise((resolve, reject) => resolve('value'))
  promise // eslint-disable-line @typescript-eslint/no-unused-expressions

  async function returnsPromise (): Promise<string> {
    return 'value'
  }
  returnsPromise().then(() => {})

  Promise.reject(new Error('error occurred')).catch()
  Promise.reject(new Error('error occurred')).finally()
}
{ // 🟢 ok
  const promise = new Promise((resolve, reject) => resolve('value'))
  await promise
  void promise // if you want promise logic processed as asynchronous use 'void' unary operator explicitly

  async function returnsPromiseB (): Promise<string> {
    return 'value'
  }
  returnsPromise().then(
    () => {},
    () => {},
  )

  Promise.reject(new Error('value')).catch(() => {})
  Promise.reject(new Error('value')).finally(() => {})
}

// '@typescript-eslint/no-for-in-array': 'error'
// This rule prohibits iterating over an array with a for-in loop.
// array literal 은 for-in 문에서 순회의 대상으로 사용하지 않습니다.
{ // 🚫 avoid
  for (const x in [3, 4, 5]) {
    console.log(x)
  }
}
{ // 🟢 ok
  {
    for (const x in { a: 3, b: 4, c: 5 }) {
      console.log(x)
    }
  }
  { // additional rules
    const array = [1, 2, 3]
    array.forEach((value, index) => { /* */ })
    for (const [index, value] of array.entries()) { /* */ }
    for (let i = 0; i < array.length; i++) { /* */ }
  }
}

// '@typescript-eslint/no-implied-eval': 'error'
// Disallow the use of eval()-like methods
// eval() 사용을 제한합니다.
{ // 🚫 avoid
  setTimeout('alert(`Hi!`);', 100)

  setInterval('alert(`Hi!`);', 100)

  setImmediate('alert(`Hi!`)')

  window.setTimeout('count = 5', 10)

  window.setInterval('foo = bar', 10)

  const fn10 = '() = {}'
  setTimeout(fn10, 100)

  const fn11 = (): string => {
    return 'x = 10'
  }
  setTimeout(fn11(), 100)

  const fn = new Function('a', 'b', 'return a + b') // eslint-disable-line no-new-func
}
{ // 🟢 ok
  setTimeout(function () {
    alert('Hi!')
  }, 100)

  setInterval(function () {
    alert('Hi!')
  }, 100)

  setImmediate(function () {
    alert('Hi!')
  })

  const fn = (): void => {}
  setTimeout(fn, 100)

  const foo = {
    fn: function () {},
  }
  setTimeout(foo.fn, 100)
  setTimeout(foo.fn.bind(this), 100)

  class Foo {
    name: string
    static fn = (): void => {}
  }

  setTimeout(Foo.fn, 100)
}

// '@typescript-eslint/no-invalid-void-type': 'error'
// Disallows usage of void type outside of generic or return types
// void 타입은 return 타입이나 return 타입의 generic 에만 허용합니다.
{ // 🚫 avoid
  type PossibleValues = string | number | void
  type MorePossibleValues = string | ((number & any) | (string | void))

  function logSomething (thing: void): void {}
  function printArg<T = void> (arg: T): void {}

  const logAndReturn = (): void => {}

  logAndReturn<void> (undefined)

  interface IInterface {
    lambda: () => void
    prop: void
  }

  class MyClass {
    private readonly prop_name: void
  }
}
{ // 🟢 ok
  type NoOp = () => void

  function noop (): void {}

  // let trulyUndefined = void 0 // no-void

  async function promiseMeSomething (): Promise<void> {}

  type stillVoid = void | never
}

// '@typescript-eslint/no-misused-new': 'error'
// Warns on apparent attempts to define constructors for interfaces or new for classes.
// 인터페이스의 생성자를 정의하려하거나, 클래스에 new 키워드를 사용하려고 하는 시도를 차단합니다.
{ // 🚫 avoid
  class C {
    new (): C
  }

  interface II {
    new (): II
    constructor(): void
  }
}
{ // 🟢 ok
  class CC {
    name: string
    constructor (name: string) {
      this.name = name
    }
  }
  interface II {
    new (): CC // eslint-disable-line @typescript-eslint/prefer-function-type
  }
}

// '@typescript-eslint/no-misused-promises': 'error'
// Avoid using promises in places not designed to handle them
// Pormise 가 조건절에서 잘못 사용되는 경우를 방지합니다. 이는 await 을 실수로 사용하지 않은 경우일 수 있습니다.
{ // 🚫 avoid
  const promise = Promise.resolve('value')

  if (promise) {
    // Do something
  }

  const val = promise ? 123 : 456

  while (promise) {
    // Do something
  }

  const doSomething = async (value: number): Promise<void> => await new Promise((resolve, reject) => {
    if (value > 0.5) {
      resolve()
    } else {
      reject(new Error('failed to extract value (must be > 0.5)'))
    }
  })

  const a = [1, 2, 3]

  a.forEach(async value => {
    await doSomething(value)
  })

  const b = new Promise<void>(async (resolve, reject) => {
    await doSomething(3)
    resolve()
  })

  class EventEmitter {
    on: (name: string, callback: () => Promise<void>) => {}
  }

  const eventEmitter = new EventEmitter()
  eventEmitter.on('some-event', async () => {
    await doSomething(3)
  })
}
{ // 🟢 ok
  const doSomething = async (value: number): Promise<string> => await new Promise((resolve, reject) => {
    if (value > 0.5) {
      resolve('successfully extracted (> 0.5)')
    } else {
      reject(new Error('failed to extract value (must be > 0.5)'))
    }
  })

  const promise = Promise.resolve('value')

  // @ts-expect-error
  if (await promise) {
    // Do something
  }

  // @ts-expect-error
  const val = (await promise) ? 123 : 456

  // @ts-expect-error
  while (await promise) { // eslint-disable-line no-unmodified-loop-condition
    // Do something
    if (Math.random() > 0.5) break
  }

  for (const value of [1, 2, 3]) {
    // @ts-expect-error
    await doSomething(value)
  }

  const b = new Promise<void>((resolve, reject) => {
    // Do something
    resolve()
  })

  class EventEmitter {
    on: (name: string, callback: () => void) => {}
  }

  const eventEmitter = new EventEmitter()
  eventEmitter.on('some-event', () => {
    void doSomething(3)
  })
}

// '@typescript-eslint/no-namespace': 'error'
// Disallow the use of custom TypeScript modules and namespaces
{ // 🚫 avoid
  module foo {}
  namespace foo {}

  declare module foo {}
  declare namespace foo {}
}
{ // 🟢 ok
  // @ts-expect-error
  declare module 'foo' {}

  // anything inside a d.ts file
}

// '@typescript-eslint/no-non-null-asserted-optional-chain': 'error'
// Disallows using a non-null assertion after an optional chain expression
// '?.'(optional chaining) 에 연이어 '!'(non-nuoll assertion) 을 사용하지 않습니다.
{ // 🚫 avoid
  const foo = Math.random() > 0.5 ? undefined : { bar: Math.random() > 0.5 ? () => { return { baz: 'abc' } } : undefined }

  const a = foo?.bar!
  foo?.bar()!
}
{ // 🟢 ok
  const foo: any = Math.random() > 0.5 ? undefined : { bar: Math.random() > 0.5 ? () => { return { baz: 'abc' } } : undefined }

  const a = foo?.bar
  const b = (foo?.bar).baz
  foo?.bar()
  foo?.bar()
  const c = foo?.bar().baz
}

// '@typescript-eslint/no-non-null-assertion': 'error'
// Disallows non-null assertions using the ! postfix operator (Using non-null assertions cancels the benefits of the strict null-checking mode.)
// 후위 연산자 '!'(non-null assertions) 사용을 금지합니다. - 엄격한 널 체킹 모드의 이득을 상쇄시키기 때문입니다.
{ // 🚫 avoid
  interface IFooY {
    bar?: string
  }

  const getFoo = (): IFooY => ({ bar: 'abc' })

  const foo: Foo = getFoo()
  const includesBaz: boolean = foo.bar!.includes('baz')
}
{ // 🟢 ok
  interface IFooX {
    bar?: string
  }

  const getFoo = (): IFooX => ({ bar: 'abc' })

  const foo: IFooX = getFoo()
  const includesBaz: boolean = foo.bar?.includes('baz') ?? false
}

// '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }]
// Disallow aliasing this
// this 사용을 금지합니다. (함수의 바깥의 스코프를 참조할 때는 arrow function 을 사용합니다.)
{ // 🚫 avoid
  const self = this

  setTimeout(function () {
    self.doWork()
  })
}
{ // 🟢 ok
  setTimeout(() => {
    this.doWork()
  })
}

// '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error'
// Flags unnecessary equality comparisons against boolean literals
// 조건절에 불필요한 boolean 비교를 사용하지 않습니다.
declare const someCondition: boolean
declare const someObjectBoolean: boolean | Record<string, unknown>
declare const someStringBoolean: boolean | string
{ // 🚫 avoid
  if (someCondition === true) {
    // ...
  }
}
{ // 🟢 ok
  if (someCondition) {
    // ...
  }

  if (someObjectBoolean === true) {
    // ...
  }

  if (someStringBoolean === true) {
    // ...
  }
}

// '@typescript-eslint/no-unnecessary-type-assertion': 'error'
// Warns if a type assertion does not change the type of an expression
// 타입 추론이 실제 표현식의 타입을 변경하지 않을 때는 타입 추론을 사용하지 않습니다.
{ // 🚫 avoid
  const foo1 = 3
  const bar2 = foo1!

  const foo3 = 3 as 3

  type Foo4 = 3
  const foo5 = 3 as Foo

  type Foo6 = 3
  const foo7 = 3 as Foo

  function foo8 (x: number): number {
    return x! // eslint-disable-line @typescript-eslint/no-non-null-assertion
  }
}
{ // 🟢 ok
  const foo2 = 3 as number
  const foo3 = 'foo' as const
  function foo4 (x: number | undefined): number {
    return x! // eslint-disable-line @typescript-eslint/no-non-null-assertion
  }
}

// '@typescript-eslint/no-var-requires': 'error'
// Disallows the use of require statements except in import statements
// require 문은 변수에 할당하지 않습니다. 오직 import 문에서만 사용합니다.
{ // 🚫 avoid
  const foo2 = require('foo')
}
{ // 🟢 ok
  // @ts-expect-error
  import foo = require('foo')
  require('foo')
  // @ts-expect-error
  import foo2 from 'foo'
}

// '@typescript-eslint/prefer-function-type': 'error'
// Use function types instead of interfaces with call signatures
// 인터페이스에 정의된 호출 시그니처보다 함수 타입을 사용합니다.
{ // 🚫 avoid
  {
    interface IFooXX {
      (): string
    }
  }
  {
    function foo33 (bar: { (): number }): number {
      return bar()
    }
  }
  {
    interface IFooYY extends Function {
      (): void
    }
  }
  {
    interface IMixinMethod {
      // returns the function itself, not the `this` argument.
      (arg: string): this
    }
  }
}
{ // 🟢 ok
  {
    interface IFooYY {
      (): void
      bar: number
    }
  }
  {
    function foo34 (bar: { (): string, baz: number }): string {
      return bar()
    }
  }
  {
    // Hybrid Types
    // https://www.typescriptlang.org/docs/handbook/interfaces.html#hybrid-types
    interface IFooXY {
      bar: string
    }
    interface IBar extends IFooXY {
      (): void
    }
  }
  {
    // returns the `this` argument of function, retaining it's type.
    type MixinMethod = <TSelf>(this: TSelf, arg: string) => TSelf

    const a: MixinMethod = function () {
      return this
    }
  }
  {
    // a function that returns itself is much clearer in this form.
    type ReturnsSelf = (arg: string) => ReturnsSelf
  }
  {
    // multiple call signatures (overloads) is allowed:
    interface IOverloaded {
      (data: string): number
      (id: number): string
    }
    // this is equivelent to Overloaded interface.
    type Intersection = ((data: string) => number) & ((id: number) => string)
  }
}

// '@typescript-eslint/prefer-includes': 'error'
// Enforce includes method over indexOf method
// indexOf 보다는 includes 를 사용하여 배열 중 포함 여부를 판단합니다.
{
  // 공식문서 참조
}

// '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false }]
// Enforce the usage of the nullish coalescing operator instead of logical chaining
// loginal chaining 보다 nullish coalescing 연산자를 사용합니다.
// '??'(nullish coalescing) 은 연산자 왼쪽의 대상이 null, undefined 인 경우에 오른쪽 부분을 평가합니다.
declare const nullString: string | null
{ // 🚫 avoid
  const emptyString = ''

  const nullish1 = emptyString ?? 'unsafe'
  const logical1 = emptyString || 'unsafe'

  // nullish1 === ''
  // logical1 === 'unsafe'

  const nullish2 = nullString ?? 'safe'
  const logical2 = nullString || 'safe'
}

// '@typescript-eslint/prefer-optional-chain': 'error'
// Prefer using concise optional chain expressions instead of chained logical ands
// 연속된 '&&' 논리연산자보다는 정확한 옵셔널 체인 표현식을 사용합니다.
{
  interface IT {
    a?: {
      b?: {
        c: string
        method?: () => void
      }
    }
  }

  const foo: IT = {}
  {
    const a = foo && foo.a && foo.a.b && foo.a.b.c
    const b = foo && foo['a'] && foo['a'].b && foo['a'].b.c
    const c = foo && foo.a && foo.a.b && foo.a.b.method && foo.a.b.method()

    // this rule also supports converting chained strict nullish checks:
    const d = foo && foo.a != null && foo.a.b !== null && foo.a.b.c !== undefined && foo.a.b.c.d !== undefined && foo.a.b.c.d.e
  }
  {
    const a = foo?.a?.b?.c
    const b = foo?.['a']?.b?.c
    const c = foo?.a?.b?.method?.()

    const d = foo?.a?.b?.c?.d?.e
  }
}

// '@typescript-eslint/prefer-readonly': 'error'
// Requires that private members are marked as readonly if they're never modified outside of the constructor
// private 멤버가 생성자 바깥에서 수정되지 않는다면 readonly 접근제어자를 사용합니다.
{ // 🚫 avoid
  class Container {
    // These member variables could be marked as readonly
    private never_modified_member = true
    private only_modified_in_constructor: number

    public constructor (
      onlyModifiedInConstructor: number,
      // Private parameter properties can also be marked as readonly
      private never_modified_parameter: string,
    ) {
      this.only_modified_in_constructor = onlyModifiedInConstructor
    }
  }
}
{ // 🟢 ok
  class Container {
    // Public members might be modified externally
    public public_member: boolean

    // Protected members might be modified by child classes
    protected protected_member: number

    // This is modified later on by the class
    private modified_later = 'unchanged'

    public mutate (): void {
      this.modified_later = 'mutated'
    }
  }
}

// '@typescript-eslint/prefer-reduce-type-parameter': 'error'
// Prefer using type parameter when calling Array#reduce instead of casting
// reduce 를 사용할 때 `[].reduce<Type>` 과 같이 타입을 사용합니다.
{ // 🚫 avoid
  [1, 2, 3].reduce((arr, num) => arr.concat(num * 2), [] as number[]);

  ['a', 'b'].reduce(
    (accum, name) => ({
      ...accum,
      [name]: true,
    }),
    {} as Record<string, boolean>,
  )
}
{ // 🟢 ok
  [1, 2, 3].reduce<number[]>((arr, num) => arr.concat(num * 2), []);

  ['a', 'b'].reduce<Record<string, boolean>>(
    (accum, name) => ({
      ...accum,
      [name]: true,
    }),
    {},
  )
}

// '@typescript-eslint/prefer-ts-expect-error': 'error'
// Recommends using @ts-expect-error over @ts-ignore
// 타입스크립트 컴파일 에러를 무시해야하는 경우 실제가 에러가 없을 경우 에러를 발생시켜주는 @ts-expect-error 를 사용합니다.
{ // 🚫 avoid
  // @ts-ignore
  const str: string = 1

  /**
   * Explaining comment
   *
   * @ts-ignore */
  const multiLine: number = 'value'

  /** @ts-ignore */
  const block: string = 1

  const isOptionEnabled = (key: string): boolean => {
    // @ts-ignore: if key isn't in globalOptions it'll be undefined which is false
    return !!globalOptions[key]
  }
}
{ // 🟢 ok
  // @ts-expect-error
  const str: string = 1

  /**
   * Explaining comment
   *
   * @ts-expect-error */
  const multiLine: number = 'value'

  /** @ts-expect-error */
  const block: string = 1

  const isOptionEnabled = (key: string): boolean => {
    // @ts-expect-error: if key isn't in globalOptions it'll be undefined which is false
    return !!globalOptions[key]
  }
}

// '@typescript-eslint/promise-function-async': 'error'
// Requires any function or method that returns a Promise to be marked async
// Promise 를 리턴하는 함수 또는 메서드는 모두 async 를 명시해주어야 합니다.
{ // 🚫 avoid
  const arrowFunctionReturnsPromise = (): Promise<string> => Promise.resolve('value')

  function functionReturnsPromise2 (): Promise<string> {
    return Promise.resolve('value')
  }
}
{ // 🟢 ok
  const arrowFunctionReturnsPromise = async (): Promise<string> => Promise.resolve('value') // eslint-disable-line @typescript-eslint/return-await

  async function functionReturnsPromise3 (): Promise<string> {
    return Promise.resolve('value') // eslint-disable-line @typescript-eslint/return-await
  }
}
// '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }]
// Requires Array#sort calls to always provide a compareFunction
// Array#sort 함수는 요소들은 언제나 UTF-16 문자열로 캐스팅하여 정렬합니다. 숫자를 배열을 오름 또는 내림차순으로 정렬시 원하지 않는 결과를 얻을 수 있습니다.
// 따라서 Array#sort 함수를 사용할 때는 언제나 compareFunction 을 사용합니다.
{
  const array: any[] = new Array(Math.random() * 100).fill(0).map(() => Math.random())

  array.sort()
}
{ // 🟢 ok
  // String arrays should be sorted using `String#localeCompare`. - ignoreStringArrays
  const stringArray: string[] = new Array(Math.random() * 100).fill(0).map(() => `${Math.random()}`)
  stringArray.sort()

  const array: any[] = new Array(Math.random() * 100).fill(0).map(() => Math.random())
  const userDefinedType: { sort: () => void } = undefined as any // sort 는 해당 object 의 내부 프로퍼티 중 하나를 정렬한다고 가정

  array.sort((a, b) => a - b)
  array.sort((a, b) => a.localeCompare(b))

  userDefinedType.sort()
}

// '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }]
// When adding two variables, operands must both be of type number or of type string
// number 타입과 string 타입에 대해서만 + 연산자를 사용합니다.
// checkCompoundAssignments: true - '+='(복합연산자) 사용을 허용합니다.
{ // 🚫 avoid
  const foo15 = '5.5' + 5
  // @ts-expect-error: BigInt literals are not available when targeting lower than ES2020.
  const foo16 = 1n + 1

  // checkCompoundAssignments
  let foo: string | undefined
  foo += 'some data'

  let bar: string = ''
  bar += 0
}
{ // 🟢 ok
  const foo13 = parseInt('5.5', 10) + 10
  // @ts-expect-error: BigInt literals are not available when targeting lower than ES2020.
  const foo14 = 1n + 1n // bigInteger

  // checkCompoundAssignments
  let foo: number = 0
  foo += 1

  let bar = ''
  bar += 'test'
}

// '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }]
// Enforce template literal expressions to be of string type
// string 타입을 제외하고는 templateLiteral 타입을 사용하지 않습니다.
// allowNumber: number 타입은 templateLiteral 에 사용할 수 있습니다.
{ // 🚫 avoid
  const arg1 = [1, 2]
  const msg1 = `arg1 = ${arg1}`

  const arg2 = { name: 'Foo' }
  const msg2 = `arg2 = ${arg2 || null}`
}
{ // 🟢 ok
  const arg = 'foo'
  const msg1 = `arg = ${arg}`
  const msg2 = `arg = ${arg || 'default'}`

  const stringWithKindProp: string & { _kind?: 'MyString' } = 'foo'
  const msg3 = `stringWithKindProp = ${stringWithKindProp}`

  const arg1 = 123
  const msg11 = `arg = ${arg}`
  const msg21 = `arg = ${arg || 'zero'}`
}

// '@typescript-eslint/return-await': ['error', 'always']
// Enforces consistent returning of awaited values
// 반환되는 Promise 는 언제나 await 한 뒤에 반환합니다.
// always - 항상 await 처리된 결과를 반환합니다. (try-catch 문의 조건에 상관없이, 자세한 내용은 공식문서 참조)
{ // 🚫 avoid
  async function invalidAlways1 (): Promise<string | undefined> {
    try {
      return Promise.resolve('try')
    } catch (e) {}
  }

  async function invalidAlways2 (): Promise<string> {
    return Promise.resolve('try')
  }

  async function invalidAlways3 (): Promise<string> {
    return await 'value'
  }
}
{ // 🟢 ok
  async function validAlways1 (): Promise<string | undefined> {
    try {
      return await Promise.resolve('try')
    } catch (e) {}
  }

  async function validAlways2 (): Promise<string> {
    return await Promise.resolve('try')
  }

  async function validAlways3 (): Promise<string> {
    return 'value'
  }
}

// '@typescript-eslint/strict-boolean-expressions': ['error', {
//   allowString: false,
//   allowNumber: false,
//   allowNullableObject: false,
//   allowNullableBoolean: false,
//   allowNullableString: false,
//   allowNullableNumber: false,
//   allowAny: false
// }]
// Restricts the types allowed in boolean expressions
// string, number, nullbal object, nullable boolean, nullable string, nullable number, any 타입은 boolean 표현식에 사용될 수 없습니다.
{ // 🚫 avoid
  // nullable numbers are considered unsafe by default
  const num: number | undefined = 0
  if (num) {
    console.log('num is defined')
  }

  // nullable strings are considered unsafe by default
  const str: string | null = null
  if (!str) {
    console.log('str is empty')
  }

  // nullable booleans are considered unsafe by default
  function foo (bool?: boolean): void {
    if (bool) {
      // bar()
    }
  }

  // `any`, unconstrained generics and unions of more than one primitive type are disallowed
  const foo612 = <T>(arg: T): number => (arg ? 1 : 0)

  // always-truthy and always-falsy types are disallowed
  const obj = {}
  while (obj) {
    // ...
    if (Math.random() > 0.5) break
  }
}
{ // 🟢 ok
  // Using logical operator short-circuiting is allowed
  const map = {
    foo: 'name of foo',
    get (foo3: string) {
      return {}
    },
  }

  const component = (): string => {
    const entry = map.get('foo') || {}
    return entry && '<p>Name: {entry.name}</p>'
  }

  // nullable values should be checked explicitly against null or undefined
  const num: number | undefined = Math.random() > 0.5 ? 1 : Math.random() > 0.5 ? 0 : undefined
  if (num != null) {
    console.log('num is defined')
  }

  const str: string | null = null
  if (str != null && !str) {
    console.log('str is empty')
  }

  function foo213 (bool?: boolean): void {
    if (bool ?? false) {
      // ...
    }
  }

  // `any` types should be cast to boolean explicitly
  const foo613 = (arg: any): number => (Boolean(arg) ? 1 : 0) // eslint-disable-line no-extra-boolean-cast
}

// '@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }]
// Sets preference level for triple slash directives versus ES6-style import declarations
// triple-slash-reference 를 사용하지 않습니다. (ES6 부터 import 사용을 권장)
{
  // 공식문서 참조
}

// '@typescript-eslint/type-annotation-spacing': 'error'
// Require consistent spacing around type annotations
// 타입 어노테이션 양 옆의 공백에 관한 규칙을 정의합니다.
{ // 🚫 avoid
  const foo1:string = 'bar'
  const foo2 :string = 'bar'
  const foo3 : string = 'bar'

  function foo40 ():string {}
  function foo5 () :string {}
  function foo6 () : string {}

  class Foo7 {
    name:string
  }

  class Foo8 {
    name :string
  }

  class Foo9 {
    name : string
  }

  type Foo10 = ()=>{}
  type Foo11 = () =>{}
  type Foo12 = ()=> {}
}
{ // 🟢 ok
  const foo234: string = 'bar'

  function foo123 (): string {
    return 'some string'
  }

  class Foo123 {
    name: string
  }

  type Foo234 = () => {}
}

// 'no-void': ['error', { allowAsStatement: true }]
// Disallow use of the void operator
// undefined 를 반환하는 용도로써의 void 는 사용하지 않습니다. 대신, 선언(statement)로써의 void 는 허용합니다.
{ // 🚫 avoid
  const bar = (): string => 'string is exist'

  const foo = void bar()
  function baz (): undefined {
    return void 0
  }
}
{ // 🟢 ok
  const someFunction = (): string => { return 'string is exist' }

  void foo
  void someFunction()
}

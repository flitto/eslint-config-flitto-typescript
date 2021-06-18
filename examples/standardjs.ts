// -== 임시 허용 ==-
// webstorm noinspection
// noinspection SpellCheckingInspection, JSUnusedLocalSymbols

// no-lone-blocks: lint 규칙 예시 코드 블록을 나누기 위해 임시로 허용합니다.
// no-multi-spaces: ok, avoid 주석을 표현하기 위해 본 파일에서만 임시로 허용합니다.
// @typescript-eslint/explicit-function-return-type: standardjs 는 해당 룰셋을 갖고 있지 않으므로 이 파일에서는 해당 규칙을 해제합니다.
/* eslint-disable no-lone-blocks,no-multi-spaces,@typescript-eslint/explicit-function-return-type */

// -== Description ==-
// eslint-config-standard 을 참조하여 작성된 룰셋입니다.
// 'eslint-disable-line' 처리된 코드는 해당 라인이 나타내고자 하는 특정 lint error 만을 표시하게 하기 위함입니다.
// 이 파일에서 발생하는 에러는 모두 의도된 에러입니다.

// -== Reference ==-
// https://standardjs.com/rules-kokr.html
// https://standardjs.com/rules-en.html

// -== Rule Examples ==-

import * as path from 'path'
// eslint: indent
// Use 2 spaces for indentation.
// 들여쓰기시 2칸 공백사용 을 사용합니다.
{
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const hello = (name) => {
    console.log('hi', name)
  }
  console.log(hello)
}

// eslint: quotes
// Use single quotes for strings except to avoid escaping.
// 이스케이프를 피하기 위해 문자열에 작은 따옴표 를 사용합니다.
{
  console.log('hello there') // 🟢 ok
  console.log("hello there") // 🚫 avoid
  console.log(`hello there`) // 🚫 avoid
  console.log(`hello there${123}`) // 🟢 ok
}

// eslint: no-unused-vars
// No unused variables.
// 사용하지 않는 변수를 정의하지 마세요.
{
  const a = () => 3
  const myFunction = () => {
    const result = a() // 🚫 avoid
  }
  console.log(myFunction)
}

// eslint: keyword-spacing
// Add a space after keywords.
// 예약어 뒤에는 공백을 추가합니다.
{
  const condition = true

  if (condition) {
    /* ... */
  } // 🟢 ok

  if(condition) { /* ... */ } // 🚫 avoid
}

// eslint: space-before-function-paren
// Add a space before a function declaration's parentheses.
// 함수 선언 괄호 앞에 공백을 추가합니다.
{
  function runA (arg) { /* */ } // 🟢 ok
  function runB(arg) { /* */ } // 🚫 avoid

  runA(function () { /* */ }) // 🟢 ok
  runB(function() { /* */ }) // 🚫 avoid

  function runC () { // 🟢 ok
    console.log(this.arguments)
  }

  runC()
}

// eslint: eqeqeq
// Always use === instead of ==.
// 항상 == 대신 ===을 사용 합니다.
{
  const name = 'John'
  if (name === 'John') {
    // ...
  } // 🟢 ok
  if (name == 'John') {
    // ...
  } // 🚫 avoid

  if (name !== 'John') {
    // ...
  } // 🟢 ok
  if (name != 'John') {
    // ...
  } // 🚫 avoid
}

// eslint: space-infix-ops
// Infix operators must be spaced.
// 공백사이에 연산자를 넣어주세요.
{
  const name = 'hi there'
  {
    // 🟢 ok
    const x = 2
    const message = 'hello, ' + name + '!'
    console.log(x, message)
  }

  {
    // 🚫 avoid
    const x=2
    const message = 'hello, '+name+'!'
    console.log(x, message)
  }
}

// eslint: comma-spacing
// Commas should have a space after them.
// 쉽표 뒤에 공백 이 있어야 합니다.
{
  // 🟢 ok
  const list = [1, 2, 3, 4]
  const great = (name: number, options: string) => { /* ... */ }
  console.log(list, great)
}
{
  // 🚫 avoid
  const list = [1,2,3,4]
  const greet = (name: number,options: string) => { /* ... */ }
  console.log(list, greet)
}

// eslint: brace-style
// Keep else statements on the same line as their curly braces.
// else 문은 중괄호와 같은 줄에 두어야 합니다.
{
  // 🟢 ok
  const condition = true
  if (condition) {
    // ...
  } else {
    // ...
  }
}
{
  // 🚫 avoid
  const condition = false
  if (condition) {
    // ...
  }
  else {
    // ...
  }
}

// eslint: curly
// For multi-line if statements, use curly braces.
// 여러줄의 if문을 사용할 경우 중괄호를 사용해야합니다.
{
  const options = {
    quiet: false,
  }
  // 🟢 ok
  if (options.quiet !== true) console.log('done')

  // 🟢 ok
  if (options.quiet !== true) {
    console.log('done')
  }

  // 🚫 avoid
  if (options.quiet !== true)
    console.log('done')
}

// eslint: handle-callback-err
// Always handle the err function parameter.
// err 함수파라미터가 있을 경우 항상 처리해줘야 합니다.
{
  const run = (a: (err: any) => void) => {}
  // 🟢 ok
  run(function (err) {
    if (err) throw err
    window.alert('done')
  })

  // 🚫 avoid
  run(function (err) {
    window.alert('done')
  })
}

// eslint: no-undef
// Declare browser globals with a /* global */ comment.
// 항상 브라우저 전역 접두어에는 window를 붙여야 합니다.
// 예외의 경우들: document, console, navigator.
{
  /* global alert, prompt */
  {
    window.alert('hi') // 🟢 ok

    alert('hi')
    prompt('ok?')
  }
}

// eslint: no-multiple-empty-lines
// Multiple blank lines not allowed.
// 여러 줄의 공백을 허용하지 않습니다.
{
  {
    // 🟢 ok
    const value = 'hello world'

    console.log(value)
  }
  {
    // 🚫 avoid
    const value = 'hello world'



    console.log(value)
  }
}

// eslint: operator-linebreak
// For the ternary operator in a multi-line setting, place `?` and `:` on their own lines.
// 여러 줄의 삼항 연산자 를 사용할 경우 `?`와 `:`를 각각의 행으로 처리해야합니다.
{
  const env = {
    development: true,
  }

  {
    // 🟢 ok
    const location = env.development ? 'localhost' : 'www.api.com'
    console.log(location)
  }

  {
    // 🟢 ok
    const location = env.development
      ? 'localhost'
      : 'www.api.com'
    console.log(location)
  }

  {
    // 🚫 avoid
    const location = env.development ?
      'localhost' :
      'www.api.com'
    console.log(location)
  }
}

// eslint: one-var
// For var declarations, write each declaration in its own statement.
// var 선언의 경우 각각 자체적으로 선언해야 합니다.
{
  // 🟢 ok
  const silent = true
  const verbose = true
  console.log(silent, verbose)
}
{
  // 🚫 avoid
  const silent = true, verbose = true
  console.log(silent, verbose)
}
{
  // 🚫 avoid
  const silent = true,
    verbose = true
  console.log(silent, verbose)
}

// eslint: no-cond-assign
// Wrap conditional assignments with additional parentheses. This makes it clear that the expression is intentionally an assignment (=) rather than a typo for equality (===).
// 조건부 할당을 추가적으로 괄호로 묶습니다. 이것은 표현식이 등호 (===)에 대한 오타보다는 의도적으로 할당 (=)이라는 것을 분명히해야 합니다.
{
  const text = 'abc'
  const expr = /\w+/
  let m
  // 🟢 ok
  // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
  while (((m = text.match(expr)) != null)) {
    console.log(m)
    // ...
  }
}
{
  const text = 'abc'
  const expr = /\w+/
  let m
  // 🚫 avoid
  // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
  while (m = text.match(expr) != null) {
    console.log(m)
    // ...
  }
}

// eslint: block-spacing
// Add spaces inside single line blocks.
// Overwhelmed by 'brace-style'
// 한 줄에 중괄호로 처리할 경우 공백을 추가합니다.
{
  const foo = () => {return true} // 🚫 avoid
  const bar = () => { return true } // 🟢 ok

  console.log(foo, bar)
}

// 💙 flitto customized (See also: @typescript-eslint/naming-convention)
// eslint: camelcase
// Use camelcase when naming variables and functions.
// 변수나 함수이름 사용시 카멜케이스(camelcase)를 사용합니다.
{
  const my_var = 'hello' // 🚫 avoid
  const myVar = 'hello' // 🟢 ok

  const a = {
    snake_cased: 'string', // properties: never
  }

  const { snake_cased } = a // ignoreDestructuring: true

  console.log(my_var, myVar, snake_cased)
}

// 💙 flitto customized
// eslint: comma-dangle
// Only-Flitto-allowed
// Trailing commas not allowed.
// 뒤쪽에 쉼표는 허용하지 않습니다.
{
  const obj = {
    message: 'hello', // 🚫 avoid
  }

  console.log(obj)
}

// eslint: comma-style
// Commas must be placed at the end of the current line.
// 쉼표를 사용할 경우 현재 행 끝에 있어야 합니다.
{
  {
    const obj = {
      foo: 'foo'
      ,bar: 'bar', // 🚫 avoid
    }
    console.log(obj)
  }
  {
    const obj = {
      foo: 'foo',
      bar: 'bar', // 🟢 ok
    }
    console.log(obj)
  }
}

// eslint: dot-location
// Dot should be on the same line as property.
// 점(Dot)은 각 속성과 같은 줄에 있어야 합니다.
{
  console.
    log('hello') // 🚫 avoid
}
{
  console
    .log('hello') // 🟢 ok
}

// eslint: eol-last
// Files must end with a newline.
// 파일은 개행으로 끝나야합니다.
{
  // ... can't displayed
}

// eslint: func-call-spacing
// No space between function identifiers and their invocations.
// 함수식별자와 호출사이에는 공백이 없어야 합니다.
{
  console.log ('hello') // 🚫 avoid
  console.log('hello') // 🚫 avoid
}

// eslint: key-spacing
// Add space between colon and value in key value pairs.
// 콜론과 키 값 쌍의 값 사이에 공백을 추가해야 합니다.
{
  {
    const obj = { key : 'value' } // 🚫 avoid
    console.log(obj)
  }
  {
    const obj = { key :'value' } // 🚫 avoid
    console.log(obj)
  }
  {
    const obj = { key:'value' } // 🚫 avoid
    console.log(obj)
  }
  {
    const obj = { key: 'value' } // 🟢 ok
    console.log(obj)
  }
}

// eslint: new-cap
// Constructor names must begin with a capital letter.
// 생성자 이름은 대문자로 시작해야합니다.
{
  {
    function animal () {}
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const dog = new animal() // 🚫 avoid
    console.log(dog)
  }
  {
    function Animal1 () {}
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const dog = new Animal1() // 🟢 ok
    console.log(dog)
  }
}

// eslint: new-parens
// Constructor with no arguments must be invoked with parentheses.
// 인수가 없는 생성자는 괄호로 호출해야합니다.
{
  function Animal2 () {}
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const dog = new Animal2 // 🚫 avoid
    console.log(dog)
  }
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const dog = new Animal2() // 🟢 ok
    console.log(dog)
  }
}

// eslint: accessor-pairs
// Objects must contain a getter when a setter is defined.
// setter가 정의되면 객체에 getter가 포함되어 있어야 합니다.
{
  {
    const person = {
      set name (value) {    // 🚫 avoid
        this._name = value
      },
    }
    console.log(person)
  }
  {
    const person = {
      set name (value) {
        this._name = value
      },
      get name () {         // 🟢 ok
        return this._name
      },
    }
    console.log(person)
  }
}

// eslint: constructor-super
// Constructors of derived classes must call super.
// 파생 클래스의 생성자는 super를 호출해야합니다.
{
  class Animal {
    legs
    constructor() {}
  }
  {
    class Dog {
      constructor () {
        super()             // 🚫 avoid
        this.legs = 4
      }
    }
    console.log(Dog)
  }
  {
    class Dog extends Animal {
      constructor () {      // 🚫 avoid
        this.legs = 4
      }
    }
    console.log(Dog)
  }
  {
    class Dog extends Animal {
      constructor () {
        super()             // 🟢 ok
        this.legs = 4
      }
    }
    console.log(Dog)
  }
}

// eslint: no-array-constructor
// Use array literals instead of array constructors.
// 배열 생성자 대신에 배열 리터럴을 사용하십시오.
{
  {
    const nums = new Array(1, 2, 3)   // 🚫 avoid
    console.log(nums)
  }
  {
    const nums = [1, 2, 3]            // 🟢 ok
    console.log(nums)
  }
}

// eslint: no-caller
// Avoid using arguments.callee and arguments.caller.
// arguments.callee과 arguments.caller를 사용하지 마십시오.
{
  {
    function foo1 (n) {
      if (n <= 0) return

      arguments.callee(n - 1)   // 🚫 avoid
    }
    foo1(3)
  }
  {
    function foo2 (n) {
      if (n <= 0) return

      foo2(n - 1)                // 🟢 ok
    }
    foo2(4)
  }
}

// eslint: no-class-assign
// Avoid modifying variables of class declarations.
// 클래스로 선언된 변수를 수정하지 마세요
{
  class Dog {}
  Dog = 'Fido'    // 🚫 avoid
}

// eslint: no-const-assign
// Avoid modifying variables declared using const.
// const를 사용하여 선언 된 변수는 수정하지 마십시오.
{
  const score = 100
  score = 125       // 🚫 avoid
}

// eslint: no-constant-condition
// Avoid using constant expressions in conditions (except loops).
// 조건(반복 제외)에서 상수 표현식을 사용하지 마십시오.
{
  {
    if (false) {    // 🚫 avoid
      // ...
    }
  }

  {
    const x = 'string'.charCodeAt(3)
    if (x === 0) {  // 🟢 ok
      // ...
    }
  }

  {
    let i = 0
    while (true) {  // 🟢 ok
      // ...
      i++
      if (i === 10) break
    }
  }
}

// eslint: no-control-regex
// No control characters in regular expressions.
// https://eslint.org/docs/rules/no-control-regex
// 정규식에는 제어 문자가 없습니다.
{
  const pattern1 = /\x1f/    // 🚫 avoid
  const pattern2 = /\x20/    // 🟢 ok
  const str = 'abc'
  const regex1 = new RegExp(pattern1)
  regex1.exec(str)
  const regex2 = new RegExp(pattern2)
  regex2.exec(str)
}

// eslint: no-debugger
// No debugger statements.
// debugger문은 없습니다.
{
  function sum (a: number, b: number): number {
    debugger      // 🚫 avoid
    return a + b
  }
  console.log(sum(2, 3))
}

// eslint: no-delete-var
// No delete operator on variables.
// 변수에 delete 연산자는 없습니다.
{
  let name
  delete name     // 🚫 avoid
}

// eslint: no-dupe-args
// No duplicate arguments in function definitions.
// 함수 정의시 중복된 인수를 사용할 수 없습니다.
{
  {
    function sum1 (a, b, a) {  // 🚫 avoid
      // ...
      console.log(a, b, a)
    }
    sum1(1, 2, 3)
  }

  {
    function sum2 (a, b, c) {  // 🟢 ok
      // ...
    }
    sum2(1, 2, 3)
  }
}

// eslint: no-dupe-class-members
// No duplicate name in class members.
// 클래스 멤버에 중복된 이름을 사용할 수 없습니다.
{
  class Dog {
    bark () {}
    bark () {}    // 🚫 avoid
  }
}

// eslint: no-dupe-keys
// No duplicate keys in object literals.
// 객체 리터럴에서 중복된 키 값을 사용할 수 없습니다.
{
  const user = {
    name: 'Jane Doe',
    name: 'John Doe', // 🚫 avoid
  }
}

// eslint: no-duplicate-case
// No duplicate case labels in switch statements.
// switch문에서 중복된 case 라벨을 사용할 수 없습니다.
{
  const id = 'randomString'.charCodeAt(3).valueOf()
  switch (id) {
    case 1:
    // ...
    case 1:     // 🚫 avoid
  }
}

// eslint: no-duplicate-imports
// Use a single import statement per module.
// 모듈 당 하나의 import 문을 사용해야 합니다.
{
  // can't display
}

// eslint: no-empty-character-class
// No empty character classes in regular expressions.
// https://eslint.org/docs/rules/no-empty-character-class
// 정규식에서 빈 문자 클래스가 없어야 합니다.
{
  const myRegex1 = /^abc[]/      // 🚫 avoid
  const myRegex2 = /^abc[a-z]/   // 🟢 ok

  console.log(myRegex1.exec('test1'))
  console.log(myRegex2.exec('test2'))
}

// eslint: no-empty-pattern
// No empty destructuring patterns.
// 비어있는 구조의 패턴이 없어야 합니다.
{
  const foo = {
    a: {
      b: 3,
    },
  }
  const { a: {} } = foo         // 🚫 avoid
  const { a: { b } } = foo      // 🟢 ok

  console.log(b)
}

// eslint: no-eval
// No using eval().
// eval()을 사용하지 않습니다.
{
  const user = {
    gender: 'male',
  }
  const propName = 'gender'
  eval('var result = user.' + propName) // 🚫 avoid
  const result = user[propName]             // 🟢 ok
  console.log(result)
}

// eslint: no-ex-assign
// No reassigning exceptions in catch clauses.
// catch절의 예외를 재할당하면 안됩니다.
{
  try {
    // ...
  } catch (e) {
    e = 'new value'             // 🚫 avoid
  }

  try {
    // ...
  } catch (e) {
    const newVal = 'new value'  // 🟢 ok
  }
}

// eslint: no-extend-native
// No extending native objects.
// 네이티브 객체를 확장하지 않습니다.
{
  Object.prototype.age = 21     // 🚫 avoid
}

// eslint: no-extra-bind
// Avoid unnecessary function binding.
// 불필요한 함수 바인딩을 피해야 합니다.
{
  const user = {
    name: 'json',
    getName: function () { return this.name },
  }

  const name1 = function () {
    getName()
  }.bind(user)    // 🚫 avoid

  const name2 = function () {
    this.getName()
  }.bind(user)    // 🟢 ok

  console.log(name1, name2)
}

// eslint: no-extra-boolean-cast
// Avoid unnecessary boolean casts.
// 불필요한 boolean 캐스트를 피해야 합니다.
{
  const result = true
  {
    if (!!result) {   // 🚫 avoid
      // ...
    }
  }

  {
    if (result) {     // 🟢 ok
      // ...
    }
  }
}

// eslint: no-extra-parens
// No unnecessary parentheses around function expressions.
// 함수 표현식에는 불필요한 괄호가 없어야 합니다.
{
  const myFunc1 = (function () { })   // 🚫 avoid
  const myFunc2 = function () { }     // 🟢 ok

  console.log(myFunc1, myFunc2)
}

// eslint: no-fallthrough
// Use break to prevent fallthrough in switch cases.
// 'switch'경우에 완료되지 못하는 것을 막기 위해 'break'를 사용하십시오.
{
  const doSomething = () => {}
  const doSomethingElse = () => {}
  const filter = 'abide'.charCodeAt(3)
  {
    switch (filter) {
      case 1:
        doSomething()    // 🚫 avoid
      case 2:
        doSomethingElse()
    }
  }

  switch (filter) {
    case 1:
      doSomething()
      break           // 🟢 ok
    case 2:
      doSomethingElse()
  }

  switch (filter) {
    case 1:
      doSomething()
    // fallthrough  // 🟢 ok
    case 2:
      doSomethingElse()
  }
}

// eslint: no-floating-decimal
// No floating decimals.
// 부동 소숫점이 없어야 합니다.
{
  const discount1 = .5      // 🚫 avoid
  const discount2 = 0.5     // 🟢 ok

  console.log(discount1, discount2)
}

// eslint: no-func-assign
// Avoid reassigning function declarations.
// 함수 선언을 재지정하지 말아야 합니다.
{
  function myOtherFunc () { }
  function myFunc () { }
  myFunc = myOtherFunc    // 🚫 avoid

  console.log(myFunc)
}

// eslint: no-global-assign
// No reassigning read-only global variables.
// 읽기전용 전역 변수를 재정의하지 말아야합니다.
{
  window = {}     // 🚫 avoid
}

// eslint: no-implied-eval
// No implied eval().
// eval()이 포함되지 않도록 합니다.
{
  setTimeout("alert('Hello world')")                   // 🚫 avoid
  setTimeout(function () {
    alert('Hello world')
  })     // 🟢 ok
}

// eslint: no-inner-declarations
// No function declarations in nested blocks.
// 중괄호 안에서 함수가 선언되지 말아야 합니다.
{
  const authenticated = false
  if (authenticated) {
    function setAuthUser () {}    // 🚫 avoid
    setAuthUser()
  }
}

// eslint: no-invalid-regexp
// No invalid regular expression strings in RegExp constructors.
// RegExp 생성자에 잘못된 정규 표현식 문자열이 없어야 합니다.
{
  // eslint-disable-next-line prefer-regex-literals
  RegExp('/[a-z/') // 🚫 avoid
  // eslint-disable-next-line prefer-regex-literals
  RegExp('/[a-z]/') // 🟢 ok
}

// eslint: no-irregular-whitespace
// No irregular whitespace.
// 불규칙한 공백이 없어야 합니다.
{
  function myFunc3 () /* <NBSP> */{}   // 🚫 avoid
  console.log(myFunc3)
}

// eslint: no-iterator
// No using __iterator__.
// https://eslint.org/docs/rules/no-iterator
// __iterator__를 사용하지 않아야 합니다.
{
  class Foo {
    name: 'coldWater'
    nick: 'coldMater'
    __iterator__: () => void
  }

  Foo.prototype.__iterator__ = function () {}   // 🚫 avoid
}

// eslint: no-label-var
// No labels that share a name with an in scope variable.
// 범위 변수와 이름을 공유하는 라벨이 없어야 합니다.
{
  let score = 100
  function game () {
    score: while (true) {      // 🚫 avoid
      while (true) {
        score -= 10
        if (score % 3 === 0) continue score
        if (score % 101 === 0) break
      }
      if (score > 0) break
      break
    }
  }
  console.log(game)
}

// eslint: no-labels
// No label statements.
// 라벨문을 사용하지 말아야 합니다.
{
  let i = 0

  label:
  while (true) {
    i++
    if (i >= 10) {
      break label     // 🚫 avoid
    }
  }
}

// eslint: no-lone-blocks
// No unnecessary nested blocks.
// 불필요하게 중첩된 블록이 없어야 합니다.
{
  function myFunc5 () {
    {                   // 🚫 avoid
      myFunc6()
    }
  }

  function myFunc6 () {
    myFunc5()       // 🟢 ok
  }
}

// eslint: no-mixed-spaces-and-tabs
// Avoid mixing spaces and tabs for indentation.
// 공백과 탭을 섞어서 사용하지 말아야 합니다.
{
  // didn't show - IDE makes tab to space automatically
}

// eslint: no-multi-spaces
// Do not use multiple spaces except for indentation.
// 들여 쓰기를 제외하고는 여러 공백을 사용하지 말아야 합니다.
{
  const id1 =    1234    // 🚫 avoid
  const id2 = 1234       // 🟢 ok

  console.log(id1, id2)
}

// eslint: no-multi-str
// No multiline strings.
// 멀티라인 문자열을 사용하지 말아야 합니다.
{
  const message = 'Hello \
                 world'     // 🚫 avoid

  console.log(message)
}

// eslint: no-new
// No new without assigning object to a variable.
// 변수에 객체를 대입하지 않고 new를 사용하면 안됩니다.
{
  class Character {
    name: number
  }
  new Character()                     // 🚫 avoid
  const character = new Character()   // 🟢 ok

  console.log(character)
}

// eslint: no-new-func
// No using the Function constructor.
// Function 생성자를 사용하지 않아야 합니다.
{
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const sum = new Function('a', 'b', 'return a + b')    // 🚫 avoid
  console.log(sum)
}

// eslint: no-new-object
// No using the Object constructor.
// Object 생성자를 사용하지 않아야 합니다.
{
  const config = new Object()   // 🚫 avoid
  console.log(config)
}

// eslint: no-new-require
// No using new require.
// new require를 사용하지 않아야 합니다.
{
  const myModule = new require('my-module')    // 🚫 avoid
  console.log(myModule)
}

// eslint: no-new-symbol
// No using the Symbol constructor.
// Symbol 생성자를 사용하지 않아야 합니다.
{
  const foo = new Symbol('foo')   // 🚫 avoid
  console.log(foo)
}

// eslint: no-new-wrappers
// No using primitive wrapper instances.
// 원시 래퍼 인스턴스를 사용하지 않아야 합니다.
{
  const message = new String('hello')   // 🚫 avoid
  console.log(message)
}

// eslint: no-obj-calls
// No calling global object properties as functions.
// 전역 개체 속성을 함수로 호출하지 않아야 합니다.
{
  const math = Math()   // 🚫 avoid
  console.log(math)
}

// eslint: no-octal
// No octal literals.
// 8진수를 사용하지 않습니다.
{
  const octal = 042         // 🚫 avoid
  const decimal = 34        // 🟢 ok
  const octalString = '042' // 🟢 ok

  console.log(octal, decimal, octalString)
}

// eslint: no-octal-escape
// No octal escape sequences in string literals.
// 문자열 리터럴에는 8 진수 이스케이프 시퀀스가 없습니다.
{
  const copyright = 'Copyright \251'  // 🚫 avoid
  console.log(copyright) // Copyright ©
}

// eslint: no-path-concat
// Avoid string concatenation when using __dirname and __filename.
// __dirname과 __filename을 사용할 때 문자열 연결을 피해야 합니다.
{
  const pathToFile1 = __dirname + '/app.js'            // 🚫 avoid
  const pathToFile2 = path.join(__dirname, 'app.js')   // 🟢 ok

  console.log(pathToFile1, pathToFile2)
}

// eslint: no-proto
// Avoid using __proto__. Use getPrototypeOf instead.
// __proto__ 사용은 피해야 합니다. 대신에 getPrototypeOf를 사용할 수 있습니다.
{
  const obj = {
    __proto__: {},
  }
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const foo01 = obj.__proto__               // 🚫 avoid
    console.log(foo01)
  }
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const foo02 = Object.getPrototypeOf(obj)  // 🟢 ok
    console.log(foo02)
  }
}

// eslint: no-redeclare
// No redeclaring variables.
// 변수를 새로 재정의하지 말아야 합니다.
{
  {
    let name = 'John'
    let name = 'Jane'     // 🚫 avoid
    console.log(name)
  }
  {
    let name = 'John'
    console.log(name)
    name = 'Jane'         // 🟢 ok

    console.log(name)
  }
}

// eslint: no-regex-spaces
// Avoid multiple spaces in regular expression literals.
// 정규 표현식 리터럴에서는 공백을 피해야 합니다.
{
  const regexp01 = /test   value/   // 🚫 avoid
  const regexp02 = /test {3}value/  // 🟢 ok
  const regexp03 = /test value/     // 🟢 ok

  console.log(regexp01, regexp02, regexp03)
}

// eslint: no-return-assign
// Assignments in return statements must be surrounded by parentheses.
// 반환 내용에 대한 대입 값은 괄호로 묶어야 합니다.
{
  let result: number = 0

  {
    function sumA (a: number, b: number) {
      return result = a + b     // 🚫 avoid
    }
    sumA(1, 3)
  }

  {
    function sumB (a: number, b: number) {
      return (result = a + b)   // 🟢 ok
    }
    sumB(1, 3)
  }

  console.log(result)
}

// eslint: no-self-assign
// Avoid assigning a variable to itself
// 변수 자체에 자기 자신은 할당하지 않아야 합니다.
{
  let name = 3
  name = name   // 🚫 avoid
}

// eslint: no-self-compare
// Avoid comparing a variable to itself.
// 변수를 자기 자신과 비교하지 말아야 합니다.
{
  const score = 3
  if (score === score) { // 🚫 avoid
    /* */
  }

  console.log(score)
}

// eslint: no-sequences
// Avoid using the comma operator.
// 쉼표 연산자를 사용하지 말아야 합니다.
{
  const test = Math.random() > 0.5
  const doSomething = () => false
  if (doSomething(), test) { /* */ }   // 🚫 avoid
}

// eslint: no-shadow-restricted-names
// Restricted names should not be shadowed.
// 제한된 이름을 음영 처리해서는 안됩니다.
{
  const undefined = 'value'     // 🚫 avoid
  console.log(undefined)
}

// eslint: no-sparse-arrays
// Sparse arrays are not allowed.
// 빈공간 배열은 허용되지 않습니다.
{
  const fruits = ['apple',, 'orange']       // 🚫 avoid
  console.log(fruits)
}

// eslint: no-tabs
// Tabs should not be used
// 탭을 사용해서는 안됩니다.
{
  // ...
}

// eslint: no-template-curly-in-string
// Regular strings must not contain template literal placeholders.
// 일반 문자열에는 템플릿 리터럴 자리 표시자가 없어야 합니다.
{
  {
    const name = 'coldWater'
    const message = 'Hello ${name}'   // 🚫 avoid
    console.log(message, name)
  }
  {
    const name = 'coldWater'
    const message = `Hello ${name}`   // 🟢 ok
    console.log(message)
  }
}

// eslint: no-this-before-super
// super() must be called before using this.
// this를 사용하기 전에 super()를 호출해야 합니다.
{
  class Animal {
    name: string
    legs: number
  }

  class Dog extends Animal {
    constructor () {
      this.legs = 4     // 🚫 avoid
      super()
    }
  }

  const dog = new Dog()
  console.log(dog)
}

// eslint: no-throw-literal
// Only throw an Error object.{}
// 반드시 throw는 Error 객체여야 합니다.
{
  const some = Math.random() > 0.5
  {
    if (some) {
      throw 'error'               // 🚫 avoid
    }
  }
  {
    if (some) {
      throw new Error('error')    // 🟢 ok
    }
  }
}

// eslint: no-trailing-spaces
// Whitespace not allowed at end of line.
// 줄 끝에서 공백을 사용할 수 없습니다.
{
  const a = 3
  console.log(a)
}

// eslint: no-undef-init
// Initializing to undefined is not allowed.
// 'undefined'로 초기화하는 것은 허용되지 않습니다.
{
  {
    let name = undefined    // 🚫 avoid
    console.log(name)
  }

  {
    let name
    name = 'value'          // 🟢 ok
    console.log(name)
    name = 'second value'
    console.log(name)
  }
}

// eslint: no-unmodified-loop-condition
// No unmodified conditions of loops.
// 반복문에서 수정될 수 없는 조건이 없어야 합니다.
{
  const items = [1, 2, 3]

  for (let i = 0; i < items.length; j++) {

  } // 🚫 avoid

  for (let i = 0; i < items.length; i++) {
    console.log(items[i + 1])
  } // 🟢 ok
}

// eslint: no-unneeded-ternary
// No ternary operators when simpler alternatives exist.
// 더 간단한 대안이 있을 때 삼항연산자를 사용하지 않습니다.
{
  const val = Math.random() > 0.5
  {
    const score1 = val ? val : 0     // 🚫 avoid
    console.log(score1)
  }
  {
    const score2 = val || 0          // 🟢 ok
    console.log(score2)
  }
}

// eslint: no-unreachable
// No unreachable code after return, throw, continue, and break statements.
// return 뒤에 도달하지 못하는 코드를 작성하지 않습니다.
{
  function doSomething () {
    return true
    console.log('never called')     // 🚫 avoid
  }

  doSomething()
}

// eslint: no-unsafe-finally
// No flow control statements in finally blocks.
// finally 블록에 흐름을 제어할 수 있는 명령문이 없어야 합니다.
{
  const a = () => {
    try {
      // ...
    } catch (e) {
      // ...
    } finally {
      return 42     // 🚫 avoid
    }
  }

  a()
}

// eslint: no-unsafe-negation
// The left operand of relational operators must not be negated.
// 관계 연산자의 왼쪽 피연산자를 부정해서는 안됩니다.
{
  const obj = {
    member1: 'key',
  }
  const key = 'member1'

  if (!key in obj) { /* */ }       // 🚫 avoid
  if (!(key in obj)) { /* */ }     // 🟢 ok
}

// eslint: no-useless-call
// Avoid unnecessary use of .call() and .apply().
// .call ()과.apply ()를 불필요하게 사용하지 말아야 합니다.
{
  function sum3 (a: number, b: number, c: number): number {
    return a + b + c
  }
  sum3.call(null, 1, 2, 3)   // 🚫 avoid
}

// eslint: no-useless-computed-key
// Avoid using unnecessary computed property keys on objects.
// 객체에서 불필요하게 계산 된 속성 키를 사용하지 말아야 합니다.
{
  {
    const user = { ['name']: 'John Doe' }   // 🚫 avoid
    console.log(user)
  }
  {
    const user = { name: 'John Doe' }       // 🟢 ok
    console.log(user)
  }
}

// eslint: no-useless-constructor
// No unnecessary constructor.
// 불필요한 생성자가 없어야 합니다
{
  class Car {
    constructor () {      // 🚫 avoid
    }

    name: string
  }
  console.log((new Car()).name)
}

// eslint: no-useless-escape
// No unnecessary use of escape.
// 불필요한 이스케이프가 없어야 합니다.
{
  const message = 'Hell\o'  // 🚫 avoid
  console.log(message)
}

// eslint: no-useless-rename
// Renaming import, export, and destructured assignments to the same name is not allowed.
// import, export 및 소멸된 할당의 이름을 동일한 이름으로 바꾸는 것은 허용되지 않습니다.
{
  // import { config as config } from './config'     // 🚫 avoid
  // import { config } from './config'               // 🟢 ok
}

// eslint: no-whitespace-before-property
// No whitespace before properties.
// 속성 앞에 공백이 없어야 합니다.
{
  const user = {
    name: 'coldWater',
  }

  console.log(user .name)      // 🚫 avoid
  console.log(user.name)       // 🟢 ok
}

// eslint: no-with
// No using with statements.
// with문을 사용하지 않습니다.
{
  const val: any = 'string'
  with (val) { /* ... */ }    // 🚫 avoid
}

// eslint: object-property-newline
// Maintain consistency of newlines between object properties.
// 객체 속성 간의 일관성을 유지합니다.
{
  {
    const user = {
      name: 'Jane Doe', age: 30, // 🚫 avoid
      username: 'jdoe86',
    }
    console.log(user)
  }
  {
    const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }    // 🟢 ok
    console.log(user)
  }
  {
    const user = {
      name: 'Jane Doe',
      age: 30,
      username: 'jdoe86',
    }
    console.log(user)
  }
}

// eslint: padded-blocks
// No padding within blocks.
// 블록 안에 패딩이 없어야 합니다.
{
  const user = Math.random() > 0.5
  const getName = () => 3

  if (user) {

    getName() // 🚫 avoid

  }

  if (user) {
    getName()    // 🟢 ok
  }
}

// eslint: rest-spread-spacing
// No whitespace between spread operators and their expressions.
// 스프레드 연산자와 표현식 사이에 공백이 없어야 합니다.
{
  const fn = (...argsA) => {
    console.log(argsA)
  }

  const args = [1, 2, 3]
  fn(... args)    // 🚫 avoid
  fn(...args)     // 🟢 ok
}

// eslint: semi-spacing
// Semicolons must have a space after and no space before.
// 세미콜론은 뒤쪽에 공백을 두고 앞쪽에는 공백을 두지 않아야 합니다.
{
  const items = [1, 2, 3, 4]
  for (let i = 0 ;i < items.length ;i++) {
    console.log(items[i + 1])
  }    // 🚫 avoid
  for (let i = 0; i < items.length; i++) {
    console.log(items[i + 1])
  }    // 🟢 ok
}

// eslint: space-before-blocks
// Must have a space before blocks.
// 블록 앞에 공간이 있어야 합니다.
{
  const admin = Math.random() > 0.5

  if (admin){ /* */ }     // 🚫 avoid
  if (admin) { /* */ }    // 🟢 ok
}

// eslint: space-in-parens
// No spaces inside parentheses.
// 괄호 안에 공백이 없어야 합니다.
{
  const name = 'hi'
  const getName = (name2: string) => {
    console.log(name2)
  }

  getName( name )     // 🚫 avoid
  getName(name)       // 🟢 ok
}

// eslint: space-unary-ops
// Unary operators must have a space after.
// 단항 연산자 뒤에 공백이 있어야 합니다.
{
  const admin = Math.random() > 0.5

  console.log(typeof!admin)         // 🚫 avoid
  console.log(typeof !admin)        // 🟢 ok

  let i = 0
  i ++ // 🚫 avoid
  i++  // 🟢 ok

  console.log(i)
}

// eslint: spaced-comment
// Use spaces inside comments.
// 주석 안에는 공백을 사용해야 합니다.
{
  // 🚫 avoid
  //comment

  // 🟢 ok
  // comment

  // 🚫 avoid
  /*comment*/

  // 🟢 ok
  /* comment */
}

// eslint: template-curly-spacing
// No spacing in template strings.
// 템플릿 문자열에는 간격이 없습니다.
{
  const name = 'name'

  const message31 = `Hello, ${ name }`    // 🚫 avoid
  const message32 = `Hello, ${name}`      // 🟢 ok

  console.log(message31, message32)
}

// eslint: use-isnan
// Use isNaN() when checking for NaN.
// NaN을 검사 할 때 isNaN()을 사용하십시오.
{
  let price: any = '123'
  price = Number(price) + 3

  if (price === NaN) { /* */ }      // 🚫 avoid
  if (isNaN(price)) { /* */ }       // 🟢 ok
}

// eslint: valid-typeof
// typeof must be compared to a valid string.
// typeof는 유효한 문자열과 비교되어야 합니다.
{
  const a = Math.random() > 0.5
  const name = a || undefined

  const resultA = typeof name === 'undefimed'     // 🚫 avoid
  const resultB = typeof name === 'undefined'     // 🟢 ok

  console.log(resultA, resultB)
}

// eslint: wrap-iife
// Immediately Invoked Function Expressions (IIFEs) must be wrapped.
// 즉시 호출 된 함수 식(IIFE)은 괄호로 감싸져야 합니다.
{
  {
    const getName = function () { return 0 }()     // 🚫 avoid
    console.log(getName)
  }
  {
    const getName = (function () { return 0 }())   // 🟢 ok
    console.log(getName)
  }
  {
    const getName = (function () { return 0 })()   // 🟢 ok
    console.log(getName)
  }
}

// eslint: yield-star-spacing
// The * in yield*expressions must have a space before and after.
// yield *표현식의 *은 앞뒤에 공백이 있어야 합니다.
{
  const increment = () => { return [1, 2, 3] }
  function* abc () {
    yield* increment()    // 🚫 avoid
    yield * increment()   // 🟢 ok
  }

  abc()
}

// eslint: yoda
// Avoid Yoda conditions.
// Yoda 조건을 피하십시오.
{
  const age = 42

  if (42 === age) { /* */ }    // 🚫 avoid
  if (age === 42) { /* */ }    // 🟢 ok
}

// eslint: semi
// No semicolons.
// 세미콜론은 사용하지 않습니다.. (볼거리: 1, 2, 3)
{
  window.alert('hi')   // 🟢 ok
  window.alert('hi');  // 🚫 avoid
}

// eslint: prefer-promise-reject-errors
// Prefer Promise Reject Errors (rule 도큐먼트에는 존재하지 않음, eslint-config-standard 에 포함되어있음)
// Promise 의 reject 의 인자는 Error 객체를 사용합니다.
{
  Promise.reject('error occurred').catch(() => {}).finally(() => {}) // 🟢 ok
  Promise.reject(new Error('error occurred')).catch(() => {}).finally(() => {}) // 🚫 avoid
}

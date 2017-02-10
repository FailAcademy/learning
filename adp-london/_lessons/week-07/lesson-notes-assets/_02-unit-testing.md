# Unit Testing with Ava (4hrs)

[Visual](https://quickleft.com/wp-content/uploads/PM_Build_Swing1.gif)

## Why Test

Have a conversation about the following quote. Share your thoughts and opinions with others.

 > If you don’t like testing your product, most likely your customers won’t like to test it either. (Anonymous)

 > If McDonalds were managed like a software company, 1 out of every 100 Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more.’ (Mark Minasi)

> A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder)

> Why do we never have time to do it right, but always have time to do it over? (Murphy’s Law)

> Engineers call them edge cases. I call them: what our users do.

> if you're not testing code that people are paying you money to write you deserve to be fired. (Rob Conery)


## Unit Testing Basics (5)

> Reminds me of the awesome bug report I saw once: ‘Everything is broken. Steps to reproduce: do anything. Expected result: it should work’. (Felipe Knorr Kuhn)

1. Setup
2. Expected
3. Result

Example:

1. Put toast in the toaster. Pressed the button.
2. Expected: ___
3. Result: ___

Example:

1. Studied programming every day for 2 years.
2. Expected: ___
3. Result: ___

Run tests:

PASS or FAIL, expected "expected", but got "result"

## Types of Testing

- Unit - test individual parts
- End To End (E2E) - test complete application

[See More](http://www.softwaretestinghelp.com/types-of-software-testing/)

## Unit Test

A basic unit test.

```js
function addOne(x) {
  return x + 1;
}

const result = addOne(1);
const expected = 2;
console.log('Test Passes?', result === expected);
```

## JS Test Frameworks

Testing frameworks may writing and organizing tests easy.

- [Mocha](http://mochajs.org/)
- [Jasmine](http://jasmine.github.io/)
- [QUnit](https://qunitjs.com/ja)
- [Ava](https://github.com/avajs/ava) *
- [Jest](https://github.com/facebook/jest) *

## Ava

Why Choose Ava?

- ES2015
- concurrent tests
- easiest syntax
- CLI

### Ava Setup (5)

1. `npm install -g ava`
2. new directory, run `npm init`
3. run `ava --init`

## First Test

create a "test" directory, and make a "logic.js" file inside

/test/logic.js

```js
// 1. load test framework
import test from 'ava';

// 2. write test
test(t => {
  const expected = true;
  const result = true;
  // 3. assertion
  t.is(expected, result);
});
```


### TDD: Testing Code (15)

Write a test.

/test/logic.js

```js
import test from 'ava';
// import file to test
import { add } from '../src';

test(t => {
  const expected = 3;
  const result = add(1, 2);
  t.is(result, expected);
});
```

## Run Test: Fail

1. Run the test: `ava`. FAIL.

## Run Test: Pass

1. Make the test pass.

/src/index.js

```js
export const add = (x, y) => x + y;
```

## watch (10)

Setup Ava with [watch mode](https://github.com/avajs/ava/blob/master/docs/recipes/watch-mode.md)

2. Run the test: `ava`. PASS.

## Second Test

```js
test(t => {
  const expected = 1;
  const result = add(1);
  t.is(result, expected);
});
```

## Third Test

```js
test(t => {
  const expected = 6;
  const result = add(1, 2, 3);
  t.is(result, expected);
});
```

## TDD (5)

This process of writing tests first is called **Test Driven Development**.

1. add a test
2. run tests, new test should fail
3. write code to make the test pass
4. run tests, see them pass
5. refactor code

## Red / Green Testing

What do you think Red/Green testing means?

*( Must fail first, before passing - or it is not a useful test )*

## BDD (5)

BDD is a variant of TDD, **Behavior Driven Development**. Like TDD, but for humans.

/test/logic.js

```js
test('add should sum two numbers', t => {
  const expected = 3;
  const result = add(1, 2);
  t.is(result, expected);
});
```

## Challenge

1. Give proper test descriptions to each of your tests.

## Discussion: Test Descriptions

1. Discussion: what makes a good test description?

- short
- present tense
- "should"
- descriptive
- tests one thing

### is vs. deepEqual (10)

Add the following test to "test/index.js". Make it PASS.

```js
test('should add an item to the array', t => {
  const expected = [1, 2, 3];
  const result = add([1, 2], 3);
  // test equality
});
```

Solution: use `deepEqual` for non-primitive matching.

```js
t.deepEqual(result, expected);
```

### async tests (10)

/src/index.js

```js
test('function returns 42 after 1 second', t => {
  const expected = 42;
  const result = waitOneSecondAndReturn42();
  t.is(expected, result);
});
```

Solution: use `async` and `await`

```js
test(async t => {
  const expected = 42;
  const result = wait waitOneSecondAndReturn42();
  t.is(expected, result);
});
```

## Untestable Code

Why is `redirectTo` untestable?

```js
function redirectTo(url) {
  switch (url.charAt(0)) {
    case '#': window.location.hash = url; break;
    case '/': window.location.pathname = url; break;
    default: window.location.href = url;
  }
}
```

## Testable code

Why is `getRedirectPart` testable?

```js
function getRedirectPart(url) {
  switch (url.charAt(0)) {
    case '#': return 'hash';
    case '/': return 'pathname';
    default: return 'href';
  }
}

function redirectTo(url) {
	window.location[getRedirectPart(url)] = url;
}
```

> If you can't test it, it's not good code. So fix it. (Shawn McKay)

## TypeScript (10)

To test TypeScript, we must first compile our code to JS.

[Ava & TypeScript](https://github.com/avajs/ava/blob/master/docs/recipes/typescript.md)


## Practice (30)

Write a tests for some of your previous code.

## Testing Redux (30)

1. Write the following reducer.

/test/redux.js

```js
test('reducer returns 0 on start', t => {
  const result = reducer(0, {});
  const expected = 0;
  t.is(result, expected);
});

test('reducer defaults to state', t => {
  const action = { type: 'NULL' };
  const result = reducer(0, action);
  const expected = 0;
  t.is(result, expected);
});

test('reducer adds one to the total', t => {
  const action = { type: 'ADD_ONE' };
  const result = reducer(0, action);
  const expected = 1;
  t.is(result, expected);
});
```

Solution:

```js
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1;
    default:
      return state;
  }
}
```

2. Write tests for one your reducers.


## Limitations of Testing

Do unit tests prove your code works?

> Program testing can be a very effective way to show the presence of bugs, but is hopelessly inadequate for showing their absence. (Edsger Dijkstra)

## Practice (2hr)

Good code is testable.

Students practice writing unit tests. When they struggle, use their examples for the class. Strategies:

- refactoring into pure functions

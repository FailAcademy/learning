# Unit Testing (4hrs)

[Visual](https://quickleft.com/wp-content/uploads/PM_Build_Swing1.gif)

## Pros & Cons
- 15-50% longer start time
- 40-90% fewer bugs

## Unit Testing Basics (5)

1. Expected
2. Result

Run tests:

PASS or FAIL, expected "expected", but got "result"

## TDD (5)

Writing tests first:

1. add a test
2. run tests, new test should fail
3. write code to make the test pass
4. run tests, see them pass
5. refactor code

## Ava

### Ava Setup (5)

1. `npm install -g ava`
2. new directory, run `npm init`
3. run `ava --init`
4. create a "test" directory, and make a "logic.js" file inside

/test/logic.js
```js
import test from 'ava';

test(t => {
  t.is(true, true);
});
```

### TDD: Testing Code (15)

1. create a new folder from the root called "src"
2. create a file called "index.js". We will put code here shortly.

3. Write a test.

/test/logic.js

```js
import test from 'ava';
import { add } from '../src';

test(t => {
  const expected = 3;
  const result = add(1, 2);
  t.is(result, expected);
});
```

4. Run the test: `ava`. FAIL.

5. Make the test pass.

/src/index.js

```js
export const add = (x, y) => x + y;
```

6. Run the test: `ava`. PASS.

7. Use TDD to create 3 more tests and 3 more simple functions.

## BDD (5)

Giving a human readable test output.

/test/logic.js

```js
test('add should total two numbers', t => {
  const expected = 3;
  const result = add(1, 2);
  t.is(result, expected);
});
```

1. Give proper test descriptions to each of your tests.

2. Discussion: what makes a good test description?

## watch (10)

Setup Ava with [watch mode](https://github.com/avajs/ava/blob/master/docs/recipes/watch-mode.md)

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

## Practice (30)

1. Write a few tests for some of your previous code.

## Testing Redux (30)

1. Write the following reducer.

/test/redux.js

```js
test('adds one to the total', t => {
  const action = { type: 'ADD_ONE' };
  const result = reducer(0, action);
  const expected = 1;
  t.is(result, expected);
});
```

2. Write tests for one your reducers.

## TypeScript (10)

[Ava & TypeScript](https://github.com/avajs/ava/blob/master/docs/recipes/typescript.md)

## Practice (2hr)

Good code is testable.

Students practice writing unit tests. When they struggle, use their examples for the class. Strategies:

- refactoring into pure functions

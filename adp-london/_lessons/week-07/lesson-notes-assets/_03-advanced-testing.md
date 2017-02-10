# Stubs, Spies & Mocks

## Intro (10)

You may have noticed it was hard to write some tests.

Take a five minutes and talk with a partner about how you might test your: 
  - store
  - middleware
  - dom interactions (click events, etc.)


We will look shortly at some new testing tools/techniques: stubs, spies & mocks.


## Spies

Listen to a function.


```js
export function callAPI(id) {
  const data = API.fetchById(id);
  return data;
}
```

test

```js
import test from 'ava';
import { callAPI } from '../file';

test('callAPI makes call to API', t => {
  let spy = sinon.spy(API, 'fetchById');
  callAPI(42);

  t.is(spy.called(), true);
  t.is(spy.calledWith(42))
});
```

[Docs](http://sinonjs.org/docs/#spies)

How might we test `console.log` to see if it wrote "hello world" to the console?

## Stubs

Force the return value of a function.

1. Stub for API call example.

```js
export function callAPI(id) {
  const data = API.fetchById(id);
  return data;
}
```

test

```js
import test from 'ava';
import { callAPI } from '../file';

test('', t => {

});
```

[Docs](http://sinonjs.org/docs/#stubs-api)

## Mocks

Mock for service mock.

[docs](http://sinonjs.org/docs/#mocks-api)

## Code Coverage


[Istanbul](https://istanbul.js.org/)
[nyc](https://github.com/istanbuljs/nyc)
[ava setup](https://github.com/avajs/ava/blob/master/docs/recipes/code-coverage.md)


## Wallaby Demo

[Wallaby.js](https://wallabyjs.com/)

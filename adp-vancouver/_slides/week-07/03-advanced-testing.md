---
layout: slidedeck
title: Advanced Testing Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Advanced Testing

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false 

# Advanced Testing

Take a moment and talk with a partner about how you might write tests for the following:

- console.log call
- DOM interactions
- middleware
- store

---

# Agenda

Today we will look at more advanced testing tools.

- spies
- stubs
- mocks
- code coverage
- testing with TypeScript

---

# Advanced Testing

Testing tools take time to fully understand.

Learn to write testable code, and writing tests will get easier.

Testing will also help you write better code.

---
template: inverse

# Spies

---

# Simple Test

How might we test the following?

```js
function sayHi() {
  return 'hi';
}
```

---

# Simple Test

How might we test the following code?

```js
function sayHi() {
  return 'hi';
}

it('says "hi"', () => {
  expect(sayHi()).toBe('hi');
});
```

---

# Harder Test

How might we test the following code?

```js
function sayHi() {
  console.log('hi');
}
```

---

# Spy

We can set a "spy" on `console` to listen to the method `log`.

```js
console.log = jest.fn(); 
```


---

# Spy Assertions

- [.toBeCalled](http://facebook.github.io/jest/docs/api.html#tobecalled)
- [.toBeCalledWith](http://facebook.github.io/jest/docs/api.html#tobecalledwith-arg1-arg2)

```js
it('should log "hi"', () => {
  // set a spy on console.log
  console.log = jest.fn();
  // call the function
  sayHi();
  // test function is called
  expect(console.log).toBeCalled();
  // test function called with 'hi'
  expect(console.log).toBeCalledWith('hi');
});
```

---

# Scenario 1: Spies

Imagine the following situation.  

customer -> waiter -> cook

How could we use spies to test that everything works?

### Spies

- listen that the customer tells waiter the order
- listen that the waiter tells cook the order

---

# Restaurant Spy

Create a setup for your waiter function.

```js
function waiter() {
  // incomplete function, never called
}


function customer(order) {
  return waiter(order)
}
```

---

# Restaurant Spy

Replace the waiter with a spy.

```js
it('calls the waiter with an array of strings', () => {
  const order = ['water', 'tacos']
  // spy on the voteUp action call
  waiter = jest.fn()
  // click on the button
  customer(order)
  // expect the voteUp to be called with +1
  expect(waiter).toBeCalledWith(order)
})
```

---

# Spies

Where else might spies be useful in your project?

---

# Spy Testing An DOM Action Call

```js
it('triggers a vote action on click', () => {
  let onVoteSpy = jest.fn();
  const props = {
    monster: monster,
    onVote: onVoteSpy,
  };
  const component = shallow(<Pokemon {...props} />);
  component.find('.btn').simulate('click');
  // listen that the function was called
  expect(onVoteSpy).toBeCalled();
});
```

---

# Spies

Anytime you want to test if a function was called, but you don't care if it returns a value.

- DOM Events (see testing-components slides)
- store dispatches
- etc.

---

# Scenario 1: Testing the Waiter

customer -> (order) -> waiter -> (order) -> cook

We can test all of the individual parts. 

- the waiter passes the customers order to the cook
- the waiter doesn't pass on an order that is not on the menu
- etc.

---
template: inverse

# Stubs & Mocks

---

# Scenario 2: Testing the System

customer -> (order) -> waiter

We want to ensure that when a customer calls the waiter with an order, 
the waiter returns the order.

customer <("Give me a taco")
waiter <("Here's your taco")

---

# Stub

A stub is created by passing an anonymous function into `jest.fn`

```js
stub = jest.fn(() => 42)

expect(stub()).toBe(42)
```

---

# Stub Waiter

The mock waiter acts a simplified version of the actual function.

```js
function customer(order) {
  return waiter(order)
}

it('the waiter to return the order', () => {
  const order = ['water', 'tacos']
  // create a stub
  waiter = jest.fn(() => order)
  // the original waiter function is over-written and never called
  expect(customer(order)).toEqual(order)
})
```

---

# Mocks

- **stub** - a simple function that returns a value

`jest.fn(() => 42)`

- **mock** - a function that can pretends to be another function. A more complicated stub.

`jest.fn((order) => order)`  (simplest mock)

---

# Mock Waiter

```js
function customer(order) {
  return waiter(order)
}

function mockWaiter(order) {
  const order = await setTimeout(() => order, 1000) 
  return order
}

it('the waiter returns an order after 10 seconds', async () => {
  const order = ['water', 'tacos']
  // create a mock
  waiter = jest.fn(mockWaiter)
  expect(customer(order)).toEqual(order)
})
```

---

# Why Mock?

- Why not just use the original function?

- Why add an extra "mock" abstraction?


---

# Why Mock?

- Test each part individually
- One function breaking won't cause all tests to fail
- Mocks often simplify more complicated code
- Tests run faster

---

# Mocking Middleware

What do we need to mock in the complicated example below?
What do we need to test?

/client/socket/remoteMiddleware.js

```js
export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    const { clientId } = store.getState();
    delete action.meta;
    socket.emit('action', Object.assign({}, action, { clientId }));
  }
  return next(action);
}
```

---

# Mocking Middleware

```js
export default socket => store => next => action => {
  return next(action);
}
```

- socket
- store


---

# Mocking Store

Writing a function to create a fake store.

```js
const createFakeStore = (fakeData, options) => ({
  getState() {
    return Object.assign(fakeData, options);
  }
});

createFakeStore({}, { clientId: '42' });
```

---

# Mocking socket

Capture what is emitted

```js
const dispatchWithStoreOf = (storeData, options, action) => {
  let emitted = null; // capture what is emitted by socket
  let dispatched = null;
  const dispatch = remoteMiddleware
          ({ emit: (action, value) => emitted = value }) // socket
          (createFakeStore(storeData, options)) // store
          (actionAttempt => dispatched = actionAttempt); // next
  dispatch(action);
  return emitted;
};
```

---

# Mocking Middleware Test

```js
it('should not dispatch if action has no {meta: remote} property', () => {
  const action = {
    type: 'ACTION'
  };
  expect(
    dispatchWithStoreOf({}, { clientId: '42' }, action)
  ).toEqual(null);
});
```

---

# Mocking Middleware Test

```js
it('should dispatch if action has {meta: remote} property', () => {
  const action = {
    type: 'ACTION',
    meta: { remote: true }
  };
  expect(
    dispatchWithStoreOf({}, { clientId: '42' }, action)
  ).toEqual({ type: 'ACTION', clientId: '42'});
});
```

---

# Mocking Store with Methods

Sometimes a mock needs all the methods of the main function.

Think about mocking a store. It might require working `getState` and `dispatch` methods.

For these cases, we can often use a **mocking library**, like 'redux-mock-store'.

---

# Advanced Mocks

/src/__tests__/mocks/store.js

```js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

export default mockStore;
``` 

---

# Testing an Action Creator

We can use our store mock to test the action creator.

1. dispatch the action
2. asynchronously run an expect afterwards
2. expect an action spy to have been called


---

# Testing an Action Creator

```js
import mockStore from '../__tests__/mocks/store';
import voteUp from './actions';

it('should dispatch the voteUp action', () => {
  const store = mockStore({ pokemon: [] });
  const expectedActions = [{
    type: 'VOTE_UP', payload: { id: 1 }
  }];

  store.dispatch(voteUp({ id: 1 }))
    .then(() => { // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
  });
});
```

---

# Code Coverage

1. What is code coverage?

2. What is a good amount of code coverage?

---

# Jest Code Coverage

Using the "jest-cli", we can easily setup code coverage.

```shell
jest --coverage
```

---

# Jest Code Coverage

Enable code coverage.

```json
"jest": {
  "collectCoverage": false
}
```

---

# Code Coverage Directory

Save code coverage to specific directory.

```json
"jest": {
  "coverageDirectory": "src/__coverage__",
}
```

Add this to your ".gitignore":

```
node_modules
src/__coverage__
```

---

# Code Coverage Paths

Ignore certain paths

```json
"jest": {
  "coveragePathIgnorePatterns": [
      "/node_modules/"
  ]
}
```

---

# Code Coverage Threshold

Anything under the threshold will fail.

```json
"jest": {
  "coverageThreshold": {
    "global": {
      "branches": 50,
      "functions": 50,
      "lines": 50,
      "statements": 50
    }
  }
}
```

---
template: inverse

# Testing with TypeScript`

---

# Testing with TypeScript

Pre-Compile the tests.

Find all tests ending in ".test.ts{x}".
Save your compiled tests in a cache.

```json
"jest": {
  "scriptPreprocessor": "<rootDir>/src/__tests__/preprocessor.js",
  "moduleFileExtensions": ["ts", "tsx", "js"],
  "testRegex": "src/*/.*\\.test\\.(ts|tsx|js)$",
  "cacheDirectory": "src/__tests__/__cache__"
}
```

---

# Testing with TypeScript

Transpile all tests with TypeScript

src/__tests__/preprocessor.js

```js
const tsc = require('typescript');

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(src, {
          module: tsc.ModuleKind.CommonJS,
          jsx: tsc.JsxEmit.React,
        }, path, []);
    }
    return src;
  }
};
```

---

# Review

- spies - function listener
- stubs - function with a set return value
- mocks - fake function
- code coverage - % of code backed by tests
- typescript tests - pre-compile & cache

{% endhighlight %}

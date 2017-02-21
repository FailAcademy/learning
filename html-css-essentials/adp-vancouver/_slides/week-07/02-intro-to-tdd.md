---
layout: slidedeck
title: Intro to TDD
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to TDD
## AKA "Writing good code"

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Code completion
2. Write failing tests
3. Red Green Refactor
4. Mocks, Stubs, Fakes
5. Handling dependencies in unit tests
---

layout: false
class: middle, center

.large[How do you know when your code is "done"?]

---
class: middle, center

.large[How do you know if code that you've changed "works"?]

---
template: inverse


.inline-images[
  ![React Native bridge diagram](/public/img/slide-assets/feedback-loop-green.png)  
]
# Feedback

---
class: middle, center

## But where do we start?

Applications are complicated, with multiple levels of abstraction.

---
template: inverse

# Start by testing the code you write
.large[not the system it is a part of]

---
class: middle

## Exercise

```js
function doMath(a, b, c) {
  return sum(a, b, c) - min(c, b) + max(a, b);
}
```

Draw the dependencies of `doMath`. How can we know if the function "works"?

---
class: middle

## Exercise:

Write out a specification for `sum`, `min`, and `max`.

It should follow this format:
```
[Function name]

When [something happens] it should [do something].
When [something else happens] it should [do something else].
...etc
```

---
class: middle

## Build a testing playground

```sh
mkdir tdd-playground
cd tdd-playground

mkdir lib
touch lib/do-math.js

mkdir __tests__

npm init -y
npm i --save-dev jest-cli
```

---
class: middle

## Implement doMath()

```js
// lib/do-math.js
const { sum, min, max } = require('./maths');

const doMath = (a, b, c) => {
  return sum(a, b, c) - min(c, b) + max(a, b);
};

module.exports = doMath;
```

---

## Our first unit test

We haven't implemented `sum`, `min`, or `max`.

Perfect. Let's start by writing tests.
```js
// __tests__/sum.spec.js
const sum = require('../lib/maths.js').sum;

describe('sum', () => {

  describe('when I pass in two parameters', () => {
    it('should sum all parameters', () => {
      const result = sum(3, 4);
      expect(result).toEqual(7);
    });
  });

});
```

---

## Running your test

The test on the previous slide uses the [Jest](https://facebook.github.io/jest/) testing library.

Jest has a command line tool, but in order to execute it in the proper environment we need to execute it as a node script.

```js
// package.json:
{
  ...
  "scripts": {
    "test": "jest"
  },
  ...
  "jest": {
    "verbose": true
  }
}

```

---
class: middle

## Code-Along

Run your test:
```sh
npm run test
```

Read the error message, fix it, and rerun the test until it passes.

---
template: inverse

# <span style="color: red">FAIL</span> -> <span style="color: green">PASS</span>

---
class: middle

## Add another test

```js
describe('when I pass in three parameters', () => {
  it('should sum all parameters', () => {
    const result = sum(3, 4, 5);
    expect(result).toEqual(12);
  });
});
```

Run tests, fix the errors.

---
class: center, middle

## Red, Green, Refactor
.inline-images[
  ![Red Green Refactor](/public/img/slide-assets/red-green-refactor.png)  
]

---
class: middle

## Exercise

Implement tests for each of the specifications you wrote for `min`, and `max`.

---
template: inverse

# Units with Dependencies
.large[How do we test doMath()?]

---
template: inverse

# Mocks, Stubs, and Fakes

---

## Managing Dependencies

Let's start by writing an impure unit test for doMath.

```js
// __tests__/do-math.spec.js
const doMath = require('../lib/do-math');

describe('doMath', () => {
  describe('when I pass in 1, 2, 3', () => {
    it('should return 6', () => {
      const result = doMath(1, 2, 3);
      expect(result).toEqual(6);
    });
  });
});


```

This currently tests `doMath`, `sum`, `min`, and `max`.

---
class: middle

## Managing Dependencies

Jest makes is easy to mock dependencies.

```js
jest.mock('../lib/maths', () => ({
  sum: () => 10,
  min: () => 2,
  max: () => 7
}));
```

---
class: middle

## Managing Dependencies

When you mock the dependencies, the test becomes much clearer:

```js
const doMath = (a, b, c) => {
  return sum(a, b, c) - min(c, b) + max(a, b);
};
```

Becomes:

```js
const doMath = (a, b, c) => {
  return 10 - 2 + 7; // 15
};
```
---
class: middle

## Testing what is passed to dependencies

Often you need to test whether parameters are being properly created and passed to dependencies.
Jest can do this.

```js
// Update your mocks to use 'spies'
jest.mock('../lib/maths', () => ({
  sum: jest.fn(() => 10)),
  min: jest.fn(() => 2)),
  max: jest.fn(() => 7))
}));

// Get access to the mocks
const maths = require('../lib/maths');

// Test them!
it('should pass correct params to sum', () => {
  doMath(1, 2, 3);
  expect(maths.sum).toHaveBeenCalledWith(1, 2, 3);
});
```

---
class: middle

## Exercise

Test what is passed to the `min` and `max` dependencies.

---
## Lab Activity: Rojo

You're going to write version 0.0.1 of __Rojo__, the RED Academy personal assistant.
You can ask Rojo any question, and it will give you an appropriate response.
Example:

```
You: What time can I start drinking beer on Friday?
Rojo: 4:30pm, amigo!
```

Writing Rojo is a perfect use-case for TDD. You can define question/response pairs in your tests.

It will help to keep your code modular.
__Rojo__ itself will likely have dependencies on other modules that you will write.
Use what you learned about mocking dependencies to make it work!

{% endhighlight %}

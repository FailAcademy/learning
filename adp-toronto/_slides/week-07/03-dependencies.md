---
layout: slidedeck
title: Intro to TDD
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

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

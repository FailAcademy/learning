---
layout: slidedeck
title: Coding Interview - Intro to TDD
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# The Coding Interview
## (That Necessary Eval)

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Coding Interviews
1. Code completion
1. Intro to TDD
1. Write failing tests
1. Red Green Refactor
1. Mocks, Stubs, Fakes
1. Handling dependencies in unit tests
---
template: inverse

## Coding Interviews

__Fun Fact__: The code you'll actually be writing on the job is not at all like the code you'll be asked to write for an interview.

---
class: middle

## Coding Interviews

- Often Computer Science heavy (less so for Juniors)
- Focus on devil-in-the-details problems
- Are as much about __how you write code__ as they are about __what code you write__

---
class: middle

## Format

.condensed[
- First interview: usually with HR or Recruitment for __Fit__
- __Take-home programming task__, due within 1-3 days
- Second interview, __whiteboarding/live coding__
- _Depending on the company, might have more live coding interviews_
- Meeting with CEO or CTO for __final decision__
]

---
class: middle

.large[
  This week, we're going to focus on tools to help you with the take-home and in-interview coding challenges.
]
---
template: inverse

# Test Driven Development
Finally, a sane way to write code

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

---
class: middle

## Exercise: Frog Jumps

A frog wants to get to the other side of the road.
The frog is currently located at position `start` and wants to get to a
position greater than or equal to `end`.
The frog always jumps a fixed distance, `jumpLength`.

Write a function to count the minimal number of jumps that the frog must perform to reach its target.

---
class: middle

## Exercise: Frog Jumps

In Groups:

.condensed[
- Use the whiteboard to draw out some examples of the jumping frog algorithm
- Write out a specification for the `frogJumps` function _in plain English_. Use the format:
]

```
[Function name]

When [given some input(s)] it should [return something].
When [given some other input(s)] it should [return something else].
...etc
```
---
class: middle

## Build a testing playground

```sh
mkdir tdd-playground
cd tdd-playground

mkdir lib
mkdir __tests__

npm init -y
npm i --save-dev jest-cli
```

---
class: middle

## Our first unit test

We've talked about how `frogJumps` works.

Let's use TDD to write it! The first step: write a test.

```js
// __tests__/frog-jumps.spec.js
const frogJumps = require('../lib/frog-jumps.js');

describe('frogJumps', () => {

  describe('when start is equal to end', () => {
    it('should return 0', () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toEqual(0);
    });
  });

});
```

---

## Anatomy of a test

We're using [Jest](https://facebook.github.io/jest/) to write tests. Read the docs!

To make our tests match our Plain English specs, we use nested `describe` blocks.
`describe` takes a callback function as its second argument, allowing us to group tests with a similar context.

```js
describe('Outer context', () => {
  // Code/Tests specific to outer context

  describe('Middle context', () => {
    // Code/Tests specific to middle context

    describe('Inner context', () => {
      // Code/Tests specific to inner context
    });
  });
});
```

---
## Anatomy of a test

Nesting callback functions is generally considered bad practice outside of writing tests, so you'll need to get used to the difference.

 If your code is indented properly, you should end up with a series of closing brackets/braces in a 45 degree angle at the end of a file.

 ```js
    // Good
    });
  });
});

    // Probably a bug
    });
});
```

---
## Anatomy of a test

When we pass strings to `describe` - other than the outermost `describe` - we use the format "when [some context]"

```js
describe('functionName', () => {
  describe('when passed a certain type of argument', () => {
    // Test here
  });
});
```
---
## Anatomy of a test

We write our actual tests (AKA assertions) using `it` blocks.
It blocks are given a string of the format 'should [return something]'.

Within an `it`, we use the `expect` function with various __matchers__.

```js
it('should return true', () => {
  // 'toBe' matcher
  expect(result).toBe(true);
});

it('should return 100', () => {
  // 'toEqual' matcher
  expect(result).toEqual(100);
});
```

---
class: middle

## Bringing it Together

```js
// __tests__/frog-jumps.spec.js
const frogJumps = require('../lib/frog-jumps.js');

// Outer describe
describe('frogJumps', () => {

  // Inner describe 'context'
  describe('when start is equal to end', () => {

    // Test
    it('should return 0', () => {

      // Assertion
      expect(frogJumps(10, 10, 5)).toEqual(0);
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
    "test": "jest --verbose"
  }
}

```

---
class: middle

## Code-Along

Run your test:
```sh
npm run test

# or
npm test

# or even
npm t
```

Read the error message, write code to fix it, and rerun the test until it passes.

---
template: inverse

# <span style="color: red">FAIL</span> -> <span style="color: green">PASS</span>

---
class: middle

## Add another test

```js
describe('when destination is exactly one jump away', () => {
  it('should return 1', () => {
    expect(frogJumps(5, 15, 10)).toEqual(1);
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

## Exercise: Frog Jumps

Implement unit tests for each of the specifications you wrote for `frogJumps`.

Think about the __Edge Cases__

.condensed[
- Zero Arguments
- Perfect match
- Maximum Match
- No Match
]

---
class: middle

## Exercise: Palindrome

A palindrome is a string that is equal when written forwards and backwards.
__Mom__, __racecar__, and __never odd or even__ are all palindromes.

Write a function that takes a string an returns whether it is a palindrome.

.condensed[
- Whiteboard the algorithm
- Write out Plain English Specs
- Convert Specs to Tests
- Implement your Algorithm
]

---

## Lab: Character Count String

Write a function that takes a string and returns a new string indicating any repeated characters. Examples:

```js
'aaabbbccc' => 'a3b3c3'
'ghjjff' => 'g1h1j2f2'
'ttdddbtt' => 't2d3b1t2'
```

.condensed[
- Whiteboard the algorithm
- Write out Plain English Specs
- Convert Specs to Tests
- Implement your Algorithm
]


{% endhighlight %}

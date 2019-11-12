---
layout: slidedeck
title: Intro to TDD Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to TDD

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Coding interviews
2. Code completion
3. Intro to TDD
4. Write failing tests
5. Red Green Refactor

---

template: inverse

# Coding Interviews

---

class: center, middle

### Coding Interviews

**Fun Fact**: The code you'll actually be writing on the job is not at all like the code you'll be asked to write for an interview.

---

# Coding Interviews

- Often computer science-heavy (less so for juniors)
- Focus on devil-in-the-details problems
- Are as much about **how you write code** as they are about **what code you write**

---

# Format

- First interview: usually with HR or Recruitment for **fit**
- **Take-home programming task**, due within 1-3 days
- Second interview, **whiteboarding/live coding**
- Depending on the company, they might have more live coding interviews
- Meeting with CEO or CTO for **final decision**

---

class: center, middle

.large[
This week, we're going to focus on tools to help you with the take-home and in-interview coding challenges.
]

---

template: inverse

# Test Driven Development

---

class: middle, center

.large[
How do you know when your code is **done**?
]

???

The discussing here should be around getting some way of 'testing' whether code is done.

- Are you logging to the console?
- Are you rendering UI and checking it?
- Are either of the above efficient? Can they be automated?

---

class: middle, center

.large[
How do you know if code that you've changed **works**?
]

???

When you refactor existing code, how do you know it works?

---

class: center, middle

.inline-images[
![Feedback loop](/public/img/slide-assets/feedback-loop-green.png)
]

.large[
**Feedback!**
]

???

Basically what we're talking about is the feedback loop.

- You write or change code
- You run the code in whatever environment you've built
- You get feedback as to whether or not it works

---

class: middle, center

.large[
So how do we make that feedback loop smaller?
]

???

We're going to learn how to run **unit tests**, which mean that we are only executing the code that we're writing, and nothing else. This makes the feedback loop tiny, we can run hundreds of tests in a couple seconds.

Let's start with an exercise...

---

# Example Question

_This is an example coding test question..._

A frog wants to get to the other side of the road. The frog is currently located at position `start` and wants to get to a position greater than or equal to `end`. The frog always jumps a fixed distance, `jumpLength`.

Write a function to count the minimal number of jumps that the frog must perform to reach its target.

---

# Exercise 1

In groups:

- Use the whiteboard to draw out some examples of the jumping frog algorithm
- Write out a specification for the `frogJumps` function **in plain English**. Use the format:

```
[Function name]

When [given some input(s)] it should [return something].
When [given some other input(s)] it should [return something else].
...etc
```

---

# Testing Playground

Build a testing playground:

```bash
mkdir tdd-playground
cd tdd-playground

mkdir lib
mkdir __tests__

npm init -y
npm install --save-dev jest-cli
```

---

# Our First Unit Test

We've talked about how `frogJumps` works.

Let's use TDD to write it!

Step 1 is to write a test. Here's an example:

```js
// __tests__/frog-jumps.spec.js
const frogJumps = require("../lib/frog-jumps.js");

describe("frogJumps", () => {
  describe("when start is equal to end", () => {
    it("should return 0", () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toEqual(0);
    });
  });
});
```

???

This might look like a lot of syntax right off the bat, but you'll get used to the pattern.

---

# Anatomy of a Test

We're using **[Jest](https://facebook.github.io/jest/)** to write tests. Read the docs!

To make our tests match our Plain English specs, we use nested `describe` blocks. The `describe` takes a callback function as its second argument, allowing us to group tests with a similar context.

```js
describe("Outer context", () => {
  // Code/Tests specific to outer context

  describe("Middle context", () => {
    // Code/Tests specific to middle context

    describe("Inner context", () => {
      // Code/Tests specific to inner context
    });
  });
});
```

---

# Anatomy of a Test

Nesting callbacks is generally considered bad practice outside of writing tests, so you'll need to get used to the difference.

If your code is indented properly, you will see a series of closing parens/braces in a 45 degree angle at the end of a file.

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

# Anatomy of a Test

When we pass strings to `describe` (other than the outermost `describe`) we use the format `when [some context]`:

```js
describe("functionName", () => {
  describe("when passed a certain type of argument", () => {
    // Test here
  });
});
```

---

# Anatomy of a Test

We write our actual tests (aka **assertions**) using `it` blocks. It blocks are given a string of the format `should [return something]`.

Within an `it`, we use the `expect` function with various **matchers**:

```js
it("should return true", () => {
  // 'toBe' matcher
  expect(result).toBe(true);
});

it("should return 100", () => {
  // 'toEqual' matcher
  expect(result).toEqual(100);
});
```

---

# Anatomy of a Test

Bringing it together:

```js
// __tests__/frog-jumps.spec.js
const frogJumps = require("../lib/frog-jumps.js");

// Outer describe
describe("frogJumps", () => {
  // Inner describe 'context'
  describe("when start is equal to end", () => {
    // Test
    it("should return 0", () => {
      // Assertion
      expect(frogJumps(10, 10, 5)).toEqual(0);
    });
  });
});
```

---

# Running Your Test

The test on the previous slide uses the **[Jest](https://facebook.github.io/jest/)** testing library.

Jest has a command line tool, but in order to execute it in the proper environment we need to execute it as a node script.

In your `package.json`:

```js
{
  ...
  "scripts": {
    "test": "jest --verbose"
  }
}

```

---

# Code Along

Run your test:

```bash
npm run test

# or
npm test

# or even
npm t
```

_The test will fail, obviously!_

---

class: center, middle

.large[
<strong><span style="color: red">FAIL</span> -> <span style="color: green">PASS</span></strong>
]

???

What we need to do now is write the minimal amount of code in order to get the test to pass.

- Start by running the test. It will fail because the file doesn't exist
- Add the file, run the test again, it will fail because the function is undefined
- Add a function with the correct name, but no body, it will fail because the return value is undefined
- Write minimal code to get the scenario to pass, then run the test

---

# Add Another Test

```js
describe("when destination is exactly one jump away", () => {
  it("should return 1", () => {
    expect(frogJumps(5, 15, 10)).toEqual(1);
  });
});
```

Run your tests, and fix the errors.

???

- Make sure the students follow TDD step by step: only do things that error messages tell you to do
- You can take shortcuts once you're better at this
- Once all the tests pass, you KNOW your code is done

---

class: center, middle

### Red, Green, Refactor

.inline-images[
![Red Green Refactor](/public/img/slide-assets/red-green-refactor.png)
]

???

The process we've been going through is called red-green-refactor

- We write a failing test (RED)
- We write MINIMAL code to make it pass (GREEN)
- We refactor the code to make it better, and run our tests to make sure it still works

---

# Exercise 2

Implement unit tests for each of the specifications you wrote for `frogJumps`.

Think about the **Edge Cases**

- Zero Arguments
- Perfect match (jump length = distance)
- start point = end point
- end point > start point

???

- Give them maybe 30 minutes of supported work
- They will struggle with the syntax, so make sure you help out a lot
- Encourage them to run tests after every change

Solution in [adp-exercise-solutions](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/frog-jump.js).

---

# Exercise 3

A palindrome is a string that is the same when written forwards and backwards.
**Mom**, **racecar**, and **never odd or even** are all palindromes.

Write a function that takes a string and returns whether it is a palindrome. Take these steps to do so:

- Whiteboard the algorithm
- Write out plain English specs
- Convert specs to tests
- Implement your algorithm

???

- Get them to work on this by themselves
- Get them to each read out a test scenario

Once they start working, start hinting at complexity of algorithms.

This is something that can be solved in `n/2` operations, but you can also use JS library functions to do it for you, at about `3n`.

Naive and efficient solutions in [adp-exercise-solutions](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/palindrome.js)

---

# What We've Learned

- How a typical coding interview goes
- What code completion is
- What TDD is
- How to write tests with Jest

{% endhighlight %}

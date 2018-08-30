---
layout: lesson
title: Advanced JavaScript
slides: ['_slides/week-05/01-advanced-javascript.md']
lesson_date: 2018-07-30
---

## Pre-work

Sharpen your JS skills before class by with [Free Code Camp](http://www.freecodecamp.com/map).

Find the **Basic JavaScript (10 hours)** section, and complete as many of these exercises as you can.

Remember to use your instructors and your fellow students as a resource if you're stuck.

**Note:** There is a string lesson about `\n` and `\r` with a bug. If you hit it, skip it!

---

## Learning Objectives

- Describe the circumstances where JavaScript will explicitly change the canonical type of a value.
- Describe the behaviour of the loose (`==`) versus strict (`===`) comparison operators.
- Explain how function scope works in JavaScript
- Define the purpose of an immediately-invoked function expression (IIFE).
- Describe the behaviour of function expressions versus function declarations written inside conditional blocks.
- Describe what is meant by the difference between _passing by value_ and _passing by reference_.
- Explain why JavaScript provides a `bind` method.
- Describe ways to influence the value of `this` when extracting methods from objects.

---

## Keywords

- Truthy, Truthiness, Falsey, Falseyness
- [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [Immediately-invoked function expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
- Global variables
- [`this`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
- [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

---

## Exercise 1

### Type Coercion

**What will the output be?**

```js
function printHi() {
  const myVar = 5;

  if (myVar == '5') {
    // 1
    console.log('Hi, from if block');
  }

  switch (
    myVar // 2
  ) {
    case '5':
      console.log('Hi, from switch case block');
  }
}

printHi();
```

**What will the output be?**

```js
function trueOrFalse() {
  falseString = 'false'; // 1
  if (true) {
    let falseString; // 2
    if (falseString) {
      // 3
      console.log(falseString == true); // 4
      console.log(falseString == false); // 5
    }
  }
}

trueOrFalse();
```

---

## Exercise 2

### Function Scope

**What will the output be?** <br/>
**What happens if you change `const` to `let`?**

```js
const name = 'John';

function assignName() {
  console.log('The name is : ' + name);

  const name = 'Jane';

  console.log('The name is : ' + name);
}

assignName();
```

---

## Exercise 3

### Functions Inside Conditionals

**What will the output be?**

```js
function functionsInsideConditionals() {
  if (true) {
    // 1
    function innerFunc() {
      // 2
      console.log('innerFunc: Inside if');
    }

    const innerFuncExpr = function() {
      // 3
      console.log('innerFuncExpr: Inside if');
    };
  } else {
    // 4
    function innerFunc() {
      // 5
      console.log('innerFunc: Inside else');
    }
    const innerFuncExpr = function() {
      // 6
      console.log('innerFuncExpr: Inside else');
    };
  }

  innerFunc(); // 7
  innerFuncExpr(); // 8
}

functionsInsideConditionals();
```

---

## Exercise 4

### Passing by Value versus Reference

**What will the output be?**

```js
const me = {
  // 1
  partOf: 'A Team',
};

function myTeam(me) {
  // 2
  me = {
    // 3
    belongsTo: 'A Group',
  };
}

function myGroup(me) {
  // 4
  me.partOf = 'A Group'; // 5
}

myTeam(me);
console.log(me); // 6

myGroup(me);
console.log(me); // 7
```

---

## Exercise 5

### Methods, Objects, `this` & `bind`

**What will the output be?**

```js
const myself = {
  myName: 'Tom',
  myNickNames: ['T-Dog', 'TotalTom'],
  printMyNickNames: function() {
    'use strict';
    this.myNickNames.forEach(function(nickName) {
      // 1
      console.log(this.myName + ', nick: ' + nickName); // 2
    });
  },
};

myself.printMyNickNames();
```

---

## Lab Activity

In pairs, you're going to write a "Choose Your Own Adventure" story. It will need:

- At least 3 yes or no questions using logical operators
- At least 1 multiple choice question
- At least 1 loop (something needs to repeat in order to complete)

The lab task is to:

1.  Design your story as a **decision tree**
2.  Sketch out the story in pseudocode
3.  Implement the story using JS

---

## Additional Resources

A book series exploring the core mechanisms of the JS language:

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

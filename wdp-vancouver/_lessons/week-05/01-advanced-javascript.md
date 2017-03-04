---
layout: lesson
title: Advanced JavaScript
slides: ['_slides/week-05/01-advanced-javascript.md']
lesson_date: 2017-02-06

---

## Agenda

We'll take a close look at the quirks and unusual bits of the **ES5 JavaScript specification**.

We'll discuss some puzzling and irritating language features, and how to avoid the common pitfalls associated with them when programming in JavaScript.

---

## Learning Objectives

- Describe the circumstances where JavaScript will explicitly change the canonical type of a value.
- Describe the behaviour of the loose (`==`) versus strict (`===`) comparison operators.
- Explain how function scope works in JavaScript, as well as hoisting and scope chaining.
- Define the purpose of an immediately-invoked function expression (IIFE).
- Describe the behaviour of function expressions versus function declarations written inside conditional blocks.
- Describe what is meant by the difference between "passing by value" and "passing by reference".
- Explain why JavaScript provides a `bind` method.
- Describe ways to influence the value of `this` when extracting methods from objects.

---

## Keywords

- Truthy, Truthiness, Falsey, Falseyness
- [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [Immediately-invoked function expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
- Hoisting
- Global variables
- [`this`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
- [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

---

## Exercise 1

### Type Coercion

**What will the output be?**

```js
function printHi() {

  var myVar = 5;

  if(myVar == '5') {  // 1
    console.log("BLOCK ONE!")
  }

  if(myVar === '5') { // 2
    console.log("BLOCK TWO!")
  }

  switch(myVar){      // 3
      case '5':
      console.log("BLOCK 3");
    }
  }

printHi();
```

---

## Exercise 2

### Hoisting

Let's do Taylor McGann's [exercises](http://blog.taylormcgann.com/2014/01/11/hoisting-javascript/)

---

## Exercise 3

### Function Scope

**What will the output be?**

```js
var name = "John";
var lastName = "Smith";

(function(){
    console.log("The name is : " + name);

    var name = "Jane";
    var age = 32;

    console.log("The name is : " +name);
})();

console.log(name);
console.log(lastName);
console.log(age);
```

---

## Exercise 4

### Passing by Value versus Reference

**What will the output be?**

```js
var me = {                  // 1
  'partOf' : 'A Team'
};

function myTeam(me) {       // 2
  me = {                  // 3
    'belongsTo' : 'A Group'
  };
}

function myGroup(me) {      // 4
  me.partOf = 'A Group';  // 5
}

myTeam(me);
console.log(me);            // 6

myGroup(me);
console.log(me);            // 7
```

---

## Exercise 5

### What is `this`

**What will the output be?**

```js
function student(name) {
  this.name = name;

  this.getName = function() {
    return this.name;
  }
}

var susan = new Student(name);
console.log(susan.getName());
```

---

## Lab Activity

You're going to contribute to the [JS Fundamentals Site](https://redacademy.github.io/js-fundamentals/#contributing).

Each table is assigned 1 topic:

1. Truthiness, Coercion. Bonus: `&&` and `||`
1. Hoisting, Scope. Bonus: Declarations within conditionals (if/else)
1. Handling `this`. Bonus: the `bind` method
1. Pass by value & reference. Bonus: "Pure" functions

---

# Practice Makes Perfect

Practice what you've learned by continuing on with [Free Code Camp](http://www.freecodecamp.com/ma).

Find the **Basic JavaScript (10 hours)** section, and complete as many of these exercises as you can today.

Remember to use your instructors and your fellow students as a resource if you're stuck.

NOTE: There is a string lesson about `\n` and `\r` with a bug. If you hit it, skip it!

**Good luck!**

---

## Additional Resources

A book series exploring the core mechanisms of the JS language:

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

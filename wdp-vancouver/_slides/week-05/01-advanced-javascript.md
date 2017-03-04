---
layout: slidedeck
title: Advanced JS Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Advanced JavaScript

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Truthiness
1. Type coercion
1. Hoisting
1. Scope
1. Passing by value & reference
1. What is `this`

---

template: inverse

# Truthiness

---
class: middle

## Let's talk about truth.

When is a BLANK not a BLANK? (Groups of two)

- String
- Number
- `null` value
- `undefined` value
- Array
- Object

---
class: middle

## Let's try it!

If you use two "bangs" (exclamation marks), you can force Javascript
to show you the true of false interpretation of a value.

```js
var str = 'abcde';

console.log(str); // 'abcde
console.log(!!str); // true
```

In your group, test out your theories on truthiness using `!!`.

PS: Why does this work?

---

## Truthiness in action

```js
function shoutOutLoud(wordToShout) {
  if (wordToShout) {
    console.log(wordToShout.toUpperCase());
  } else {
    console.log('[silence]');
  }
}

function talkLikeATeenager(words) {
  if (words && words.length) {
    console.log(words.join(', liiiike '));
  } else {
    console.log('Ugh, stop wasting my time');
  }
}
```

---
template: inverse

# Type Coercion

---
class: middle, center

# WAT

.large[[Mind. Blown.](https://www.destroyallsoftware.com/talks/wat)]

.inline-images[
  ![Mind blown](/public/img/slide-assets/mind-blown.gif)
]

---

## WAT

Enter these into your console:
```javacript
1 + 2
1 + '2'

'' == false
0 == false
null == false
undefined == false
null == undefined

function f() {}

f + 100
f + null
f + [1, 2, 3, 4, 5] + undefined
```

---

## Exercise 1

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

# Exercise 1

**Type Coercion**

*Explanation:*

- The **if block** (#1), compares the **number** 5 with the **string** '5' with double equals (`==`). JavaScript does **coercion** when comparing "things" using `==` and due to this **coercion**, the `console.log` within the **if block** gets executed.
- The `if` block using `===` (#2) and the `switch` statement (#3), compare the **number** 5 with the **string** '5' without doing any **coercion**. So they return `false`.

---
class: middle, center

## So is coercion a good thing?

---
template: inverse

# Hoisting

---

## Hoisting

Before your Javascript code is executed, it does a few quick passes that rearranges your code. This process is called __Hoisting__.

Steps:

- Look at the entire file and move all `function` declarations to the top, in the order they're defined.
- Look at the altered file and move all `var` declarations to the top, in the order they're defined.
- We only move `var` __definitions__, not their assignments.

---
class: middle

## Pre-Hoist

```js
var foo = 'bar';

function myFunc(x) {
  return x + 1;
}

if (foo) {
  myFunc(10);
}
```
---
class: middle

## Becomes

```js
function myFunc(x) {
  return x + 1;
}
var foo;

foo = 'bar';

if (foo) {
  myFunc(10);
}
```

---

## Exercise 2

### Hoisting

Let's do Taylor McGann's [exercises](http://blog.taylormcgann.com/2014/01/11/hoisting-javascript/)

---
template: inverse

# Scope

---
class: middle

## Scope

A variable is __in scope__ depending on where a variable is declared.

In Javascript, variables are _scoped_ to functions.

---

## Scope Example

```js
myVar = 'abcde';
var yourVar = 'yourVar';

function myFunc(param) {
  var innerParam = 'hello!';

  return param + myVar + yourVar;
}

console.log(innerParam);
```

In another file:

```js
console.log(myVar);
```

---

## IIFE

Immediately Invoked Function Expression

```javacript
function() {
  myVar = 'abcde';
  var yourVar = 'yourVar';

  function myFunc(param) {
    var innerParam = 'hello!';

    return param + myVar + yourVar;
  }

  console.log(innerParam);
}();
```

In another file:

```js
console.log(myVar);
```

---

## Exercise 3

**What will the output be?**

```js
var name = "John";
var lastName = "Smith";

(function(){
  console.log("The name is : " + name);

  var name = "Jane";
  var age = 32;

  console.log("The name is : " + name);
})();

console.log(name);
console.log(lastName);
console.log(age);
```

---

# Exercise 3

**Function Scope and Hoisting**

*Explanation:*

- **Function Scope**:  Every **variable** in JS is scoped at a function level, so this means that **variables** which are declared inside a function is not accessible outside the function in which it is declared.
- **Scope chaining**: When a **variable** is not found in a **function scope**, the execution environment traverses to an outer **scope** to look for it.

---
template: inverse

# Passing by value & reference

---
class: middle

## On your feet!

We need several primitives, and array, an object, and two variables.

Let's act out how values are passed.

---
class: middle

## Beware Mutation

```javacript
var susan = {
  id: 123,
  name: 'Susan Taylor'
}
var newName = 'Susan Hunt';

function updateStudentName(student, name) {
  student.name = newName;
  name = 'Susan Taylor';
}

updateStudentName(susan, newName);
console.log('susan', susan);
console.log('newName', newName);
```

---

## Exercise 4

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

# Exercise 4

**Passing by Value versus Reference**

*Explanation:*

- When the `myTeam` method is **invoked**, JavaScript is passing the **reference** to the `me` **object** as a **value**. The **invocation** itself creates two independent **references** to the same **object**, (though the name being same here (`me`), is misleading and gives us the impression that it is a single reference.

.footnote[More on the next slide ...]

---

# Exercise 4

**Passing by Value versus Reference**

- When we **assigned** a new **object** at #3, we are changing the **reference value** within the `myTeam` **function**, and it will not have any impact on the original **object** outside this **function scope**. Hence the output from #6.

.footnote[More on the next slide ...]

---

# Exercise 4

**Passing by Value versus Reference**

- In the case of the `myGroup` invocation, we are passing the **object** `me`. But unlike the previous scenario we described, we are not assigning this **variable** to any new **object**, This means the object **reference value** within the `myGroup` **function scope** still is the original object's **reference value** and when we are modifying the **property** within this **scope**, it is effectively modifying the original object's **property**. Hence, you get the output from #7.

---
template: inverse

# What is `this`

---
class: middle

## Who am I?

Functions (and objects) in Javascript have a reference to themselves called `this`.

```js
function Student(name) {
  this.name = name;
}

var susan = new Student(name);
console.log(susan.name);
```
---
class: middle

## Who am I?

`this` is relative. What do you think will happen when we execute the code below?

```js
function Student(name) {
  this.name = name;
  this.favouriteFoods = ['pizza', 'sushi', 'apples'];

  this.getName = function() {
    return this.name;
  }
}

var susan = new Student(name);
console.log(susan.getName());
```

---
class: middle

## Who am I?

The `getName` function has access to `this`, because it is an __method__ on the `Student` object.
Therefore they share the same scope.

---
class: middle

## Exercise 5

`this` is relative. What do you think will happen when we execute the code below?

```js
function student(name) {
  this.myName = name;

  this.printName = function() {
    setTimeout(function() {
      console.log(this.myName);
    }, 2000);
  }
}

var scott = new student('scott');
scott.printName();
```
---

# Exercise 5

The `setTimeout` function takes an anonymous function as its first argument.
That function has its own scope, so `this` becomes a different object entirely.
In this case, it's the `Window` object.

---

## How do we fix it?

```js
function student(name) {
  var self = this;
  self.myName = name;

  this.printName = function() {
    setTimeout(function() {
      console.log(self.myName);
    }, 2000);
  }
}

var scott = new student('scott');
scott.printName();
```

---

# Lab activity

You're going to contribute to the [JS Fundamentals Site](https://redacademy.github.io/js-fundamentals/#contributing).

Each table is assigned 1 topic:

1. Truthiness, Coercion. Bonus: `&&` and `||`
1. Hoisting, Scope. Bonus: Declarations within conditionals (if/else)
1. Handling `this`. Bonus: the `bind` method
1. Pass by value & reference. Bonus: "Pure" functions

{% endhighlight %}

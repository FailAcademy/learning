---
layout: slidedeck
title: Functional Programming Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Functional Programming

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is functional programming
2. Pure vs. Impure
3. Array methods (mapping, filtering, reducing, etc.)
4. Immutability

---
template: inverse

# What is Functional Programming?

---
class: center, middle

### FP FTW!

Functional programming is a **programming paradigm** just like object-oriented or procedural programming is.

In functional programming, computation is treated as **the transformation of data through functions**.

---

# How Is It Different?

Some characteristics of functional programming include:

- Use of pure functions
- Avoids shared state, mutable data, and side effects
- Declarative (using expressions) instead of imperative (using statements)

???

- Question to class: explain the different between declarative and imperative programming
- What are the relative pros and cons of each? e.g. Abstraction vs. efficiency

Functional vs. OOP:

- IN OOP, objects are little state machines.
- In FP, functions take in state and return new state.

---

# Sidebar: FP Origins

**Lambda Calculus!**

Functional programming traces its roots back to the Lambda calculus was invented by Alonzo Church in the 1930s.

It treats **functions as black boxes**&mdash;it takes inputs to functions and processes them in some way and gives you a single output. 

Functions are also **meant to be pure**, so they have no internal state (i.e. no hidden information).

Ultimately, it gives us **a way to encode any computation.**

???

Lambda calculus is the basis of all functional programming languages, and now can be found in most programming languages.

Lambda calculus essentially consists of three things:

1. Variables
2. A way of building functions
3. A way of applying functions

Any Turing Machine program can be translated into Lambda calculus, and vice versa (potential inefficiency aside).

---

# Lambda Calculus

- In Lambda calculus, **functions are just like numbers and numbers are just like functions** (in fact, you don't even need numbers!)
- Functions can consume other functions as arguments, and produce other functions as arguments as results (aka **higher order functions**)
- It has interesting implications, like the Y-combinator (invented by Haskell Curry), which is a way to do **recursion** in a language that doesn't have any looping or recursion mechanism (written as `Y = λf.(λx.f(xx))(λx.f(xx))`)

???

Talk about "first class functions" in JS:

- JS supports constructing new functions during the execution of a program, storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions

Talk about "higher order functions" in JS:

- Functions that operate on other functions, either by taking them as arguments or by returning them
- Where have you seen higher order functions in use (event handlers, map, filter, reduce, etc.)

---

# FP in the Wild

Some languages that are highly functional in nature include Clojure, Erlang, F#, and Haskell.

Other languages (like JS!) support a functional programming style to varying degrees (even PHP).

Support for **first-class functions** and **higher-order functions** in the language is key!

???

- JS has properties of an untyped functional language
- But it can also be used in an OOP or imperative way

---
template: inverse

# Pure vs. Impure Functions

---
class: center, middle

### Functional programming is about writing *pure* functions.

*Fill in the blank:*

**Pure functions are...**

???

Straight out of pre-work reading...

- Portable / Self-documenting
- Testable
- Cacheable (by input)
- Referentially transparent, which means it can be substituted for its evaluated value without changing the behavior of the program
- Parallelizable

---

# Pure Function Structure

A pure function has three parts:

```
1. Input(s)
      |
      V
2. Transformation
      |
      V
3. Output(s)
```

???

- Remember that it's meant to be a self-contained black box!
- This function should not produce any side effects in the outside world
- So no matter how many times you run the function with the same inputs you should get the same output

---

# Pure or Impure?

Determine whether the following functions are **pure** or **impure**. 

Be sure to justify your reasons as we will be discussing these as a class afterward.

---
class: middle

# 1.

### A toaster

???

- This is up for debate, the students will likely think pure, but...
- What about the ambient temperature of the air effecting how long it takes to toast the bread?
- What about the side effect of heat lost to the environment?
- What's stopping you from putting a fork in there instead of bread?

---
class: middle

# 2.

### A person who eats toast.

???

- Impure (lasting side effects in your body from eating the bread)

---
class: middle

# 3.

```js
function addOne(x) {
  return x + 1;
}
```

???

- Pure

---
class: middle

# 4.

```js
function addOne(x) {
  console.log(x + 1);
}
```

???

- Impure

---
class: middle

# 5.

```js
let x = 0
function addOne() {
  x += 1;
  return x;
}
```

???

- Impure

---

class: middle

# 6.

```js
const addOne = (function() {
  let x = 0;
  return function() {
    return x += 1;
  }
})();
```

???

- Depends which function you're looking at...

---

# Exercise 1

Create examples of pure functions in JavaScript for each of the following cases:

1. A function used as an input to another function
2. A function created as an output from another function
3. A function that calls itself

Be prepared to demo your functions for the class.

---
template: inverse

# Array Methods

---
class: middle

# Array Methods

In your browser console, type `Array.prototype.`:

.inline-images[
  ![Array methods in console](/public/img/slide-assets/arrayMethod.png)
]

*What array methods are autocompleted?*

---
class: center, middle

.large[
  Why do we care?
]

---

# Imperative: How

Tell the computer **how** to do it, step by step.

```js
let list = [1, 2, 3];

// loop over each item
for (let i = 0; i < list.length; i++) {
  // add 1 to each item
  list[i] = list[i] + 1;
  // remove even numbers
  if (list[i] % 2 === 0) {
    list.splice(i+1, 1);
  } 
  // multiply the number by 10
  list[i] = list[i] * 10;
}
```

---

# Declarative: What

Describe the "transformation",  i.e. **what** should happen.

```js
const list = [1, 2, 3];

list.map(addOne)
    .filter(isOdd)
    .map(multiplyTen);
```

---

# Exercise 2

With a partner, **compare** and **categorize** the following array methods. How are they different? When should each be used?

- `forEach`
- `map`
- `concat`
- `push`
- `slice`
- `splice`

---
class: center, middle

### Map, Filter & Reduce...

These array methods will change your life as a dev :)

---
class: center, middle

.large[Map:]

.inline-images[
  ![Map a fruit array](/public/img/slide-assets/array-map.png)  
]

.footnote.right[Image source: [ATEN](https://atendesigngroup.com/blog/array-map-filter-and-reduce-js)]

---

# Map

Slice fruit in JavaScript:

```js
const fruits = ['apple', 'orange', 'banana'];

const fruitSlices = fruits.map(fruit => fruit.substring(0, 2));

// ["ap", "or", "ba"]
```

---
class: center, middle

.large[Filter:]

.inline-images[
  ![Filter a fruit array](/public/img/slide-assets/array-filter.png)  
]

.footnote.right[Image source: [ATEN](https://atendesigngroup.com/blog/array-map-filter-and-reduce-js)]

---

# Filter

Pick only oranges in JavaScript:

```js
const fruits = ['apple', 'orange', 'banana'];

const orangesOnly = fruits.filter(fruit => fruit === 'orange');

// ["orange"]
```

---
class: center, middle

.large[Reduce:]

.inline-images[
  ![Reduce a fruit array](/public/img/slide-assets/array-reduce.png)  
]

.footnote.right[Image source: [ATEN](https://atendesigngroup.com/blog/array-map-filter-and-reduce-js)]

---

# Reduce

Make fruit salad in JS:

```js
const fruits = ['apple', 'orange', 'banana'];

const fruitSalad = fruits.reduce((prev, curr) => prev + curr);

// "appleorangebanana"
```

---

# Exercise 3

Turn this list:

```js
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

Into `[8, 6, 4, 2]` using array methods and **only one line of code**. Do not mutate the original `list` array!

Once you figure this out, add `.sort()` to the end of your array method chain.

Now add `10` to the original list. What happens when you sort it now? Why do you think this happens?

---

# Exercise 4

Flatten then add together this array using `.reduce()`, so:

`[[0, 1], [2, 3], [4, 5]]`

Becomes this:

`[0, 1, 2, 3, 4, 5]`

Then this:

`15`

---
template: inverse

# Immutability

---

# Immutability

Functional programming avoids mutatable data because mutating data in your program makes it harder to read and more error-prone.

Using `const` does not solve this problem, because `const` only creates an *immutable binding*.

```
const person = {};
person.name = 'Bob'; // this is fine! 
person = 'Bob'; // this is not fine
```

---

# Exercise 5

In small groups, you'll have 15 minutes to understand your assigned topic (in relation to avoiding mutating object data) and teach it to the class using examples:

1. `Object.assign`
2. `...` spread operator
3. `Object.freeze`

---

# What We've Learned

- What functional programming is
- The difference between a pure and impure function
- How to use different array methods, such as map, filter, and reduce
- How to avoid mutating objects in JS

---
template: inverse

# Questions?

{% endhighlight %}

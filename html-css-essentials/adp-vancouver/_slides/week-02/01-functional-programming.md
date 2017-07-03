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
class: center, middle
layout: false


### Functional vs. OOP

---
class: center, middle

##### Functional is about writing **pure** functions.

### Pure functions are ______.

---
class: center, middle

## Pure or Impure?

Discuss with a partner whether you think the function is **pure** or **impure**. Justify your reasons.

---
class: middle
# 1.
### A toaster

---
class: middle
# 2.
### A person who eats toast.

---
class: middle
# 3.
```js
function addOne(x) {
  return x + 1;
}
```

---
class: middle
# 4.
```js
function addOne(x) {
  console.log(x + 1);
}
```

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
---
class: middle, center

## Why prefer pure functions?

### Pure Functions are more ____ able.

(ex: more testable )

---
class: middle

### A pure function has three parts

```

              1. Input(s)
                    |
                    V
              2. Transformation
                    |
                    V
              3. Output(s)
```

---
class: middle

### Can a function be:

1. an input to another function?

2. an output from another function?

3. call the function itself?

*Write an example to test or demonstrate each.*

---
class: middle

### What do each of the following mean?

1. Higher Order Function

2. Thunk

3. Recursion

---
template: inverse

# Array Methods

---
class: middle

# Array Methods

In your browser console, type `Array.prototype.`.

![Array Method](/public/img/slide-assets/arrayMethod.png)

What array methods are autocompleted?

---
class: middle

## ES.Next playground

We will be writing all of our code using the [ES.Next Playground](https://github.com/redacademy/esnext-playground).

```
git clone https://github.com/redacademy/esnext-playground.git
npm i
git checkout -b functional-programming
```

---
class: middle

# Filter
![Array Filter](/public/img/slide-assets/array-filter.png)

Write a function called `getEvenNumbers` that takes a list of integers and returns only the even numbers.

```js
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

---
class: middle
# esreveR

`const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];`

Using an array method, make the list look like this:

`[9, 8, 7, 6, 5, 4, 3, 2, 1]`

---
class: middle
# Chaining

`const list = [9, 8, 7, 6, 5, 4, 3, 2, 1]`

In one line of code, make the list look like this:

`[8, 6, 4, 2]`


---
class: middle

# Sort

Add sort to the end of your array method chain.

```js
list.filter(x => x % 2)
    .reverse()
    .sort();
// [2, 4, 6, 8]
```

Now add "10" to the original list. What happens when you sort it now? Why?

---
class: middle

# Array Methods

With a partner, **compare** and **categorize** the following array methods.
How are they different? When should each be used?

- `forEach`
- `map`
- `concat`
- `push`
- `slice`
- `splice`

---
template: inverse

# Imperative vs. Declarative

---

# Imperative: How

Tell the computer what to do, step by step.

```js
let list = [1, 2, 3];
// loop over each item
for (let i = 0; i < list.length; i++) {
  // add 1 to each item
  list[i] = list[i] + 1;
  // remove even numbers
  if (list[i] % 2 === 0) {
    list = list.slice(0, i) + list.slice(i + 1, list.length);
  }
  // multiply the number by 10
  list[i] = list[i] * 10;
}
```

---

# Declarative: What

Describe the "transformation". What should happen.

```js
const list = [1, 2, 3];

list.map(add1)
    .filter(isEven)
    .map(multiply10);
```

---
# Teach Each Other

Each group will get a topic. You have 30 minutes to understand the concept and teach it to the class using examples.

- `...` Spread Operator
- `Object.assign`
- `reduce` array method
- Array and Object destructuring

---
template: inverse

# Practice
---
class: middle

## Iterating Over Objects

```js
const team = {
  sam: 13,
  riyad: 12,
  chris: 8,
  jimmy: 4,
  ellis: 6
};
```

Write a function that logs each player's number.

---
class: middle

## Summing Array Values

```js
const studentAges = [10, 13, 14, 12, 11];
```

Write a function that returns the total age of all of the students.
---
class: middle

## Creating a new object

```js
const team = {
  sam: 13,
  riyad: 12,
  chris: 8,
  jimmy: 4,
  ellis: 6
};
```

Write a function `flip` that returns a new object with the keys and values flipped.

Ie. `sam: 13` becomes `13: 'sam'`.
---
template: inverse

# Lab

{% endhighlight %}

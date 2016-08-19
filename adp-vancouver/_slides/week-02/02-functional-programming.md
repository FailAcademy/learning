---
layout: slidedeck
title: Functional Programming
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
name: inverse
### Pure or Impure?
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
function addOne(x) {
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

# A pure function has three parts.

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
class: center, middle
name: inverse

# Array Methods

In your browser console, type `Array.prototype`.

What are array methods?

---
class: middle

# Filter

```js
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

Write a function called "filter" that takes a list of integers and returns only the even numbers.

---
class: middle

# Reverse

Using an array method, make the list look like this:

`[9, 8, 7, 6, 5, 4, 3, 2, 1]`

---
class: middle

# Chaining

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

---
class: middle, center

# Practice

Try the [Netflix Functional Tutorial](http://reactivex.io/learnrx/).


---
class: middle

# Teach Each Other

Each group will get a topic. You have 30 minutes to understand the concept and teach it to the class using examples. Explain how

- `...` Spread Operator
- `Object.assign`
- `reduce` array method
- Array and Object destructuring

{% endhighlight %}

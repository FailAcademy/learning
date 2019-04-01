---
layout: slidedeck
title: Async JavaScript
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Async JavaScript

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false
class: center, middle

# The "Call Stack"

How does our computer run JavaScript? By placing every function we define onto a **"stack"**, and executing them one at a time, in order.

---

# Exercise 1

Visit **[https://www.jsv9000.app/](https://www.jsv9000.app/)** and select the "Call Stack" example form the dropdown at the left of the page.

Run the script and observe how JavaScript adds functions onto it's stack and then executes them. Pay careful attention to the order in which the stack is built up and the order which "stack frames" are executed.

_Hint: Click "about" in the call stack panel._

???

Ask students to run the example, and explain to the class how things are working.

---

# Asynchronous vs. Synchronous

Having one call stack is great, but what if one of your function calls takes a long time to execute?
In a **synchronous** world, JavaScript can't clear the stack, it has to _wait for every instruction to run_ before running the next one.

### .center[_async_ programming will save the day]

- Can you think of an example of something you can do with JavaScript that might take a long time to execute?

???

Be sure to take your time with this. Re-run the visualizer as many times and move forward cautiously.

---

# JS and the Browser

---

# Async operations

---

# `setTimeout`

---

# `requestAnimationFrame`

---

# Callbacks

The simplest way to write asynchronous code in JavaScrit is to use the **callback** pattern. In JavaScript we can pass functions as agruments to other functions, because **functions are values**.

We have already been using callbacks in the previous examples with **setTimeout**, and also when we wrote **event handlers** and **array methods** like `filter` and `sort`.

```js
// ...
```

---

# "Callback Hell"

---

# Promises

---

# `Promise.resolve`

---

# `Promise.reject`

---

# `async` & `await`

---

# `try` & `catch`

---

template: inverse

# Questions?

{% endhighlight %}

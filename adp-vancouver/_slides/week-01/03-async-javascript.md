---
layout: slidedeck
title: Asynchronous JavaScript Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Asynchronous JavaScript

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Recognizing Asynchrony
2. Stacks & Queues
3. The Event Loop
4. Callbacks & Callback Hell
5. Promises
6. Async Functions

---

template: inverse

# Recognizing Asynchrony

---

# Example 1

**What is the output here? Why?**

```js
// setTimeout(fn, delay)

function run() {
  console.log("a");

  setTimeout(() => {
    console.log("b");
  }, 100);

  setTimeout(() => {
    console.log("c");
  }, 0);

  console.log("d");
}

run();
```

???

You can run the example directly in the console.

You will get an `undefined` response before you see `b` and `c` logged. See if they have any idea why.

(The `run` function will return `undefined` on its completion, after which the event loop picks up the `b` and `c` log calls)

---

# Example 2

**What is the output here? Why?**

```js
function do_a() {
  // simulate a time consuming function
  setTimeout(() => {
    console.log("a");
  }, Math.random() * 1000);
}

function do_b() {
  console.log("b");
}

do_a();
do_b();
```

---

# Example 3

**What is the output here? Why?**

```js
function do_a(cb) {
  console.log("a");
  cb("cb");
}

function do_b() {
  console.log("b");
  do_a(console.log);
}

do_b();
```

_What is different about this example?_

---

template: inverse

# Data Structures:<br />Stacks & Queues

---

class: center, middle

# Stack

.inline-images[
![Stack of colourful plates](/public/img/slide-assets/stack-of-plates.jpg)
]

---

# Stack

```
L -> Last
I -> In
F -> First
O -> Out
```

Two methods: **Push** and **Pop**.

One reference: **Top**.

_How would we implement it?_

---

class: center, middle

# Queue

.inline-images[
![Kissing queue](/public/img/slide-assets/queue-kissing.jpg)
]

---

# Queue

```
(head) 1 <- 2 <- 3 <- 4 <- 5 (tail)
```

Two methods: **Enqueue** & **Dequeue**.

Two references: **Head** & **Tail**.

_How would we implement it?_

---

template: inverse

# The Event Loop

---

class: center, middle

.inline-images[
![The Event Loop](/public/img/slide-assets/the-event-loop.png)
]

---

class: center, middle

.large[
*So how do we write asynchronous code?*
]

---

template: inverse

# Callbacks

???

- What is a callback?
- What kind of function uses callbacks (higher order functions)

---

# Callbacks

Also known as **callback functions**...

```js
request(url, (error, response, body) => {
  console.log("body:", body);
});
```

_How does this look on the event loop?_

???

- Create a Node app for this exercise and npm install request.
- Make sure they understand that each function 'runs to completion' in JS.
- Any downsides to writing code that uses callbacks?

---

class: center, middle

.large[
**Callback Hell!**
]

???

- Has anyone heard of callback hell?
- Syntactic symptoms: 45 degree code, deeply nested functions

---

# Exercise 1

In pairs describe/diagram what is happening in the event loop when the `callbackHell` function is called.

```js
const callbackHell = url => {
  request(url, (error, response, body) => {
    request(url, (error, response, body) => {
      request(url, (error, response, body) => {
        console.log("third response");
      });
    });
  });
};
```

???

- Make sure they understand that each function "runs to completion" in JS
- Once they're done the exercise, ask: "What happens if/when one of these requests fails?"

---

# Handling Errors in Callbacks

To make sure errors are properly handled, many libraries implement **error first** callbacks:

```js
request(url, (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  console.log("body ", body);
});
```

_Why do you think we put the error first?_

_How would this make callback hell more hellish?_

---

# Exercise 2

**Setup (in pairs):**

Create an app, install the [Request](https://www.npmjs.com/package/request) library, and read the API docs for [this fake API](https://jsonplaceholder.typicode.com/) to GET our data.

**Using callbacks, write a function that:**

1. Prints the first 10 Posts
2. Prints the first 20 Albums
3. Prints 'Done!'

---

class: center, middle

.large[
**The *real* problem with callbacks...**<br />
]

(it's worse than syntax)

???

Inversion of Control:

- Can anyone think of a bigger issue with the way we're writing code?
- We've handled errors, but what if the response never comes?
- We've handed control of our application to some API
- This principle is called Inversion of Control (IOC)

Reasonability:

- Consider the callback hell example
- Is it easy to understand, to "Reason About"?
- When there is a divergence between the way we think and the way our computer thinks, we get bugs

---

template: inverse

# Promises

???

Promises

- The next generation in async code after callbacks
- Allow us to write code that we can reason about, and maintain control over

Pre-test:

- Where have we seen promises before? (jQuery AJAX)
- The "Promise" metaphor: "I promise I'll get back to you"

---

# Promises

Promises use `then` and `catch` to handle success resolution or a rejection, respectively:

```js
var rp = require("request-promise");
rp(url)
  .then(response => console.log(response))
  .catch(console.log);
```

_Where have we used this already?_

???

- Instead of handing control and asking a function to be called, we're calling a function and expecting a return value.

Bonus:

How does this look in the event loop?

- All `then` and `catch` methods get called, they just register callbacks effectively using closures.

---

# Handling Errors in Promises

If any of the `then` functions fail, then the `catch` function will be called:

```js
var rp = require("request-promise");
rp(url)
  .then(response => console.log(response))
  .then(response => console.log(response))
  .then(response => console.log(response))
  .catch(console.log);
```

???

- Unhandled promises throw an error
- What about timeouts? Is this fixed? How might you fix it?
- You can easily add timeouts into promise calls.

This can make multiple failure flows difficult to code.

- You can return a failed promise with a message `Promise.reject('FLAG')`
- But there's no good control flow options

---

# Exercise 3

Look up the docs on the **[Promise API](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)** on MDN. How can we wrap the below in a function that returns a promise?

```js
request(url, (error, response, body) => {
  console.log("body:", body);
});
```

???

Solution:

```js
function getPromise = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) return reject(error);
      resolve(body);
    });
  });
};
```

---

# Exercise 4

In pairs, refactor the callbacks exercise 2 using Promises.

**Setup:**

Install the [Request Promise](https://www.npmjs.com/package/request-promise) library.

**Using promises, write a function that:**

- Prints the first 10 Posts
- Prints the first 20 Albums
- Prints 'Done!'

---

template: inverse

# Async Functions

---

# Async Functions

```js
var rp = require("request-promise");
async function getUrl(url) {
  try {
    const response = await rp(url);
    console.log(response);
  } catch (e) {
    console.log("uh oh!");
  }
}

getUrl("http://www.google.ca");
```

- Any async **or sync** function can be awaited
- Allows us to write async code that looks synchronous
- We can only use the `await` keyword in an `async function`

???

- Async functions are sugar for generators
- Already in the newest versions of all browsers.
- No IE or Opera Mini support, still need a transpiler

---

# Exercise 5

In pairs, refactor the Promises exercise using `async`/`await`.

---

# What We've Learned

- How to recognize asynchrony
- What stacks and queues are
- How the event loop relates to asynchrony in JS
- What callbacks (and callback hell) are
- How to use Promises
- How to use `async`/`await`

---

template: inverse

# Questions?

{% endhighlight %}

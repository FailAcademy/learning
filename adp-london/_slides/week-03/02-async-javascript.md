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
1. Stacks & Queues
1. The Event Loop
1. Asynchrony, Parallelism and Concurrency
1. Callbacks & Callback Hell
1. Promises
1. Async Functions

---

template: inverse

# Recognizing Asynchrony

---

# Example 1

```js
// setTimeout(fn, delay)

function run() {
  console.log('a');

  setTimeout(() => {
    console.log('b');
  }, 100);  

  setTimeout(() => {
    console.log('c');
  }, 0);

  console.log('d');
}

run();
```

What is the output? Why?

???

You can run the example directy in the console.

You will get an `undefined` response before you see `b` and `c` logged. See if they have any idea why.

(The `run` function will return `undefined` on its completion, after which the event loop picks up the `b` and `c` log calls)

---

# Example 2

```js
function do_a(){
  // simulate a time consuming function
  setTimeout(() => {
    console.log('a');
  }, Math.random() * 1000);
}

function do_b(){
  console.log('b');
}

do_a();
do_b();
```

What is the output? Why?

---

# Example 3

```js
function do_a(cb) {
  console.log('a');
  cb('cb');
}

function do_b() {
  console.log('b');
  do_a(console.log)
}

do_b();
```

What is the output? Why?

What is different about this example?

---

template: inverse

# Data Structures

.large[
   Stacks & Queues
]

---
class: center

# Stack

.inline-images[
  <img src="https://www.oddballs.co.uk/images/CathysSpinningPlateMain.jpg" width="400">
]

---
class: middle

## Stack

.condensed[
- L -> Last
- I -> In
- F -> First
- O -> Out
]

Two methods: __Push__ & __Pop__. One reference: __Top__.

How would we implement it?

---
class: center

# Queue

.inline-images[
  <img src="https://davidsowden.files.wordpress.com/2012/08/the_kissing_queue.jpg" width="400">
]

---

class: middle

## Queue

(head) 1 <- 2 <- 3 <- 4 <- 5 (tail)

Two methods: __Enqueue__ & __Dequeue__. Two references: __Head__ & __Tail__.

How would we implement it?

---

template: inverse

# The Event Loop

[Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

---
class: center, middle

.large[
  So what does "Asynchronous" actually mean?
]

---
template: inverse

# Parallelism

.large[
   Picture a rollercoaster with one thirty-seat car
]

---
template: inverse

# Asynchrony

.large[
   Picture a rollercoaster with thirty one-seat cars
]

---

template: inverse

# Concurrency

.large[
   More than one person can enjoy the rollercoaster at any given time
]

---
class: center, middle

## So how do we write asynchronous code?

---
template: inverse

# Callbacks

???

- What is a callback?
- What kind of function uses callbacks (Higher Order Functions)

---
class: middle

## Callbacks

AKA "Callback Functions"

```js
get(url, (response) => {
  console.log('response');
});
```

How does this look on the Event loop?

???

- Make sure they factor in the 'main' method that is executing the `get` fn.
- Make sure they understand that each function 'runs to completion' in JS.

Any downsides to writing code that uses callbacks?

---
template: inverse

# Callback hell

???

Callback Hell (syntactic)

- Has anyone heard of callback hell?
- Syntactic symptoms - 45 degree code, deeply nested functions

---
class: middle

## Exercise: Callback Hell

```js
const callbackHell = (url) => {
  get(url, (response) => {
    get(response.url, (response) => {
      get(response.url, (response) => {
        console.log('third response');
      });
    });
  });
};
```

In pairs: describe what is happening in the Event Loop when the `callbackHell` function is called.

???

- Make sure they understand that each function 'runs to completion' in JS

Once they're done the exercise, ask:

- What happens if/when one of these requests fails?

---
class: middle

## Handling Errors in Callbacks

To make sure errors are properly handled, many libraries implement 'Error first' callbacks.

```js
get(url, (error, response) => {
  if (error) {
    return console.log(error);
  }
  console.log('response');
});
```

???

- Why do you think we put the error first
- How would this make callback hell more hellish?

---

## Exercise: Callbacks

In Pairs:

__Setup:__

.condensed[
1. Create an `async-js` branch in the `esnext-playground`.
2. Install the [Request](https://www.npmjs.com/package/request) library.
3. Read the API docs for [this fake API](https://jsonplaceholder.typicode.com/) to GET our data.
]

__Using callbacks: write a function that:__

.condensed[
1. Prints the first 10 Posts
1. Prints the first 20 Albums
1. Prints 'Done!'
]

---
template: inverse

# The _real_ problem with Callbacks

.large[
  (it's worse than syntax)
]

???

IOC

- Can anyone think of a bigger issue with the way we're writing code?
- We've handled errors, but what if the response never comes?
- We've handed control of our application to some API
- This principle is called Inversion of Control (IOC)

Reasonability

- Consider the callback hell example
- Is it easy to understand, to "Reason About"?
- When there is a divergence between the way we think and the way our computer thinks, we get bugs

---
template: inverse

# Promises

???

Promises

- The next generation in async code after callbacks
- Allow us to write code that we can reason abount, and maintain control over

Pre-test:

- Where have we seen promises before? (jQuery AJAX)
- The "Promise" metaphor: "I promise I'll get back to you"

---
class: middle

## Promises

```js
get(url)
  .then(response => console.log(response));
  .catch(console.log);
```

???

- Promises use `then` and `catch` for success and error, respectively
- Instead of handing control and asking a function to be called, we're calling a function and expecting a return value.

Bonus:

How does this look in the event loop?

- All `then` and `catch` methods get called, they just register callbacks effectively using closures.

---
class: middle

## Handling Errors in Promises

```js
get(url)
  .then(response => console.log(response));
  .then(response => console.log(response));
  .then(response => console.log(response));
  .catch(console.log);
```

If any of the `then` functions fail, the `catch` function will be called.

???

- Unhandled promises throw an error
- What about timeouts? Is this fixed? How might you fix it?
- You can easily add timeouts into promise calls.

---
class: middle

## Handling Errors in Promises

```js
get(url)
  .then(response => console.log(response));
  .then(response => console.log(response));
  .catch(error => console.log('STOP!'));
  .then(response => console.log(response)); // This will get called!
  .catch(console.log);
```

GOTCHA: Any `then` _after_ a `catch` will be called!

???

This can make muliple failure flows difficult to code.

- You can return a failed promise with a message `Promise.reject('FLAG')`
- But there's no good control flow options

---
class: middle

## Exercise: Callback to Promise

```js
get(url, (error, response) => {
  console.log('response');
});
```

Look up the Promise API on MDN. How can we wrap the above in a function that returns a promise?

???

Solution:

```js
function getPromise = (url) => {
  return new Promise((resolve, reject) => {
    get(url, (error, response) => {
      if (error) return reject(error);
      resolve(response);
    });
  });
};
```

---
## Exercise: Promises

In Pairs, refactor the Callbacks Exercise using Promises.

__Setup:__

.condensed[
1. Install the [Request Promise](https://www.npmjs.com/package/request-promise) library.
]

__Using promises, write a function that:__

.condensed[
1. Prints the first 10 Posts
1. Prints the first 20 Albums
1. Prints 'Done!'
]

---


template: inverse

# Async Functions

.large[
   AKA the best thing ever
]

---
class: middle

## Async Functions

```js
async function getUrl(url) {
  try {
    const response = await get(url);
    console.log(response);
  } catch (e) {
    console.log('uh oh!');
  }
}

getUrl('http://www.google.ca');
```

.condensed[
- Any async __or sync__ function can be awaited
- Allows us to write async code that looks synchronous
- We can only use the `await` keyword in an `async function`
]

???

- Async functions are sugar for generators
- Already in the newest versions of all browsers.
- No IE or Opera Mini support, still need a transpiler

---
class: middle

## Exercise: Async/Await

In Pairs, refactor the Promises Exercise using Async Await.

---
template: inverse

# Lab

{% endhighlight %}

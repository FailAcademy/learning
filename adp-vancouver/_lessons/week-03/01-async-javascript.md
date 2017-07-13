---
layout: lesson
title: Asynchronous JavaScript
slides: ['_slides/week-03/01-async-javascript.md']
lesson_date: 2017-07-17
---

## Pre-Work

Watch this video for a primer on Node's event loop:

- [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

Prior to today's class, please also read the following articles:

- [The Evolution of Async Javascript](https://blog.risingstack.com/asynchronous-javascript/)
- [Understanding timers: `setTimeout` and `setInterval`](http://javascript.info/tutorial/settimeout-setinterval)

---

## Learning Objectives

- Differentiate asynchrony, parallelism, and concurrency.
- Explain how the JavaScript event loop works, and how it interprets the code you write.
- Explain the syntactic and semantic implications of "callback hell."
- Implement strategies for writing clean asynchronous code using callbacks, Promises, and `async`/`await`.

---

## Keywords

- Asynchronous
- Parallel
- Threads
- Concurrency
- [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout)
- [Event loop](https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop)
- Blocking
- Non-blocking
- Stack
- Queue
- Callback
- [`Promise`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`resolve`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)
- [`reject`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)
- [`catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
- [`then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
- `pending`
- [`async`/`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

---

# Exercise 1

In pairs describe/diagram what is happening in the event loop when the `callbackHell` function is called.

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

---

## Exercise 2

**Setup (in pairs):**

Create an `async-js` branch in the `esnext-playground`, install the [Request](https://www.npmjs.com/package/request) library, and read the API docs for [this fake API](https://jsonplaceholder.typicode.com/) to GET our data.

**Using callbacks, write a function that:**

1. Prints the first 10 Posts
2. Prints the first 20 Albums
3. Prints 'Done!'

---

## Exercise 3

Look up the docs on the **[Promise API](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)** on MDN. How can we wrap the above in a function that returns a promise?

```js
get(url, (error, response) => {
  console.log('response');
});
```

---

## Exercise 4

In pairs, refactor the callbacks exercise using Promises.

**Setup:**

Install the [Request Promise](https://www.npmjs.com/package/request-promise) library.

**Using promises, write a function that:**

- Prints the first 10 Posts
- Prints the first 20 Albums
- Prints 'Done!'

---

## Exercise 5

In pairs, refactor the Promises exercise using `async`/`await`.

---

## Lab Activity

Save these three files to your local filesystem:

```
# opening.txt
From time to time
```

```
# middle.txt
The clouds give rest
```

```
# end.txt
To the moon-beholders
```

Write a function that uses Node to get each of the files and concatenate them into a haiku. Maintain the appropriate line breaks.

- There are sync and async versions of the Node API function you will need&mdash;use the async version.
- To get the executing path of your node process, use `process.cwd()`.

**Result:**

```
From time to time
The clouds give rest
To the moon-beholders
```

If you finish, here are some additional challenges:

1. Write the function using async/await and Promises.
2. Using Promises, find a way to request all three files concurrently.
3. Using Promises, find a way to request all three concurrently along with a file that does not exist. (Hint: there is no Promise API method that allows for this.)

---

## Additional Resources

More on Promises:

- [Promise Overview](http://www.1bytebeta.com/javascript-promise-overview/)
- [Egghead.io on Promises](https://egghead.io/lessons/ecmascript-6-promises-with-es6)

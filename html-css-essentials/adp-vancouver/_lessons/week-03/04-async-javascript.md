---
layout: lesson
title: Asynchronous JavaScript
slides: ['_slides/week-03/04-async-javascript.md']
lesson_date: 2017-01-26
---

## Pre-Work

Prior to today's class, please read:

- [The Evolution of Async Javascript](https://blog.risingstack.com/asynchronous-javascript/).

Also be sure to review how timers work in JS:

- [Understanding timers: setTimeout and setInterval](http://javascript.info/tutorial/settimeout-setinterval)

Learn about the event loop:

- [Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

---

## Learning Objectives

- Explain the JavaScript "event loop", and how it handles asynchronous code.
- Distinguish between blocking and non-blocking code (for example, `fs.readFile` versus `fs.readFileSync`).
- Explore strategies for avoiding nested callbacks in code.
- Use ES2015 Promises to make asynchronous requests.
- Distinguish between `resolve`, `reject`, and `pending` Promise states.

---

## Keywords

- [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout)
- [Event loop](https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop)
- Blocking
- Non-blocking
- Async
- Concurrent
- Thread
- Callback
- [`Promise`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`resolve`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)
- [`reject`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)
- [`catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
- [`then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
- `pending`

---

## Exercise 1

Read the following code examples, and predict the outcome (without running the code yet).

**Example 1:**

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
```

**Example 2:**

```js
function do_a(){
  // simulate a time consuming function
  setTimeout( function(){
    console.log( 'a' );
  }, 1000 );
}

function do_b(){
  console.log( 'b' );
}

do_a();
do_b();
```

---

## Exercise 2

Compare blocking and non-blocking code with the built in Node module `fs`:

1. Create a demo file called `file.md` to read.
2. Create a file called `sync.js` that should read `file.md` using `fs.readFileSync`.
3. Create a file called `async.js` that should read `file.md` using `fs.readFile`.
4. Create timers using `performance.now()` to determine how long the previous functions take to run.

The following resources will help:

- [Node.js Docs - File System](https://nodejs.org/api/fs.html)
- [Overview of Blocking vs Non-Blocking](https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md)

---

## Exercise 3

Rewrite the previous exercise's code using callbacks.

Use callbacks to write five consecutive calls logging `a`, `b`, `c`, `d`, and `e` at one second intervals.

---

## Exercise 4

Use Promises to rewrite the previous exercise's code.

First, change the previous example to fail at the letter `d` and log an error to the console. 

**Hint:** Use `reject` to achieve this.

Next, change the previous example to not fail at `d`, but instead handle the error and log "Error at 'd'" to the console. 

**Hint:** use `catch` to achieve this.

Finally, use a native JS Promise to load data from an API based on the following criteria:

- If the first request fails, it should retry.
- If the second request fails, it should retry again.
- If the third request fails, it should return an error.
- If a request succeeds, it should log the data to the console.

[See API suggestions](https://github.com/toddmotto/public-apis) to use with this exercise.

---

## Exercise 5

Finally, use a native JS Promise to load data from an API based on the following criteria:

- If the first request fails, it should retry.
- If the second request fails, it should retry again.
- If the third request fails, it should return an error.
- If a request succeeds, it should log the data to the console.

When you're done, write a demo to that demonstrates the difference between `Promise.all` and `Promise.race`.

---

## Lab Activity

Apply asynchronous JavaScript techniques in your project.

---

## Additional Resources

- [What the heck is the Event Loop anyway?](http://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)
- [Promise Overview](http://www.1bytebeta.com/javascript-promise-overview/)
- [Egghead.io on Promises](https://egghead.io/lessons/ecmascript-6-promises-with-es6)

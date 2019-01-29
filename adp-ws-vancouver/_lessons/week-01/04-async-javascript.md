---
layout: lesson
title: Asynchronous JavaScript
slides: ['_slides/week-01/04-async-javascript.md']
lesson_date: 2019-04-13
---

## Pre-Work

Prior to today's class, please read:

- [The Evolution of Async Javascript](https://blog.risingstack.com/asynchronous-javascript/).

Also be sure to review how timers work in JS:

- [Understanding timers: `setTimeout` and `setInterval`](http://javascript.info/tutorial/settimeout-setinterval)

---

## Learning Objectives

- Understand and be able to differentiate async, parallel and concurrent code.
- Explain the JavaScript "event loop", and how it interprets the code we write.
- Distinguish between blocking and non-blocking code.
- Understand the syntactic and semantic implications of "Callback Hell"
- Identify strategies for writing clean asynchronous code using callbacks, promises, and async/await.

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
- Async/Await

---

## Additional Resources

- [What the heck is the Event Loop anyway?](http://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)
- [Egghead.io on Promises](https://egghead.io/lessons/ecmascript-6-promises-with-es6)
- [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/getting-started/primers/promises)
- [Using Promises (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

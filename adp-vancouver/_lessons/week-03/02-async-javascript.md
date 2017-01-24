---
layout: lesson
title: Asynchronous JavaScript
slides: ['_slides/week-03/02-async-javascript.md']
lesson_date: 2017-01-24
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

- Understand and be able to differentiate asynchrony, parallelism and concurrency.
- Explain the JavaScript "event loop", and how it interprets the code we write.
- Distinguish between blocking and non-blocking code (for example, `fs.readFile` versus `fs.readFileSync`).
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

## Lab Activity

Apply asynchronous JavaScript techniques in your project.

---

## Additional Resources

- [What the heck is the Event Loop anyway?](http://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)
- [Promise Overview](http://www.1bytebeta.com/javascript-promise-overview/)
- [Egghead.io on Promises](https://egghead.io/lessons/ecmascript-6-promises-with-es6)

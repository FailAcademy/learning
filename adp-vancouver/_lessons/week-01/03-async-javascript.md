---
layout: lesson
title: Asynchronous JavaScript
slides: ['_slides/week-01/03-async-javascript.md']
lesson_date: 2018-07-06
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

- There are sync and async versions of the Node API function you will need - use the async version
- To get the executing path of your node process, use `process.cwd()`

Result:

```
From time to time
The clouds give rest
To the moon-beholders
```

If you finish, here are some additional challenges:

1.  Write the function using Async/Await and Promises
2.  Using Promises, find a way to request all three files concurrently
3.  Using Promises, find a way to request all three concurrently along with a file that does not exist. (Hint: there is no Promise API method that allows for this)

---

## Additional Resources

- [What the heck is the Event Loop anyway?](http://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)
- [Egghead.io on Promises](https://egghead.io/lessons/ecmascript-6-promises-with-es6)
- [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/getting-started/primers/promises)
- [Using Promises (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

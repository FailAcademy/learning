---
layout: lesson
title: Async Javascript
slides: []
lesson_date: 2016-10-12
---

## Objectives

- Explain the Javascript Event Loop, and how it handles async code
- Distinguish between blocking and non-blocking code
  - `fs.readFile` vs. `fs.readFileSync`
- Avoid writing code with nested callbacks
- Use ES2015 promises to make asynchronous requests
- Distinguish between "resolve", "reject" and "pending" promise states

## Keywords

- [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout)
- [event loop](https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop)
- blocking
- non-blocking
- async
- concurrent
- thread
- callback
- [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [resolve](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)
- [reject](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)
- [catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
- [then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
- pending

## Pre-Work
- Read [The Evolution of Async Javascript](https://blog.risingstack.com/asynchronous-javascript/).
- Understand [setTimeout](http://javascript.info/tutorial/settimeout-setinterval)

## Active Learning

1. Model how the **stack** and **queue** work step by step within the Javascript event loop. Use post it notes for each step for the following code examples:

For additional help, read [Event Loop](https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop) or [What is the Event Loop](http://altitudelabs.com/blog/what-is-the-javascript-event-loop/).

EXAMPLE 1

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

EXAMPLE 2

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

2. Compare blocking and non-blocking code with the built in Node module `fs`. The following resources will help:

[docs](https://nodejs.org/api/fs.html)
[src](https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md)

  a. create a demo file called "file.md" to read.

  b. Create a file called "sync.js" that should read "file.md" using `fs.readFileSync`.

  c. Create a file called "async.js" that should read "file.md" using `fs.readFile`.

  d. create timers using "performance.now()" to determine how long the previous functions take to run.

3. Rewrite example 2 using callbacks.

4. Use callbacks to write five consecutive calls logging "a", "b", "c", "d", "e" with 1 second intervals.

5. Use promises to rewrite the previous example.

6. Change the previous example to fail at the letter "d" and log an error to the console. Hint: use `reject`.

7. Change the previous example to not fail at "d", but instead handle the error and log "Error at 'd'" to the console. Hint: use `catch`.

8. Use a native JS Promise to load data from an api with the following guidelines. [API suggestions](https://github.com/toddmotto/public-apis)

  - If the first request fails, it should retry.
  - If the second request fails, it should retry again.
  - If the third request fails, it should return an error.
  - If a request succeeds, it should log the data to the console.


## Resources
- [What the heck is the Event Loop anyway?](http://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)
- [Promise Overview](http://www.1bytebeta.com/javascript-promise-overview/)
- [Egghead.io on Promises](https://egghead.io/lessons/ecmascript-6-promises-with-es6)

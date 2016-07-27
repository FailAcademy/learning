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
  - `fs.writeFile` vs. `fs.writeFileSync`
- Avoid writing code with nested callbacks
- Use ES2015 promises to make asynchronous requests
- Distinguish between "resolve", "reject" and "pending" promise states

## Keywords

- [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout)
- event loop
- blocking
- non-blocking
- async
- concurrency
- [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [resolve](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)
- [reject](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)
- pending
- callback

## Pre-Work
- Read [The Evolution of Async Javascript](https://blog.risingstack.com/asynchronous-javascript/).
- Understand [setTimeout](http://javascript.info/tutorial/settimeout-setinterval)

## Active Learning



## Resources
- [What the heck is the Event Loop anyway?](http://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)
- [Egghead.io on Promises](https://egghead.io/lessons/ecmascript-6-promises-with-es6)
- [PromiseJS.org](https://www.promisejs.org/)
- [PostreSQL promises](https://github.com/vitaly-t/pg-promise)

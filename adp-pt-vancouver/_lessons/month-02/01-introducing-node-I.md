---
layout: lesson
title: Introducing Node II
slides: ['_slides/month-02/02-introducing-node-II.md']
lesson_date: 2019-04-16
---

## Pre-Work

Take a look at how you can debug your Node application using Chrome Dev Tools before class:

- [Accelerate your workflow - Google I/O 2016](https://www.youtube.com/watch?v=x8u0n4dT-WI&feature=youtu.be&t=2571)

---

## Learning Objectives

- Understand the history and beginnings of Node.
- Review TCP/UDP protocols.
- Describe the Client-Server Computing Model.
- Model JavaScript's event loop.

---

## Keywords

- Node
- Single Threaded
- Event Loop
- TCP/UDP

---

## Exercise 1

Implement the following `conn` event handlers in your `handleConnection` callback:

- `data`
- `close`
- `error`

Each handler should `console.log` the `remoteAddressAndPort` as well as any relevant parameters (e.g. incoming data, or error messages). Review **[the documentation](https://nodejs.org/api/net.html)** here before you begin.

---

## Exercise 2

Use the debugger and set a breakpoint in your `data` event handler. Intercept the incoming data, and use the debugger's console to change the value of the data parameter (the incoming data) before it's logged.

Use [Netcat](https://en.wikipedia.org/wiki/Netcat) to send data to your new TCP service.

---

## Additional Resources

Watch the presentation where Node was introduced at JSConf 2009:

- [Ryan Dahl: Original Node.js presentation](https://www.youtube.com/watch?v=ztspvPYybIY)

A delightful Node.js packages and resources:

- [Awesome NodeJS](https://github.com/sindresorhus/awesome-nodejs)

Process monitors and testing tools for Node:

- [pm2](http://pm2.keymetrics.io/)
- [tcpkali](https://github.com/machinezone/tcpkali)
- [htop](https://hisham.hm/htop/)

How to self detect a memory leak in Node:

- [Findout here](https://www.nearform.com/blog/self-detect-memory-leak-node/)

---
layout: lesson
title: Introducing Node
slides: ['_slides/week-02/01-introducing-node.md']
lesson_date: 2019-01-14
---

## Pre-Work

Take a look at how you can debug your Node application using Chrome Dev Tools before class:

- [DevTools in 2016: Accelerate your workflow - Google I/O 2016](https://www.youtube.com/watch?v=x8u0n4dT-WI&feature=youtu.be&t=2571)

---

## Learning Objectives

- Understand the history and beginnings of Node.
- Review TCP/UDP protocols.
- Describe the Client-Server Computing Model.
- Model JavaScript's event loop.
- Build a simple TCP/UDP messaging server.
- Install and use Node's profiling tools.
- Understand the difference between _blocking IO_ and _non-blocking IO_.

---

## Keywords

- Node
- Single Threaded
- Event Loop
- TCP/UDP
- Process Manager
- Memory Leak
- Blocking/Non-blocking IO
- Core Module

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

## Exercise 3

Use your TCP server to read from your local file system. When your server receives a request, use Node's built-in `fs` module to read text from a `.txt` file and send the contents back to the connection.

- Is reading from the filesystem an **async** or **sync** action?
- In what circumstance is it useful to use blocking operations?

Modify your existing code:

```js
function handleConnection(conn) {
  // TODO: Read a welcome message from your filesystem
  // And respond to the connection with the contents
}
```

---

## Exercise 4

Next we'll create a minimal chat server.

Change your TCP service to deliver any incoming data to all connected clients.

- Your server will need to store all connections
- Messages a client sends to the server should not return to that client
- But all other clients should receive that message

---

## Lab Activity

Building a TCP server from scratch is not something you'll normally do. There are a wide range of behaviors and edge cases we have not accounted for.

In this lab, we'll use Node's `http` and `fs` modules to build a more typical webserver based on `HTTP`!<br/><br/>
**Your new HTTP server should:**

- Listen for `HTTP` requests on port `3000`
- Serve an `index.html` file (which should be a properly formatted html document) when the url reads http://localhost:3000/index.html
- Serve the right `HTTP` error code if the url is for any other file.

Good luck!

_Note:_

The `HTTP` protocol is the backbone of the web. We're going to learn more about the `HTTP` protocol in upcoming lessons. Use this lab as an opportunity to explore and ask questions.

Remember, `http` is just another _layer of abstraction_ built using the `TCP` protocol "under the hood" to handle the networking activity.
<br/>

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

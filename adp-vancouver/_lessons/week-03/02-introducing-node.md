---
layout: lesson
title: Introducing Node
slides: ['_slides/week-03/02-introducing-node.md']
lesson_date: 2017-07-18
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
- Understand the difference between *blocking IO* and *non-blocking IO*.

---

## Keywords

- Node
- Single Threaded
- Event Loop
- TCP/UPD
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

Each handler should `console.log` the `remoteAddress` as well as any relevant parameters (e.g. incoming data, or error messages). Review **[the documentation](https://nodejs.org/api/net.html)** here before you begin.

---

## Exercise 2

Use the debugger and set a breakpoint in your `data` event handler. Intercept the incoming data, and use the debugger's console to change the value of the data parameter (the incoming data) before it's logged.

Use [Netcat](https://en.wikipedia.org/wiki/Netcat) to send data to your new TCP service.

---

## Exercise 3

Use your TCP server to read from your local file system. When your server receives a request, use Node's build in `fs` module to read text from a `.txt` file and send the contents back to the connection.

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
- Messages you send to the server should not return to you

---

## Lab Activity

**Option 1**

Building a TCP server from scratch is not something you'll normally do.
There are a wide range of behaviors and edge cases we'd have to account for, if we wanted our chat server to work
in the way that we're accustomed to.

Developers in the open source community have created a systems to help us! The most popular among them being
the [Zero Message Queue](http://zguide.zeromq.org/page:all).

Read the article up to the section **Fixing the World**

When you're done, use [zeromq.node](https://github.com/JustinTulloss/zeromq.node) to rebuild your chat server!

*Note: You wont be able to test your server using netcat.

**Option 2**

See if you can implement your TCP /UDP service (The string capitalization service) as an AWS Lambda function using the [serverless](https://serverless.com/) framework!
What are the advantages of using an AWS Lambda function to build out TCP/UDP service?

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

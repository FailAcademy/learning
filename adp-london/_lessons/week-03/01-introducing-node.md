---
layout: lesson
title: Introducing Node
slides: ['_slides/week-03/01-introducing-node.md']
lesson_date: 2017-07-17
---

## Pre-Work

Watch this video for a primer on Node's event loop.

- [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

Also take a look at how you can debug your Node application using Chrome Dev Tools before class:

- [DevTools in 2016: Accelerate your workflow - Google I/O 2016](https://www.youtube.com/watch?v=x8u0n4dT-WI&feature=youtu.be&t=2571)

---

## Learning Objectives

- Understand the history and beginnings of Node.
- Review TCP/UDP protocols.
- Describe the client-server computing model.
- Model JavaScript's event loop.
- Build a simple TCP/UDP messaging server.
- Install and use Node's profiling tools.

---

## Keywords

- Node
- Single-threaded
- Event loop
- TCP/UPD
- Process manager
- Memory leak
- Back pressure

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

Run some load tests on your TCP Server and observe the following:

- System memory and CPU usage
- Node process memory and CPU usage
- The output returned from the server process

Run the command:

```bash
tcpkali -c 100 -d -m "$" -r 100 localhost:9000
```

---

## Exercise 4

Now create a minimal chat server. Change your TCP service to deliver any incoming data to all connected clients.

Functional requirements:

- Your server will need to store all connections
- Messages you send to the server should not return to you

---

## Lab Activity

### Option 1

Building a TCP server from scratch is not something you'll normally do.
There are a wide range of behaviors and edge cases we'd have to account for if we wanted our chat server to work in the way that we're accustomed to.

Developers in the open source community have created a systems to help us! The most popular among them being the [Zero Message Queue](http://zguide.zeromq.org/page:all).

Read the article up to the section **Fixing the World**.

When you're done, use [zeromq.node](https://github.com/JustinTulloss/zeromq.node) to rebuild your chat server!

**Note:** You wont be able to test your server using netcat.

### Option 2

See if you can implement your TCP/UDP service (the string capitalization service) as an AWS Lambda function using the [serverless](https://serverless.com/) framework!

What are the advantages of using an AWS Lambda function to build out TCP/UDP service?

---

## Additional Resources

Process monitors and testing tools for Node:

- [pm2](http://pm2.keymetrics.io/)
- [tcpkali](https://github.com/machinezone/tcpkali)
- [htop](https://hisham.hm/htop/)

A delightful Node.js packages and resources:

- [Awesome NodeJS](https://github.com/sindresorhus/awesome-nodejs)

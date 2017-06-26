---
layout: lesson
title: Introducing Node
slides: ['_slides/week-03/01-introducing-node.md']
lesson_date: 2017-07-17
---

## Pre-Work

Watch [this video](https://www.youtube.com/watch?v=8aGhZQkoFbQ) for a primer on Node's Event Loop.

---

## Learning Objectives

- Understand the History and beginnings of Node.
- Review TCP / UDP protocols.
- Describe the Client-Server Computing Model.
- Model JavaScript's Event Loop.
- Build a simple TCP / UDP messaging server.
- Install and use Node's profiling tools.

---

## Keywords

- Node
- Single Threaded
- Event Loop
- TCP / UPD
- Process Manager
- Memory Leak
- Back Pressure

---

# Exercise 1

Implement the following `conn` event handlers in your `handleConnection` callback:

- #### 'data'
- #### 'close'
- #### 'error'

Each handler should `console.log` the `remoteAddress` as well as any relevant parameters (e.g. incoming data, or error messages).
Review the documentation here before you begin: [https://nodejs.org/api/net.html](https://nodejs.org/api/net.html)

---

## Exercise 2

Use the debugger and set a breakpoint in your `data` event handler. Intercept the incoming data, and use the debugger's console to change the value
of the data parameter (the incoming data) before it's logged.

(Use Netcat to send data to your new TCP service)

When you're finished, watch this video from Google I/O!
[DevTools in 2016: Accelerate your workflow - Google I/O 2016](https://www.youtube.com/watch?v=x8u0n4dT-WI&feature=youtu.be&t=2571)


---

## Exercise 3

Run some load tests on your TCP Server and observe the following:
- System memory and CPU usage
- Node process memory and CPU usage
- The output returned from the server process

run the command: <br/>
`tcpkali -c 100 -d -m "$" -r 100 localhost:9000`

---

## Exercise 4

**Create a minimal chat server**

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

- [HTOP Explained Visually](https://codeahoy.com/2017/01/20/hhtop-explained-visually/)
- [Awesome NodeJS](https://github.com/sindresorhus/awesome-nodejs) - List of Node resources


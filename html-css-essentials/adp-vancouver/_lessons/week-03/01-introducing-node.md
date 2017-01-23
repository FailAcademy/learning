---
layout: lesson
title: Introducing Node
slides: ['_slides/week-03/01-introducing-node.md']
lesson_date: 2017-01-23
---

## Pre-Work

Watch [this video](https://www.youtube.com/watch?v=8aGhZQkoFbQ) for a primer on Node's Event Loop!

---

## Learning Objectives

- Understand the History and beginnings of Node
- Review TCP / UDP protocols
- Model JavaScript's Event Loop
- Build a simple TCP / UDP messaging server
- Install and use Node's profiniling tools

---

## Keywords

- Node
- Single Threaded
- Event Loop
- TCP / UPD
- Process Manager
- Memory Leak
- Back Presssure

---

# Exercise 1

Build a TCP / UDP Server using the `net` module, and load test it using TCPKali!

---

# Exercise 2

Debug your TCP server using node's debugging tools!

---

# Exercise 3

Install profiling tools and introduce a memory leak into your program. Use pm2 / htop to monitor the results!

---

# Exercise 4

Implement your client / server TCP / UDP service using (ØMQ)[http://zguide.zeromq.org/page:all]

---

# Lab Activity

See if you can implement your TCP /UDP service as an AWS Lambda function using the [serverless](https://serverless.com/) framework!
What are the advantages of using an AWS Lambda function to build out TCP/UDP service?

---

## Additional Resources

- https://github.com/sindresorhus/awesome-nodejs
- https://github.com/sindresorhus/awesome-nodejs#filesystem
- https://github.com/caolan/async
- https://http2.github.io/
- http://socketcluster.io/#!/docs/full-stack


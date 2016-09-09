---
layout: lesson
title: Connecting Client & Server
slides: ['_slides/week-03/02-connecting-client-and-server.md']
lesson_date: 2016-10-12
---

## Lesson Objectives

- create a full-stack redux data layer
- communicate between the client and server using web sockets
- provide the client with an id for tracking user progress
- demonstrate an optimistic update

---

## Keywords
- universal Javascript
- optimistic UI
- web sockets

---

## Pre-Work

- Read "Redux without Profanity" [Chapter 4: State Management]( https://tonyhb.gitbooks.io/redux-without-profanity/content/ch1-state-management.html)

---

## Exercise 1

With a partner, outline a way to sync the client and server using Redux. Use a high level overview. As a rough example:

```
|--------| action |--------|
| client |   -->  | server |
|--------|        |--------|
```

---

## Exercise 2

Demonstrate client/server communication with a a "ping / pong" demo using web sockets.

There should be a 1000ms delay between receiving a message and emitting the next message.

---

## Exercise 3

Create a full-stack redux demo.

---

## Exercise 4

Provide the client an id as an identifier. Use this id to prevent a client from voting more than once per item.

---

## Exercise 5

What would be the best method to sync your server store with a database? In reducers? Using middleware? A plugin? Explain and justify your solution.

---

## Lab Activity

1. Setup your project to be a full-stack app, connecting the client and server. 

2. Integrate the [react-redux-router](https://github.com/reactjs/react-router-redux) with your full-stack Redux demo.

---

## Resources
- [FullStack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
- [React Redux Fullstack Starter](https://github.com/michaelcheng429/react-redux-fullstack-starter)
- [Universal Redux Demo](https://github.com/erikras/react-redux-universal-hot-example)

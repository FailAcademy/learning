---
layout: lesson
title: Connecting Client & Server
slides: []
lesson_date: 2016-10-12
---

## Objectives

- create a full-stack redux data layer
- communicate between the client and server using web sockets
- provide the client with an id for tracking user progress
- demonstrate an optimistic update

## Keywords
- universal Javascript
- optimistic UI
- web sockets

## Pre-Work
Read "Redux without Profanity" [Chapter 4: State Management]( https://tonyhb.gitbooks.io/redux-without-profanity/content/ch1-state-management.html)

## Active Learning

1.  With a partner, outline a way to sync the client and server using Redux. Use a high level overview. As a rough example:

```
|--------| action |--------|
| client |   -->  | server |
|--------|        |--------|
```

2. Demonstrate client/server communication with a a "ping / pong" demo using web sockets.

There should be a 1000ms delay between receiving a message and emitting the next message.

3. Create a full-stack redux demo.

4. Provide the client an id as an identifier. Use this id to prevent a client from voting more than once per item.

5. Integrate the [react-redux-router](https://github.com/reactjs/react-router-redux) with your full-stack Redux demo.

6.  What would be the best method to sync your server store with a database? In reducers? Using middleware? A plugin? Explain and justify your solution.

## Resources
- [FullStack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
- [React Redux Fullstack Starter](https://github.com/michaelcheng429/react-redux-fullstack-starter)
- [Universal Redux Demo](https://github.com/erikras/react-redux-universal-hot-example)

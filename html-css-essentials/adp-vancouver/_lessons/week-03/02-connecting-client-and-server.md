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

Create an Express server. Load webpack through `webpack-dev-middleware`.

- [webpack-dev-server docs](http://webpack.github.io/docs/webpack-dev-server.html)

---

## Exercise 3

Demonstrate client/server communication with a a "ping / pong" demo using web sockets.

Use a different port (eg. 3030) for your socket server.

There should be a 1000ms delay between receiving a message and emitting the next message.

---

## Exercise 4

Create a basic middleware and call it on the client.

/client/socket/remoteMiddleware.js

```js
export default store => next => action => {
  console.log('action', action);
  return next(action);
}
```

The middleware should emit an action through the socket.

---

## Exercise 5

Create a `store` on the server. How will it be different from your client `store`?

Update the server store whenever the server receives a new action

Trigger a `SET_STATE` action on the client to update the client sate with the updated server state

---

## Exercise 6

Give each client a `clientId` as an identifier.

1. Give the client an id using ["uuid"](https://github.com/defunctzombie/node-uuid)
2. Store the `clientId` in the store
3. Pass the `clientId` with all middleware calls
4. Store votes as an array of `clientId`'s
5. Return votes as the size of the votes array


## Exercise 7

What would be the best method to sync your server store with a database?

- in reducers?
- using middleware?
- a plugin?

Explain and justify your solution.

---

## Lab Activity

1. Setup your project to be a full-stack app, connecting the client and server. 

2. Integrate the [react-redux-router](https://github.com/reactjs/react-router-redux) with your full-stack Redux demo.

---

## Resources
- [FullStack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
- [React Redux Fullstack Starter](https://github.com/michaelcheng429/react-redux-fullstack-starter)
- [Universal Redux Demo](https://github.com/erikras/react-redux-universal-hot-example)

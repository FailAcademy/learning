---
layout: lesson
title: Connecting Client & Server
slides: ['_slides/week-03/02-connecting-client-and-server.md']
lesson_date: 2016-10-12
---

## Pre-Work

- Read "Redux without Profanity" [Chapter 4: State Management]( https://tonyhb.gitbooks.io/redux-without-profanity/content/ch1-state-management.html)

---

## Learning Objectives

- Create a full-stack Redux data layer.
- Communicate between the client and server using web sockets.
- Provide the client with an ID for tracking user progress.
- Demonstrate an the use of an optimistic update in an application UI.

---

## Keywords

- Universal JavaScript
- Optimistic UI
- Web sockets

---

## Exercise 1

With a partner, outline a way to sync the client and server using Redux in a high-level overview.

As a rough example:

```
|--------| action |--------|
| client |   -->  | server |
|--------|        |--------|
```

---

## Exercise 2

Create a basic Express server. Load Webpack through `webpack-dev-middleware`.

**Hint:** See the [Webpack docs](http://webpack.github.io/docs/webpack-dev-server.html).

---

## Exercise 3

Demonstrate client/server communication with a "ping/pong" demo using web sockets.

Use a different port (e.g. `3030`) for your socket server.

There should be a 1000ms delay between receiving a message and emitting the next message.

---

## Exercise 4

Create a basic middleware and call it on the client in the following file:

`/client/socket/remoteMiddleware.js`

```js
export default store => next => action => {
  console.log('action', action);
  return next(action);
}
```

The middleware should emit an action through the socket.

---

## Exercise 5

Create a `store` on the server. Determine how will it be different from your client `store`?

Be sure to update the server store whenever the server receives a new action.

Trigger a `SET_STATE` action on the client to update the client sate with the updated server state.

---

## Exercise 6

Give each client a `clientId` as an identifier:

1. Give the client an id using [`uuid`](https://github.com/defunctzombie/node-uuid)
2. Store the `clientId` in the store
3. Pass the `clientId` with all middleware calls
4. Store votes as an array of `clientId`'s
5. Return votes as the size of the votes array

---

## Exercise 7

Determine the best method to sync your server store with a database...

- In reducers?
- Using middleware?
- A plugin?

Explain and justify your conclusion.

---

## Lab Activity

In today's lab, you will begin converting your project to be a full-stack app&mdash;finally connecting the client and server. 

You will need to integrate the [react-redux-router](https://github.com/reactjs/react-router-redux) with your project.

---

## Additional Resources

- [FullStack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
- [React Redux Fullstack Starter](https://github.com/michaelcheng429/react-redux-fullstack-starter)
- [Universal Redux Demo](https://github.com/erikras/react-redux-universal-hot-example)

---
layout: slidedeck
title: Connecting Client And Server Slides

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
# Connecting Client & Server

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Install and setup Express.js
2. Create a 'hello world' Server using Express
3. Create a RESTful interface to an Express Server
4. Create an Express middleware
5. Parse Web requests coming into Express
6. Send a cookie between client & server

---

# Fullstack

```
 [ View ] <- [ Data ] <- -> [ Server ] <- -> [ Database ]

( React )    ( Redux )       (Express)        (PostgreSQL)
```

- What do we still have to do?
- Where is the "single source of truth"?

---

# Communication

- How can a **server** and **client** communicate?
- What language *(protocol)* can they use?


---

# Communication

**HTTP** or **Web Sockets** are the most common protocols for communicating. 

Explain the following analogies:

1. **HTTP**: like a piece of mail.

2. **Web Sockets**: like a text message, or a phone call.

---

# Exercise 4

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

# Limiting Actions

We need to make soe decisions about which information to share between the client & server.

1. Will we want to send all actions to the server?
2. Is there data in the client that is not needed by the server?
3. How can we specify which actions we want to sync with the server?

---

# Exercise 5

Create and sync up a second "redux" state on the server.

1. Create a `store` on the server. How will it be different from your client `store`?
2. Update the server store whenever the server receives a new action
3. Trigger a `SET_STATE` action on the client to update the client sate with the updated server state

---

# Universal JavaScript

Notice how our client and server code are both sharing the same reducers.

This is often called **universal javascript** or **isomorphic javascript**.

- What are some benefits and draw backs of "universal javascript"?

---

# Problem

Users can vote as many times as they want. Ideally, they should only be allowed to vote once per item.

Discuss with a partner how you might prevent users from voting multiple times.

---

# Exercise 6

A `clientId` is a simple authentication solution (though not very safe).

Once a user is identified, you can prevent that user from voting multiple times.

1. Give the client an id using ["uuid"](https://github.com/defunctzombie/node-uuid)
2. Store the `clientId` in the store
3. Pass the `clientId` with all middleware calls
4. Store votes as an array of `clientId`'s
5. Return votes as the size of the votes array

---

# Optimistic UI

Notice how the votes are added, but then removed very quickly once the server state overrides the client state.

This is called **optimistic UI**.

- Explain to a partner how optimistic UI works.
- Describe a different scenario where optimistic UI might be helpful.

---

## Exercise 7

What would be the best method to sync your server store with a database?

- in reducers?
- using middleware?
- a plugin?

Explain and justify your solution.

---

# Review

1. full-stack Redux
2. web sockets
3. universal javascript
4. optimistic ui

{% endhighlight %}

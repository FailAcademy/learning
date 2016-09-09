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

1. create a full-stack redux data layer
2. web sockets
3. universal javascript
4. optimistic ui

---

# Fullstack

```
 [ View ] <- [ Data ] <- -> [ Server ] <- -> [ Database ]

( React )    ( Redux )       (Express)        (Postgres)
```

What have do we still have to do?
Where is the "single source of truth"?

---
class: middle, center

# Planning

With a partner, outline a way to sync the client and server using Redux. A high level overview is sufficient, as in the previous slide.

---
template: inverse

# Fullstack Worst Pokemon

Clone the project starter and install dependencies.

---

# Step 1: Express Setup

1. create an Express server
2. load webpack through `webpack-dev-middleware`

---

# Communication

How can a **server** and **client** communicate?

---

# Communication

Explain the following analogies:

1. **HTTP**, like a piece of mail.

2. **Web Sockets**: like a text message, or a phone call.

---

# Step 2: Sockets

1. Setup a socket server on port 3030.
2. Setup a socket client also on port 3030.
3. Demonstrate communication between client & server by logging "ping" on the client & "pong" on the server with 1 second intervals.

---

# Step 3: Middleware

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

# Which Actions

1. Will we want to send all actions to the server?
2. Is there some data in the client that is only for the client?
3. How can we sync only the actions we want with the server?

---

# Step 4: Server Store

1. Create a `store` on the server. How will it be different from your client `store`?
2. Update the server store whenever the server receives a new action
3. Trigger a `SET_STATE` action on the client to update the client sate with the updated server state

---

# Universal JavaScript

Notice how our client and server code are both sharing the same reducers. This is called **universal javascript**.

---

# Problem

Users can vote as many times as they want. Ideally, they should only be allowed to vote once per item.

Discuss with a partner how we might "authenticate" the client.

---

# Step 5: Client ID

1. Give the client an id using ["uuid"](https://github.com/defunctzombie/node-uuid)
2. Store the `clientId` in the store
3. Pass the `clientId` with all middleware calls
4. Store votes as an array of `clientId`'s
5. Return votes as the size of the votes array

---

# Optimistic UI

Notice how the votes are added, but then removed very quickly once the server state overrides the client state. This is called **optimistic UI**.

Explain to a partner how optimstic UI works.

{% endhighlight %}

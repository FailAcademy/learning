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

template: inverse

# Express

---

# Start using Express

Install and set up Express in a new Node project. The group who chose to explore Express in the previous exercise
will provide guidance to the rest of the class.

[Express installation instructions](https://expressjs.com/en/starter/installing.html).

---

# Using Express

Create a new Express App!

```shell
npm init -y
npm i -S express
touch index.js
```

Create a file called server.js and add the following code: <br/>

```js
const port = 3000;
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send("hello, world!");
});

const server = app.listen(3000, function() {
 console.log(`Server running @ localhost:${port}`);
});
```

---

template: inverse

# Routing in Express

---

# Routing

We've added a route to the base location ("/").

```js
app.get('/', function (req, res) {
  res.send("hello, world!");
});
```

Add two more routes to your Express app.
Demonstrate that you can route between the pages in the browser.

---

# Let's get some data

Add the following dependencies to your project:<br/>
```js
var fs = require('fs');
var _ = require('lodash');
var users = [];
```

Why we are adding these?

---

# The User Model

Use the modules you just installed to load some data from a `.json` file, on disk!


```js
// Read users.json from disk.
fs.readFile('users.json', {encoding: 'utf8'}, function (err, data) {
  if (err) throw err;
    // Parse the json file when Node has finished loading it.
    JSON.parse(data).forEach(function (user) {
      user.name.full =
        _.startCase(user.name.first + ' ' + user.name.last);

      users.push(user);
    });
    // End parse.
  });
});
```

** Where does this code belong, in our project?**

---

<<<<<<< HEAD:_slides/week-03/02-webservers-express.md
# app.get

```js
app.get('/', function (req, res) {
```

```js
  var buffer = ''

  users.forEach(function (user) {
    buffer += '<a href="/' + user.username + '">' + user.name.full +
    '</a><br>'
  })
```
```
  res.send(buffer)
})
```

What happens when you click on the link now?
(Cannot GET)

---

# Dynamic

we need to dynamically load the url based on the username. We can do that by user  : and params.
```
app.get('/:username', function (req, res) {
  var username = req.params.username
  res.send(username)
})
```
---


=======
>>>>>>> cd587f86b08182b76ab2d03947986591d143c89d:_slides/week-03/02-webservers-express.md
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

This is often called **universal JavaScript** or **isomorphic JavaScript**.

- What are some benefits and draw backs of "universal JavaScript"?

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
3. universal JavaScript
4. optimistic ui

{% endhighlight %}

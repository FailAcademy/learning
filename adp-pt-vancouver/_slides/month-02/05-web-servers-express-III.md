---
layout: slidedeck
title: Creating a Web Server with Express III Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Creating a Web Server with Express III

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Explore REST (in relation to Express)
2.  Implement Express Router

---

# Use app.route()

Right now we have this in our app:

```js
app.get('/quotes' /* handler */);
app.post('/quotes' /* handler */);
app.get('/quotes/:name' /* handler */);
app.delete('/quotes/:name' /* handler */);
```

We can use `app.route()` to consolidate route handling:

```js
app
  .route('/quotes')
  .get(/* handler */)
  .post(/* handler */);

app
  .route('/quotes/:name')
  .get(/* handler */)
  .delete(/* handler */);
```

---

# Exercise 1

Refactor your route-related code to use `app.route()`.

---

# Routes in a Module

It would also be nice to get all of the route handling code out of `index.js` into a dedicated module for quotes.

Create a `quotes.js` file in your Express app and add:

```js
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

// ...some code goes here

export default router;
```

???

- Creates modular, mountable route handlers
- A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”

---

# Refactor Routes

Now mount your router in your app:

```js
const quoteRoutes = require('./quotes');

// ...

app.use('/quotes', quoteRoutes);
```

And move all of the `app.route()` calls into `quotes.js`.

---

# Exercise 2

Our app won't work until we refactor what we just moved into `./quotes.js`.

First, we won't call `.route()` on the `app` object (it doesn't exist here), we'll call it on the instance of the router we instantiated in this file (`router`).

Second, the path argument passed into `.route()` will be relative to where it's mounted in `index.js`. What do we need to change in the path argument to reflect this?

Don't forget to move your quotes array into `quotes.js` too!

---

template: inverse

# REST APIs

---

class: center, middle

.large[
Surprise! We've been building up a REST API this whole time.
]

---

# What Is REST?

- **RE**presentational **S**tate **T**ransfer
- Conceived of by Roy Fielding in 2000 in his [doctoral dissertation](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)
- REST isn't an architecture, it's meant to be a way to judge architectures (i.e. it's a set of design criteria)
- It's resource-driven, like the web

???

- All about stateless servers and structured access to resources
- REST itself is pretty strict, but it's widely interpreted
- Contrast to RPC which is action-driven
- A tale of two APIs
  - https://codex.wordpress.org/XML-RPC_WordPress_API
  - https://developer.wordpress.org/rest-api/reference/

---

# Rise to Popularity

A few events contributed to the rise of REST:

- The ubiquity of smartphones (iPhone launched in 2007)
- Social media platforms (the Twitter sort-of-REST-ish API was a way to combat rogue API implementations)
- Cloud computing (Amazon S3 launched in 2006 and initially didn't have a GUI, just a RESTful API)

---

# How REST Works

REST defines a type of architecture where **resources**, **identifiers** (URIs), and **actions** (HTTP verbs) are all we need to interact with resources hosted on the web.

In other words, HTTP verbs provide semantic intention for the actions we want to take on resources, and URIs help us know where to find them.

Taken together, REST enabled us to use the web as a **distributed application platform** whose **linked resources** communicate by **exchanging representations of resource state**.

---

# Decisions We Made

Thinking about the quotes app we just built...

- What resources did we identify in our quotes app?
- How did we structure the URIs?
- What HTTP verbs did we use to send requests from the client?

---

# Data &rarr; Resources

How a data set splits into resources:

1.  Pre-defined/one-off resources for important aspects of the application (e.g. the homepage)
2.  Resources for every object exposed through the service (possibly infinite)
3.  Resources as a result of algorithms applied to data sets (probably infinite)

---

# RESTful URIs

And we describe our resources with URI structure:

- Use path variables to denote hierarchy (e.g. `/parent/child`)
- Use punctuation to avoid implying hierarchy where one doesn't exist (e.g. `lat,long` or `lat;long`)
- Use a query string as a input to an algorithm (e.g. `?search=`)

---

# Exercise 10

In small groups or pairs, you'll be assigned one of the following topics to research (with respect to how it relates to REST) and deliver a short presentation to class on your findings:

- Data versus Resources versus Representations in REST
- State in REST: The idea of "statelessness" and the difference between resource state and application state
- The Richardson Maturity Model and where "hypermedia as the engine of application state" (HATEOAS) comes into play
- Safety and idempotence of HTTP verbs used in REST APIs

???

**Data v. Resources v. Representations:**

- Resource: a document, a row in a database, the results of running an algorithm, etc. (anything that can be streamed as bits)
- Splitting an app into resources increases its surface area
- Representation: any useful information about the state of the resource
- Representations also provide levers of state (the next possible state)
- Representations help capture the current or intended state of a resource (with metadata) (we represent with JSON)

**State in REST:**

- Statelessness: requests happen in isolation of each other and contain all the info they necessary to get what's needed from the server
- The client doesn't need to coax the server into some state for the server to be receptive to a request
- HTTP sessions on the server can break statelessness
- Statelessness makes it easier to cache and scale a distributed app
- Application state should be managed in the client, and reflects interactions
- Resource state should be managed on the server, and reflects the semi-permanent state of data
- Resource state is the same for every client

**RMM & HATEOAS:**

- Level 0: URI tunneling
- Level 1: Resources
- Level 2: HTTP verbs
- Level 3: Hypermedia
- HATEOAS: App state tracked by the client on its path through the web (the server guides it along the path through links and forms)
- As an app reaches a new state, the next possible states are discovered (like a treasure hunt for nearby resources)

**Safety & Idempotence:**

- Safe: no server-side effects for which the client can be held responsible
- Idempotent: generates absolute side effects
- GET is safe and idempotent
- PUT and DELETE are not safe but idempotent
- PATCH and POST are not safe and not idempotent
- POST overload in RPC
- POST is often used as the wildcard operation of the web
- In REST, POST is for creating subordinate resources

---

# Lab (Next Class)

We’ll use the lab time to finish anything that was not completed during this lesson!

---

template: inverse

# Questions?

{% endhighlight %}

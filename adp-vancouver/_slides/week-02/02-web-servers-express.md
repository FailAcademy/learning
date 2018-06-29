---
layout: slidedeck
title: Creating a Web Server with Express Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Creating a Web Server with Express

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Install and create an Express app
2.  Create a "Hello World" server using Express
3.  Create an Express middleware
4.  Parse requests coming into Express
5.  Explore REST (in relation to Express)

---

template: inverse

# Getting Started

---

# Exercise 1

Before we begin creating an Express web server, in pairs draw a diagram of a client-server application. Be sure to diagram the lines of communication, and be as detailed as possible. Label as many things as you can.

---

# Boomtown Fullstack

**What do we still need to do?**

```
[View]  <--  [Data]   <--->   [Server]   <--->   [Database]

(React)  (Redux/GraphQL)    (Express.js)        (Postgres)
```

---

# Communication

- How do servers and clients communicate with each other?
- What language (i.e. protocols) can they use?

---

# Communication

**HTTP** and **Web Sockets** are the most common protocols for communicating between web servers and clients.

_Explain the following analogies:_

1.  HTTP is like sending a piece of mail
2.  Web Sockets is like a text message or a phone call

???

- Web sockets...a way to receive event-driven response without polling (set up a persistent connection so either client or server can send data at anytime)
- i.e. bidirectional, low latency real-time communication
- How? Send an HTTP request with `Connection: Upgrade` header to URL with `ws://` scheme

---

class: center, middle

.large[
**HTTP:** <br />
Lack of features as a feature
]

---

class: center, middle

> "HTTP and HTML are the Whoopee Cushion and Joy Buzzer of Internet protocols, only comprehensible as elaborate practical jokes. For anyone who has tried to accomplish anything serious on the Web, it's pretty obvious that of the various implementations of a worldwide hypertext protocol, we have the worst one possible.

> Except, of course, for all the others."

&mdash;Clay Shirky

???

- HTTP is a "glue" protocol
- Inter-operability because it is weak, relatively uncoordinated, and imperfectly implemented
- HTTP kills all other protocols BECAUSE OF the simplicity of its labelling system

---

# HTTP Conceptually

Think of every HTTP request or response as an **envelop**.

What's on the envelop is information about where it should go (the **path**), a description of what's inside (some **headers**), what we want done to the contents of the envelop when it gets to its destination (the **HTTP verb**), or what happened to during its trip (the **status code**).

What's inside the envelop is the actual message/document (the **body**).

---

# HTTP Essentials

Take a look in your dev tools under the Network tab, and look at the Header sub-tab for one of the requests that was sent while loading the page.

What are the first three things you see listed under General?

???

- Request URL, Request Method, Status Code
- These are some of the essential components of HTTP requests and responses

---

# URIs

- Every resource on the web must be exposed with **at least one unique identifier** (but possible many unique identifiers)
- If a resource doesn't have URI then it's not a resource (it's likely just information about another resource)
- An **addressable** application exposes interesting aspects of its data set as resources, and exposes URIs for all of the resources it may conceivably serve

???

- URIs don't belong specifically to HTTP, but HTTP uses them
- Uniform Resource Identifier vs. Locator: every URL is URI, every URI on the web is a URL, but not all URI are URLs
- URLs don't just identify resources like URIs do, they also indicate where to find them (like describing a person by their name instead of resident of their physical address)

---

# HTTP Verbs

What do we use the following **[HTTP verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)** for?

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`

???

- It's up to you to choose the right verb when you send your request, and the verb that you choose will have consequences!
- HTTP verbs provide us with a uniform interface when structuring our applications (as in there aren't many of these verbs and we know what they do in advance)

---

# HTTP Status Code

How would we describe these **[status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)** in non-colloquial terms?

- `100`: Hold on
- `200`: Here you go
- `300`: Go away
- `400`: You messed up
- `500`: I messed up

???

- Responding appropriately (i.e. correct status code / message) when a request comes into our Express server will be our job

---

# What is Express?

- It's minimal, flexible abstraction layer on top of Node
- Handy framework for creating web APIs
- [Other frameworks](https://expressjs.com/en/resources/frameworks.html) are written on top of it too
- Allows us to do routing, create/use middleware, and use template engines to generate HTML pages

---

# Initial Set-up

Create a new directory with an `index.js` file, and then run through `npm init` in that directory.

Once that's done, run:

```bash
npm i -S express
```

More on [Express installation instructions here](https://expressjs.com/en/starter/installing.html).

---

# Initial Set-up

Let's also use nodemon with our app too:

```bash
npm i -D nodemon
```

The [nodemon](https://github.com/remy/nodemon) package will allow us to watch files in the directory in which nodemon was started, and if any files change, it will automatically restart our Node application.

Now add a `start` script to `package.json`:

```
"scripts": {
  "start": "nodemon index.js"
}
```

---

template: inverse

# Express "Hello, World!"

---

# A Basic Express App

Below, the `app.get()` method create a route that accepts GET requests:

```js
const express = require("express");

const app = express();
const port = 3300;

app.get("/", function(request, response) {
  response.send("Hello, world!");
});

app.listen(port, function() {
  console.log(`Server running @ localhost:${port}`);
});
```

---

# Does It Work?

Run the following in your Terminal:

```bash
curl -i http://localhost:3300
```

_What do you see?_

???

- `ETag`: can be used for web cache validation
- `Connection: keep-alive`: Persist connection to improve performance of multiple requests

---

# It's Just Node!

Remember that Express is just providing an abstraction layer on top of Node, so we can still use the Node API in our route handlers too:

```js
app.get("/", function(request, response) {
  // Express method:
  // response.send('Hello, world!');

  // Almost-equivalent code with regular Node:
  response.write("Hello, world!");
  response.end();
});
```

???

- If you were to dig into the Express code you would see that the `request` and `response` objects have prototypes that are based on objects from the Node `http` library.

---

# Send Some JSON

The `.send()` method converts an array or object to JSON:

```js
const quotes = [
  {
    name: "Fred Brooks",
    text: "Nine people can’t make a baby in a month."
  },
  {
    name: "Paul Ford",
    text: "A computer is a clock with benefits."
  },
  {
    name: "Linus Torvalds",
    text: "Talk is cheap. Show me the code."
  }
];

app.get("/", function(request, response) {
  response.send(quotes);
}); // ...now run `curl -i` again
```

---

# Add a Route

We can respond to request on more than just the root-level URI too (thankfully!). Create a dedicated route to send our quotes JSON back on:

```js
app.get("/quotes", function(request, response) {
  response.send(quotes);
});
```

---

template: inverse

# Middleware in Express

---

# Middleware?

Middleware are simply **functions added to the call stack that have access to the request and response objects, and are executed sequentially** (before `app.get()`, etc. is called).

Express middleware can perform the following tasks:

- Execute any code
- Make changes to the request and the response objects
- End the request-response cycle
- Call the next middleware in the stack

???

- Redux middleware solves different problems than Express middleware, but in a conceptually similar way
- In Redux, middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
- In Express, middleware provides a third-party extenion point between the raw request and the final request handler.

---

# Using Middleware

We can apply middleware in Express as follows:

```js
app.use(function(request, response, next) {
  // Do something here...
  // then move to next middleware...
  next();
});

app.use(function(request, response, next) {
  // ...
  response.send();
});
```

The call to `next()` is how we move onto the next piece of middleware, until we're finally ready to respond back to the client and call `response.send()` in the last middleware.

???

- Once `response.send()` is called you can’t apply more middleware
- You can also specify a route for a first argument of `.use()` to only run the middleware function on that route, otherwise it will run on for all requests

---

# Built-in Middleware

The only middleware function that ships with Express 4.x+ is `static()`. This function makes it possible to serve static assets in your app:

```js
// Serve files from the "public" dir:
app.use(express.static("public"));
```

Try replacing your call to `app.get('/', ...)` with this in your Express app. Be sure to add a `public` directory with an `index.html` file in it. What do you see in your browser now?

???

- The static middleware will serve everything under the public folder

---

# Exercise 2

Before we go further with middleware, let's pause an build out the client side of our app. In your `index.html` file, add a button (which you will use to asynchronously retrieve quotes).

Also create `main.js` file in your `public` directory and include it in your `index.html` file. Inside of `main.js`, use `fetch` to grab your quotes on JSON when the button is clicked.

Lastly, append all the quotes and their authors to the DOM after the `fetch` Promise resolves successfully.

???

Probably want to share this with the students to save time...

```js
function appendQuote(quote) {
  const blockquote = document.createElement("blockquote");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute(
    "data-quote",
    quote.name.replace(/\s+/g, "-").toLowerCase()
  );
  deleteButton.textContent = "Delete";
  blockquote.textContent = `"${quote.text}" — ${quote.name} `;
  blockquote.appendChild(deleteButton);
  container.appendChild(blockquote);
}
```

---

class: center, middle

.large[
Logging, two ways!
]

---

# Exercise 3

Finish writing this middleware knowing that we want to log in this format: `GET / 200 15 ms`

```js
function diyLogger(request, response, next) {
  const start = +new Date();
  const stream = process.stdout;
  const { url, method } = request;
  const { statusCode } = response;

  response.on("finish", function() {
    // ...what goes here?
  });

  next();
}
```

Call `app.use()` with your logger in the appropriate place too.

???

- The response object has event listeners: `response.on()`

---

# Exercise 4

Now let's try adding a third-party (more fully-featured!) logger.

Install **[morgan](https://github.com/expressjs/morgan)**, add the middleware to your app, and try some different log formats.

---

template: inverse

# Parsing Requests

---

# Dynamic Routes

Like with React Router, we can add route parameters:

```js
app.get("/quotes/:name", function(request, response) {
  response.send(request.params.name);
});
```

What do you see in your browser now when you navigate to `/quotes/someone`?

???

- Query string parameters are added to `request.query` object as properties too

---

# Exercise 5

Finish writing the route handler for `/quotes/:name`:

```js
app.get('/quotes/:name', function(request, response) {
  const { name } = request.params;
  const slug = name.replace(/\s+/g, '-').toLowerCase();

  // What array method can you use on the quotes array to return
  // the first object in the array with a matching name?

  if (/* there's no match... */) {
    response.status(404).json('That person isn\'t quote-worthy.');
  } else {
    response.send(/* the quote object */);
  }
});
```

---

# POST Requests

Time to add some new quotes to our app.

Doing this in our Express app will be similar to sending `GET` requests, but we'll use a `POST` request instead.

_But first, some initial set-up..._

---

# Submit Form

First, we'll need a form to send `POST` requests to our server from the client:

```html
<h2>Submit a Quote</h2>
<form id="create-quote">
  <label for="text">Quote Text</label>
  <input type="text" id="text" name="text">
  <label for="name">Speaker Name</label>
  <input type="text" id="name" name="name">
  <button type="submit">Create Quote</button>
</form>
```

---

# Event Handler

In our client-side JS, you'll also need to listen for the `submit` event on the form:

```js
const createQuoteForm = document.getElementById("create-quote");

createQuoteForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(createQuoteForm);
  const newQuote = {};

  for ([key, value] of formData.entries()) {
    newQuote[key] = value;
  }

  // Now use fetch to send a post request to finish the job...
});
```

---

# Exercise 6

Before we handle the `POST` request in Express, we'll need a way to send that request from the client to our server.

Inside of the submit event handler, use `fetch` to send a `POST` request. You'll need to send it to the `/quotes` route.

**Note**: You will also need to supply some request options in the form of an object as a second argument to `fetch`. You'll want to specify that the `method` is `POST`, set `headers` for the `Content-Type` (JSON), and set the `newQuote` object as the `body` (use `JSON.stringify()`).

---

# POST Requests

Now we finally get to handle the `POST` request we're sending from the client. First, we'll need some middleware to parse the JSON body of the incoming request:

```js
npm install --save body-parser
```

Now add this to your Express app:

```js
const bodyParser = require("body-parser");

app.post("/quotes", bodyParser.json(), function(request, response) {
  const newQuote = request.body;
  // Add your new quote to the quotes array
  // Then send back a 201 status
  // And also send the new quote as JSON in the response
});
```

---

# Exercise 7

Now figure out how to finish writing the route handler for the `POST` request.

Once you've finished that, jump back to your client-side JS and take the JSON response you get back from the server to append your new quote to the DOM.

Improve UX by clearing out the form inputs after the response comes back too!

---

# Remove a Quote

The last bit of functionality will be to delete individual quote from the list. We'll submit our request from the client like this:

```js
const container = document.getElementById("quotes");

container.addEventListener("click", function(event) {
  const clickedEl = event.target;

  if (clickedEl.tagName === "BUTTON") {
    const name = clickedEl.getAttribute("data-quote");

    fetch(`http://localhost:3300/quotes/${name}`, {
      method: "DELETE"
    }).then(() => {
      const blockquote = clickedEl.parentNode;
      blockquote.parentNode.removeChild(blockquote);
    });
  }
});
```

---

# DELETE Requests

Not surprisingly, you'll handle a `DELETE` request like this in Express:

```js
app.delete(function(request, response) {
  // Remove the quote from the quotes array
  // Send back the 200 status with the response
});
```

---

# Exercise 8

Finish writing the route handler for the `DELETE` request.

---

# Bonus Round: Clean-up

There's a way we can consolidate route code so that we're not making isolated calls to HTTP verb-related Express methods on the same routes.

Also, the `index.js` file in our Express app is getting a bit messy. Typically, you wouldn't define all of your routes for an app in this top-level file. There's a built-in solution in Express for that as well.

_Let's do some refactoring..._

---

# Use app.route()

Right now we have this in our app:

```js
app.get("/quotes" /* handler */);
app.post("/quotes" /* handler */);
app.get("/quotes/:name" /* handler */);
app.delete("/quotes/:name" /* handler */);
```

But we can use `app.route()` to consolidate our route handling with chaining:

```js
app
  .route("/quotes")
  .get(/* handler */)
  .post(/* handler */);

app
  .route("/quotes/:name")
  .get(/* handler */)
  .delete(/* handler */);
```

---

# Exercise 9

Refactor your route-related code to use `app.route()`.

---

# Routes in a Module

It would also be nice to get all of the route handling code out of `index.js` into a dedicated module for quotes.

Create a `quotes.js` file in your Express app and add:

```js
const express = require("express");
const bodyParser = require("body-parser");

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
const quoteRoutes = require("./quotes");

// ...

app.use("/quotes", quoteRoutes);
```

And move all of the `app.route()` calls `quotes.js`.

---

# Exercise 10

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
- Social media platforms (the witter sort-of-REST-ish API was a way to combat rogue API implementations)
- Cloud computing (Amazon S3 launched in 2006 and initially didn't have a GUI, just a RESTful API)

---

# How REST Works

REST defines a type of architecture where **resources**, **identifiers** (URIs), and **actions** (HTTP verbs) are all we need to interact with resources hosted on the web.

In other words, HTTP verbs provide semantic intention for the actions we want to take on resources, and URIs help us know where to find them.

Taken together, REST enabled us to use the web as a **distributed application plaform** whose **linked resources** communicate by **exchanging representations of resource state**.

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

# Exercise 11

In small groups or pairs, you'll be assigned one of the following topics to research (with respect to how it relates to REST) and deliver a short presentation to class on your findings:

- Data versus Resources versus Representations in REST
- State in REST: The idea of "statelessness" and the difference between resource state and application state
- The Richardson Maturity Model and where "hypermedia as an engine of application state" (HATEOAS) comes into play
- Safety and idempotence of HTTP verbs used in REST APIs

???

**Data v. Resources v. Representations:**

- Resource: a document, a row in a database, the results of running an algorithm, etc. (anything that can be streamed as bits)
- Splitting an app into resources increases its surface area
- Representation: any useful information about the state of the resource
- Representations also provide levers of state (the next possible state)
- Representations help capture the current or intended sate of a resource (with metadata) (we represent with JSON)

**State in REST:**

- Statelessness: request happen in isolation of each other and contain all the info they necessary to get what's needed from the server
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

# What We've Learned

- How to set up a basic Express app
- How to add middleware to Express
- How to parse HTTP requests set to the Express server
- What REST is, and why it's important

---

template: inverse

# Questions?

{% endhighlight %}

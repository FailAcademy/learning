---
layout: slidedeck
title: Creating a Web Server with Express I Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Creating a Web Server with Express I

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Install and create an Express app
2.  Create a "Hello World" server using Express
3.  Create an Express middleware

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

Think of every HTTP request or response as an **envelope**.

What's on the envelope is information about where it should go (the **path**), a description of what's inside (some **headers**), what we want done to the contents of the envelope when it gets to its destination (the **HTTP verb**), or what happened to it during its trip (the **status code**).

What's inside the envelope is the actual message/document (the **body**).

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
- If a resource doesn't have a URI then it's not a resource (it's likely just information about another resource)
- An **addressable** application exposes interesting aspects of its data set as resources, and exposes URIs for all of the resources it may conceivably serve

???

- URIs don't belong specifically to HTTP, but HTTP uses them
- Uniform Resource Identifier vs. Locator: every URL is URI, every URI on the web is a URL, but not all URIs are URLs
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

Create a new directory with an `index.js` file, and then run through `npm init -y` in that directory.

Once that's done, run:

```bash
npm install --save express
```

More on [Express installation instructions here](https://expressjs.com/en/starter/installing.html).

---

# Initial Set-up

Let's also use nodemon with our app too:

```bash
npm install --save-dev nodemon
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
const express = require('express');
const app = express();
const PORT = 3300;

app.get('/', (request, response) => {
  response.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

???

Talk through every line of this code snippet with the students before you move on!

Don't forget to address what `process.env.PORT` is in this context. Tie it back to what they saw in the node lesson.

---

# Does It Work?

Start the server in one Terminal tab:

```bash
npm start
```

Then run the following in another Terminal tab:

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
app.get('/', (request, response) => {
  // Express method:
  // response.send('Hello, world!');

  // Almost-equivalent code with regular Node:
  response.write('Hello, world!');
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
    name: 'Fred Brooks',
    text: 'Nine people can’t make a baby in a month.',
  },
  {
    name: 'Paul Ford',
    text: 'A computer is a clock with benefits.',
  },
  {
    name: 'Linus Torvalds',
    text: 'Talk is cheap. Show me the code.',
  },
];

app.get('/', (request, response) => {
  response.send(quotes);
}); // ...now run `curl -i` again
```

---

# Add a Route

We can respond to request on more than just the root-level URI too (thankfully!). Create a dedicated route to send our quotes JSON back on:

```js
app.get('/quotes', (request, response) => {
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
app.use((request, response, next) => {
  // Do something here...
  // then move to next middleware...
  next();
});

app.use((request, response, next) => {
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
app.use(express.static('public'));
```

Try replacing your call to `app.get('/', ...)` with this in your Express app. Be sure to add a `public` directory with an `index.html` file in it. What do you see in your browser now?

???

- The static middleware will serve everything under the public folder

---

# Exercise 2

Before we go further with middleware, let's pause and build out the client side of our app. In your `index.html` file, add a button (which you will use to asynchronously retrieve quotes).

Also create `main.js` file in your `public` directory and include it in your `index.html` file. Inside of `main.js`, use `fetch` to grab your quotes in JSON format when the button is clicked.

Lastly, append all the quotes and their authors to the DOM after the `fetch` Promise resolves successfully.

???

Probably want to share this with the students to save time...

`index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Dev Quotes R Us</title>
  </head>
  <body>
    <h1>Dev Quotes R Us</h1>

    <button type="button" id="get-quotes">Get Some Quotes</button>
    <div id="quotes"></div>

    <h2>Submit a Quote</h2>
    <form id="create-quote">
      <label for="text">Quote Text</label>
      <input type="text" id="text" name="text" />
      <label for="name">Speaker Name</label>
      <input type="text" id="name" name="name" />
      <button type="submit">Create Quote</button>
    </form>

    <script type="text/javascript" src="main.js"></script>
  </body>
</html>
```

`main.js`:

```js
const container = document.getElementById('quotes');
const getQuotesButton = document.getElementById('get-quotes');

function appendQuote(quote) {
  const blockquote = document.createElement('blockquote');
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute(
    'data-quote',
    quote.name.replace(/\s+/g, '-').toLowerCase(),
  );
  deleteButton.textContent = 'Delete';
  blockquote.textContent = `"${quote.text}" — ${quote.name} `;
  blockquote.appendChild(deleteButton);
  container.appendChild(blockquote);
}

getQuotesButton.addEventListener('click', () => {
  fetch('/quotes')
    .then(response => response.json())
    .then(quotes => {
      quotes.map(appendQuote);
    });
});
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
  const startDate = new Date();
  const startTime = startDate.getTime();
  const { url, method } = request;
  const { statusCode } = response;

  response.on('finish', () => {
    // ...what goes here?
  });

  next();
}
```

Call `app.use()` with your logger in the appropriate place too.

???

- The response object has event listeners: `response.on()`

Solution:

```js
function diyLogger(request, response, next) {
  const startDate = new Date();
  const startTime = startDate.getTime();
  const { url, method } = request;
  const { statusCode } = response;

  response.on('finish', () => {
    const finishDate = new Date();
    const finishTime = finishDate.getTime();
    const timeDelta = finishTime - startTime;

    console.log(`${method} ${url} ${statusCode} ${timeDelta}ms`);
  });
  next();
}

app.use(diyLogger);
```

---

# What We've Learned

- How to set up a basic Express app
- How to add middleware to Express

---

template: inverse

# Questions?

{% endhighlight %}

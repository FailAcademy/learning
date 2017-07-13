---
layout: lesson
title: Creating a Web Server with Express
slides: ['_slides/week-03/03-web-servers-express.md']
lesson_date: 2017-07-19
---

## Pre-Work

Please review the [Express documentation](http://expressjs.com/) in preparation for this lesson.

Set up Chrome's developer tools Network tb to help us debug our application:
Make sure you have the following 6 columns visible:

|  Name   |  Method   |  Status   |  Type   |  Size   |  Time   |
|---------|:----------|:----------|:--------|:--------|:--------|

*Right click on the column headers to modify which ones are visible.*

---

## Learning Objectives

- Serve an `index.html` file to a web browser from Express
- Use Chrome's network tab to inspect HTTP request/response.
- Define what a "RESTful" architectural style is application development.
- Use RESTful methods to communicate between an Express server and a web browser.
- Use the HTTP verbs `GET`, `POST`, and `DELETE` in the context of REST.
- Setup RESTful endpoints using Express.
- Send and receive JSON from a client to Express, using `fetch`.
- Use Express middleware for logging and processing requests.

---

## Keywords

- HTTP
- REpresentational State Transfer (REST)
- Route
- Endpoint
- fetch
- Cross-Origin Resource Sharing (CORS)
- Status code
- Middleware
- Response
- Request

---

## Exercise 1

Before we begin creating an Express web server, in pairs draw a diagram of a client-server application. Be sure to diagram the lines of communication, and be as detailed as possible. Label as many things as you can.

---

## Exercise 2

Before we go further with middleware, let's pause an build out the client side of our app. In your `index.html` file, add a button (which you will use to asynchronously retrieve quotes).

Also create `main.js` file in your `public` directory and include it in your `index.html` file. Inside of `main.js`, use `fetch` to grab your quotes on JSON when the button is clicked.

Lastly, append all the quotes and their authors to the DOM after the `fetch` Promise resolves successfully.

---

## Exercise 3

Finish writing this middleware knowing that we want to log in this format: `GET / 200 15 ms`

```js
function diyLogger(request, response, next) {
  const start = +new Date();
  const stream = process.stdout;
  const { url, method } = request;
  const { statusCode } = response;

  response.on('finish', function () {
    // ...what goes here?
  });

  next();
}
```

Call `app.use()` with your logger in the appropriate place too.

---

## Exercise 4

Now let's try adding a third-party (more fully-featured!) logger.

Install **[morgan](https://github.com/expressjs/morgan)**, add the middleware to your app, and try some different log formats.

---

## Exercise 5

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

## Exercise 6

Before we handle the `POST` request in Express, we'll need a way to send that request from the client to our server. 

Inside of the submit event handler, use `fetch` to send a `POST` request. You'll need to send it to the `/quotes` route. 

**Note**: You will also need to supply some request options in the form of an object as a second argument to `fetch`. You'll want to specify that the `method` is `POST`, set `headers` for the `Content-Type` (JSON), and set the `newQuote` object as the `body` (use `JSON.stringify()`).

---

## Exercise 7

Now figure out how to finish writing the route handler for the `POST` request.

Once you've finished that, jump back to your client-side JS and take the JSON response you get back from the server to append your new quote to the DOM.

---

## Exercise 8

Finish writing the route handler for the `DELETE` request.

---

## Exercise 9

Refactor your route-related code to use `app.route()`.

---

## Exercise 10

Our app won't work until we refactor what we just moved into `./quotes.js`.

First, we won't call `.route()` on the `app` object (it doesn't exist here), we'll call it on the instance of the router we instantiated in this file (`router`).

Second, the path argument passed into `.route()` will be relative to where it's mounted in `index.js`. What do we need to change in the path argument to reflect this?

Don't forget to move your quotes array into `quotes.js` too!

---

## Exercise 11

In small groups or pairs, you'll be assigned one of the following topics to research (with respect to how it relates to REST) and deliver a short presentation to class on your findings:

- Data versus Resources versus Representations in REST
- State in REST: The idea of "statelessness" and the difference between resource state and application state
- The Richardson Maturity Model and where "hypermedia as an engine of application state" (HATEOAS) comes into play
- Safety and idempotence of HTTP verbs used in REST APIs

---

## Lab Activity

Remaining lab time today will be spent working on the second half of Project 1.

---

## Additional Resources

HTTP resources on MDN:

- [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

Roy Fielding's original dissertation on REST:

- [Architectural Styles and the Design of Network-based Software Architectures](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)

More on REST:

- [REST, where’s my state?](https://ruben.verborgh.org/blog/2012/08/24/rest-wheres-my-state/)
- [Richardson Maturity Model: steps toward the glory of REST](https://martinfowler.com/articles/richardsonMaturityModel.html)
- [Scotch.io: Build a RESTful API with Express](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)
- [Learn REST - A Tutorial](http://www.restapitutorial.com/)

High-level overviews of other protocols, etc. discussed during the lesson:

- [Understanding RPC Vs REST For HTTP APIs](https://www.smashingmagazine.com/2016/09/understanding-rest-and-rpc-for-http-apis/)
- [An Introduction to WebSockets](http://blog.teamtreehouse.com/an-introduction-to-websockets)

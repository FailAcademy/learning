---
layout: lesson
title: Creating Web Servers with Express I
slides: ['_slides/month-02/01-web-servers-express-I.md']
lesson_date: 2019-07-11
---

## Pre-Work

Please review the [Express documentation](http://expressjs.com/) in preparation for this lesson.

Set up Chrome's developer tools to help us debug our application:
Make sure you have the following 6 columns visible in the network tab of Chrome's dev tools:

| Name | Method | Status | Type | Size | Time |
| ---- | :----- | :----- | :--- | :--- | :--- |


_Right click on the column headers to modify which ones are visible._

---

## Learning Objectives

- Serve an `index.html` file to a web browser from Express
- Use Chrome's network tab to inspect HTTP request/response.
- Use Express middleware for logging and processing requests.

---

## Keywords

- HTTP
- Endpoint
- Middleware
- Response
- Request

---

## Exercise 1

Before we begin creating an Express web server, in pairs draw a diagram of a client-server application. Be sure to diagram the lines of communication, and be as detailed as possible. Label as many things as you can.

---

## Exercise 2

Before we go further with middleware, let's pause an build out the client side of our app. In your `index.html` file, add a button (which you will use to asynchronously retrieve quotes).

Also create `main.js` file in your `public` directory and include it in your `index.html` file. Inside of `main.js`, use `fetch` to grab your quotes in JSON format when the button is clicked.

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

  response.on('finish', function() {
    // ...what goes here?
  });

  next();
}
```

Call `app.use()` with your logger in the appropriate place too.

---

## Additional Resources

HTTP resources on MDN:

- [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)


High-level overviews of other protocols, etc. discussed during the lesson:

- [Understanding RPC Vs REST For HTTP APIs](https://www.smashingmagazine.com/2016/09/understanding-rest-and-rpc-for-http-apis/)
- [An Introduction to WebSockets](http://blog.teamtreehouse.com/an-introduction-to-websockets)

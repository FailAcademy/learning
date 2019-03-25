---
layout: lesson
title: Creating Web Servers with Express II
slides: ['_slides/month-02/04-web-servers-express-II.md']
lesson_date: 2019-04-18
---

## Learning Objectives

- Use the HTTP verbs `GET`, `POST`, and `DELETE` in the context of REST.
- Setup RESTful endpoints using Express.
- Send and receive JSON from a client to Express, using `fetch`.
- Use Express middleware for processing requests.

---

## Keywords

- `fetch`
- Route

---

## Exercise 1

Setting application configuration variables.

Refactor:

```
const PORT = 3300;
```

To be:

```
app.set('PORT', process.env.PORT || 3300);
const port = app.get('PORT');
```

- Why is it useful to set configuration values like this?
- What is `process.env` ?

---

## Exercise 2

Finish writing the route handler for `/quotes/:name`:

```js
app.get('/quotes/:name', function(request, response) {
  const { name } = request.params;

  // What array method can you use on the quotes array to return
  // the first object in the array with a matching name?

  if (/* there's no match... */) {
    response.status(404).json('That person isn\'t quote-worthy.');
  } else {
    response.send(/* the quote object */);
  }
});
```

## Exercise 3

Before we handle the `POST` request in Express, we'll need a way to send that request from the client to our server.

Inside of the submit event handler, use `fetch` to send a `POST` request. You'll need to send it to the `/quotes` route.

**Note**: You will also need to supply some request options in the form of an object as a second argument to `fetch`. You'll want to specify that the `method` is `POST`, set `headers` for the `Content-Type` (JSON), and set the `newQuote` object as the `body` (use `JSON.stringify()`).

---

## Exercise 4

Now figure out how to finish writing the route handler for the `POST` request.

Once you've finished that, jump back to your client-side JS and take the JSON response you get back from the server to append your new quote to the DOM.

---

## Additional Resources

High-level overviews of other protocols, etc. discussed during the lesson:

- [Understanding RPC Vs REST For HTTP APIs](https://www.smashingmagazine.com/2016/09/understanding-rest-and-rpc-for-http-apis/)
- [An Introduction to WebSockets](http://blog.teamtreehouse.com/an-introduction-to-websockets)

---
layout: lesson
title: Creating a Web Server with Express
lesson_date: 2017-07-19
---

## Pre-Work

Please review the [Express documentation](http://expressjs.com/) in preparation for this lesson.

Set up Chrome's developer tools Network tb to help us debug our application:
Make sure you have the following 6 columns visible:

|  Name   |  Method   |  Status   |  Type   |  Size   |  Time   |
|---------|:----------|:----------|:--------|:--------|:--------|

*(Right click on the column headers to modify which ones are visible)*

---

## Learning Objectives

- Serve an `index.html` file to a web browser from Express
- Use chrome's network tab to inspect HTTP request/response.
- Define what a "RESTful" architectural style is application development.
- Use RESTful methods to communicate between an Express server and a web browser.
- Understand REST and the methods `GET`, `POST`.
- Setup RESTful endpoints using Express.
- Use fetch on the client to get data from the server.
- Use CORS to share resources across domains.
- Use Express middleware for processing requests.
- Send and receive JSON from a client to Express, using `fetch`.

---

## Keywords

- HTTP
- REST
- Endpoint
- fetch
- CORS
- Status Code 
- Middleware 
- `req`
- `res`

---

## Exercise 1

Before we begin creating an Express Web Server, in a group of 2 or more, draw a diagram of a 
client-server application. Be sure to diagram the lines of communication, and be as detailed as possible. Label as 
many things as you can.

---

## Exercise 2

*How do we serve static files using Express?*

You've set up a simple Express server, now modify it to serve an `index.html` file to connected browsers.

There a a number of ways to accomplish this. Check the [Express documentation](http://expressjs.com/)  for suggestions
about how to accomplish this task.

---

## Exercise 3

Set up an Express *endpoint* using Express' built in request handler syntax.
Serve a response *and* the correct status code back to the browser.

- Define the term "endpoint" in the context of Express.
- What is the correct status code for a successful response?
- How can we use our browser's network tab to debug our endpoint?

---

## Exercise 4

*How does Express middleware work?*

Send a request through 2 or more Express middleware. `console.log` something in each one.

- Does the order in which you write you middlware matter?
- Suggest some possible use-cases for Express middleware.
- What role does the `next()` function play?
- Are Express middleware async?

---

## Exercise 5

**Serving JSON**

Set up an Express endpoint to serve JSON content!

- How do we set up express to serve JSON without using the file system API?

---

## Exercise 6

**Connect Express to you project application**

Establish a connection between your project's front-end to your new Express backend.

- Can you make requests from a site on one domain to a server on another?

---

## Lab Activity

In today's lab, you will begin converting your REDit project to be a full-stack app&mdash;finally connecting the client and server.
You will create a RESTful backend using Express, to communicate data to your client through endpoints.

In your client application, use [Redux-Thunk](https://github.com/gaearon/redux-thunk) to help you handle async requests.

---

## Additional Resources

[HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) on Wikipedia.

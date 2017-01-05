---
layout: lesson
title: Introducing Node
slides: ['_slides/week-03/01-introducing-node.md']
lesson_date: 2017-01-23
---

## Pre-Work

Having a bit of background will be helpful context for what we undertake in this lesson.

Please read this article: ["Why the Internet Only Just Works"](http://fermatslibrary.com/s/why-the-internet-only-just-works).
When you're finished please review the following section of the Node.js docs before class:

- [`http.request`](https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_http_request_options_callback).

You'll need to know what the **port** and **protocol** options are for. Try running the Example code in this section of the docs, and see what happens.

---

## Learning Objectives

- Explain the differences between writing code for the client versus writing code for the server.
- Describe the popular protocols of the web: HTTP, WebSockets, FTP, SSH, DNS, POP
- Explain why Node is important and how it's being used.
- Write and run a simple "Hello, world!" HTTP Server with Node.
- Create a "Hello, world!" HTTP server using Express.
- Set up and deploy a Node web server using Express.
- Write HTTP request / response handlers, send data from the client to the server.
- Debug a running NodeJS Web Server
- Deploy a Node Web Server to the cloud using a free hosting provider.

---

## Keywords

- Server
- Client
- Request
- HTTP
- Node

---

## Exercise 1

Let's debug an example Node Web Server by running the server with the `debug` flag.
We'll also use some new tools that allow us to debug code running inside of Node,
in our web browser in parallel to our client side code!

---

## Exercise 2

In a small group, attempt to implement a web server using one of the following Node web server frameworks:

1. [**Hapi**](http://hapijs.com/)
2. [**Koa**](http://koajs.com/)
3. [**Sails**](http://sailsjs.org/)

---

## Exercise 3

When you've successfully created a Web Server using one of the frameworks mentioned in the last exercise
deploy your site to the cloud using [Now](https://zeit.co/now)

---

## Additional Resources

- [What is a Web Server?](https://developer.mozilla.org/en-US/Learn/Common_questions/What_is_a_web_server) <br/>
- REST (Representational State Transfer): [Roy Fielding's doctoral dissertation](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)
- [About Node.js](https://nodejs.org/en/about/)
- [Express homepage](https://expressjs.com/)
- [Node Playbook](https://github.com/HiFaraz/node-playbook/blob/master/README.md)
- [NodeSchool](http://nodeschool.io/)

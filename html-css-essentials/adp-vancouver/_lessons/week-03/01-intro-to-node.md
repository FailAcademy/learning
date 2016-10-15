---
layout: lesson
title: Introducing Node
slides: ['_slides/week-03/01-intro-to-node.md']
lesson_date: 2016-10-11
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
- Make web requests to third-party web servers using Express.
- Define what a "RESTful" architectural style is application development.
- Use RESTful methods to communicate between an Express server and a web browser.
- Deploy a Node Web Server to the cloud using a free hosting provider.

---

## Keywords

- Server
- Client
- Request
- API
- REST
- HTTP
- Node
- Express

---

## Exercise 1

Read through [this article](https://webhostinggeeks.com/blog/what-are-web-servers-and-why-are-they-needed/).

When you're finished, try to answer the following questions with each other:

- Where does your web application code run, in the diagram on the previous slide?
- Does a Web Server need to run on it's own computer system? Can a single system
host multiple Web Servers?
- How do servers communicate with clients & clients with servers?
- What is HTTP?

---

## Exercise 2

**Clone this repository**:

- https://github.com/redacademy/adp-node-server-intro.git

Open `Question.md` and answer each of them.

---

## Exercise 3

Let's debug our example Node Web Server by running the server with the `debug` flag.
We'll also use some new tools that allow us to debug code running inside of Node,
in our web browser in parallel to our client side code!

---

## Exercise 4

In a small group, attempt to implement a web server using one of the following Node web server frameworks:

1. [**Hapi**](http://hapijs.com/)
2. [**Koa**](http://koajs.com/)
3. [**Sails**](http://sailsjs.org/)

---

## Exercise 5

When you've successfully created a Web Server using one of the frameworks mentioned in the last exercise
deploy your site to the cloud using [Surge](http://surge.sh/), or [Now](https://zeit.co/now)

---

## Additional Resources

- [What is a Web Server?](https://developer.mozilla.org/en-US/Learn/Common_questions/What_is_a_web_server) <br/>
- REST (Representational State Transfer): [Roy Fielding's doctoral dissertation](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)
- [About Node.js](https://nodejs.org/en/about/)
- [Express homepage](https://expressjs.com/)
- [Node Playbook](https://github.com/HiFaraz/node-playbook/blob/master/README.md)
- [NodeSchool](http://nodeschool.io/)

---
layout: lesson
title: Introducing Node
slides: ['_slides/week-03/01-intro-to-node.md']
lesson_date: 2016-10-11
---

## Learning Objectives

- Write and run a simple 'hello world' HTTP Server in Node
- Distinguish between Client and Server
- Create a 'hello world' HTTP server using Express
- Set up and deploy a Node Web Server using Express
- Write HTTP request handling logic using Express
- Make Web requests to 3rd party Web Servers using Express (APIs)
- Understand the term 'REST-ful'
- Use 'REST-ful' methods to communicate with your Express Server from a Web Browser

---

## Pre-Work

Knowing about HTTP is important but not part of this course.
To know more about HTTP you can start by looking at the documentation for
**http.request** [here](https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_http_methods). 

*(Scroll down the page to find it)*<br /><br />
You'll need to know what the **port** and **protocol** options are for.
Check out the *sample code*. Run it and experiment with it.

---

## Keywords

- server
- client
- request
- API
- REST
- HTTP
- Node
- Express

---

## Exercise 1

Read [this Article](https://webhostinggeeks.com/blog/what-are-web-servers-and-why-are-they-needed/).

When you're finished, try to answer the following questions with each other:
- Where does your web application code run, in the diagram on the previous slide?
- Does a Web Server need to run on it's own computer system? Or, Can a single system
host multiple Web Servers?
- How do servers communicate with clients & clients with servers?
- What is HTTP?

---

## Exercise 2

**Clone this repository**: <br/>
https://github.com/redacademy/adp-node-server-intro.git

Open **Question.md** and answer each of them.

---

## Exercise 3

We will be adding the following to our index.js:

```js
var fs = require('fs');
var _ = require('lodash');
!(have to install lodash)
var users = [];
```

Research why we are adding these and we will talk about it in class.

---

## Exercise 4

In groups of two, attempt to implement a Web Server using one of the following Node Web Server Frameworks:

1. [**Hapi**](http://hapijs.com/)
2. [**Koa**](http://koajs.com/)
3. [**Sails**](http://sailsjs.org/)

---

## Resources

- Mozilla Article: [What is a Web Server?](https://developer.mozilla.org/en-US/Learn/Common_questions/What_is_a_web_server) <br/>
- REST (Representational State Transfer): Roy Fielding's [doctoral dissertation](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)
- About [Node.js](https://nodejs.org/en/about/)
- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework
- [Node Playbook](https://github.com/HiFaraz/node-playbook/blob/master/README.md)
- [NodeSchool](http://nodeschool.io/)

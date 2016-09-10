---
layout: slidedeck
title: Building Web Servers With JavaScript Slides

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
# Building Web Servers With JavaScript

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Distinguish between Client and Server
2. Introduce Node & write and run a simple 'hello world' HTTP Server
3. Install and setup Express.js
4. Create a 'hello world' Server using Express
6. Create a RESTful interface to an Express Server
7. Explore the features of Express

---
template: inverse

#What is a Web Server?

---

# Definitions

1. **Server**: A person or thing that provides a service or commodity, in particular.
2. **Web**: A network of fine threads constructed by a spider from fluid secreted by its spinnerets, used to catch its prey.

---
# Vocabulary

#### **Web Server** = **HTTP Server** = **Server**

**Server** is a general term used to describe some computer running software that can respond to external
requests for information it has access to.

- We'll use the term **Server** and **Web Server** interchangeably.
- In general a *Web Server* will always use *HTTP* to deliver information to *Clients*.
- In this course we'll also learn about the *Websocket Protocol*.


---
class: center, middle

![Application Architecture](/public/img/slide-assets/server-diagram.svg)

---
template: inverse

# Why do I need a Web Server?

---
# Exercise 1

Read [this Article](https://webhostinggeeks.com/blog/what-are-web-servers-and-why-are-they-needed/).
When you're finished, try to answer the following questions with each other:
- Where does your web application code run, in the diagram on the previous slide?
- Does a Web Server need to run on it's own computer system? Or, Can a single system
host multiple Web Servers?
- How do servers communicate with clients & clients with servers?
- What is HTTP?

---
template: inverse

<img style="display:block; margin:0 auto;" src="https://nodejs.org/static/images/logo-header.png">

---

# Node

[https://nodejs.org/en/](https://nodejs.org/en/)

We'll be working with a technology called **Node** throughout this course. We'll be using it to
power our Web Servers and our local development environment, and we'll use powerful tools
built by the open-source community using it.

We've already been using it to create our React application!
It's the technology behind Webpack, and it can do so much more!

---
# What is Node?

"Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world."

Node is a bridge between your operating system and JavaScript! Operating system level programs can take advantage
of all the hardware that modern computers have to offer. Meaning developers who can write JavaScript can control everything (not just Web Pages)!

---

# Why Node?

Node gives us access to our computer's Operating System via JavaScript. If we're going to create Web Servers, the programming language we'll need to use has to have access to our operating system.

- What computer hardware will our JavaScript code utilize to create a Web Server?
- What is a 'runtime' ?
- How is this different from JavaScript code which is executed by a Web Browser?


---

# A JavaScript Web Server

```js
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
```

---

# Exercise 2

**Clone this repository**: <br/>
https://github.com/redacademy/adp-node-server-intro.git

Open **Question.md** and answer each of them.

---
# Exercise 3

In groups of two, attempt to implement a Web Server using one of the following Node Web Server Frameworks:

1. [**Hapi**](http://hapijs.com/)
2. [**Koa**](http://koajs.com/)
3. [**Sails**](http://sailsjs.org/)
4. [**Express**](https://expressjs.com/)

---

template: inverse

# Express

---
# Start using Express

Install and set up Express in a new Node project. The group who chose to explore Express in the previous exercise
will provide guidance to the rest of the class.

---

template: inverse

# Routing in Express

---
# Routing
Run:
```
npm init -y
npm i -S express
touch index.js
```
Paste in index.js:
```js
var express = require('express');
var app = express()

app.get('/', function (req, res) {
  res.send("hello, world!")
})
```
```js
var server = app.listen(3000, function() {
  console.log("server running at http://localhost:" + server.address().port)
})
```

---
#update package.json
```js
"start": "node index.js"
```
---
# nodemon
Annoying when you have to stop the server whenever we make a change so...
```
npm i -D nodemon
```
Will automatically restart the server when changes are made

Create a dev script in your package.json "dev": "nodemon index.js"
```
npm run dev
```
---
##Exercise 4
We will be adding the below to our index.js
```
var fs = require('fs');
var _ = require('lodash');
!(have to install lodash)
var users = [];
```
Research why we are adding these and we will talk about it in class.


---

#User model
```
fs.readFile('users.json', {encoding: 'utf8'}, function (err, data) {
  if (err) throw err
```
```
  JSON.parse(data).forEach(function (user) {
    user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
    users.push(user)
  })
})
```

---
#JSON
Go to github

Link to be decided.

---
#app.get
```
app.get('/', function (req, res) {
```
```
  var buffer = ''

  users.forEach(function (user) {
    buffer += '<a href="/' + user.username + '">' + user.name.full +
    '</a><br>'
  })
```
```
  res.send(buffer)
})
```

What happens when you click on the link now?
(Cannot GET)

---
#Dynamic

we need to dynamically load the url based on the username. We can do that by user  : and params.
```
app.get('/:username', function (req, res) {
  var username = req.params.username
  res.send(username)
})
```
---
# HTTP Verbs

So far we have been using GET that will let you modify data.

need body.parser (does exactly what it sounds like - it allows you to parse the body of the request)

---
# Put or Edit
```
app.put
```

---
# Delete
```
app.delete
```
{% endhighlight %}

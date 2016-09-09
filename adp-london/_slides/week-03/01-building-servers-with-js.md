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
2. Write and run a simple 'hello world' HTTP Server in Node
3. Install and setup Express.js
4. Create a 'hello world' Server using Express
6. Create a RESTful interface to and Express Server
7. Explore the features of Express

---
template: inverse

#What is a Web Server?

---

# Definitions

1. **Server**: A person or thing that provides a service or commodity, in particular.
2. **Web**: A network of fine threads constructed by a spider from fluid secreted by its spinnerets, used to catch its prey.

---
class: center, middle
# Vocabulary

#### Web Server = HTTP Server = Server

We'll use the term **Server** and **Web Server** interchangeably.
In general a **Web Server** will always use **HTTP** to deliver information to **Clients**.
In this course we'll also learn about the **Websocket Protocol**.


---
class: center, middle

![Application Architecture](/public/img/slide-assets/server-diagram.svg)

---
template: inverse

# Why do I need a Web Server?

---
# Exercise 1

Read [this Article].(https://webhostinggeeks.com/blog/what-are-web-servers-and-why-are-they-needed/)

When you're finished, find a partner and discuss Servers!

---
# Exercise 2

Clone this repository: <br/>
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

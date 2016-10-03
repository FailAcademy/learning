---
layout: slidedeck
title: Introducing Node Slides

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
3. Debug a Node Program
3. Install and setup Express.js
4. Create a 'hello world' Server using Express
6. Create a RESTful interface to an Express Server
7. Explore the features of Express

---
template: inverse

# What is a Web Server?

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
- In general, a *Web Server* uses *HTTP* to deliver information to *Clients*.


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
- How do servers communicate with clients & clients with servers?
- What is HTTP?

---

### Why do I need a web server?

The browser cannot handle all our needs on its own:

- A Browser cannot host your site
- The Browser does not have access to files on your computer
- A Browser cannot keep secrets
- A Browser should not access a database directly

Discuss with a partner why the browser is designed with these limitations.

---

template: inverse

<img style="display:block; margin:0 auto;" src="https://nodejs.org/static/images/logo-header.png">

---

# Node

Node acts as a bridge between your operating system and JavaScript.

In other words: JavaScript developers are no longer limited to the browser!

- How is Node different from JS in the browser?

---
class: center, middle

<img src="/public/img/slide-assets/OS Diagram.svg">

---

# A JavaScript Web Server

Copy the following code into a file named "server.js":

```js
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
}).listen(port);

console.log(`Server running @ localhost:${port}`);
```

Run this script using `node server.js`.

---

# Exercise 2

**Clone this repository**: <br/>
https://github.com/redacademy/adp-node-server-intro.git

Open **Question.md** and answer each of them.


---

template: inverse

# Debugging Node

---

# Debugging Node

Run the example http server using the command: <br/>
`node debug server.js`

```js
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
}).listen(port);

console.log(`Server running @ localhost:${port}`);
```



---

# Exercise 3

Let's debug our example Node Web Server by running the server with the `debug` flag.

We'll also use some new tools that allow us to debug code running inside of Node, in our web browser in parallel to our client side code!

**Try using these tools:**: <br/>
The Visual Studio Code Debugger. <br/>
[The Chrome Dev Tools debugger](https://mattdesl.svbtle.com/debugging-nodejs-in-chrome-devtools). <br/>
Another [Chrome Dev Tools debugger approach](https://blog.hospodarets.com/nodejs-debugging-in-chrome-devtools).


---

template: inverse

# Express

---

# Start using Express

Install and set up Express in a new Node project. The group who chose to explore Express in the previous exercise
will provide guidance to the rest of the class.

[Express installation instructions](https://expressjs.com/en/starter/installing.html).

---

# Using Express

Create a new Express App!

```shell
npm init -y
npm i -S express
touch index.js
```

Create a file called server.js and add the following code: <br/>

```js
const port = 3000;
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send("hello, world!");
});

const server = app.listen(3000, function() {
 console.log(`Server running @ localhost:${port}`);
});
```

---

# Start

Create an NPM script for running your app.

Inside of your `package.json` add the following: <br/>

```js
"scripts": {
  "start": "node index.js"
}
```

You can now call this script from the command line:

```shell
npm start
```

You can give your scripts any name you like. Try renaming the `start` script to something else.
Can you still run the script by name using the `npm` command?

---

# Nodemon

When developing Node applications, you'll have to restart the webserver after you make changes in your files.
Use the Nodemon tool to automate server restarts on file changes.

```shell
npm install --save-dev nodemon
```
Change your start script to use "nodemon" instead of "node".

```js
"scripts": {
  "start": "nodemon index.js"
}
```

---

template: inverse

# Routing in Express

---

# Routing

We've added a route to the base location ("/").

```js
app.get('/', function (req, res) {
  res.send("hello, world!");
});
```

Add two more routes to your Express app.
Demonstrate that you can route between the pages in the browser.

---

# Let's get some data

Add the following dependencies to your project:<br/>
```js
var fs = require('fs');
var _ = require('lodash');
var users = [];
```

Why we are adding these?

---

# The User Model

Use the modules you just installed to load some data from a `.json` file, on disk!


```js
// Read users.json from disk.
fs.readFile('users.json', {encoding: 'utf8'}, function (err, data) {
  if (err) throw err;
    // Parse the json file when Node has finished loading it.
    JSON.parse(data).forEach(function (user) {
      user.name.full =
        _.startCase(user.name.first + ' ' + user.name.last);

      users.push(user);
    });
    // End parse.
  });
});
```

** Where does this code belong, in our project?**

---

# JSON

Go to github

Link to be decided.

---

# app.get

```js
app.get('/', function (req, res) {
```

```js
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

# Dynamic

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

```js
app.put
```

---

# Delete

```js
app.delete
```
---

# Exercise 4

In groups of two, attempt to implement a Web Server using one of the following Node Web Server Frameworks:

1. [**Hapi**](http://hapijs.com/)
2. [**Koa**](http://koajs.com/)
3. [**Sails**](http://sailsjs.org/)


{% endhighlight %}

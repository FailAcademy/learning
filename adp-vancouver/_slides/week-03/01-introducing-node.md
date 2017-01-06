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
3. Debug a Node Program using VS Code


---
template: inverse

# What is a Web Server?

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

<img style="display:block; margin:0 auto;" src="https://nodejs.org/static/images/logo.svg">

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
const port = 80;

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

Create a static file server!

Use the Node Web Server you just created to serve up an HTML file (index.html) to connected clients.
- What modules will you need to accomplish this?
- What is the correct 'Content-Type' header to set on your response?

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

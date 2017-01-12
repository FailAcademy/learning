---
layout: slidedeck
title: Introducing Node Slides

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Introducing Node

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

- Debugging Node with VS Code

---
template: inverse

# What is Node?

---
class: center, middle

### Node was created in **2009**, and since then has become the driving force behind the widespread adoption of the **JavaScript** programming language as a tool for developing sophisticated software applications.

---

class: center, middle
<p style="text-align:center;">
  <img style="display:block; margin:0 auto;" src="https://vorba.ch/2012/nodejs-npm.png" alt="">
</p>

Node.js provides the minimum viable foundation to support the main Internet protocols, and OS interface.
#### Given its  low-level API, any reasonably complex application needs to make extensive use of libraries.

---

# Experienced Node Developers Know...

- How to structure an application using multiple 3rd party modules, and how to reliably judge the quality of a 3rd party module
- How to leverage the **Event Loop** and Node's **Async**, single-threaded nature (more on this to come!)
- How to use various Networking Protocols

---

template: inverse

# A Simple Node Application

---

# Building a TCP Service

**TCP & UDP** are the basic protocols of the internet. (nearly ) **All network communication on the internet is carried out by these 2 protocols.**

### Take a minute to [read this link](http://www.diffen.com/difference/TCP_vs_UDP), for a good description of the differences between TCP & UPD, and how they are used.

When you're finished, create a folder called `TCP_Service`. Inside the folder run the command `npm init`.

---

# Building a TCP Service

Your `package.json` should look like this:

```json
{
  "name": "intro-to-node-exercises",
  "version": "1.0.0",
  "description": "Learning Node @ Red Academy",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "MK <mackenzie@redacademy.com>",
  "license": "ISC"
}
```

## Why do we need this?

---

# Building a TCP Service
- **Create a file called `index.js`** <br/>

Use Node's built-in [`net` module](https://nodejs.org/api/net.html), 
to create a server which will handle incoming network connections (TCP/UDP).
```js
const net = require('net')
const server = net.createServer();

server.on('connection', handleConnection);

server.listen(9000, function() {
  console.log('server listening to %j', server.address());
});


function handleConnection() {
  // TODO: Handle connection!
}

```

.footnote[*Run this code by typing `node index.js`*]


---

# Building a TCP Service

In order to show when the **server** has recieved a connection from a **client**,
we'll need to add some code to the `handleConnection` callback.

```js
function handleConnection(socket) {
  const remoteAddress = `${socket.remoteAddress}:${socket.remotePort}`;
  console.log(`new client connection from ${remoteAddress}`);
}
```

- **Add the `socket` parameter and `console.log` connection details when a connection happens!**

## Where is the client?

.footnote[*Note: Socket in this context is not WebSocket*]

---

# Test using Netcat

**We'll use Netcat to test our nre TCP/UDP server.**

Start your server new TCP Server, and from your command line in a separate terminal window, run:
```bash
 nc localhost 9000
```

You should see something like this in the terminal where your server was started:
```bash
new client connection from ::1:63342
```

**Take 5 minutes and read about the [Netcat](http://nc110.sourceforge.net/) tool.**

---

class: center, middle
<p style="text-align:center; margin:0;">
  <img style="display:inline;" src="http://cheswick.com/ches/map/gallery/wired.gif" width="250" height="250">
</p>

### Congratulations, you've successfully created a new network 'node' and connected it to the internet!

It doesn't do anything useful yet.
Before we can start sending and recieving data, we'll need to add a few more things...

---

# Exercise 1

Implement the following `socket` event handlers in your `handleConnection` callback:

- #### 'data'
- #### 'close'
- #### 'error'

Each handler should `console.log` the `remoteAddress` as well as any relavent parameters (e.g. incoming data, or error messages).
Review the documentation here before you begin: [https://nodejs.org/api/net.html](https://nodejs.org/api/net.html)

---
template: inverse

# Debugging a Node Applcation

---

# Debugging Node

To debug a node applcation, start the node process using the following command:

```bash
node --debug index.js
```
You should see this output in your teminal:
```bash
Debugger listening on 127.0.0.1:5858
```

## How do we use the debugger? What do we use it for?

---

# Debugging Node




---

{% endhighlight %}

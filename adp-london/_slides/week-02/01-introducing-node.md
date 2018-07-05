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

- Understand the history and beginnings of Node
- Review TCP/UDP protocols
- Model JavaScript's event loop
- Build a simple TCP/UDP messaging server
- Use Node's built in modules to read from you computer's filesystem

---

template: inverse

# What is Node?

---

# What is Node?

- Node was created in **2009**
- It has become the driving force behind the widespread adoption of the JS programming language as a tool for developing sophisticated software applications
- Provides the **minimum viable foundation** to support the main Internet protocols, and OS interface
- Given its low-level API, any reasonably complex application needs to make extensive use of libraries (npm!)

---

# Experienced Node Developers Know...

- How to structure an application using multiple third-party modules, and how to reliably judge the quality of a third-party module
- How to leverage the **event loop** and Node's **async**, single-threaded nature (more on this to come...)
- How to use various networking protocols

---

class: center, middle

### What Makes It So Special?

_Node's most useful features are..._

The **event loop** and **non-blocking I/O**.

Node programs are **single threaded** and **highly parallel**.

---

template: inverse

# OSI Model

---

Let's talk about how internet works!
![OSI Layers](/public/img/slide-assets/OSI_model.png)

---

template: inverse

# A Simple Node App

---

# Building a TCP Service

TCP and UDP are the basic protocols of the internet.

**All network communication on the internet is carried out by these two protocols (for the most part).**

Take a minute to **[read this link](http://www.diffen.com/difference/TCP_vs_UDP)**, for a good description of the differences between TCP & UDP, and how they are used.

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

**Why do we need this?**

---

# Building a TCP Service

Create a file called `index.js`. Use Node's [built-in `net` module](https://nodejs.org/api/net.html) to create a server which will handle incoming network connections (TCP/UDP):

```js
const net = require('net');
const server = net.createServer();

server.on('connection', handleConnection);

server.listen(9000, function() {
  console.log('server listening to %j', server.address());
});

function handleConnection() {
  // TODO: Handle connection!
}
```

Run this code by typing `node index.js`.

---

# Building a TCP Service

In order to show when the **server** has received a connection from a **client**, we'll need to add some code to the `handleConnection` callback.

```js
function handleConnection(conn) {
  const remoteAddress = `${conn.remoteAddress}:${conn.remotePort}`;
  console.log(`new client connection from ${remoteAddress}`);
}
```

Add the `conn` parameter and `console.log` connection details when a connection happens.

_Where is the client?_

**Note:** Socket in this context is not WebSocket.

---

# Simple Netcat Client

**We'll use Netcat to test our nre TCP/UDP server.**

Start your server new TCP Server, and from your command line in a separate terminal window, run:

```bash
nc localhost 9000
```

You should see something like this in the terminal where your server was started:

```bash
new client connection from ::1:63342
```

Take a few minutes and read about the [Netcat](http://nc110.sourceforge.net/) tool now.

---

class: center, middle

### Congratulations, you've successfully created a new network 'node' and connected it to the internet!

<p style="text-align:center; margin:0;">
  <img style="display:inline;" src="http://cheswick.com/ches/map/gallery/wired.gif" width="250" height="250">
</p>

It doesn't do anything useful yet.
Before we can start sending and receiving data, we'll need to add a few more things...

---

# Exercise 1

Implement the following `conn` event handlers in your `handleConnection` callback:

- `data`
- `close`
- `error`

Each handler should `console.log` the `remoteAddress` as well as any relevant parameters (e.g. incoming data, or error messages). Review **[the documentation](https://nodejs.org/api/net.html)** here before you begin.

---

# UTF-8

If you're sending incoming data to the server console, you may have noticed somthing like this `<Buffer 9c 4f 4f 4f>` in the output.

This happens because TCP sends **streams of bytes** across the network, and it's up to our application to decode them properly.

_But what is UTF-8?_

---

template: inverse

# Debugging a Node Application

---

# V8 Inspector Integration

To debug a Node application, start the node process using the following command:

```bash
node --debug --inspect index.js
```

You should see something like this in your terminal:

```bash
Debugger listening on ws://127.0.0.1:9229/f3473fed-3805-4de1-939d-12491536cb4a
For help see https://nodejs.org/en/docs/inspector
```

Copy and paste the `chrome://inspect/` url into a new chrome tab to start your debugging session by clicking on your `Remote Target`.

---

class: center, middle

Open your debugger and set a breakpoint somewhere in your code. Send a message to your server using Netcat to trigger it.

.inline-images[
![Chrome dev tools for debugging Node](/public/img/slide-assets/node-debugger-breakpoint.png)
]

---

# Exercise 2

Use the debugger and set a breakpoint in your `data` event handler. Intercept the incoming data, and use the debugger's console to change the value of the data parameter (the incoming data) before it's logged.

Use [Netcat](https://en.wikipedia.org/wiki/Netcat) to send data to your new TCP service.

---

# Completed TCP Service

Finally, let's return some data from our service. At the moment does not send any information back to the client.

Add the following code to your `data` handler to complete the service:

```js
// console.log ...
conn.write(`Got "${d.trim()}". Let me uppercase: "${d.toUpperCase()}"`);
```

Now we have a friendly upper-casing service.

---

template: inverse

# Blocking & Non-Blocking Operations

---

# Exercise 3

Use your TCP server to read from your local file system. When your server receives a request, use Node's build in `fs` module to read text from a `.txt` file and send the contents back to the connection.

- Is reading from the filesystem an **async** or **sync** action?
- In what circumstance is it useful to use blocking operations?

Modify your existing code:

```js
function handleConnection(conn) {
  // TODO: Read a welcome message from your filesystem
  // And respond to the connection with the contents
}
```

---

template: inverse

# Internet Messaging with Node

---

# Exercise 4

Next we'll create a minimal chat server.

Change your TCP service to deliver any incoming data to all connected clients.

- Your server will need to store all connections
- Messages you send to the server should not return to you

---

# Process: Memory & CPU

Introducing the code recommended on the previous slide may have introduced a memory leak.

Run the load tester to find out!

_What do we have to do to prevent the memory leak?_

checkout this [post](https://www.nearform.com/blog/self-detect-memory-leak-node/) to find out.

---

template: inverse

# Environment Variables

---

# Environment Variables

Environment variables are:

.large[...values available to a process, defined by the system where the process is executing. ]

---

# Environment Variables

In Express, we'll need to provide values to our application that will be used at runtime.

.large[
Environment variables should be *dynamic* depending on the 'Environment' where your app is running.
]

???

Explanation:

We don't want to have to manually specify specific variables for each environment, in out application code.

---

# Defining Environments

**Development** (Your computer)

- Connections to Express ingress from `localhost` (localhost:3000).
- Postgres is also running on `localhost` (localhost:5432)

**Production** (On a server computer)

- Connections to Express ingress via some domain, eg _boom.academy.red_
- Postgres could be running on a separate domain.

---

# Local Environment

To view your local environment run the following command:

```bash
env
```

.large[What do you see?]

---

# Learn to Use Environment Variables

Take a moment and read through this tutorial from DigitalOcean: <br/>

[How To Read and Set Environmental and Shell Variables](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps)

---

# What We've Learned

- How to set up and use environment variables
- What Node is and what where it came from
- What the TCP/UDP protocols are
- What the JS event loop is
- How blocking versus non-blocking operations work in Node

---

template: inverse

# Questions?

{% endhighlight %}

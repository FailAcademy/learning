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
- Install and use Node's profiling tools

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

*Node's most useful features are...*

The **event loop** and **non-blocking I/O**.

Node programs are **single threaded** and **highly parallel**.


---
template: inverse

# A Simple Node App

---

# Building a TCP Service

TCP and UDP are the basic protocols of the internet.

**All network communication on the internet is carried out by these two protocols (for the most part).**

Take a minute to **[read this link](http://www.diffen.com/difference/TCP_vs_UDP)**, for a good description of the differences between TCP & UPD, and how they are used.

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

*Where is the client?*

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

*But what is UTF-8?*

---
template: inverse

# Debugging a Node Application

---

# V8 Inspector Integration

To debug a Node application, start the node process using the following command:

```bash
node --debug --inspect index.js
```

You should see output in your terminal:

```bash
Debugger listening on port 9229.
Warning: This is an experimental feature and could change at any time.
To start debugging, open the following URL in Chrome:
    chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/3b270900-1c51-460c-a7a4-d593f462b2d7
```

Copy and paste the `chrome-devtools://` url into a new chrome tab to start your debugging session.

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

Finally, lets return some data from our service. At the moment does not send any information back to the client.

Add the following code to your `data` handler to complete the service:

```js
// console.log ...
conn.write(
  `Got "${d.trim()}". Let me uppercase: "${d.toUpperCase()}"`
)
```

Now we have a friendly upper-casing service.

---
template: inverse

# Load Testing

---

# Load Testing

Lets try to understand what our new Node process (upper-casing service) is doing while it's running.

**Install the following tools:**

- [pm2](http://pm2.keymetrics.io/): `npm i -g pm2`
  - A process manager for Node apps.
- [tcpkali](https://github.com/machinezone/tcpkali): `brew install tcpkali`
  - A TCP/IP load testing tool
- [htop](https://hisham.hm/htop/): `brew install htop`
  - A cool process/memory monitor for you OSX
---

# Load Testing

🔥 **Fire up your load testing suite!**

Open three separate terminals and run each of the following commands in its own terminal window:

- Start your node app using `pm2 start index.js` (from your project directory)
- Start the pm2 monitor using `pm2 monit`
- Start htop using `htop`

---
class: center, middle

**Open a fourth terminal so we can run the load testing tool.**
Your screen should look something like this:

.inline-images[
  ![Node testing set-up screencap](/public/img/slide-assets/load-testing-setup.png)
]

---

# Exercise 3

Run some load tests on your TCP Server and observe the following:

- System memory and CPU usage
- Node process memory and CPU usage
- The output returned from the server process

Run the command:

```bash
tcpkali -c 100 -d -m "$" -r 100 localhost:9000
```

---
template: inverse

# Internet Messaging with Node

---

# Exercise 4

Now create a minimal chat server. Change your TCP service to deliver any incoming data to all connected clients.

Functional requirements:

- Your server will need to store all connections
- Messages you send to the server should not return to you

---

# Process: Memory & CPU

Introducing the code recommended on the previous slide may have introduced a memory leak. 

Run the load tester to find out.

*What do we have to do to prevent the memory leak?*

---

# What We've Learned

- What Node is and what where it came from.
- What the TCP/UDP protocols are.
- What the JS event loop is.
- How to use profiling tools.

---
template: inverse

# Questions?

{% endhighlight %}

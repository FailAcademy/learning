---
layout: slidedeck
title: Introducing Node Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Introducing Node II

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

- Understand the history and beginnings of Node
- Review TCP/UDP protocols
- Model JavaScript's event loop
- Build a simple TCP/UDP messaging server
- Use Node's built-in modules to read from your computer's filesystem

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

Use your TCP server to read from your local file system. When your server receives a request, use Node's built-in `fs` module to read text from a `.txt` file and send the contents back to the connection.

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
- Messages a client sends to the server should not return to that client
- But all other clients should receive that message

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

We don't want to have to manually specify specific variables for each environment, in our application code.

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

# Lab Activity (Next Class)

Building a TCP server from scratch is not something you'll normally do. There are a wide range of behaviors and edge cases we have not accounted for.

In this lab, we'll use Node's `http` and `fs` modules to build a more typical webserver based on `HTTP`!<br/><br/>
**Your new HTTP server should:**

- Listen for `HTTP` requests on port `3000`
- Serve an `index.html` file (which should be a properly formatted html document) when the url reads http://localhost:3000/index.html
- Serve the right `HTTP` error code if the url is for any other file.

Good luck!

_Note:_

The `HTTP` protocol is the backbone of the web. We're going to learn more about the `HTTP` protocol in upcoming lessons. Use this lab as an opportunity to explore and ask questions.

Remember, `http` is just another _layer of abstraction_ built using the `TCP` protocol "under the hood" to handle the networking activity.
<br/>

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

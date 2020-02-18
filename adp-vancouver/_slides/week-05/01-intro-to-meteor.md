---
layout: slidedeck
title: Introducing Meteor (with React) Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Introducing Meteor <br/>

(with React)

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. What is Meteor?
2. Application Platforms
3. The Client-Server model
4. Meteor Packages: Atmosphere vs. NPM
5. Meteor's Parts
6. Benefits of Meteor
7. Drawbacks of Meteor

---

template: inverse

# What is Meteor?

---

class: center, middle

### Meteor is an open source platform for web, mobile, and desktop.

And it's JavaScript all the way down!

---

# Application Platforms

<img width="200px" style="display:block; margin:0 auto;" src="/public/img/slide-assets/swiss-army-knife.jpg" />

An **Application Platform** is an _integrated set of useful programs_.

Meteor comes with everything a JavaScript developer might need to build a fully functioning application, out of the box.

---

class: center, middle

Meteor simplifies and improves the _Developer Experience_ of building Client-Server applications:

- It's a complete and fully integrated suite of programs.
- It's simple and powerful set of JavaScript APIs for working with those programs.

---

# Exercise 1

Let's explore Meteor's package ecosystem. Search [https://atmospherejs.com/](https://atmospherejs.com/) for a package to add to the project you worked on in the pre-work. Add the package and it's features to your app.

---

template: inverse

# Client-Server Applications

---

# What is Meteor?

Under the hood, Meteor applications are typical Client-Server applications, like we're used to developing on the web.

The Meteor platform includes:

- Front-End tools for building a user interface: **Blaze / React / Angular**
- Back-End tools for developing your database and Server-Side logic: **Node / MongoDB**

---

# Better than the REST?

**So far in the course we've built a typical RESTful style Client-Server application.**

This architecture has been in use for a long time. For experienced developers, the
shortcomings of this type of application have become obvious; here are a few:

- HTTP is a slow and bloated transport protocol
- Client-Server applications don't share code!
- UIs built over RESTful applications will need loading states everywhere!

---

class: center, middle

Meteor was created to address these and many other shortcomings in typical Client-Server application architecture.

<img style="display:block; margin: 0 auto;" src="/public/img/slide-assets/simply-the-best.jpg">

---

template: inverse

# History of Meteor & MDG

---

**Meteor was created by some of the top developers in Silicon Valley...**

- [Meteor is Open Source!](https://github.com/meteor/meteor/commit/4e4358e2c068ffd0c0bc565bb2a9438c68bab7fb)
- Meteor was first introduced in 2011 under the name [Skybreak](https://blog.meteor.com/skybreak-is-now-meteor-e680d1dbaf84#.8iukm4iye).
- The startup **The Meteor Development Group** (MDG) was incubated by Y Combinator.
- In 2014, MDG acquired Y Combinator alum FathomDB.
- In 2012 MDG received 11 million in funding from the investment firm _Andreessen Horowitz_.

---

class: center, middle

<img style="display:block; margin: 0 auto;" src="/public/img/slide-assets/meteor-in-2011.jpg" />
Meteor in 2011

---

class: center, middle

<img style="display:block; margin: 0 auto;" src="/public/img/slide-assets/meteor-in-2017.png" />
Meteor in 2017

---

template: inverse

# Meteor's Parts

What makes Meteor so Special?

---

class: center, middle

# Meteor's Parts

Let's review the Awesome Meteor API Documentation and discuss the finer points of Meteor's API:

### [The Meteor Guide](https://guide.meteor.com/)

---

## Meteor, Atmosphere & NPM

In 2011 NPM had not yet established itself as the de-facto package manager for Node applications.

Because of Meteor's unique architecture, and in order to preserve its simple developer experience, while allowing
3rd party developers to contribute useful packages for use with Meteor, MDG built a proprietary packaging system.

The community responded by building a package hub called:

### [Atmosphere](https://atmospherejs.com/)

---

## Meteor, Atmosphere & NPM

As Meteor grew in popularity, the benefits of this system were soon overshadowed by the demand from the JavaScript
community at large for NPM integration. Most JavaScript developers, especially those building software with Node,
use NPM.

The result is that there are 2 ways of acquiring packages to use with your Meteor Project.

- Meteor's packaging system is still very useful, and you'll use it to add and remove all of the **Standard Packages**
  that come built into Meteor.

---

# Deploying Meteor Apps

Historically, Meteor has been difficult to deploy, because of its unique architecture.
This is no longer the case. MDG has created [Galaxy](https://www.meteor.com/hosting), an all in one paid hosting
solution for Meteor apps.

---

# Meteor's Parts

Based on our review of the API, let's attempt to answer the following questions:

- How does Meteor address some of the shortcomings we mentioned earlier?
- What are some of the innovative or unusual aspects of Meteor's API?
- What are some of the important Deployment gotchas involved in running a production Meteor application?
- How will working with Meteor make our lives as Full-Stack JavaScript Developers more sane?

---

# Exercise 2

Install Meteor and run `meteor create`.

See if you can add the following features to the example project that is generated:

- A button that decrements the counter
- A text input and button combination. When the user clicks the button, whatever text
  is in the input appears on screen.

Install the Meteor Dev Tools Chrome extension, and observe Meteor's DDP websocket
transport protocol in action! Open the mongoDB shell using the `meteor mongo` command
and take a peek at your new mongoDB database.

---

# Exercise 3

### Let's get technical

Now that we know a little bit about What Meteor does, watch the following short Video on Fibers & Futures in Node, for some insight on how it does it:

- [Evented Mind, Introducing Fibers in Node](https://www.eventedmind.com/items/nodejs-introducing-fibers).
- [Evented Mind, Using Futures](https://www.eventedmind.com/items/nodejs-using-futures).

---

template: inverse

# Benefits of Meteor

---

# Benefits of Meteor

- No loading!
- Send less data!
- Reactive!
- So many sensible defaults!
- Fast TTL!

... Anything else?

---

template: inverse

# Drawbacks of Meteor

---

# Drawbacks of Meteor

- Black box magical APIs
- JS Ecosystem interop
- mongoDB by default
- Performance gotchas
- Deployment
- Doesn't work seamlessly with all JS

... Anything else?

---

template: inverse

# Questions?

{% endhighlight %}

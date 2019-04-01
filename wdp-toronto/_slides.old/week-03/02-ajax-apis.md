---
layout: slidedeck
title: Ajax, JSON, and APIs Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Ajax, JSON, and APIs

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is Ajax?
2. What is JSON?
3. What is an API?
4. Fetching content from an external API

---
template: inverse

# Ajax

---
class: center, middle

.large[
  But first, servers!
]

---
class: center, middle

![HTTP request diagram](../../public/img/slide-assets/http-request-diagram.svg)

---

# Servers

- A server is just **a program that accepts connections from other programs** on the network
- Computers that run web servers aren’t anything special, but they often run **Linux** as an operating system

---

# Versus Your Computer

- A server's connection to the Internet is a little different from a typical home or mobile Internet connection
- A server usually needs to have a stable (static) IP address so that clients can find it and connect to it
- Most home and mobile systems don't assign your computer a static IP address, and most home Internet routers don't allow incoming connections by default

---

# Requests

HTTP is just the language that web servers and clients use to talk to each other. **Every HTTP request includes an HTTP verb**. Some common HTTP verbs include:

- `GET` is for requesting a resource from the server
- `POST` is for submitting data to the server (e.g. file uploads)
- `PUT` can be used for creating a new resources
- `DELETE` is removing a resource from the server
- `PATCH` is a newer addition to HTTP, and it expresses the idea changing a resource in some well-defined way

---

# URLs

A URL is **an address for a resource** on the network:

**https://red-wdp.herokuapp.com/lesson/01-ajax-apis/**

This one has three visible parts:

  - `https://` is the protocol
  - `red-wdp.herokuapp.com` is the hostname
  - `/lesson/01-ajax-apis/` is the path

---

# URLs

*Fun facts!*

- In the real world, **paths don't necessarily equate to specific filenames**&mdash;instead, the server interprets the path to figure out what resource to send
- The part of the URI after the `#` sign is called a **fragment** (the browser doesn't send it to the web server)
- The `?s=red+academy` is a **query** part of the URI (this does get sent to the server)

---

# Types of Responses

**1xx — Informational.** The request is in progress or there's another step to take.

**2xx — Success!** The request succeeded. The server is sending the data the client asked for.

**3xx — Redirection.** The server is telling the client about a different URL it should redirect to.

**4xx — Client error.** The server didn't understand the client's request, or can't or won't fill it (e.g. bad URL).

**5xx — Server error.** Something went wrong on the server.

---

# Mini-Exercise

Let's model how requests and responses work by using a bakery as a metaphor...

---
class: center, middle

.large[
   What is Ajax?
]

---

# What is Ajax?

Ajax provides a way to exchange data between the browser and the server **without reloading the page**.

Ajax is often used when **submitting web forms** and **fetching data** from a server, including from third-party APIs.

It's **asynchronous** because Ajax doesn’t block other events from happening when the request is sent and the client is waiting for a response.

---

# Working with Ajax

- You can use Ajax with plain vanilla JavaScript, but it can be a bit tedious.
- Luckily, jQuery provides several methods that make undertaking Ajax-related tasks much easier

---

# jQuery's Ajax Methods

Methods for making Ajax requests:

- `$.ajax()`
- `.load()`
- `$.get()`
- `$.post()`
- `$.getJSON()`
- `$.getScript()`

---

# jQuery's Ajax Methods

Methods for dealing with Ajax responses:

- `.done()`
- `.fail()`
- `.always()`
- `.abort()`

---

# A Basic Ajax Request

This code makes a request to GitHub API when the button is clicked, then appends the user's username to a `<p>` element:

```html
<button>Get Login Name</button>
<p class="user-name"></p>
```

```javascript
$('button').on('click', function() {
   $.ajax({
      method: 'GET',
      url: 'https://api.github.com/users/octocat'
   })
   .done(function(data) {
      $('.user-name').append(data.login);
   });
});
```

*This may a look at little intense at first, so let's break it down...*

---

# A Basic Ajax Request

First, we use the `.on` method to attach an event handler:

```javascript
$('button').on('click', function() {
   // ...
});
```

Then, we use the jQuery's `$.ajax` method:

```javascript
$.ajax({
   method: 'GET',
   url: 'https://api.github.com/users/octocat'
})
```

We're setting the method to `GET` (because we're making get request) and setting the URL to the GitHub API **endpoint** where this data lives (more on endpoints in a minute...).

---

# A Basic Ajax Request

And finally, we're chaining the `.done()` method to our Ajax request to tell the browser what do to once it has received a successful response:

```javascript
.done(function(data) {
   $('.user-name').append(data.login);
});
```

In this case, we're simply grabbing the user's username out of the data we get back, and appending it to an empty DOM element.

---
class: center, middle

.large[
   But what exactly is this **data** you're getting back here?
]

---
template: inverse

# JSON

---

# What is JSON?

JSON stands for **JavaScript Object Notation** and simply provides a way for us to encode text-based data in a way that's easy to work with.

Ultimately, it gives us **a way to encode both simple and more complex data structures** (including strings, numbers, booleans, arrays, objects, and null) into a format that can easily be transmitted between two points.

---

# What Does It Look Like?

JSON will look very familiar, because it's encoded similarly to how JS objects are in key-value pairs:

```javascript
{
   "login": "octocat",
   "id": 583231,
   // ...
}
```

But it's important to remember that this isn't an actual object, it's just text that looks like an object.

*Sidenote: You can convert JSON into a JS object, using `JSON.parse()`*

---

# Other Data Formats

Ajax `GET` requests commonly send back JSON today, but that's not always the case. Other data formats include:

- HTML
- XML

---

# Working with JSON

In the previous GitHub API example, if you visit the URL that we set as the `url` parameter for the `$.ajax()` method, you can see the entire JSON response that we received.

```javascript
$.ajax({
   method: 'GET',
   url: 'https://api.github.com/users/octocat'
})
```

You can view it here:

**https://api.github.com/users/octocat**

---

# Working with JSON

That entire response was passed in as the `data` object parameter in the `.done()` method that we chained to our Ajax request:

```javascript
.done(function(data) {
   $('.user-name').append(data.login);
});
```

 We are now able to access properties within the data object (such as the `login`) using the JavaScript dot notation.

---

# Exercise 1

In this exercise, we're going to make a request to the GitHub API using some of jQuery's Ajax methods.

[See the lesson page](/lesson/01-ajax-apis/) for further instructions.

---
template: inverse

# Error Handling

---

# When a Response Fails

Providing useful feedback to users when a response fails is important for UX.

For that we can chain on the `.fail()` method:

```js
$('button').on('click', function() {
   $.ajax({
      method: 'GET',
      url: 'https://api.github.com/users/octocat'
   })
   .done(function(data) {
      $('.user-name').append(data.login);
   })
   .fail(function() {
      // Do stuff if it fails...
   });
});
```

---

# When a Response Fails

Specifically, we can add an error message to the `<p>` instead:

```js
$('button').on('click', function() {
   $.ajax({
      method: 'GET',
      url: 'https://api.github.com/users/octocat'
   })
   .done(function(data) {
      $('.user-name').append(data.login);
   })
   .fail(function() {
      $('.user-name').append('Sorry there was an error.');
   });
});
```

---

# When a Response Fails

And also run code no matter what happens with the response:

```js
$('button').on('click', function() {
   $.ajax({
      method: 'GET',
      url: 'https://api.github.com/users/octocat'
   })
   .done(function(data) {
      $('.user-name').append(data.login);
   })
   .fail(function() {
      $('.user-name').append('Sorry there was an error.');
   })
   .always(function(){
      // This code will run regardless of success/failure
   });
});
```
---

# Exercise 2

Let's try chaining another Ajax method to our previous example to ensure we take care of error handling.

[See the lesson page](/lesson/01-ajax-apis/) for further instructions.

---
template: inverse

# APIs

---
class: center, middle

.large[
   What is an API?
]

---

# APIs: In Plain English

- API stands for **Application Programming Interface**
- User interfaces allow people to work with programs
- APIs allow our programs to work with other programs
- APIs will usually restrict access to the application

---
class: center, middle

.large[
   Examples of APIs in use?
]

---
class: center, middle

.large[
   Some APIs require **authentication**.
]

---

# Exercise 3

The NYT API requires that obtain an API key to access its various APIs' endpoints.

Let's create an account on the NYT website so we can obtain a key to use on our projects right now...

---

# What We've Learned

- What is Ajax and what it's for
- How to format data with JSON
- What an API is and how to interact with someone else's on the front-end of a website

---
template: inverse

# Questions?

{% endhighlight %}

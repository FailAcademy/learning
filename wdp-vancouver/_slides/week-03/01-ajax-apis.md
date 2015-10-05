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
   What is Ajax?
]

---
class: center, middle

### What is Ajax?

Ajax provides a way to fetch content from a server and load it in the browser without actually reloading the page.

---
class: center, middle

### What is it for?

Ajax is often used when submitting web forms and fetching data data from a server, including via third-party APIs.

---
class: center, middle

![HTTP request diagram](../../public/img/slide-assets/http-request-diagram.svg)

It's just like any request a browser makes to a server, but it loads the returned data in the page without affecting the rest of the page. In other words, no reloading!

---

# Working with Ajax

- You can use Ajax with plain vanilla JavaScript, but it can be a bit onerous
- Luckily, jQuery provide several methods that make undertaking Ajax-related tasks much easier

---

# jQuery's Ajax Methods

Methods for making Ajax requests:

- `$.ajax()`
- `.load()`
- `$.get`
- `$.post`
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

This code makes a request to GitHub API when the button is clicked, then appends the user's username to a `p` element:

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

This may a look at little intense at first, so let's break it down...

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
class: center, middle

### What is JSON?

JSON stands for "JavaScript Object Notation" and simply provides a way for us to encode text-based data in a way that's easy to work with.

---

# What Does It Look Like?

JSON will look very familiar, because it's encoded exactly like a JavaScript object in key-value pairs:

```javascript
{
   "login": "octocat",
   "id": 583231,
   // ...
}
```

But it's important to remember that this isn't an actual object, it's just text that looks like an object.

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

Because the JSON data is passed in as object, we are able to access it's properties (such as the `login`) using the JavaScript dot notation we're already familiar with.

---

# Exercise 1

In this exercise, we're going to make a request to the GitHub API using some of jQuery's Ajax methods.

[See the lesson page](/lesson/ajax-json-and-apis/) for further instructions.

---
template: inverse

# Error Handling

---

# When a Response Fails

Providing useful feedback to users when a response fails is important.

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

[See the lesson page](/lesson/ajax-json-and-apis/) for further instructions.

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

The Instagram API requires that we register a "Client" and get a **client_id** to access many of it's API endpoints.

(Some API requests require actual authentication with an **access_token**, but we won't be needing those for Project 2.)

Let's create a Client for our Instagram project right now...

---

# What We've Learned

- What is Ajax and what it's for
- How to format data with JSON
- What an API is and how to interact with someone else's on the front-end of a website

---
template: inverse

# Questions?

{% endhighlight %}

---
layout: slidedeck
title: Intro to Ajax and APIs
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to Ajax

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

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

- `.load()`
- `$.get`
- `$.post`
- `$.getJSON()`
- `$.getScript()`
- `$.ajax()`

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
<button>Get Repo List</button>
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
   But what exactly is this "data" you're getting back here?
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
template: inverse

# APIs

---
class: center, middle

.large[
   What is an API?
]

---
class: center, middle

.large[
   The future!
]

.inline-images[
   ![Back to the Future Gif](../../public/img/slide-assets/back-to-the-future.gif)
]

---

# APIs: In Plain English

- API stands for "Application Programming Interface"
- User interfaces allow people to work with programs
- APIs allow our programs to work with other programs
- APIs will usually restrict access to the application

---
class: center, middle

### APIs in the Wild

Have you ever used a smart phone app that integrates a Google or Apple Maps in some way?

---
class: center, middle

### APIs in the Wild

Have you ever used a social media share button?

---
class: center, middle

### APIs in the Wild

Have you ever used an app or service that saves a document to your Dropbox?

---
class: center, middle

### APIs in the Wild

Did you log into this learning materials website with your GitHub account?

---
# Exercise 1

Your turn! Pull some data of your own from the GitHub API:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/yNJLgR/?height=268&theme-id=0&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/yNJLgR/'>yNJLgR</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
template: inverse

# Fin!

{% endhighlight %}

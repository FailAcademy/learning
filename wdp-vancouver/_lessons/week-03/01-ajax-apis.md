---
layout: lesson
title: Ajax, JSON, and APIs
slides: ['_slides/week-03/01-ajax-apis.md']
date: 2015-10-05
---

## Pre-Work

Read this primer on APIs:

- [What APIs Are And Why They're Important](http://readwrite.com/2013/09/19/api-defined)

---

## Learning Objectives

- Define what Ajax and JSON are, particularly in relation to jQuery.
- Define what an API is and explore popular social media/network APIs.
- Use jQuery Ajax methods to load content a webpage.
- Handle Ajax errors with jQuery and provide user feedback.
- Create authentication credentials and use them to access data within a third-party API.

---

## Keywords

- Ajax
- JavaScript Object Notation (JSON)
- Application Programming Interface (API)

---

## Exercise 1

In this exercise, we're going to make a request to the GitHub API using some of jQuery's Ajax methods.

Additionally, we're going to up our jQuery skills by trying out its "$.each()" method. You can find the docs for that method here: http://api.jquery.com/jquery.each/

First, you're going to add an event handler to the button. This click event will make a call to the GitHub API endpoint that fetches all of your repos: https://api.github.com/users/<YOUR USERNAME>/repos

You'll likely want to use the `.ajax()` method with a GET request for this, or the `.getJSON()` method.

Next, you're going to use jQuery's ".done()" method with "$.each()" inside of it to loop through each of your repos and append them as list elements to the the <ul> element that already exists in the HTML.

This is a tricky exercise, but stick with it because it's very cool to see the results!

Use this code to get started:

```html
<button>Get Repo List</button>
<ul class="repo-list"></ul>
```
```js
$('button').on('click', function() {
    $.getJSON( /* Where are you getting the JSON from? */ )
  .done(function(data) {
    $.each(data, function( key, value ){
      /* Append your list items here */
    });
  });  
});
```

---

## Exercise 2

Let's try chaining another Ajax method to our previous example to ensure we take care of error handling.

If the request fails, we want to instead append a `<li>` element to the list that says, "Sorry, there was a problem, please try again."

Next, let's also provide a bit of feedback to our user to show them that their request is in progress before it finishes returning and appending the data.

To do this, you'll need to add `<p class="loading">Loading...</p>` before the `<ul>` right when the button is clicked, and upon the completion of the request (whether it's successful or not), remove that `<p>` that you just appended.

---

## Exercise 3

The Instagram API requires that we register a "Client" and get a **client_id** to access many of it's API endpoints.

(Some API requests require actual authentication with an **access_token**, but we won't be needing those for Project 2.)

Let's create a Client for our Instagram project right now...

---

## Lab Activity

*Lab activity TBA...*

Testing 1, 2, 3...

---

## Additional Resources

An older article, but still good background reading on APIs:

- [The Increasing Importance of APIs in Web Development](https://code.tutsplus.com/articles/the-increasing-importance-of-apis-in-web-development--net-22368)

A handy tool for making a JSON string more readable by adding whitespace back into it if it has been removed:

- [JSON Pretty Print](http://jsonprettyprint.com/)

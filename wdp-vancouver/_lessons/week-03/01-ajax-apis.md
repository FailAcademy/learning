---
layout: lesson
title: Ajax, JSON, and APIs
slides: ['_slides/week-03/01-ajax-apis.md']
lesson_date: 2018-07-16
---

## Pre-Work

Read this primer on APIs before class:

* [What is an API?](https://dev.to/aditichaudhry92/what-is-an-api)

---

## Learning Objectives

* Define what Ajax and JSON are, particularly in relation to jQuery.
* Define what an API is and explore popular social media/network APIs.
* Use jQuery Ajax methods to load content a webpage.
* Handle Ajax errors with jQuery and provide user feedback.
* Create authentication credentials and use them to access data within a third-party API.

---

## Keywords

* Ajax
* JavaScript Object Notation (JSON)
* Application Programming Interface (API)

---

## Exercise 1

In this exercise, we're going to make a request to the GitHub API using some of jQuery's Ajax methods.

Additionally, we're going to up our jQuery skills by trying out its `$.each()` method. You can find the docs for that method here: **http://api.jquery.com/jquery.each/**

First, you're going to add an event handler to the button. This click event will make a call to the GitHub API endpoint that fetches all of Octocat's repos:

<span style="word-wrap: break-word;">**https://api.github.com/users/octocat/repos?client_id=a37c6077034750f953fc&client_secret=8ff75658b21aa8c5830b7efeae85f559b4d36a02**</span>

You'll likely want to use the `.ajax()` method with a GET request for this, or the `.getJSON()` method.

Next, you're going to use jQuery's `.done()` method with `$.each()` inside of it to loop through each of your repos and append them as list elements to the `<ul>` element that already exists in the HTML.

This is a tricky exercise, but stick with it because it's very cool to see the results!

Use this code to get started:

```html
<button>Get Repo List</button>
<ul class="repo-list"></ul>
```

```js
$("button").on("click", function() {
  $.getJSON(/* Where are you getting the JSON from? */).done(function(data) {
    $.each(data, function(key, value) {
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

The NYT API requires that obtain an API key to access its various APIs' endpoints.

Let's create an account on the NYT website so we can obtain a key to use on our projects right now...

---

## Lab Activity

You're welcome to use either **Codepen** or a **code editor** to complete either of the following lab options.

### Option 1 (Easier)

Build a simple form that fetches data from the OpenWeatherMap API to populate a webpage with the current Vancouver forecast as pictured:

![Weather widget prototype](/public/files/labs/ajax-lab-weather.gif)

You'll be using a **GET** method to fetch data via Ajax from the following endpoint:

**http://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&appid=4a48e1e1428fd83889074671fbf259d9**

You'll use the `$.ajax()` method just as you did the GitHub API example, but append the required data (the main type of weather, the description, and the icon) when the button is clicked.

This is all the mark-up you will need to complete this assignment:

```html
<div class="weather-widget">
  <h1>Vancouver Weather</h1>
  <div class="results"><p>Click the button to get the current weather conditions...</p></div>
  <button id="get-weather">Get Weather</button>
</div>
```

Writing the CSS and jQuery is up to you. Good luck!

### Option 2 (Harder)

Build a simple form that fetches album data for a given artist using the iTunes API, and populate a webpage with that data as pictured:

![iTunes widget prototype](/public/files/labs/ajax-lab-itunes.gif)

You'll be using a **GET** method to fetch data via Ajax from the following endpoint:

**https://itunes.apple.com/search?entity=album&limit=6&term=PLUS+THE+ARTIST+NAME**

You'll use the `$.ajax()` method just as you did the GitHub API example, but append the required data (the thumbnail album artwork plus the album names) when a user searches for an artist name.

**Additional hints:**

* The iTunes API requires that you use `+` signs and not spaces to occupy whitespace in the artist name...investigate a jQuery method called `.replace()` to figure out how to format the text entered into the `<input>`
* You'll likely need to set the `dataType` property.
* You can find additional info about the [iTunes API here](https://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html)

This is all the mark-up you will need to complete this assignment:

```html
<div class="itunes-widget">
   <form action="#" id="album-search">
      <div class="artist-search">
         <input type="text" name="artist_name" id="artist-name" placeholder="Enter artist first and last name" />
         <input type="submit" value="Get Albums" />
      </div>
   </form>
   <ul class="album-list"></ul>
</div>
```

Again, writing the CSS and jQuery is up to you. Good luck!

---

## Additional Resources

An older article, but still good background reading on APIs:

* [The Increasing Importance of APIs in Web Development](https://code.tutsplus.com/articles/the-increasing-importance-of-apis-in-web-development--net-22368)

A handy tool for making a JSON string more readable by adding whitespace back into it if it has been removed:

* [JSON Pretty Print](http://jsonprettyprint.com/)

And some Chrome extensions that will automatically do the same thing when viewing JSON in the browser:

* [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)
* [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc)

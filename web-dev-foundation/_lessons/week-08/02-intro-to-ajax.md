---
layout: lesson
title: Intro to Ajax and APIs
slides: ['_slides/week-08/02-intro-to-ajax-slides.md']
---

## Pre-work

A primer on APIs to read before today's lesson:

- [What APIs Are And Why They're Important](http://readwrite.com/2013/09/19/api-defined)

---

## Learning Objectives

- Define what Ajax and JSON are, particularly in relation to jQuery.
- Define what an API is and explore popular social media/network APIs.
- Use jQuery Ajax methods to load content a webpage.
- How to use Ajax make a simple get request from a popular third-party API.
- Handle Ajax errors with jQuery and provide user feedback.

---

## Keywords

- Ajax
- JavaScript Object Notation (JSON)
- Application Programming Interface (API)

---

## Exercise 1

Your turn! Pull some data of your own from the GitHub API:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/yNJLgR/?height=268&theme-id=0&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/yNJLgR/'>yNJLgR</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

## Homework

You're going to build a simple form that fetches data from the OpenWeatherMap API to populate a webpage with the current Vancouver forecast as pictured:

![Weather widget prototype](/public/files/labs/ajax-lab.gif)

You're welcome to use either **Codepen** or a **code editor** to complete this assignment.

You'll be using a **GET** method to fetch data via Ajax from the following endpoint:

http://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca?q=Vancouver,ca&appid=4a48e1e1428fd83889074671fbf259d9

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

---

## Additional Resources

Complete documentation on GitHub API endpoints for getting data about users:

- [Users | GitHub API](https://developer.github.com/v3/users/)

An older article, but still good background reading on APIs:

- [The Increasing Importance of APIs in Web Development](https://code.tutsplus.com/articles/the-increasing-importance-of-apis-in-web-development--net-22368)

A handy tool for making a JSON string more readable by adding whitespace back into it if it has been removed:

- [JSON Pretty Print](http://jsonprettyprint.com/)

And some Chrome extensions that will automatically do the same thing when viewing JSON in the browser:

- [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)
- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc)

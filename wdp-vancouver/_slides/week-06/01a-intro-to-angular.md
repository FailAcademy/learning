---
layout: slidedeck
title: Intro to AngularJS Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to Angular

.inline-images[![Angular](http://angularconnect.com/perch/resources/angular.png)]

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is Angular?
2. Angular vs. jQuery
3. Conceptual overview
4. Project 4 overview

---
template: inverse

# What is Angular?

---
class: center, middle

.inline-images[
   ![Angles](http://www.mathsisfun.com/images/acuteangles.gif)
]

---

class: center, middle

### What Angular Is...

"AngularJS is a **structural framework** for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.

Angular's **data binding** and **dependency injection** eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology..."

*&mdash;AngularJS official documentation*

---
class: center, middle

### How It Helps...

"Angular is what HTML would have been, had it been designed for **applications**. HTML is a great declarative language for static documents. It does not contain much in the way of creating applications, and as a result building web applications is an exercise in **what do I have to do to trick the browser into doing what I want?**"

*&mdash;AngularJS official documentation*

---

# A Solution

The **impedance mismatch** between dynamic applications and static documents is often solved with:

- **Library** &ndash; a collection of functions which are useful when writing web apps. Your code is in charge and it calls into the library when it sees fit. (e.g., jQuery)
- **Framework** &ndash; a particular implementation of a web application, where your code fills in the details. The framework is in charge and it calls into your code when it needs something app specific. (e.g., Backbone, Ember, etc.)

---
class: center, middle

### What's an Angular App?

A structural framework for dynamic web apps.

---
template: inverse

# Angular vs. jQuery

---

# Some jQuery

In jQuery, we have to *capture* our DOM elements as jQuery objects first, in order to work with them. We call methods on these objects in order to get work done.

Most importantly, all of the logic for manipulating the DOM, showing, hiding, appending, etc. must be done from inside our JavaScript files!

```js
$('button').on('click', function(e) {
  var input = $('input').val();
  $('section').append('<li>The value is'+ input +'</li>');
});
```

---

# Look Ma, No JavaScript!

```html
<!DOCTYPE html>
   <!-- Add the ng-app directive to our html -->
   <html ng-app>
      <head>
      <title>Simple app</title>
      <script src="angular.js"></script>
   </head>
   <body>
       <!-- Add the ng-model directive to our element -->
       <input ng-model="name" type="text" placeholder="Your name">
       <!-- include the value of name in our page using {% raw %}{{ }}{% endraw %} -->
       <h1>Hello {% raw %}{{ name }}{% endraw %}</h1>
   </body>
</html>
```

Actually, there is JS at work here. Angular is watching our DOM for us, and applying the changes. Magic!!

---

class: center, middle

### What is this sorcery? Data-binding!

Elements in our HTML are **bound** to data in our code, and those elements change *automagically* when the data that they are **bound** to change.

---
class: center, middle

.large[
   Angular's internal code is **watching** for changes to our **model** and updating the value on the screen for us!
]

---

class: center, middle

### How do we display data that does not come from a user input?

.inline-images[
   ![Einstein](/public/img/slide-assets/einstein.jpg)
]

*Where else could our data come from?*

---

# The Controller

Declaring a controller on an element tells Angular that all of the elements inside belong to the controller you declare.

Now, we'll be able to add data-bindings for these elements somewhere in our code...in the controller!

```html
<!-- Add the ng-controller attribute for great good -->
<div ng-controller='NameController'>
  <input ng-model="name" type="text" placeholder="Your name">
  <h1>Hey, {% raw %}{{ name }}{% endraw %}</h1>
</div>
```

---

Extended example:

```html
<!DOCTYPE html>
   <html ng-app="helloName">
   <head>
      <title>Simple App</title>
      <script src="angular.js"></script>
      <script src="script.js"></script>
   </head>
   <body ng-controller="NameController">
      <!-- Add the ng-model directive to our element -->
      <input ng-model="name" type="text" placeholder="Your name">
      <!-- include the value of name in our page using {% raw %}{{ }}{% endraw %} -->
      <h1>Hello {% raw %}{{ name }}{% endraw %}</h1>
   </body>
</html>
```

```js
// script.js
var app = angular.module("helloName", []);

app.controller('NameController', ['$scope', function($scope){

   $scope.name = "Mackenzie";

}]);
```

---
template: inverse

# Conceptual Overview

---

# Exercise 1

Visit: https://docs.angularjs.org/guide/concepts

In groups, research 7 of the 14 concepts presented there. You'll be expected to present the concept as well as an explanation of where the concepts fits in with the rest of concepts you've chosen.

You're not expected to be experts, but similar to the frameworks exercise, do you best to be as thorough as possible.

---
template: inverse

# Project 4: <br />Mars Colony App

---

# What We've Learned

- What AngularJS is and how to add it to our web app
- How data-binding works (at high level)
- Key Angular concepts

---

template: inverse

# Questions?

{% endhighlight %}

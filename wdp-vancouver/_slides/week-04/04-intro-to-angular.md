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
2. Angular vs. JQuery
3. Conceptual overview
4. Introducing Project 4
5. Code School

---

template: inverse

#What is Angular?

---
class: center, middle

![Angles](http://www.mathsisfun.com/images/acuteangles.gif)

---

class: center, middle

"AngularJS is a **structural framework** for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's **data binding** and **dependency injection** eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology..."

.footnote[AngularJS official documentation]

---

class: center, middle

"Angular is what HTML would have been, had it been designed for **applications**. HTML is a great declarative language for static documents. It does not contain much in the way of creating applications, and as a result building web applications is an exercise in **what do I have to do to trick the browser into doing what I want?**"

.footnote[AngularJS official documentation]

---

"The *impedance mismatch* between dynamic applications and static documents is often solved with:

- **Library** - a collection of functions which are useful when writing web apps. Your code is in charge and it calls into the library when it sees fit. E.g., jQuery.
- **Framework** - a particular implementation of a web application, where your code fills in the details. The framework is in charge and it calls into your code when it needs something app specific. E.g., Backbone, Ember, etc.

.footnote[AngularJS official documentation]

---

class: center, middle

####What's an Angular App?
“A structural framework for dynamic web apps.”

---

template: inverse

#Angular vs JQuery

---

#Some JQuery

```js
$('button').on('click', function(e) {
  var input = $('input').val();
  $('section').append('<li>The value is'+ input +'</li>');
});
```
In JQuery, we have to *capture* our DOM elements as JQuery objects first, in order to work with them. <br>
We call methods on these objects in order to get work done. <br>
Most importantly, all of the logic for manipulating the DOM, showing, hiding, appending ... etc. must be done from inside our JavaScript files!

---

###Look ma, no JavaScript!

```html
<!DOCTYPE html>
  <!-- Add the ng-app directive to our html -->
  <html ng-app>
  <head>
  <title>Simple app</title>
  <script
  src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.js">
  </script>
  </head>
  <body>
    <!-- Add the ng-model directive to our element -->
    <input ng-model="name" type="text" placeholder="Your name">
    <!-- include the value of name in our page using {% raw %}{{ }}{% endraw %} -->
    <h1>Hello {% raw %}{{ name }}{% endraw %}</h1>
  </body>
</html>
```
Actually, there is JavaScript at work here. Angular is watching our DOM for us, and applying the changes. Magic!!

---

class: center, middle

####What is this sorcery?
#Data-Binding!
elements in our HTML are **bound** to data in our code, and those elements change *automagically* when the data that they are **bound** to changes!

---

class: center, middle

Angular's internal code is **watching** for changes to our **model** and updating the value on the screen for us!

---

class: center, middle

###How do we display data that does not come from a user input like `<input>`?

.inline-images[<img src="/public/img/slide-assets/einstein.jpg" alt="" width="400px">]

.footnote[Where else could our data come from?]

---

#The Controller

```html
<!-- Add the ng-controller attribute for great good -->
<div ng-controller='MyController'>
  <input ng-model="name" type="text" placeholder="Your name">
  <h1>Hey, {% raw %}{{ name }}{% endraw %}</h1>
</div>
```
Declaring a controller on an element tells Angular that all of the elements inside belong to the controller you declare.
<br>
Now, we'll be able to add data-bindings for these elements somewhere in our code... In the controller!

---
```html
<!DOCTYPE html>
  <html ng-app="helloName">
  <head>
  <title>Simple app</title>
  <script
  src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.js">
  </script>
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
<!-- script.js -->
var app = angular.module("helloName", []);

app.controller('NameController', ['$scope', function($scope){

    $scope.name = "Mackenzie";

}]);
```

---

template: inverse

#Conceptual overview

---

Visit: https://docs.angularjs.org/guide/concepts
<br>
In groups, research 7 of the 14 concepts presented there. You'll be expected to present the concept as well as an explanation of where the concepts fits in with the rest of concepts you've chosen.
<br>
You're not expected to be experts, but similar to the frameworks exercise, do you best to be as thorough as possible.

---
template: inverse

##Project 4 - Mars Colony App

---

class: center, middle
To reinforce what we just covered, visit [Code School](http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro) and complete the first video and the first challenge!

---

template: inverse

# Questions?

{% endhighlight %}

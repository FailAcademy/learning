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

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is Angular?
2. Angular vs. React vs. jQuery
3. Conceptual overview
4. Project 4 overview
5. Set up a dev env using Gulp

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

- **Library** &ndash; a collection of functions which are useful when writing web apps. Your code is in charge and it calls into the library when it sees fit. (e.g., jQuery, React)
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
  var inputValue = $('input').val();
  // Using jQuery, we update our DOM inside a javascript file ...
  $('h1').text('The value form the input is'+ inputValue +');
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
       <input ng-model="inputValue" type="text">
       <!-- include the value of name in our page using {% raw %}{{ }}{% endraw %} -->
       <h1>The value form the input is: {% raw %}{{ inputValue }}{% endraw %}</h1>
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
template: inverse

# Patience

---

# Exercise 1

Create a simple Angular application that manipulates some `ng-model` value, and display's the updated value to the user in an HTML document.

You've seen how this works using a simple text input.

Use the Angular documentation, and add update your view using: a **checkbox**, a **select menu** & **radio buttons** .

Use your imagination when creating your application, and don't be afraid to add a little css personlaity. Bonus points will be given for creativity!

---
class: center, middle
# Angular Controllers

*Controllers* in Angular are the means angular gives us for manipulating *Views* in our JavaScript applications.

---

### Angular Controllers

The following is an example of a simple controller, with some data bound to the magical `$scope` object!
Any data assigned to a property of the `$scope` object will be available in our HTML document, provided we link the controller to the DOM.

```js
// script.js
var app = angular.module("SimpleApp", []);

app.controller('ExampleController', ['$scope', function($scope){

   $scope.name = "Mackenzie";

}]);
```

---

### Angular Controllers

When we change the value of any properties assigned to the `$scope` object from our controller, the html will automagically change to reflect that change! This is called **2-way data-binding** and is one of ANgular's most important features. You'll use this pattern over and over again.

```js
// script.js
var app = angular.module("SimpleApp", []);

app.controller('ExampleController', ['$scope', function($scope){

   $scope.name = "Mackenzie";

}]);
```

---

Complete example:

```js
// script.js
var app = angular.module("helloName", []);

app.controller('NameController', ['$scope', function($scope){

   $scope.name = "Mackenzie";

}]);
```

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

---

### Best practice:

- It’s a best practice to not to set a primitive value (string, boolean, or number) directly on the
$scope of a controller. Data in the DOM should always be attached to an object
 `$scope.values = { name: "Mackenzie" /* ...etc  */ }`.

---

template: inverse

# First steps to creating an Angular app

---

### First steps to creating an Angular app

```js
var app = angular.module('MyNewApp', []);
```

The **module declaration** above has a very specific *signature*. It takes 2 *arguments*:
- The first is a *String* which will be the name of your application. It can be anything you like, but it should be something descriptive.
- The second argument is an empty *array*. This is required, and as we add other peoples modules to our application to augment functionality, we add them to this *array*.

---

### Modules all the way down

In Angular, it's good practice to separate your code into modules.
You can combine modules to add functionality to your application.

There are 3 important software development concepts at play here:
*Encapsulation*, *dependency injection*, and *separation of concerns*.

```js
// An application that encpsulates some utility functions
var utils = angular.module('AppUtils', []);

// We can include it in our main application:
var app = angular.module('MyNewApp', ['AppUtils']);

```

---
template: inverse

# Exposing functionality from Angular Modules

---

### Exposing functionality form Angular Modules

Let's expose some functionality form one module to another using Angular's simplest method: the **Factory**.

```js

var utils = angular.module('AppUtils', []);

app.factory('Baconator', [function(){
    // we'll return a simple object with some methods
    return {
      // some silly method about bacon
      addBacon: function(sentence){
        return sentence+' All the better with Bacon!'
      }
      // ...
    }
}]);

```

---

### Use our new module!

```js

// Create another module and inject our AppUtils module by name!
var app = angular.module('BaconSpeak', ['AppUtils']);

// Take note of Angular's unique Dependency injection syntax...
// $scope must always be injected!
// -------------------------------------------
// Because we injected AppUtils into our app, we have access to the
// 'Baconator factory' we created inside that module!
// -------------------------------------------
app.controller('BaconCtrl', ['$scope', 'Baconator',
    // put the function argument on a new line for neatness
    function($scope, Baconator){

    var words = "Hello, the weather is very cold."

    // We can use the addBacon method we created!
    $scope.sentence = Baconator.addBacon(words);

}]);


```

---
template: inverse

# Questions?

---
template: inverse

# Putting it all together

---

# Exercise 2

Create an Angular application that uses code from another Angular module (via *dependency injection*) to manipulate some `$scope` value and display's the updated value to the user in an HTML document. Hint: You'll use an Angular `controller`, and a `factory`.

Remember the best practice we mentioned: Don;t assign primitive values directly to your controller's `$scope`.
Instead use somehting like `$scope.values = { name: "Mackenzie" /* ...etc  */ }`

Again, add some css, bonus points for creativity!

---


template: inverse

# Project 4: <br />Mars Colony App

---

### What We've Learned

- What AngularJS is and how to add it to our web app
- How data-binding works (at high level)
- Key Angular concepts

---

template: inverse

# Questions?

{% endhighlight %}

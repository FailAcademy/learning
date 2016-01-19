---
layout: lesson
title: Intro to AngularJS
slides: ['_slides/week-06/01a-intro-to-angular.md']
date: 2016-02-22
---

## Pre-Work

Create a folder called *intro-to-angular* in your project directory.
Inside create 2 scratch files, one `index.html` and one `script.js`, and link the javascript file to the html file. 
We'll use this simple document to experiment with the code in this lesson.

---

## Learning Objectives

- Define what AngularJS is, and what role it plays in facilitating JS web app development.
- Define (at a high-level) a variety of essential Angular-related concepts.

---

## Keywords

<!-- - [Template](https://docs.angularjs.org/guide/concepts#template) -->
<!-- - [Directives](https://docs.angularjs.org/guide/concepts#directive) -->
- [Model](https://docs.angularjs.org/guide/concepts#model)
- [Scope](https://docs.angularjs.org/guide/concepts#scope)
<!-- - [Expressions](https://docs.angularjs.org/guide/concepts#expression) -->
<!-- - [Compiler](https://docs.angularjs.org/guide/concepts#compiler) -->
<!-- - [Filter](https://docs.angularjs.org/guide/concepts#filter) -->
- [View](https://docs.angularjs.org/guide/concepts#view)
- [Data Binding](https://docs.angularjs.org/guide/concepts#databinding)
- [Controller](https://docs.angularjs.org/guide/concepts#controller)
- [Dependency Injection](https://docs.angularjs.org/guide/concepts#di)
- [Injector](https://docs.angularjs.org/guide/concepts#injector)
- [Module](https://docs.angularjs.org/guide/concepts#module)
- [Service](https://docs.angularjs.org/guide/concepts#service)

---

## Exercise 1

Create a simple Angular application that manipulates some `ng-model` value, and display's the updated value to the user in an HTML document.

You've seen how this works using a simple text input. 

Use the Angular documentation, and add update your view using: a **checkbox**, a **select menu** & **radio buttons** .

Use your imagination when creating your application, and don't be afraid to add a little css personlaity. Bonus points will be given for creativity!

---

## Exercise 2

Create an Angular application that uses code from another Angular module (via *dependency injection*) to manipulate some `$scope` value and display's the updated value to the user in an HTML document. Hint: You'll use an Angular `controller`, and a `factory`.

Remember the best practice we mentioned: Don;t assign primitive values directly to your controller's `$scope`. 
Instead use somehting like `$scope.values = { name: "Mackenzie" /* ...etc  */ }`

Again, add some css, bonus points for creativity!

---

## Lab Activity

Spend your time familiarizing yourself with some basic Angular concepts to prepare for this weeks assignments.

First up, watch this video:

- [AngularJS Fundamentals In 60-ish Minutes](https://www.youtube.com/watch?v=i9MHigUZKEM)

Be sure to watch it right to the end, because it offers a very coherent explanation of the concepts we'll be covering over the next week.

Second, start working the following free tutorial on Code School:

- [Shaping up with Angular.js](https://www.codeschool.com/courses/shaping-up-with-angular-js)

Finish working through the Angular module on Code School (but you did that already, right? ;).

After that, it's time for more practice!

Codeacademy also as Angular tutorial to work through:

- [Learn AngularJS](https://www.codecademy.com/en/courses/learn-angularjs)

---

## Additional Resources

An essential edition to your browser's dev tools when building AngularJS apps:

- [AngularJS Batarang](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en)

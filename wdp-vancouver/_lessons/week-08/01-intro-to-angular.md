---
layout: lesson
title: Intro to AngularJS
slides: ['_slides/week-08/01-intro-to-angular.md']
lesson_date: 2016-05-30
---

## Pre-Work

Create a folder called *intro-to-angular* in your project directory.
Inside create 2 scratch files, one `index.html` and one `script.js`, and link the JavaScript file to the html file.
We'll use this simple document to experiment with the code in this lesson.

---

## Learning Objectives

- Define what AngularJS is, and what role it plays in facilitating JS web app development.
- Define (at a high-level) a variety of essential Angular-related concepts, including the following keywords.
- Create an Angular module to contain our Angular application, and link it to an HTML page using the `ng-app` directive.
- Use Angular's `ng-model` directive to display data in an HTML page.
- Create an Angular `controller` and link it to an HTML page using the `ng-controller` directive.
- Create a `factory` module with some functionality, and inject the  factory module into an Angular controller.

---

## Keywords

- [Model](https://docs.angularjs.org/guide/concepts#model)
- [Scope](https://docs.angularjs.org/guide/concepts#scope)
- [View](https://docs.angularjs.org/guide/concepts#view)
- [Data Binding](https://docs.angularjs.org/guide/concepts#databinding)
- [Controller](https://docs.angularjs.org/guide/concepts#controller)
- [Dependency Injection](https://docs.angularjs.org/guide/concepts#di)
- [Injector](https://docs.angularjs.org/guide/concepts#injector)
- [Module](https://docs.angularjs.org/guide/concepts#module)
- [Service](https://docs.angularjs.org/guide/concepts#service)

---

## Exercise 1

Create an Angular module, and link it to an HTML document using the `ng-app` directive.
Use the files you created in the pre-work as the starting point for his exercise.

---

## Exercise 2

Create a simple Angular application that manipulates some `ng-model` value, and display's the updated value to the user in an HTML document.
Use the Angular documentation, and add update your view using: a **checkbox**, a **select menu** & **radio buttons** .
Use your imagination when creating your application, and don't be afraid to add a little CSS personality. Bonus points will be given for creativity!

---

## Exercise 3

Create an Angular application that uses code from another Angular module (via *dependency injection*) to manipulate some `$scope` value.
Display the updated value to the user in an HTML document. Hint: You'll use an Angular `controller`, and a `factory`.

Remember the best practice we mentioned: Don't assign primitive values directly to your controller's `$scope`.
Instead use something like `$scope.values = { name: "Mackenzie" }`

Add some CSS! Bonus points for creativity!

---

## Lab Activity

Spend your time familiarizing yourself with some basic Angular concepts to prepare for this weeks assignments.

Start working the following free tutorial on Code School:

- [Shaping up with Angular.js](https://www.codeschool.com/courses/shaping-up-with-angular-js)

Finish working through the Angular module on Code School (but you did that already, right?).

After that, it's time for more practice!

Code Academy also as Angular tutorial to work through:

- [Learn AngularJS](https://www.codecademy.com/en/courses/learn-angularjs)

---

## Additional Resources

An essential edition to your browser's dev tools when building AngularJS apps:

- [AngularJS Batarang](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en)

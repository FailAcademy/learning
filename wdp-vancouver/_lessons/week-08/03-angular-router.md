---
layout: lesson
title: Using the Angular 2 Router
slides: ['_slides/week-08/03-angular-router.md']
lesson_date: 2016-06-01
---

## Pre-Work

- Review [this guide from MDN](https://developer.mozilla.org/en-US/docs/Web/API/History_API) about manipulating browser history and URLs using JavaScript.
- Review the [Routing & Navigation](https://angular.io/docs/ts/latest/guide/router.html) section of the Angular 2
documentation.
- Read the [Angular 2 documentation on Dependency Injection](http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html).
- Read about [Component styles](https://angular.io/docs/ts/latest/guide/component-styles.html) in the Angular 2 documentation.

---

## Learning Objectives

- Add Router Providers and Directives to our Angular 2 App and make them available to use in all Classes.
- Define the Dependency Injection pattern and how/why it is used in Angular 2.
- Use the Angular 2 router to render Components for specific URLs.
- Use Router Directives in Component Views to navigate to routes defined in your application.
- Navigate to defined routes by calling methods inside Component Classes, using the injected
router instance.
- Describe the Shadow DOM and it's role in styling Angular 2 Components.

---

## Keywords

- Dependency Injection
- pushState
- Route
- Provider
- Directive
- Shadow DOM

---

## Exercise 1

Install the Angular Router.

---

## Exercise 2

Generate a route for the homepage and add the `router-outlet` Component.

---

## Lab Activity

Now that we know how to create Routes. Use the angular-cli to generate all of the Route/Component pairs for the
views in our application. The CLI should add all of the necessary files and configuration for you!

The command you will use is `ng generate route home` **(use a unique name for each route)**. Run this from your projects root directory.

- Add a temporary navigation element, that uses the `routerLink` directive, to the main application Component to help you navigate between pages as you develop.
- Make sure you add all of the required form elements so that your app is ready for the next lesson in which you will
wire up our Data Models to form inputs and Service methods!


---

## Additional Resources

[Exellent blog post](http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html) all about Dependency Injection.<br/>
Learn about [all of the ways to style Angular 2 Components](https://scotch.io/tutorials/all-the-ways-to-add-css-to-angular-2-components).
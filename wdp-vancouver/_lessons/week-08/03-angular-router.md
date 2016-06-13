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
- Lifecycle Hook
- `pushState`
- Route
- Provider
- Directive
- Shadow DOM

---

## Exercise 1

Prepare to use the Angular Router.

1. Add the `ROUTER_PROVIDERS` to your application's bootstrap method.

2. Add the Angular Component [lifecycle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html) `ngOnInit` to your main application Component. 
We'll use this method to trigger rendering of the homepage Component when your application loads.

---

## Exercise 2

1. Run the `ng generate route` command for each of pages in our application, including the homepage.

2. Inject the `Router` Class into your main application Component. Use the `ngOnInit` method we defined
previously to trigger navigation to the first (homepage) route in your application.

<br/>
#### Note:<br/>
The Angular CLI may generate unwanted files. Pay close attention to the files that are generated as some could cause unexpected errors.

---

## Lab Activity

Now that we know how to create Routes. Use the Angular CLI to generate all the Route/Component pairs for the
views in our application. The CLI should add all of the necessary files and configuration for you!

1. Add a temporary navigation element, that uses the `routerLink` directive, to the main application Component to help you navigate between pages as you develop.

2. Make sure you add all the required form elements so that your app is ready for the next lesson in which you will
wire up our Data Models to form inputs and Service methods!

####Important:<br/>
1.  **Use a unique name for each route** when using the Angular CLI.

2. When you're done, and your routes are configured and working, start adding the markup to you components.
Be sure to complete all the HTML. You won't be able to complete the next lesson without it!

3. **If you decide to start writing CSS** make sure you look over the project requirements before starting!

---

## Additional Resources

[Exellent blog post](http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html) all about Dependency Injection.<br/>
Learn about [all of the ways to style Angular 2 Components](https://scotch.io/tutorials/all-the-ways-to-add-css-to-angular-2-components).
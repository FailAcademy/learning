---
layout: lesson
title: Intro to Angular 2
slides: ['_slides/week-08/01b-intro-to-angular.md']
lesson_date: 2017-05-30
---

## Pre-Work

### Software installation:

In today's class we'll begin to code an application using Angular 2. To make things easier we'll use the Angular command-line interface. Run:

`npm install -g @angular/cli`

We will also be using the TypeScript compiler to compile TypeScript code. Run:

`npm install -g typescript`

Install the TypeScript syntax package for your editor:

- [atom-typescript](https://atom.io/packages/atom-typescript)
- [TypeScript Plugin for Sublime Text](https://github.com/Microsoft/TypeScript-Sublime-Plugin)

Download [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en), install it, and create an account.

### Pre-reading:

Review the this basic TypeScript tutorial:

- [TypeScript - Quickstart](https://www.typescriptlang.org/docs/tutorial.html)

Take a look through the source code of this Angular 2 app:

- [TodoMVC - TypeScript](http://todomvc.com/examples/typescript-angular/#/)

---

## Learning Objectives

- Describe what API data contracts are.
- Explain the role AngularJS plays in facilitating web application development.
- Define TypeScript and why it is a useful subset of JavaScript.
- Use TypeScript annotations.
- Define a TypeScript Class.
- Generate an Angular 2 application using the `angular-cli` and explore the built-in functionality.
- Use the `angular-cli` to generate the routes, components, and services need for a basic application.

---

## Keywords

- Data-Contract
- Type
- Annotation
- Interface
- Decorator
- Component

---

## Exercise 1

Let's examine the API we'll be working with while building our Angular app.

[Download the API endpoints for use in Postman here](https://www.getpostman.com/collections/ce21c4877ee4eac2d7e3).

- Document the data contracts.
- What data needs to be sent (and in what format) for each request?
- What are the responses?

---

## Exercise 2

Implement a TypeScript Class to represent your class at RED. It should inherit from a Base Classroom Class.

- Your Class must have the appropriate Type Annotations.
- Your Class should implement a public property.
- Your Class should implement a public method.
- Your Class must inherit from a base class.

Your class should:

- Track if the course is active or not active
- Add students (if course is active)
- Remove individual students
- Find a student by ID
- List all students
- Update the attendance status of an individual student.

Use the TypeScript compiler to compile and run your code!

---

## Exercise 3

Implement the necessary interface for the class you created in Exercise 2:

- If your Class has methods, make sure you add them in your interface too.
- How do you *implement* a Class Interface?
- What if you don't know the type of data assigned to a property?

---

## Lab Activity

We've determined the data our application will be working with. For each model, create either a
TypeScript class or a TypeScript interface to represent each.

**Hint:** Use Interfaces to represent read-only data. Use classes to represent data that will be saved via forms in our application. Pay close attention to the data-contracts our API uses.

Add a file for each class/interface into `src/app/shared`.

Any time remaining in today's lab can be spent working on the other components of Project 5 that were discussed today.

---

## Additional Resources

More resources for learning TypeScript:

- Excellent [PluralSight course](https://www.pluralsight.com/courses/typescript) on TypeScript
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Typescript Examples Repo](https://github.com/Microsoft/TypeScriptSamples)

Some helpful Angular 2 resources:

- [Angular 2 Cheat Sheet](https://angular.io/cheatsheet)
- [Angular 2 QuickStart Documentation](https://angular.io/docs/ts/latest/tutorial/)
- [TODO MVC Angular 2](http://todomvc.com/examples/typescript-angular/#/)

---
layout: lesson
title: Intro to Angular 2
slides: ['_slides/week-08/01b-intro-to-angular.md']
lesson_date: 2016-05-30
---

## Pre-Work

In today's class we'll being to code an application using Angular 2.
To make things easier we'll use the Angular command-line interface.<br/>
Run `npm install -g angular-cli`

We will also be using the TypeScript compiler to compile TypeScript code.<br/>
Run `npm install -g typescript`

We will use a Yeoman TypeScript project generator to set up our exercises!<br/>
Run `npm install -g generator-node-typescript gulp-cli typings`

Install the TypeScript syntax package for your editor.

Download the TypeScript boilerplate project [here](https://www.dropbox.com/sh/avta0n6bk8lcz4r/AAD_WP6LblPzYlFaZT7syhlna?dl=1).

Download [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en). Install it and create an account.

**Look over the [Learn TypeScript](https://www.typescriptlang.org/) page.** (Official docs)<br/>
**Look over the code in [this example](http://todomvc.com/examples/typescript-angular/#/).** (Angular 2 TODO app!)

---

## Learning Objectives

- Understand API data-contracts.
- Define what AngularJS is, and what role it plays in facilitating JS web app development.
- Define TypeScript and why it is a useful subset of JavaScript.
- Use TypeScript annotations.
- Define a TypeScript Class.
- Implement a TypeScript Method Decorator.
- Implement a TypeScript Class Decorator.
- Implement a TypeScript Property Decorator.
- Implement a TypeScript Interface.
- Generate an Angular 2 application using the `angular-cli` and describe the built-in functionality.
- Use the `angular-cli` to generate the Routes, Components and Services we'll need for our application.

---

## Keywords

- Data-Contract
- Type
- Annotation
- Interface
- Decorator
- Component
- Promise
- Service

---

## Exercise 1

Let's examine the API we'll be working with while building our Angular app.
Download the API endpoints for use in Postman (here)[https://www.getpostman.com/collections/ce21c4877ee4eac2d7e3]
Document the data contracts. What data needs to be sent & in what format for each request? What are the responses?

---

## Exercise 2

Implement a TypeScript Class to represent our class at RED.
It should inherit from a Base Class Class.

- Your Class must have the appropriate Type Annotations.
- Your Class should implement a public property.
- Your Class should implement a public method.
- Your Class must inherit from a base class.

Your class should:

- Track if the course is active or not active.
- Add students (if course is active)
- Remove individual students
- Find a student by ID
- List all students
- Update the attendance status of an individual student.


Use the TypeScript compiler to compile and run your code!

---

## Exercise 3

Implement the necessary interface for the Class/Classes you created in Exercise 2.
If your class has methods, make sure you implement them in your interface too.

---

## Exercise 4

We've determined the data our application will be working with. For each model, create either a
TypeScript Class or a TypeScript Interface to represent each.

*Hint:*<br/>
Use Interfaces to represent read-only data. Use Classes to represent data that will be saved via forms in our application.
Pay close attention to the data-contracts our API uses.

Add a file for each Class/Interface into **src/app/shared**


---

## Exercise 5


To gain a better understanding of promises, code along these tutorial videos:

- [Introduction to promises](https://s3-us-west-2.amazonaws.com/red-wdp/lms-assets/Pluralsight-Introduction-to-promises.wmv)
- [Implementing promises in ES5](https://s3-us-west-2.amazonaws.com/red-wdp/lms-assets/Pluralsight-Implement-promises.wmv)

Knowing how promises work is essential for working with [*Async*](http://rowanmanning.com/posts/javascript-for-beginners-async/) code, like the API requests
we'll be making from inside our service classes.


---

## Lab Activity

Create all of the Service Classes and HTTP methods for our application.
- Be sure to use the appropriate data models and type information!
- All Services should be added to the **app/shared/services** folder.
- Create a file for each Service following our naming conventions (eg. alien.service.ts)

To test your your Services import them into the main component that was generated when you created your Angular application.
For example:

```js
// Other imports here ...

// Import Services
import { AlienService } from './shared/services/alien.service';
import { ColonistService } from './shared/services/colonist.service';

@Component({
  moduleId: module.id,
  selector: 'angular2-project-app',
  templateUrl: 'angular2-project.component.html',
  styleUrls: ['angular2-project.component.css'],
  // Add Services to our Component!
  providers: [AlienService, ColonistService]
})

// IMplements the OnInit Interface!
export class Angular2ProjectAppComponent implements OnInit {

  public title: string;

  constructor(
	  // Inject the Services into our Class!
	  private alienService: AlienService
	  private colonistService: ColonistService
	  ){
  }

  ngOnInit(){
	  // Call your Service methods here and console.log the result!
	  // Using promises!
	  alienService.getAliens().then( aliens => console.log(aliens))
  }
}

```

---

## Additional Resources

**TypeScript**<br/>
Excellent [PluralSight course](https://www.pluralsight.com/courses/typescript) on TypeScript. <br/>
[TypeScript Documentation](https://www.typescriptlang.org/). <br/>
[Typescript Examples Repo](https://github.com/Microsoft/TypeScriptSamples).<br/>

**Angular 2** <br/>
[Angular 2 Cheat-Sheet](https://angular.io/cheatsheet).<br/>
[Angular 2 QuickStart Documentation](https://angular.io/docs/ts/latest/tutorial/). <br/>
[TODO MVC Angular 2](http://todomvc.com/examples/typescript-angular/#/). <br/>

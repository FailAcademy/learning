---
layout: lesson
title: Async, Promises & HTTP in Angular 2
slides: ['_slides/week-08/02-async-promises-http.md']
lesson_date: 2017-08-23
---

## Pre-Work

Watch this video on Promises from Laracast's [ES2015 Crash Course](https://laracasts.com/series/es6-cliffsnotes):

- [13: Promises](https://laracasts.com/series/es6-cliffsnotes/episodes/13)

Also complete the following readings before class:

- [ES6 — promises](https://medium.com/ecmascript-2015/es6-promises-9ca8d8b4aca6#.hhgv28aep)
- [JavaScript Promises ... In Wicked Detail](http://www.mattgreer.org/articles/promises-in-wicked-detail/)

(And you will probably want to read them in that order!)

---

## Learning Objectives

- Describe what the CRUD pattern is.
- Explain what is means to use a REST application architecture.
- Implement Promise-based HTTP Requests using Angular's HTTP module.
- Display JSON data in component templates.
- Write async code using the Promise constructor with the `resolve` and `reject` handlers, as well as `then` and `catch` methods to read the results from a Promise once it is resolved or rejected.

---

## Keywords

- REST
- CRUD
- Service
- GET
- POST
- [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

## Exercise 1

Navigate to some websites with the network inspector open. Observe the HTTP requests and responses.

Take 15 minutes to answer the following:

- How can we observe information about HTTP activity?
- What HTTP verbs are commonly used?
- How do we observe HTTP information about requests our browsers are making?
- What are some different HTTP status codes for requests / responses?
- What are HTTP headers?
- How can we examine the contents of HTTP responses?

---

## Exercise 2

To gain a better understanding of promises, code along these tutorial videos:

- [Introduction to promises](https://s3-us-west-2.amazonaws.com/red-wdp/lms-assets/Pluralsight-Introduction-to-promises.wmv)
- [Implementing promises in ES5](https://s3-us-west-2.amazonaws.com/red-wdp/lms-assets/Pluralsight-Implement-promises.wmv)

Knowing how promises work is essential for working with [async](http://rowanmanning.com/posts/javascript-for-beginners-async/) code, like the API requests we'll be making from inside our service classes.

---

## Lab Activity

In today's lab, you will create all of the Service Classes and HTTP methods for our application:

- Be sure to use the appropriate data models and type information.
- All Services should be added to the `app/shared/services` folder.
- Create a file for each Service following our naming conventions (e.g. `alien.service.ts`)

To test your your Services, import them into the main component that was generated when you created your Angular application.

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
  // add Services to our Component
  providers: [AlienService, ColonistService]
})

// Implements the OnInit Interface
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

From the official Angular docs:

- [HTTP](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html)

More on promises in JS:

- [JavaScript Promises 101](https://bitsofco.de/javascript-promises-101/)
- [You're Missing the Point of Promises](https://gist.github.com/domenic/3889970)

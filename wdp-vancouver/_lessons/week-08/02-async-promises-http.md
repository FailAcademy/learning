---
layout: lesson
title: Async, Promises & HTTP in Angular 2
slides: ['_slides/week-08/02-async-promises-http.md']
lesson_date: 2016-08-23
---

## Pre-Work

---

## Learning Objectives

- Describe the CRUD pattern
- Introduce REST application architechture
- Implement Promise based HTTP Requests using Angular's HTTP module
- Display JSON data in Component Templates
- Write async code using the Promise constructor with the `resolve` and `reject` handlers, as well as `then` and `catch` methods to read the results from a Promise once it's resolved or rejected.

---

## Keywords

- REST
- CRUD
- Promise
- Service
- GET
- POST
- [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

##Exercise 1

Navigate to some websites with the network inspector open. Observe the HTTP requests and responses.
Take 30 minutes to answer the following:<br/>

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

---
layout: slidedeck
title: Intro to Angular 2 Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to Angular 2

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Introduce the Postman app, and the JSON API we'll be using to populate and persist data in our app.

2. Introduce TypeScript.

4. Introduce to Angular 2.

5. Begin to code our Angular 2 app!

---

# JSON API

You'll be using a custom *JSON API* to build parts of your project.
Install the Postman app if you have not already. Postman is a tool for making web requests (like a web browser).<br/>

### **Terminology to know:** <br/>
*JSON* <br/>
*API*<br/>
*Endpoint*<br/>
*GET request* <br/>
*POST request* <br/>

---

# Exercise 1

Let's look ar the API we'll be working with while building our Angular app.
Download the API endpoints for use in Postman [here](https://www.getpostman.com/collections/ce21c4877ee4eac2d7e3).
<br/>
- Document the data contracts.
- What data needs to be sent & in what format for each request?
- What are the responses?

---
template: inverse

#TypeScript

---
class: center, middle

###TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

---
class: center, middle

![](/public/img/slide-assets/superset.jpg)

---

# Why TypeScript?

- It's JavaScript! (It's ES2015!), and backwards compatible with ES5.
- Helps build LARGE applications by improving **static verification**, using Types and Interfaces.
- All TypeScript functionality is optional!
- Static verification means better developer tools that make writing code safer and easier.

---


# TypeScript Intro

Let's Get familiar with TypeScript. We'll be using it a lot.
Watch the first 15 minutes of [this video](https://www.typescriptlang.org/) from the TypeScript website.


---

# The TypeScript Compiler

There is a command line compiler for TypeScript files.
To use the command line compiler to compile your TypeScript files. (See the pre-work for this lesson if you don't have this installed).
1. Your files must have the `.ts` extension (eg. hello.ts )
2. in the same directory as your file run `tsc hello.ts`. This will output an `hello.js` file in ES5.

---

# Type Annotations

Before:
```js
function greeter(person) {
    return "Hello, " + person;
}

const user = "Claudine B";

```

After:
```js
function greeter(person: string) {
    return "Hello, " + person;
}

const user = "Mikey C"
```

What if we assign an Array to user? What will happen?

---
class: center, middle

## Type Annotations

It's been said that **all programming is just transforming data**. 
Type Annotations help us write safe code by informing our program about what *type* of data we're expecting it to act on.
If you attempt to assign the incorrect type to the `const` in the previous example, your code editor should give you a warning!
This is **static analysis**. TypeScript helps catch errors in our code *before* execution!

(If you have not installed TypeScript in your editor, do it now - See the pre-work for this lesson).

---

# Classes in TypeScript

Classes in TypeScript are identical to Classes in ES2015. Here is an example of a TypeScript class:

```js
class Greeter {

	public greeting: string; // Public property

    constructor(message: string) { 
        this.greeting = message;
    }

    public greet() { // Public method
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

```

---
# Exercise 2

Implement a TypeScript Class to represent our class at RED.
It should inherit from a Base Class Class.
<br/>
See the lesson page for more deatils!

---

# TypeScript Interfaces

```js
// Example interface
interface ICar {
    engine: string;
    color: string;
}
```

TypeScript interfaces allow us to describe some data structure in out application. They are removed at runtime, and do not have any runtime performance costs.
They enable static analysis and make your programs more understandable.

---

# TypeScript Interfaces

```js
function greeter(student) {
    return `Hello ${person.firstname} ${person.lastname}`;
}

const student = { firstname: "Mack", lastname: "Knife" }
```

Consider the following code. We can use an interface to ensure that anyone who calls our greeter function will pass in the correct parameter.
In this case, for the function to work, it must be an Object with a `firstname` and `lastname` property. How is this done?

---

# TypeScript Interfaces

```js

interface Student {
	firstname: string,
	lastname: string
}

function greeter(student: Student) {
	// TODO: finish in your editor to see static analysis in action!
}

const student = { firstname: "Mack", lastname: "Knife" };

greeter(student);
```

Here is our `greeter` function implementing the Student Interface. This makes sure that anyone who uses your
greeter function will know exactly what data it needs to run without errors!

---

# Exercise 3

Implement the necessary interface for the Class/Classes you created in Exercise 2.
- If your Class has methods, make sure you add them in your interface too.
- How do you *implement* a Class Interface?
- What if you don't know the type of data assigned to a property?


---
template: inverse

# Angular 2
... is a development platform for building mobile and desktop web applications. You can write Angular apps in both
TypeScript, ES2015 or ES5! We'll be using TypeScript to code our Angular 2 Application.

---
# The Angular CLI

To generate our first Angular 2 application we'll use the Angular Command Line Interface (CLI).
The CLI will allow us to quickly generate all the files and folders we need to build the project, and it will
make sure that we are using **best-practice** conventions for our project's folder structure.

#### Generate a new Angular 2 project:
If you have the CLI installed (see lesson pre-work), from your project directory run the following command: <br/>
`ng create angular2-project`

---
template: inverse

# What was created?
(Hint: All the things)

---

###Single Page Applications (SPA)
Angular is a tool best suited for building BIG SPA's. What is an SPA? For our purposes we'll need to think about:

- **Modules** - Files where our code is written.
- **Components** - The basic building block of Angular 2 Applications.
- **Routes** - Code that maps URLs to specific Angular Components.
- **Services** - Code that performs some task not directly related to changing the user interface.

---

# The 'main' Module

The `main.ts` file in root of the **src/** folder is the first file that is executed when you run your application, 
and should contain the following code.<br/>

```js
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

/*
   The name of main application component may be different depending
   on the nae you provided when you ran the generator...
*/
import { Angular2ProjectAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2ProjectAppComponent);
```

---

# The Browser Platform

This import loads Angular's browser platform renderer. Angular 2 apps can be 'rendered' on a number
of different platforms (including, for example, iOS). Because we're building our app for the browser, we'll be
using Angular's browser platform renderer!
```js
import { bootstrap } from '@angular/platform-browser-dynamic';
```
When this method is called, Angular does what it needs to do to render your main application Component!

```js
bootstrap(Angular2ProjectAppComponent);
```

---
# `index.html`

Angular applications are composed of a *tree of Components*, with a single application Component
as the top-most parent. <br/>
The main application Component is 'rendered' into this element by the `bootstrap` method!
```html
 <angular2-project-app>Loading...</angular2-project-app>
```
The name of the element above is defined in the main application component in **src/app/[your component name].ts**
inside the `@Component` decorator. See if you can find it!

---
template: inverse

#Data First

---
#Application Data

If all programming is simply transforming data, then before we start writing our views (HTML / CSS),
the first thing we'll need to define is the data (Data Model) our application will be working with.
<br/>

### What are the data models?

---

# Modelling Data

Our application reads and writes data from a JSON API.
This is the data we'll need to model in our code to complete the application. Some data will come directly from the API and we don't modify it.
Other data will be created by us and sent to our API to be saved in the Database where our API's JSON data is stored.

---

# Modelling Data

**We'll create these models from user input**
- A Colonist
- An Encounter

**We'll read these from the API** (We'll also be reading a list of Encounters too, but we're already modelling these, above).
- An Alien
- An Occupation

---

# Exercise 4

We've determined the data our application will be working with. For each model, create either a
TypeScript Class or a TypeScript Interface to represent each.

Use Interfaces to represent read-only data. Use Classes to represent data that will be saved via user input (Hint: forms).
Pay close attention to the data-contracts used by the API.

Add a file for each Class/Interface into **src/app/shared**
We'll use a specific naming convention when creating files in out application: eg. **occupation.model.ts**


---
template: inverse

# Services

---

# Services

Now that our application knows about the data it's using, and the models have been determined in code. We'll now write
the code that will allow us to send and receive our models via the API.<br/>

- What type of data will we be sending 'over the wire' to our API.
- How do we describe the process by which data is sent and received?

---
# Services & REST

REST is an acronym:<br/>
**(RE)presentational (S)tate (T)ransfer**.
<br/>
<br/>
For our purposes, we can think of REST as: URLs which represent specific data / sets of data.<br/>
Additionally, the URLs we use mostly describe the data we expect.

For example:<br/>
A request to **http:// ... api/mars/aliens** returns a list of Aliens. <br/>
[Further reading ...](http://rest.elkstein.org/2008/02/what-is-rest.html)

---

# Services & REST

In our Angular app we'll create a *service* (Class) for each API endpoint, with methods for sending and receiving data to and from
the Webserver that accesses the stored data for our application.

---

# What's in a Service?

- Our services will make web requests using HTTP
- Since web requests could take an indefinite amount of time, they will be executed **asynchronously**. Meaning our application code
will not have to wait for the web request to finish before performing other tasks, but when it is finished, we can take some action in our code.
based on the result. To accomplish this we'll use something called a **Promise**.

---

# Exercise 5

To gain a better understanding of promises, code along these tutorial videos:
- [Introduction to promises](https://s3-us-west-2.amazonaws.com/red-wdp/lms-assets/Pluralsight-Introduction-to-promises.wmv).<br/>
- [Implementing promises in ES5](https://s3-us-west-2.amazonaws.com/red-wdp/lms-assets/Pluralsight-Implement-promises.wmv).

Knowing how promises work is essential for working with [*Async*](http://rowanmanning.com/posts/javascript-for-beginners-async/) code like the services we'll create.

---
template: inverse

# Our App's Services

---
This is our application's Alien Service:
```js
import { Injectable } from '@angular/core';
import { IAlien } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlienService {

	aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

	constructor(private http: Http){}

	getAliens(): Promise<IAlien[]> {

		return this.http.get(this.aliensUrl)
						.toPromise()
						.then(response => response.json().aliens)
						.catch(this.handleError);
	}

 	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
```
---
template: inverse

# A Closer Look

---
# Imports

Let's break our new Service down, line by line:
```js
import { Injectable } from '@angular/core';
import { IAlien } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
```
These are the modules we'll need to create the service.

---
# `@Injectable` Decorator

```js
import { Injectable } from '@angular/core';
```
Angular 2 uses a software development pattern called dependency injection. Dependency Injection allows the developer to explicitly define what other modules will
be used when implementing Classes....<br/>
If you want to use a Class that you've written inside an Angular component, you'll need to add the `@Injectable` 'Decorator'.

**More on this later...**
---
# Our Data Model

```js
import { IAlien } from '../models';
```

Here we're importing the interface to our data. Since it is read-only, we're using an Interface instead of a Class. <br/>

- **Why are Interfaces useful?**

---

# Angular's `HTTP` Class

```js
import { Http, Headers } from '@angular/http';
```
We'll be making an HTTP request to our API endpoint. Angular 2 comes with a library of code that will help
us make these requests. (Similar to JQuery's `$.ajax` );

---

# `Promise` Utilities

```js
import 'rxjs/add/operator/toPromise';
```

This last line is required so we can transform our request into a Promise (Code that will run Asynchronously).
---
# Our Service Class

```js
@Injectable()
export class AlienService {

}
```

Our empty Class declaration will look like this. It's just a plain old Class that has been 'decorated' with the `@Injectable` Decorator.
Our class must also be **exported** so we can use it in other modules in our code.
---

# Static Properties

```js
@Injectable()
export class AlienService {
	aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
}
```

First, we'll add a static property to our class so we can store the URL we'll be using to make requests to out API endpoint.
---

# The Constructor

```js
@Injectable()
export class AlienService {

	aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

	constructor(private http: Http){}

}
```
Next, we'll add the Class Constructor function. Notice the parameter. What is happening here? <br/>
- We are declaring the this class will have a private (meaning not visible to other Classes) property named `http`.
- This property is and **instance** of Angular's `HTTP` Class. This is **Dependency Injection** at work.

---
# Dependency Injection

```js
constructor(private http: Http){}
```

When we add a service to our Classes inside the constructor like this,
Angular will **inject** it. In this case, an instance of the `HTTP` Class is injected and assigned to a property on our Service Class for us!
- We don't use constructors (the `new` function), all is taken care of behind the scenes by Angular!

*More on this later...*

---
# `GET` Method

```js
getAliens(): Promise<IAlien[]> {
	return this.http.get(this.aliensUrl)
					.toPromise()
					.then(response => response.json().aliens)
					.catch(this.handleError);
}

```
Finally, we define the Class method that makes HTTP requests to `GET` Aliens from our API!

---

# `GET` Method

```js
getAliens(): Promise<IAlien[]>

```

This syntax may look unfamiliar. It's TypeScript in action and should be read like this:
- The `getAliens` method will return a `Promise` which will eventually resolve (finish executing and then return)
a list of objects that conform to our `IAlien` interface. (A bunch of Alien objects, in JSON with the properties
we've specified in our `IAlien` Interface)!

---

# `GET` Method
```js
    return this.http.get(this.aliensUrl)
                    .toPromise()
                    .then(response => response.json().aliens)
                    .catch(this.handleError);
```
Given the explanation on the previous slide (Our 'typed' function's signature), we can now make assumptions about what this code does.<br/>
## ** What does this code do? **

---
Make a `GET` request to the URL specified.
```js
this.http.get(this.aliensUrl)
```
Transform the result of calling this method into a `Promise`.
```js
 .toPromise()
```
If the `GET` request succeeds, the `Promise` created by `toPromise` is resolved, 'then' return the response data.
```js
.then(response => response.json().aliens)
```
If the `GET` request fails, the `Promise` created by `toPromise` is rejected, catch the error and call the error handler method we've defined!
```js
.catch(this.handleError);
```
---
**Voila!**
```js
import { Injectable } from '@angular/core';
import { IAlien } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlienService {

	aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

	constructor(private http: Http){}

	getAliens(): Promise<IAlien[]> {

		return this.http.get(this.aliensUrl)
						.toPromise()
						.then(response => response.json().aliens)
						.catch(this.handleError);
	}

 	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
```
---
class: center, middle
# Service Pattern

### All of the Services in our application will follow a similar pattern.

---
#`POST` Request

In our application, we'll be performing `GET` and `POST` requests to our JSON API.
A `POST` request method follows a similar pattern as a `GET` request, except it must
include some data which we are sending to the server, and some description about that data
so the server knows how to process it.

---
# `POST` Request

Here is the method we'll define for creating (`POST`ing) a new Colonist. 
As you can see it's similar, besides the additional information we're sending with the request:
```js
newColonist(colonist: Colonist): Promise<Colonist> {


	let headers = new Headers({'Content-Type': 'application/json'});
	let body = JSON.stringify({ colonist });

	return this.http
			   .post(this.colonistsUrl, body, { headers: headers })
			   .toPromise()
			   .then(response => response.json().colonist)
			   .catch(this.handleError);
}

```
---

# Lab Activity

Create all of the Service Classes and HTTP methods for our application.
- Be sure to use the appropriate data models and type information!
- All Services should be added to the **app/shared/services** folder.
- Create a file for each Service following our naming conventions (eg. alien.service.ts)

---

template: inverse

# Questions?

{% endhighlight %}

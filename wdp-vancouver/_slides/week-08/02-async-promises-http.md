---
layout: slidedeck
title: Async, Promises & HTTP
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

#Async, Promises & HTTP in Angular 2

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Introduce CRUD nad REST

2. Introduce Services

3. Introduce Promises

4. Introduce Angular's HTTP module

5. Code the HTTP requests we'll use in our application!

---

layout: false

# Services

Now that our application knows about the data it's using, and the models are determined in code. We'll now write
more code that will allow us to send and receive models via the API, using JSON over HTTP.<br/>

- What type of data will we be sending 'over the wire' to our API.
- How do we describe the process by which data is sent and received?

---

#CRUD

CRUD is an acronym:<br/>
**(C)reate (R)ead (U)pdate (D)elete**.
<br/>
<br/>
This is the general pattern our application will use to operate on data from the API.
Specifically, our application will Create data and Read JSON data over HTTP. It will not update data, or destroy data.


---

#HTTP

HTTP is an acronym:<br/>
**(H)ypertext (T)ext (T)ransfer (P)rotocol**.
<br/>
<br/>
HTTP is the fundamental protocol of the internet!

---

# Services & REST

REST is an acronym:<br/>
**(RE)presentational (S)tate (T)ransfer**.
<br/>
For our purposes, we can think of REST as: URLs which represent specific data / sets of data.<br/>
Additionally, the URLs we use mostly describe the data we expect.

Finally, we'll be using HTTP verbs (`GET` & `POST`) that coincide with CRUD operations:

For example:<br/>
A request to **http:// ... api/mars/aliens** returns a list of Aliens. <br/>
[Further reading ...](http://rest.elkstein.org/2008/02/what-is-rest.html)

---

#Exercise 1

Navigate to some websites with the network inspector open. Observe the HTTP requests and responses.
Take 30 minutes and complete the questions on the lesson page!

---
template: inverse

# Services and REST

---

# Services & REST

In REST applications, we'll also pay close attention to our HTTP response codes. These are specific
codes determined by the HTTP protocol.

In our application, we'll take specific actions based on these codes.

---

# Services & REST

In our Angular app we'll create a *service* (Class) for each API endpoint, with methods for sending and receiving data to and from
the Webserver that accesses the stored data for our application.

---

# What's in a Service?

- Our services will make web requests using HTTP
- Since web requests could take an indefinite amount of time, they are executed **asynchronously**. Meaning our application code
will not have to wait for the web request to finish before performing other tasks, but when finished, we can take some action in our code.
based on the result. To do this we'll use something called a **Promise**.

---

# Exercise 2

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
# `GET` Request

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

# `GET` Request

```js
getAliens(): Promise<IAlien[]>

```

This syntax may look unfamiliar. It's TypeScript in action and should be read like this:
- The `getAliens` method will return a `Promise` which will eventually resolve (finish executing and then return)
a list of objects that conform to our `IAlien` interface. (A bunch of Alien objects, in JSON with the properties
we've specified in our `IAlien` Interface)!

---

# `GET` Request
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

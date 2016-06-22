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

# Questions?

{% endhighlight %}

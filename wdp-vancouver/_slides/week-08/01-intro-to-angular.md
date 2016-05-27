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

1. Introduce the Postman app, and the JOSN API we'll be using to populate and persist data in our app.

2. Introduce TypeScript.

4. Introduce to Angular 2.

5. Begin to code our Angular 2 app!

---

# JSON API

Install the Postman app if you have not already. Postman is a tool for making web requests (like a web browser).<br/>

### **Terminology to know:** <br/>
*JSON* <br/>
*API*<br/>
*Endpoint*<br/>
*GET request* <br/>
*POST request* <br/>

---

# Exercise 1

Let's examine the API we'll be working with while building our Angular app.
Download the API endpoints for use in Postman [here](https://www.getpostman.com/collections/ce21c4877ee4eac2d7e3).
<br/>
Document the data contracts. What data needs to be sent & in what format for each request? What are the responses?

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
- Helps build LARGE applications by improving 'static verification', using Types and Interfaces.
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

It's been said that **all programming is just transforming data**. Does this ring true for you?
Type annotations help us write safe code by telling the compiler what *type* of data we're expecting our program to act on.
If you attempt to assign the incorrect type to the `const` in the previous example, your code editor should give you a warning!
This is called **static analysis**. TypeScript helps catch errors in our code *before* execution!

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
They are designed to improve static analysis and make your programs more understandable.

---

# TypeScript Interfaces

```js
function greeter(person) {
    return `Hello ${person.firstname} ${person.lastname}`;
}

const user = { firstname: "Mack", lastname: "Knife" }
```

Consider the following code. We can use an interface to ensure that anyone who calls our greeter function will pass in the correct parameter.
In this case, for the function to work, it must be an Object with a `firstname` and `lastname` property. How is this done?

---

# TypeScript Interfaces

```js

interface Person {
	firstname: string,
	lastname: string
}

function greeter(person: Person) {
	// TODO: finish in your editor to see static analysis in action!
}

const user = { firstname: "Mack", lastname: "Knife" };

greeter(user);
```

Here is our greeter function implementing the Person interface. This ensures that anyone who uses your
greeter function will know exactly what data it needs to run without errors!

---

# Exercise 3

Implement the necessary interface for the Class/Classes you created in Exercise 2.
- If your Class has methods, make sure you add them in your interface too.
- How do you *implement* a Class Interface?


---
template: inverse

# Angular 2
... is a development platform for building mobile and desktop web applications.

---
# The Angular CLI

To generate our first Angular 2 application we'll use the Angular Command Line Interface (CLI).
The CLI will allow us to quickly generate all of the files and folders we need to build the project, and it will
ensure tha we are using best-practice conventions for our project structure.

#### Let's generate a new Angular 2 project:
If you have the CLI installed (see lesson pre-work), from your project directory run the following command: <br/>
`ng create angular2-project`

---
template: inverse

# What was created?
(Hint: All the things)

---

###Single Page Applications (SPA)
Angular is a tool best suited for building BIG SPA's. What is an SPA? For our purposes we'll need to think in terms of:

- **Modules** - Files where our code is written.
- **Components** - The basic building block of Angular 2 Applications.
- **Routes** - Code that maps URLs to specific Angular Components.
- **Services** - Code that performs some task not directly related to changing the user interface.

---

template: inverse

# Questions?

{% endhighlight %}

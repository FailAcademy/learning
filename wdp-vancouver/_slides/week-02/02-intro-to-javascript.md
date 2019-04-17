---
layout: slidedeck
title: Intro to JavaScript Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to JavaScript

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

???

**Important note to instructors:** This lesson should be carried out using the browser console, or Codepen, etc. Don't simply speak to the content on the slides—showing is better than telling! Be sure students code-along each example with you :)

---

layout: false

# Agenda

1. What is JavaScript?
2. JavaScript Basics
3. Using JavaScript on the Web
4. Operators and Control Flow
5. Functions
6. The DOM and Event Listeners

---

template: inverse

# What is JavaScript

---

class: center, middle

.large[
**HTML** &rarr; the content layer

**CSS** &rarr; the presentation layer

**JS** &rarr; the behaviour layer
]

---

class: center, middle

### What is JavaScript?

"JavaScript was introduced in 1995 as a way to add programs to web pages in **Netscape Navigator.** The language has since been adopted by **all** other major graphical web browsers..."

 <img style="margin: 0 auto; margin-top:1rem;" alt="Netscape Logo" src="https://i154.photobucket.com/albums/s254/veronicatoro84/logoanim.gif"/>

.footnote[–Marijn Haverbeke, Eloquent JavaScript]

???

Begin to bridge to JavaScript. Pause on this slide and go into as much detail as you like. Highlight anything else you know that is interesting about JavaScript, or the history of web development, browsers...etc.

---

# ES2015+

The name "**JavaScript**" refers to a collection of features defined by [**ECMA International**](https://www.ecma-international.org/memento/tc39.htm).

**ECMAScript** has gone through several iterations since 1995.

Browsers implement **ECMAScript** features—this is what we call **JavaScript**.

[**Not all browsers**](https://caniuse.com/#search=es6) implement a version of **JavaScript** that uses the most up to date features.

---

# JavaScript Changes

ECMA International is the standards organization in charge of publishing each new specification of ECMAScript:

| Year | Release         |
| ---- | --------------- |
| 1997 | ES              |
| 1998 | ES2             |
| 1999 | ES3             |
| -    | ES4 (abandoned) |
| 2009 | ES5             |

---

# JavaScript Changes

From 2015 ECMA International changed the naming convention and release schedule, there will be a new release every year named after the year

| Year | Release      |
| ---- | ------------ |
| 2015 | ES2015 (ES6) |
| 2016 | ES2016 (ES7) |
| 2017 | ES2017 (ES8) |
| 2018 | ES2018 (ES9) |

---

class: center, middle

### Why Learn JavaScript?

JavaScript and the web combined is a software platform with incredible power. Networked software distributed on the internet instantly reaches users across the planet!

Using JavaScript you can create just about anything, from 3D Games to operating systems! Learn JavaScript and you can make almost any software program you can imagine!

???

Consider sharing links with students of interesting, unexpected ways JavaScript can be used, e.g.:

- http://johnny-five.io/
- https://facebook.github.io/react-360/

---

template: inverse

# JavaScript Basics

---

class: center, middle

.large[
What is programming?
]

???

When we **program** we are simply writing a list of **instructions** for our computer to follow, in a language it will understand.

---

class: center, middle

.large[
What is a programming language?
]

???

It's an agreed-upon way to create instructions that a computer or other machine can understand.

JavaScript has its own set of rules for how to write instructions that the computer will understand as JS.

---

# What Is Syntax?

- Syntax is the set of rules or **grammar** of a particular programming language
- It sets the rules that determine how your code should be structured so computers can understand it
- A text-based language's syntax will permit specific combinations of letter, numbers, and symbols

---

# About Programming

Most programming languages share similar concepts, like:

- Variables
- Expressions (math & truth checking)
- Arrays (sometimes called lists)
- Objects
- Functions
- Loops

???

The syntax we use to express these things in a given programming language is where things get different and interesting.

---

class: center, middle

### Your Console, Your Friend

Because JS is "client-side" you can see it in your browser.

**Open your browser console:**

.large[
<strong>⌥ + ⌘ + i</strong>
]

---

# The Console

You can write it right in your browser too using the **console**:

.inline-images-border[
![Writing scripts in the console](../../public/img/slide-assets/console-screenshot.png)
]

You can also use the console to identify bugs in your JS code.

.inline-images-border[
![Error in the console](../../public/img/slide-assets/js-error-screenshot.png)
]

---

# Using console.log()

In JavaScript, we can use `console.log()` to print values into the **browser console**.

This helps us understand what particular values may be at specific points in your programs execution flow:

```js
console.log("hello!");
```

---

# Comments

We can add comments to our JS too:

```js
// Add a single line comment with 2 forward slashes

/*
   Add a multi-line comment like this...
   Commenting rules!
*/
```

**Review:** Comments are a powerful tool for helping you organize and understand your programs.

Comments are always hidden from execution in the script, and do not affect the output of the program.

---

# Variables

There are now three ways to declare variables in JavaScript:

- `var` (only option <= ES5)
- `let` (new with ES2015)
- `const` (new with ES2015)

`let` and `const` solve some common problems with variable declarations.

???

You can elaborate, but don't get too academic...

- `let` and `const` solve issues with hoisiting
- `let` and `const` solve issues with block-scoping variables
- `let` and `const` allows you to prevent redeclaration issues
- `const` allows you to prevent _some_ reassignment issues

---

# Variables

This is what a **variable declaration** looks like in JavaScript:

```js
const color = "red";
const amount = 100;
const list = ["first", "second", "third"];
let result = amount * 10;
```

Variables defined with `let` can be reassigned:

```js
result = amount * 20;
```

???

Be sure to make sure students understand to only use `let` or `const` in their code (no vars!).

---

# Uninitialized Variables

We can **declare** variables, without assigning a value using `let`.

Unassigned variables automatically get the JavaScript value `undefined`.

```js
let a;
let b;
let c;

console.log(a); // logs "undefined"
```

---

# Variable Name Style

Make sure your variable names **describe** what they hold:

```js
const myVar = "Albatross"; // what would be a better name?
```

Use **camel case** for defining JS variables

```js
const firstName = "Anne"; // 🐫 🐫 👍
```

Variables **can't start with numbers**, , can only use the **dollar sign** and **underscore** special characters, and **shouldn't start with capital letters**:

```js
const 7up = "pop"; // syntax error
const _name = "Mary"; // OK!
const Name = "Bob"; // bad style :(
```

---

template: inverse

# Using JavaScript on the Web

---

# JavaScript in Webpages

To run JavaScript on your website, all you need is the `<script>` element:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Website</title>
  </head>
  <body>
    <!-- Your HTML content. -->
    <!-- <script> tag with the path to your JavaScript code -->
    <script src="./js/main.js">
      console.log("Hello, world!");
    </script>
  </body>
</html>
```

---

# JavaScript in Webpages

More likely though, you'll keep your JavaScript in a separate file:

```html
<script src="...path to your JavaScript file" />
```

And add it to the bottom of the `<body>` tag of your website:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Website</title>
  </head>
  <body>
    <!-- Your HTML content. -->
    <!-- <script> tag with the path to your JavaScript file -->
    <script src="./js/main.js"></script>
  </body>
</html>
```

---

# Include in the `<head>` or bottom of the page?

- You can include a `<script>` element in the `<head>` or anywhere inside the `<body>`
- The best practice is to put scripts right before the closing `<body>` tag to prevent them from blocking the rest of the page load
- But some scripts must go in the `<head>`...

???

- e.g. Analytics scripts often need to go in the head of the document

---

# What Is the DOM?

- The **Document Object Model** is the tree-like model of a webpage that a browser will store in memory.
- We can **traverse** the DOM to access different elements on a page using JavaScript (and jQuery too)

---

# What Is the DOM?

For example, take a typical HTML document:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Awesome Website</title>
  </head>
  <body>
    <div>
      <p class="intro">
        Welcome to my page! Thanks for stopping by.
      </p>
    </div>
  </body>
</html>
```

---

# What Is the DOM?

The visual representation of the DOM for this page would look something like this:

.inline-images[
![DOM diagram](/public/img/slide-assets/dom-diagram.svg)
]

---

# What Is the DOM?

- DOM nodes can be seen as being **parents**, **children**, and/or **siblings** to one another
- This is very important to keep in mind when we begin **traversing** the DOM (i.e. moving up and down through DOM nodes) using JS

---

# Exercise 1

Let’s map the DOM for the homepage of our project sites…

Take a piece of paper and map out in a tree-structure what the DOM looks like for your project site.

Be as detailed as you possibly can. When you’re done, pair up with a classmate and explain the design of your DOM diagram to them.

---

# The DOM (HTML in JS)

**How we work with the DOM in JS:**

.left-column[

.small[

`document.getElementById();`
`document.getElementsByClass();`
`document.getElementsByTagName();`
`document.querySelector();`
`document.querySelectorAll();`
`document.createElement();`
`element.appendChild();`
`element.innerHTML;`
`element.innerText;`
`element.setAttribute();`
`element.getAttribute();`
`element.addEventListener();`

]

]

.right-column[

<img style="position:relative; left: 150px;" src="/public/img/slide-assets/dom-methods-diagram.png" />
.footnote[Source: [MDN - Intro to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), Eloquent JavaScript]
]

???

**Be sure to clarify the following:**

- What is 'document'?
- What is 'element'?
- What are 'attributes'?

**Questions to ask:**

- What function (method) to use to get h1, p, body ...etc in the diagram
- What method is needed to modify h1, p, body ...etc.

**Demonstrate:**

How to use some of these methods on any webpage using the browser console.

---

# Accessing Elements

Let's say we want to update the message paragraph below:

```html
<body>
  <h1>Spot's Dog Grooming</h1>
  <p id="message">Welcome to Spots!</p>
  <script src="js/say-hello.js"></script>
</body>
```

We can use the `getElementById` method to target that `<p>`, and update it's content using the `innerHTML` property:

```javascript
// js/main.js

document.getElementById("message").innerHTML = "We love dogs!";
```

---

# Accessing Elements

We can also store the results of `getElementById` in a variable to make it faster and easier to re-use it for other purposes later:

```javascript
// js/main.js

const el = document.getElementById("message");
el.innerHTML = "We love dogs!";
el.className = "red"; // adds class name of "red" to the element
```

---

# Exercise 2

See the [lesson page](/lesson/02-intro-to-javascript/) for further instructions.

---

# Exercise Recap

JavaScript **statements** end with a ✨ `;` ✨

In the previous exercise we used the following code to **assign** a DOM element to a **variable** named `nameEl`:

```js
const nameEl = document.getElementById("name");
```

This is called **assignment** or **binding**. You can bind **all types of values** to variables. You choose the name of the variable, and use the `=` operator to bind a value to it:

```js
const number3 = 3;
const name = "Mackenzie";
const theNumberTen = 5 + 5;
```

???

May be worth noting that semi-colons are optional in ES2015+ (but recommended for beginners for organizing their code!).

Nice opportunity for a segue here between the last three variable examples and the next slide...

---

template: inverse

# Operators and Control Flow

---

# Primitives

When working with operators (as we'll see in a moment), we'll have to ensure that the values we are using in our expressions are appropriate.

That means numbers for math, strings for creating text, etc.

Primitive values include:

```js
"I am a String"; // string
"I am another string"; // string
42; // number
true; // boolean
false; // boolean
```

There are two other primitives in ES5: `undefined` and `null`

???

Note that we can use double or single quotation marks to make strings in JavaScript.

---

# Operators

Almost every programming language uses **operators**. Here are some useful categories of operators in JavaScript:

```js
// Assignment
let age = 0;
age += 21;

// Arithmetic
const timeToGrave = lifeExpectancy - age;

// Logical
const lucky = alive && well;
const answer = toBe || notToBe;

// Comparison
const balanced = work === life;
const inTheBlack = bills < income;
```

[_You can find a list of every JavaScript operator here._](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

???

Remember to call out the difference between `let` and `const` here.

---

# Arithmetic Operators

JavaScript has basic arithmetic operators:

`+`, `-`, `/`, `%` and `*`

In use:

```js
const quantity = 3 + 2;
const total = (4 - 1) * 3;
let totalAndOne = total++;
let totalMinusOne = total--;
```

_What will the above variables contain?_

---

# Arithmetic Operators

There are also special operators that allow us to **increment** or **decrement** a value:

```js
let i = 5;
i++;
```

```js
let i = 5;
i--;
```

Or find the remainder of an expression:

```js
const remainderOne = 10 % 3;
const remainderTwo = 6 % 2;
```

_What will the above variables contain?_

---

# Comparison Operators

We can also compare values and evaluate their result:

```js
3 > 2;

3 >= 2;

3 < 2;

3 == 2;

3 === "3";

3 != "3";

3 !== 2;
```

_What will the above expressions return?_

---

# Type Coercion

In JavaScript, certain **operations** can change the **type** of primitives.

Getting used to how JavaScript handles primitives is an important part of using the language, and also the cause of many bugs and frustrations for beginners.

Try this:

```js
const a = "42";
const b = Number(a);

console.log(a); // "42"
console.log(b); // 42
console.log(typeof a); // string
console.log(typeof b); // number
```

---

# Overloaded

In JavaScript, some operators have _2 jobs_. We call this **operator overloading**.

For example, the `+` and `+=` operators can add numbers, or **concatenate** strings and variables together:

```js
const age = 20 + 22;
let introduction = "I'm Ishmael, I am " + age + " years old.";
introduction += " Nice to meet you";

// What is the value of introduction?
```

???

Take a moment to highlight the choices to use `let` vs `const` again.

---

# Interpolation

As an alternative to **concatenation**, or template strings are string literals that allow **string interpolation**.

**ES5:**

```js
const name = "Bob";
var city = "Vancouver";
var description = name + " lives in " + city;
```

**ES2015:**

```js
const description = `${name} lives in ${city}`;
```

Note that the template literal is surrounded by **back-ticks** (not single or double quotes).

---

# Boolean on Me

In JS, there are two **boolean** values: `true`, and `false`.

```js
const awakeAfterCoffee = true;
const asleepBeforeMidnight = false;
```

In addition you can also create **truthy** and **falsey** values:

```js
// "Falsey" values
const currentBankAccount = 0;
const planForWorldPeace = undefined;
const noValue = null; // ...recall JS has null AND undefined 😎

// "Truthy" values
// ... Basically, anything that is not one of the above!
```

**[See this JavaScript truth table for reference.](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)**

???

Explain the difference between a `null` and `undefined` variable if this hasn't come up already.

---

# This is `!`Difficult

The **not** (`!`) **operator** turns any truthy or falsey expression into a boolean value (`true` /`false`) when applied.

.half-left-column[

```js
// All "truthy"
true;
{
} // Object
[]; // Array
42;
("foo");
new Date();
-42;
3.14;
-3.14;
Infinity;
-Infinity;
```

]
.half-right-column[

```js
// Now flipped to false
!true;
!{};
![];
!42;
!"foo";
!new Date();
!-42;
!3.14;
!-3.14;
!Infinity;
!-Infinity;
```

]
.footnote[Source: [MDN Glossary - Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)]

---

# Control Flow

The most common control flow is the conditional `if else` statement. Using `if` and `else` you can decide what code your program will run, depending on the **truthyness** or **falsiness** of a given statement, for example:

```javascript
// ...
const hungry = 9000;

if (hungry) {
  eat();
} else {
  doWork();
}
```

_What function will get called in this case?_

---

# More Examples

An `if` statement will only execute code if the **expression** or **value** you're checking is `true` or **truthy**:

```js
if (10 < 5) {
  console.log("Math!"); // Will this execute?
}
```

```js
// You'll often check if something is NOT (!) false or falsey.
const soupTemp = 0;

if (!soupTemp) {
  // reads like: "if NO soupTemp"
  console.log("Soup is frozen...");
} else if (soupTemp > 0 && soupTemp < 100) {
  console.log("Soup is too cold.");
} else {
  console.log("Just right?");
}
```

---

# The Ternary Operator

If you're `if` is simple and short, you may want to use the **ternary operator**.

Statements using the ternary operator use `?` and `:` to denote the branching condition, like so:

`[expression] ? [if true] : [if false]`

Example:

```js
let age = 0;
const isTrueAge = age === 42 ? true : false;
// What will be the value of isTrueAge?
```

---

template: inverse

# Functions

---

# What is a Function?

Functions are specific chunks code that you can use to **repeat a set of instructions**.

In other words, if you want your code to do something, you'll need to execute a function!

In JavaScript, **functions** are values and can be assigned to variables.

---

# What Are They For?

- Functions help us better organize our code
- Functions allow us to group together statements
- Functions allow us to only run certain steps in code when they are needed
- Functions can perform very complex work for us and provide us with a single value or multiple values afterword

---

# Creating a Function

We can store our function using a **variable name** in order to re-use later too:

```js
function add(a, b) {
  return a + b;
}
```

The `a` and `b` in parentheses are called **parameters**. They allow us to pass different **arguments** into the function whenever we use it.

Parameters are not required to create a function.

---

# How to Use a Function

But simply writing a function doesn't do much.

We need to **call**, or **invoke** (we can use either of these terms) it for it to do any work for us:

```js
// This is called "declaring" the function:

function add(a, b) {
  return a + b;
}

// This is called "calling", or "invoking" the function:

add(2, 2);
```

---

# How to Use a Function

The output of function is called it's **return value**. Our previous example returned the integer `4`.

Let's store the return value in a variable now, and write it out to the console:

```js
function add(a, b) {
  return a + b;
}

const twoPlusTwo = add(2, 2);

console.log(twoPlusTwo);
```

---

# Function Options

There are many ways to create functions in JavaScript:

```js
function myFunction() {
  // Function declaration
} // No semicolon!

const myFunction = function() {
  // Function expression
};

const myFunction = function namedFunction() {
  // Named function expression
};

const myFunction = () => {
  // Arrow function expression
};

(function() {
  // "IIFE" aka "Immediately invoked function expression"
})();
```

???

Briefly speak to the purpose and usefulness of each type of function, taking care to not get bogged down in the details of lexical binding of `this` with arrow functions yet... (more to come in the Functions lesson)

---

# Advanced Example

Basic JavaScript programs start with variable and function definitions at the top, and function calls below, like this one:

```js
// Define your variables
const soupTemp = 0;

// Define your functions
function checkSoupTemp() {
  if (!soupTemp) {
    console.log("Soup is frozen...");
  } else if (soupTemp > 0 && soupTemp < 100) {
    console.log("Soup is too cold.");
  } else {
    console.log("Just right?");
  }
}

// "Call" or "Invoke" the function to check on the soup!
checkSoupTemp();
```

---

# Use Arguments

Instead of declaring the `soupTemp` variable, we can pass it as an **argument** to our function. Making our function more useful!

```js
function checkSoupTemp(soupTemp) {
  if (!soupTemp) {
    console.log("Soup is 0deg, frozen...");
  } else if (soupTemp > 0 && soupTemp < 100) {
    console.log("Soup is too damn cold.");
  } else {
    console.log("Just Right?");
  }
}

// "Call" or "Invoke" the function to check on the soup!
checkSoupTemp(75);
```

???

Be sure to highlight the usefulness of using an argument here instead.

---

# Function Scope

**Arguments** are _local to the inside of the function_. Their value is not available outside. This is called **function scope**.

```js
function checkSoupTemp(soupTemp) {
  if (!soupTemp) {
    console.log("Soup is 0deg, frozen...");
  } else if (soupTemp > 0 && soupTemp < 100) {
    console.log("Soup is too damn cold.");
  } else {
    console.log("Just Right?");
  }
}
// soupTemp is out of scope, this will log "undefined"!
console.log(soupTemp);

// "Call" or "Invoke" the function to check on the soup!
checkSoupTemp(75);
```

---

# Function Return

The result of calling a function can be assigned to a **variable**. The function's `return` value can be used in your program:

```js
function checkSoupTemp(soupTemp) {
  if (!soupTemp) {
    return "Soup is 0deg, frozen...";
  } else if (soupTemp > 0 && soupTemp < 100) {
    return "Soup is too damn cold.";
  } else {
    return "Just Right?";
  }
}

// Invoke the function and bind the return value to a variable.
const result = checkSoupTemp(100);

// Print the result!
console.log(result);
```

---

# Ternary + Implicit Return

Arrow function expressions `() => ()` are special. They can return a value _implicitly_, without the need for the `return` keyword:

```js
const isTrueAge = (age, trueAge) => (age == trueAge ? "true" : "false");
const checkAge = isTrueAge(0, 42);
// What is the value of trueAge?
```

This syntax helps us realize the power of functions as values by giving us the ability to express value-functions with simple, readable syntax.

???

Show students how to write the (almost) equivalent code for this example using a regular function and explicit return.

Highlight the compactness!

---

template: inverse

# The DOM and Event Listeners

---

### More Than Clicks

```html
<button onclick="alert('Button clicked!');">Click here</button>
```

We can call JavaScript functions using the `onclick` attribute of an HTML element, this will run the function when the element is clicked. 

But there's a lot more that we can do to add interactivity to a webpage, and we can also use different syntax to accomplish this entirely in our JavaScript code!

???

**Segue:** Now that we know about the DOM and how to use functions etc., we can combine that knowledge to do more interesting things when a user interacts with our webpage.

---

class: center, middle

.large[
When we talk about an **event** in the context of a website, what do we mean?
]

---

# Event Anatomy

The basic anatomy of an **event listener** in JavaScript is as follows:

- The target element to listen to
- The event we want to react to
- The actions to take in response

---

# Event Listeners in JS

And event listeners uses this basic syntax:

```html
<button id="click-here">Click here</button>
```

```js
// In a JS file...

const button = document.getElementById("click-here");

button.addEventListener("click", function(event) {
  console.log("You clicked a button!");
});
```

_Can you explain in words what each part of this code is for?_

???

_Relate the code to what they just say in words on the previous slide._

Be sure to highlight the `event` parameter in the callback function. And that we need to dig into exactly what a callback function is...

When discussing the various methods of listening to events:

- **event listener** refers to a function or object registered via `EventTarget.addEventListener()`
- whereas **event handler** refers to a function registered via `on...` attributes or properties.

---

# Callback Functions

The simplest way to write asynchronous code in JavaScript is to use the **callback** pattern.

In JavaScript we can pass functions as arguments to other functions, because **functions are values**.

**Simply put:** callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution

The function you pass into `addEventListener` as an argument is a callback, and the code inside of it **will only run when that event fires off** in the DOM.

---

# Exercise 3

See the [lesson page](/lesson/02-intro-to-javascript/) for further instructions.

---

# The Event Object

Every event handling callback function receives an **event object**, and this object has methods and properties of its own.

To access these methods and properties, we must pass in the event object as an argument for our function:

```js
const button = document.getElementById("click-here");

button.addEventListener("click", function(event) {
  // Code to run when button is clicked...

  // Log the event object to the console to see what's inside
  console.log(event);
});
```

???

- May need to quickly demystify variables/functions vs. properties/methods with objects, and reassure them that there's more come on this next week.

---

# The Event Object

_In plain English please?_

In all DOM event callbacks, JavaScript passes an event object argument which contains information about:

- when and where the event occurred
- what type of event it was-
- which element the event occurred on, etc.

_We can use this to our advantage!_

???

Run a sample of console logged event, dig thru the properties (target, etc)

---

# The Event Object

_And why exactly is this useful?_

Sometimes we want to attach events to HTML elements that already have default behaviours that we need to override.

For instance, you may want to attach a special click handler to an `<a>` that performs a different action than clicking through to a link (e.g. revealing a hidden `<div>`).

---

# The Event Object

The event object has a method that allows us to do this. That method is called `.preventDefault()`:

```html
<button id="click-here" type="submit">Click here</button>
```

```js
const button = document.getElementById("click-here");

button.addEventListener("click", function(event) {
  // Stop the default behavior on the button click
  event.preventDefault();

  // Now perform our custom button click actions here...
});
```

---

class: center, middle

.large[
One last (important) thing...
]

---

# Waiting for the DOM

Before we start interacting with the DOM, we want to make sure the browser has **fully constructed the DOM tree.**

For this reason, you will often see JavaScript wrapped in the following code:

```js
document.addEventListener("DOMContentLoaded", function() {
  // all of your JS code goes here
});
```

Wrap the code in your exercise file with this function now...but now there's a bug! Why did our code stop working?

???

**What this does:**

Waits until the DOM tree is constructed before the code executes.

Compared to:

```js
window.addEventListener("load", function() {});
```

Which waits until the DOM tree is constructed and all external assets are loaded.

**Fix the bug:**

We must declare the `isTrueAge`, `incrementAge`, and `resetAge` outside the `addEventListener` callback function scope, then just assign them inside the body of the callback now.

---

# What We've Learned

- How to write basic programs with JavaScript
- What the DOM is and use JS on webpage
- How to define variables, use operators, and use if statements
- How to declare and call functions
- How to add interactivity to a page with event listeners

---

template: inverse

# Questions?

{% endhighlight %}

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
2. Programming and JavaScript Basics
3. Using JavaScript on the Web
4. Operators and Control Flow
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

# What is JavaScript?

JavaScript shouldn't be confused with Java, they are completely different languages that happen to share a name. 

"JavaScript was introduced in 1995 as a way to add programs to web pages in **Netscape Navigator.** The language has since been adopted by **all** other major graphical web browsers..."

 <img style="margin: 0 auto; margin-top:1rem;" alt="Netscape Logo" src="https://i154.photobucket.com/albums/s254/veronicatoro84/logoanim.gif"/>

.footnote[–Marijn Haverbeke, Eloquent JavaScript]

???

Begin to bridge to JavaScript. Pause on this slide and go into as much detail as you like. Highlight anything else you know that is interesting about JavaScript, or the history of web development, browsers...etc.

---

# Why Learn JavaScript?

JavaScript allows us to create sophisticated interactive web applications and it powers much of the modern web. 

Traditionally it was only used for the front-end of websites but it now has a much broader utility and can be used for server-side applications, mobile apps and games.

Learn JavaScript and you can make almost any software program you can imagine!

???

Consider sharing links with students of interesting, unexpected ways JavaScript can be used, e.g.:

- https://threejs.org/examples/ 
- http://johnny-five.io/
- https://facebook.github.io/react-360/

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

template: inverse

# Programming and JavaScript Basics

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

class: center, middle

.large[
What is an algorithm?
]

???

It is a set of rules that precisely defines a sequence of operations. This includes computer programs but also can apply to any procedure (for example, baking a cake). Generally, a program is only an algorithm if it stops eventually

---

# What Is Syntax?

- Syntax is the set of rules or **grammar** of a particular programming language.
- It sets the rules that determine how your code should be structured using specific combinations of letters, numbers, and symbols so computers can understand it.
- Syntax is the symbolic representation of what you're trying to say, whereas **semantics** is the actual meaning of what you are saying.

???

Distinguish between syntax (the symbolic representation of what you're trying to say) and semantics (the actual meaning of what you are saying). Make a comparison to natrual language where "good morning" and "bonjour" have different syntax but convey the same semantics (if you understand both languages). 

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

You can write JavaScript in your browser too using the **console**:

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

This helps us understand what particular values may be at specific points in your program's execution flow:

```js
console.log("hello!");
```

---


# Variables

There are three ways to declare variables in JavaScript:

- `var` (only option <= ES5)
- `let` (new with ES2015) - use when variables can **change**
- `const` (new with ES2015) - use when variables are **fixed**

`let` and `const` solve some problems with variable declarations which exist when using `var`.

???

You can elaborate, but don't get too academic...

- `let` and `const` solve issues with hoisiting
- `let` and `const` solve issues with block-scoping variables
- `let` and `const` allows you to prevent redeclaration issues
- `const` allows you to prevent _some_ reassignment issues

Be sure to make sure students understand to only use `let` or `const` in their code (no vars!).

---

# Data types

JavaScript variables can hold different types of data. **Primitive** data types are the simplest. 

In JavaScript the primitive types are:

```js
"I am a string" // string
'I am also a string' // string
42 // number
true // boolean
false // boolean
```

Plus two other types: `undefined` and `null`

There are also **complex** data types (functions and objects) which have additional functionality. 

???

Note that we can use double or single quotation marks to make strings in JavaScript.

---

# Variable Assignment

This is what a **variable declaration and assignment** looks like in JavaScript:

```js
const city = "Vancouver"; // string
let temperature = 20; // number
let raining = true; // boolean
let fahrenheit = temperature * 1.8 + 32; // number
```

JavaScript has dynamic types, this means that the same variable can be used to hold different types of data. 

You choose the name of the variable, and use the `=` operator to assign a value to it. 

_Note: JavaScript **statements** end with a `;`_

---

# More On Variables

Variables defined with `let` can be **reassigned** whereas those using `const` are fixed:

```js
const city = "Vancouver"; 
let raining = true;

raining = false; // works
city = "Toronto"; // will display an error
```

We can also **declare** variables without assigning a value when using `let`. Unassigned variables automatically get the JavaScript value `undefined`.

```js
let height;
console.log(height); // logs "undefined"
height = 170; // value can be assigned later
```

???

Remind students that using const means we have to assign the value when the variable is declared

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

Variables **can't start with numbers**, can only use the **dollar sign** and **underscore** special characters, and **shouldn't start with capital letters**:

```js
const 7up = "pop"; // syntax error
const _name = "Mary"; // OK!
const Name = "Bob"; // bad style :(
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

Comments are used for **documentation** of our code and can also be used to make notes about what we are trying to do before writing the actual code, we call this **pseudocode**.

Comments are always hidden from execution in the script, and do not affect the output of the program.

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
    <!-- <script> tag including your JavaScript code -->
    <script>
      console.log("Hello, world!");
    </script>
  </body>
</html>
```

---

# JavaScript in Webpages

Usually though you'll keep your JavaScript in a separate file:

```html
<script src="./js/main.js" />
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

???

In this case the <script> tag should be left empty

---

# Include in the `<head>` or bottom of the page?

- You can include a `<script>` element in the `<head>` or anywhere inside the `<body>`
- The best practice is to put scripts right before the closing `<body>` tag to prevent them from blocking the rest of the page load
- But some scripts must go in the `<head>`

???

- e.g. A/B testing scripts often need to go in the head of the document

---

# What Is the DOM?

- The **Document Object Model** is the tree-like model of a webpage that a browser will store in memory.
- DOM nodes can be seen as being **parents**, **children** or **siblings** to one another.
- This is very important to keep in mind when we begin **traversing** the DOM (i.e. moving up and down through DOM nodes to access different elements) using JavaScript.

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

# Exercise 1

**Let’s map the DOM for the homepage of our project sites.**

Take a piece of paper and map out in a tree-structure what the DOM looks like for your project site (you probably want the paper in landscape orientation).

Think carefully about the parent / child relationship between nodes. 

When you’re done, pair up with a classmate and explain the design of your DOM diagram to them.

---

# Functions

In JavaScript we can call functions by typing their name and using parentheses to pass in any arguments. We've already seen this with `console.log` where `log` is the function. 

```js
console.log("Message to log"); // call console.log with a message
```

Functions don't have to have any arguments but you always need the parentheses. 

```js
myFunction(); // call myFunction with no arguments
```

---

# Properties 

Objects in JavaScript can have functions (more accurately called **methods**) and properties. 

You can access methods and properties of objects in JavaScript using **dot notation**. Again, we saw this with `console.log` (where `log` is a method on the `console` object).

```js
person.name = "James"; // the name property of the person object
person.sayName(); // the sayName method of the person object
```

---

# DOM Manipulation

There are lots of DOM methods and properties, we'll be using:

```js
document.getElementById();
document.getElementsByClass();
element.addEventListener();
element.innerHTML;
element.className;
```

**document** is an object for the HTML document that's currently loaded in the browser, it's the "Document Object" from DOM. 

Note that **innerHTML** and **className** are a properties, whereas the others are methods.

_How would we use innerHTML to update the HTML?_

???

**Be sure to clarify the following:**

- What is 'document'?
- What is 'element'?

**Demonstrate:**

How to use some of these methods on any webpage using the browser console.

---

# Accessing Elements

Let's say we want to update the message paragraph below using JavaScript:

```html
<h1>Spot's Dog Grooming</h1>
<p id="message">Welcome to Spots!</p>
<script src="js/main.js"></script>
```

We can use the `getElementById` method to target that `<p>`, and update it using the `innerHTML` and `className` properties:

```javascript
// js/main.js
let messageElement = document.getElementById("message")
messageElement.innerHTML = "We love dogs!";
messageElement.className = "red"; // add a class name to the element
```

---

# Simple Input & Output

Later we will look at using DOM manipulation to deal with input and output, for now we can use two simpler functions:

- `prompt` allows us to get information from the user (input)
- `alert` allows us to display information to the user (output)

```js
let name = prompt("Please enter your name");
alert("Hello " + name + " how are you?");
```

Try both of these in your console. 

Note that we can use the `+` operator to **concatenate** (or join) strings and variables together. 

---

# Interpolation

As an alternative to **concatenation** are string literals that allow **string interpolation**.

**Concatenation:**

```js
const name = "Bob";
const city = "Vancouver";
const description = name + " lives in " + city;
```

**Interpolation:**

```js
const description = `${name} lives in ${city}`;
```

_Note that the template literal is surrounded by **back-ticks** (not single or double quotes)._

---

# Exercise 2

See the [lesson page](/lesson/02-intro-to-javascript/) for instructions.


---

template: inverse

# Operators and Control Flow

---

# Operators

Almost every programming language uses **operators**. 

We'll look at operators for **assignment**, **logic**, **arithmetic** and **comparison**. 

[_You can find a list of every JavaScript operator here._](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

---

# Assginment Operators

We can use `=` to assign values.

```js
let age = 20;
let currentYear = 2019;
```

We can also combine arithmetic and assginment:

```js
age -= 10; // Subtract 10 from age and assign it to age
currentYear += 1; // Add 1 to currentYear and assign it to currentYear
```

---

# Logic Operators

Logical operators AND (`&&`), OR (`||`) and NOT (`!`) allow us to perform Boolean logic.

```js
const isSunny = false;
const isWarm = true;
const isRaining = true;

let eatIcecream = isSunny && isWarm; // Will this be true or false?
let takeJacket = !isWarm || isRaining; // Will this be true or false?
```

Note that **NOT** negates the true / false value.



???

`eatIcecream` will be false
`takeJacket` will be true

Remember to call out the difference between `let` and `const` here.

---

# Arithmetic Operators

JavaScript has 4 basic arithmetic operators: `+`, `-`, `/`, `*`

```js
let quantity = 3 + 2;
const price = 4;
let total = price * quantity;
let halfPrice = price / 2;
```

And 3 more advanced operators: `%`, `++`, `--`

```js
const totalMinutes = 150;
let minutesRemainder = totalMinutes % 60;
let totalPlusOne = total++;
let totalMinusOne = total--;
```

_What will the above variables contain?_

---

# Comparison Operators

We can also compare values and evaluate their result using `>`, `<`, `>=`, `<=`, `==`, `===`, `!=` and `!==`

```js
const age = 20;
const animal = "dog";
const completed = false;

let isChild = age < 13;
let isAdult = age >= 18;
let isCat = animal == "cat";
let isPending = completed != true;
```

_What will the above expressions return?_

---

# Double vs Triple Equals

When comparing things using `==` JavaScript will convert both sides of the comparison to be the same type. 

We can also perform a **strict comparison** using `===` (triple equals). This additionally checks the **type** of the values, whereas `==` (double equals) just checks the values. 

```js
true == 1; // true, because 1 gets interpreted as true
"2" == 2; // true, because the string "2" gets converted to a number
true === 1; // false
"2" === 2; // false
```


---

# Control Flow

The most common control flow is the conditional `if else` statement. 

Using `if` and `else` you can decide what code your program will run, depending on the **truthyness** or **falsiness** of a given statement, for example:

```javascript
const isMobile = false;

if (isMobile) {
  showMobileMenu();
} else {
  showDesktopMenu();
}
```

_What function will get called in this case?_

---

# More Examples

An `if` statement will only execute code if the **expression** or **value** you're checking is `true` or **truthy**:

```js
let temperature = 3;
if (temperature <= 0) {
  console.log("It's freezing!"); // Will this execute?
}
```

```js
// You'll often check if something is NOT (!) false or falsey.
if (!accountBalance) { // reads like: "if NO accountBalance"
  console.log("No money in your account");
} else if (accountBalance > 0) {
  console.log("You have money!");
} else {
  console.log("You're overdrawn");
}
```
_What will this output if `accountBalance` is `-10`, `0`, `20`?_


---

template: inverse

# The DOM and Event Listeners

---

# Onclick Attributes

```html
<button onclick="alert('Button clicked!');">Click here</button>
```

We can call JavaScript functions using the `onclick` attribute of an HTML element, this will run the function when the element is clicked. 

But there's a lot more that we can do to add interactivity to a webpage, and we can also accomplish this entirely in our JavaScript code without adding attributes throughout our markup!

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

Event listeners use this basic syntax:

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

Mention that event **handler** and event **listener** are just two terms for the same thing in JavaScript. 

---

# Callback Functions

Sometimes we don't want certain code to execute until something specific happens (e.g. an event on the webpage). 

The simplest way to write this **asynchronous** code in JavaScript is to use the **callback** pattern. This is where we pass functions as arguments to other functions, we can do this because **functions are values**.

The function we passed into `addEventListener` as the second argument is a **callback**, and the code inside of it **will only run when that event happens**.

???

Note that JavaScript is a synchronous, blocking, single-threaded language but can be made to behave in an asynchronous way (e.g. using callbacks, Promises, async/await).

---

# Exercise 3

See the [lesson page](/lesson/02-intro-to-javascript/) for further instructions.

---

# The Event Object

Every event handling callback function receives an **event object**, and this object has methods and properties of its own.

To access these methods and properties, we must pass in the event object as an argument for our callback function:

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

The event object contains information about:

- When and where the event occurred
- What type of event it was
- Which element the event occurred on, etc.

_We can use this to our advantage!_

???

Run a sample of console logged event, dig through the properties (target, etc)

---

# The Event Object

Sometimes we want to attach events to HTML elements that already have default behaviours that we need to override.

For instance, you may want to attach a special click handler to an `<a>` that performs a different action than clicking through to a link (e.g. revealing a hidden `<div>`). The event object has a `preventDefault` method that allows us to do this:

```js
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

???

**What this does:**

Waits until the DOM tree is constructed before the code executes.

Compared to:

```js
window.addEventListener("load", function() {});
```

Which waits until the DOM tree is constructed and all external assets are loaded.


---

# What We've Learned

- How to write basic programs with JavaScript
- What the DOM is and use JS on webpage
- How to define variables, use operators, and use if statements
- How to add interactivity to a page with event listeners

---

template: inverse

# Questions?

{% endhighlight %}

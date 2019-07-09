---
layout: lesson
title: Intro to JavaScript
slides: ['_slides/week-02/02-intro-to-javascript.md']
lesson_date: 2019-07-10
---

## Pre-Work

JavaScript takes time to learn. The more practice you get now, the better.

Before class today, sign into **[Free Code Camp](http://www.freecodecamp.com/map)** and **choose at least 10 challenges** from the the "Basic JavaScript" section to complete.

Stick to the lessons about strings and numbers first—we'll have plenty of time to work arrays and objects over the coming days.

---

## Learning Objectives

- Define what a "programming language" generally and what role JavaScript plays on a webpage.
- Load a JavaScript file into a webpage and execute the code inside.
- Define what the browser’s Document Object Model (DOM) is.
- Use built-in JavaScript methods to access DOM elements.
- Use binding assignment to store values in memory with variables.
- Use operators and expressions to perform calculations.
- Use statements and control flow.
- Use basic functions.
- Modify the structure of a webpage using JavaScript.
- Use event handlers to capture user interactions and change DOM elements.

---

## Keywords

- Variables
- Operators
- Statements
- Boolean Expressions
- Conditions
- Functions
- Document Object Model (DOM)
- Event Handler

---

## Exercise 1

Let’s map the DOM for the homepage of our project sites.

Take a piece of paper and map out in a tree-structure what the DOM looks like for your project site (you probably want the paper in landscape orientation).

Think carefully about the parent / child relationship between nodes.

When you’re done, pair up with a classmate and explain the design of your DOM diagram to them.
---

## Exercise 2

In this exercise we'll begin to build a simple "tap evolution" game using JavaScript and HTML.

Use JavaScript to add your creature's name to a `<h2>` tag:

Create a folder, add an `index.html` file (scaffold out all basic elements), add a `main.js` file, and add a `<script>` element as demonstrated

Now add this HTML to the `<body>` tag of your new webpage:

```html
<h1>Creature Name:</h1>
<h2 id="name"></h2>
```

Use this code to store the `<h2>` tag's **DOM element** in a **variable** named `nameEl`:

```js
const nameEl = document.getElementById('name');
```

What is `nameEl`? Try `console.log(nameEl)` to find out.

Next, you'll add your creature's name inside the `<h2>` tags using what you've learned so far.

---

## Exercise 3

You will help your creature evolve by clicking!

Add the following HTML to the code from the previous exercise:

```html
<!-- previous HTML above -->
<p>Current stage of evolution: <span id="evolution"></span></p>
<button id="evolve">Evolve</button>
```

And the following JavaScript to the top of `main.js`:

```js
const evolveBtn = document.getElementById('evolve');

let currentStage = 'Simple Spore';
let clicks = 0;

// Add the initial stage of evolution to the span id="evolution"

evolveBtn.addEventListener("click", function evolve() {
  // add 1 to the clicks variable
  // When the number of clicks reaches 10, add a second stage of evolution to the DOM!
  // You choose the name of each additional stage.
});

```

Now, first you'll need to replace the contents of `<span id="evolution"></span>` with the initial stage of evolution of your creature. Each time you click the "evolve" button you will keep track of the number of clicks by adding 1 to the `clicks` variable.
When the number of clicks reaches 10, add a second stage of evolution to the DOM.

---

## Lab Activity

Take a look at the [example of what we're going to build](https://redacademy.github.io/wdp-exercise-solutions/treeclicker/)

Modify the project you built during the lesson with the following functionality:

1. Create at least 5 stages of growth for your creature.
2. Transition between the different stages as you click the button. One stage for 10 or more clicks.
3. As your creature evolves, add some CSS using `element.style`
4. When your creature is fully evolved, you should `alert("Your creature has attained Saṃsāra.")`


If you finish this lab before the end of class, then continue working on Project 1.

---

## Additional Resources

More on the DOM from MDN:

- [What is the DOM?](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [DOM APIs on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

Other useful MDN resources for this lesson:

- [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [Type Conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion)
- [DOM on-event handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)
- [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [`GlobalEventHandlers.onsubmit`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit)

Great videos from Laracast's [ES2015 Crash Course](https://laracasts.com/series/es6-cliffsnotes) on declaring variables:

- [03: To Var, Let, or Const](https://laracasts.com/series/es6-cliffsnotes/episodes/3)
- [07: Template Strings](https://laracasts.com/series/es6-cliffsnotes/episodes/7)

Background reading on ES2015:

- [Learn ES2015](https://babeljs.io/docs/en/learn/#ecmascript-2015-features)
- [ES2015 browser compatibility chart](https://caniuse.com/#search=es6)
- [ECMA International website](https://www.ecma-international.org/memento/tc39.html)
- [ES6 Overview in 350 Bullet Points](https://github.com/bevacqua/es6)

Extra reading on ES2015 basics:

- [Variable and Function Hoisting in ES2015](https://bitsofco.de/variable-and-function-hoisting-in-es2015/)
- [Top ES2015 Features in 15 Minutes](https://kadira.io/blog/other/top-es2015-features-in-15-minutes)
- [Learn ES2015 (ES6/Harmony) Now!](http://learnharmony.org/)
- [ECMAScript 6 Learning](https://github.com/ericdouglas/ES6-Learning)
- [ECMAScript 2015: Let's talk about ES6](https://medium.com/ecmascript-2015)
- [ES6 for Humans](https://github.com/metagrover/ES6-for-humans)

A free online book about becoming a programmer:

- [How to be a Programmer: Community Edition](https://github.com/braydie/HowToBeAProgrammer/)

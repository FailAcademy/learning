---
layout: lesson
title: Intro to JavaScript
slides: ["_slides/week-03/02-intro-to-javascript-slides.md"]
lesson_date: 2019-04-23
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

Let’s map the DOM for the homepage of our project sites…

Take a piece of paper and map out in a tree-structure what the DOM looks like for your project site.

Be as detailed as you possibly can. When you’re done, pair up with a classmate and explain the design of your DOM diagram to them.

---

## Exercise 2

Use JavaScript to add your name to a `<p>` tag:

Create a folder, add an `index.html` file (scaffold out all basic elements), add a `main.js` file, and add a `<script>` element as demonstrated

Now add this HTML to the `<body>` tag of your new webpage:

```html
<h1>Hello</h1>
<h2>My name is: <span id="name"></span></h2>
```

Use this code to store the `<span>` tag's **DOM element** in a **variable** named `nameEl`:

```js
const nameEl = document.getElementById("name");
```

What is `nameEl`? Try `console.log(nameEl)` to find out.

Next, you'll add your name inside the `<span>` tags using what you've learned so far.

---

## Exercise 3

Add the following HTML to the code from the previous exercise:

```html
<!-- previous HTML above -->
<p>My age is: <span id="age">0</span></p>
<p>This information is correct: <span id="truth"></span></p>
<button onclick="incrementAge()">Increase Age</button>
<button onclick="resetAge()">Reset</button>
```

And the following JavaScript to the top of `main.js`:

```js
let age = 0;

const ageEl = document.getElementById("age");
const truthEl = document.getElementById("truth");

function isTrueAge(age, trueAge) {
  // we saw this in the slides...be sure to return true or false!
}

function incrementAge() {
  // add 1 to the current age
  // change the inner text of the age span to the new age
  // change the inner text of the truth span to be true or false
}

function resetAge() {
  // set the age back to 0
  // change the inner text of the age span to the reset age
  // change the inner text of the truth span to be true or false
}
```

Ultimately, you want to replace the age number with an incremented number each time you click the button that increments the age.

You also want to fill the empty span with "true" or "false" depending on whether the newly incremented age matches the true age.

To do this, replace each commented task above with a line of code that completes that task. You won't need to add anymore lines of code than what you see represented by the comments.

---

## Lab Activity (Next Class)

Modify the project you built during the lesson with the following functionality:

1. The age should be entered by the user, into a text input.
2. Ensure that the age entered is not negative, 0, or unrealistically high.
3. If the user enters an "invalid" age you should display a message, informing how to proceed.

Here is the additional HTML you'll need to add to your project:

```html
<!-- previous HTML above -->
<form id="updateForm">
  <h3>Update Form</h3>
  <label for="name">
    Name:
    <input type="text" id="name" />
  </label>
  <label for="age">
    Age:
    <input type="number" id="age" />
  </label>
  <button type="submit" disabled>Update</button>
  <p id="errorMessage" hidden>Age must be between 0 and 100</p>
</form>
```

Read **[these instructions](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit)** on how to use the `onsubmit` method for html forms.

Finally, here is the set-up for your `submit` event listener:

```js
const updateForm = document.getElementById("updateForm");
const errorMessageEl = document.getElementById("errorMessage");

updateForm.addEventListener("submit", function(event) {
  event.preventDefault(); // this is important here...why?

  // store the name input element in a variable
  // store the age input element in a variable
  // check if the error message element has an attribute of hidden


  if (/* is the age input value between 0 and a high number? */) {
    // set the true age to the value of the input now
    // reset the age
    // hide the error message element if it's visible right now
  } else {
    // set the error message element's hidden attribute to "hidden"
  }

  // use a if statement to check if there's a value in the name input
  // if there's a value, set the name text to the name input value now

  // update the truth span to correctly say true or false
});
```

Work step-by-step to convert each comment into a line of code. Working with the error message will likely be the trickiest part!

**How to be a programmer:** If you find yourself repeating the same lines of code in your program, think about how you could use a function to eliminate the duplication. When you duplicate logic, you increase the chances of creating bugs. Eliminating duplication is what good programmers do. It's a technique called **"Do not Repeat Yourself**, or **DRY**.

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

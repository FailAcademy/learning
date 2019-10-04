---
layout: lesson
title: JavaScript Objects
slides: ["_slides/week-03/01-javascript-objects.md"]
lesson_date: 2019-07-11
---

## Pre-Work

Read through [this article on JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) on MDN.

After reading the article, jot down a few notes about where you have see us use objects before in the previous lessons and on the first project. We'll discuss your findings at the beginning of class.

---

## Learning Objectives

- Create and modify a JavaScript objects.
- Access properties of an object and call its methods.
- Explain how prototypes work in JavaScript.
- Describe what a constructor is, and use it to create an "instance" of an object.

---

## Keywords

- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Object Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals)
- Property
- Method
- [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
- [Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
- Value vs. Reference
- [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

## Exercise 1

Using [JSBin](https://jsbin.com/?html,css,js,output), create an object to describe yourself. Be sure to include the following information:

- First name, last name, A URL to a profile image (can be any image), Your bucket list.
- Include as a property a list of 3 of your closest friends, with the same properties.

When you're done, use JavaScript to display everything in HTML and add some CSS.

For inspiration, think of a typical social network user page.

---

## Exercise 2

Using the `library` object from the previous example, finish implementing the logic for the `returnBook` and `close` methods.
Be sure to implement the following logic in your methods:

- You should not be able to return a book that is not lent
- The `open` property should be changed when you close the library
- _Anything else?_

```js
const library = {
  // YOUR OTHER CODE HERE...
  returnItem: function(id) {
    // check the book id is the lent property array
    // if it's there, remove that ID from the lent array
    // otherwise, log out 'This book was never borrowed.'
  },
  close: function() {
    // how do you flip the "open" property?
  }
};
```

Bonus challenge! Check to see if the library is open or closed before you allow a user to borrow or return a book.

You may also want to implement another method to re-open the library (or figure out how to open and close the library using only one method).

---

## Exercise 3

Refactor your previous `library` object to be created from the `Library` prototype instead.

This means you'll need to re-write the `returnItem` and `close` methods to belong to the `Library` prototype as well now too.

Once you re-write the methods, instantiate a new library with an inventory.

---

## Lab Activity

OK, it's time for some (advanced) fun.

Complete [this exercise](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice) for practice with
JavaScript objects. Doing so will be great practice for building a Pong game later on.

Along the way, make sure you stop to familiarize yourself with:

- What is the `<canvas>` element and what are its uses
- What is `requestAnimationFrame`?
- How is the special `prototype` property being used?

Make notes on each and we will review them at the beginning of next class.

---

## Additional Resources

MDN resources about objects:

- [A detailed breakdown of `this` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Details about the `new` operator on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [Object Prototypes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype#Examples)

Great video from Laracast's [ES2015 Crash Course](https://laracasts.com/series/es6-cliffsnotes) on new object features:

- [08: Awesome Object Enhancements](https://laracasts.com/series/es6-cliffsnotes/episodes/8)

More on value vs. reference:

- [JavaScript Reference and Copy Variables](https://hackernoon.com/javascript-reference-and-copy-variables-b0103074fdf0)
- [Grasp “By Value” and “By Reference” in JavaScript](https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293)

Resources on JavaScript prototypes:

- [Prototypes in JavaScript - FunFunFunction #16](https://www.youtube.com/watch?v=riDVvXZ_Kb4)
- [Prototypes in JavaScript](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b)
- [Prototype in JavaScript: it’s quirky, but here’s how it works](https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872)

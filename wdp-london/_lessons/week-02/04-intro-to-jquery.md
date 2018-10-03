---
layout: lesson
title: Intro to jQuery
slides: ["_slides/week-02/04-intro-to-jquery.md"]
lesson_date: 2018-10-12
---

## Pre-Work

Readings from _Learn to Code Advanced HTML & CSS_:

- [jQuery](http://learn.shayhowe.com/advanced-html-css/jquery/)

Also before class, familiarize yourself with jQuery by completing the free **[Try jQuery](http://try.jquery.com/)** course on Code School.

---

## Learning Objectives

- Write JavaScript in a `.js` file and add it to a webpage.
- Distinguish what jQuery is in relation to JavaScript.
- Define what the browser’s Document Object Model (DOM) is, and traverse it using jQuery methods.
- Manipulate the appearance of DOM elements using jQuery.

---

## Keywords

- Document Object Model (DOM)
- Method
- Traverse
- Chaining
- Events

---

## Exercise 1

Let's add an external JS file to our Project 1 directory, and include it in our `index.html` file for the project.

To make sure you've done it correctly, `console.log()` any string in the JS file, and make sure that it shows up in the console when you open the HTML file in your browser window.

---

## Exercise 2

Let’s map the DOM for the homepage of our project sites…

Take a piece of paper and map out in a tree-structure what the DOM looks like for your project site.

Be as detailed as you possibly can. When you’re done, pair up with a classmate and explain the design of your DOM diagram to them.

---

## Exercise 3

Using what you just learned about traversing the DOM and jQuery methods, come up with at least three unique solutions for changing the color of the text to red in the second `<p>` inside the `<article>` using jQuery only (no CSS!).

```html
<article>
   <p class="opening-line">The first line.</p>
   <p>The second line.</p>
</article>
<p>A line outside the article.</p>
```

You can complete this activity in a basic HTML file in a text editor of your choice (don't forget to include the jQuery library in the footer of your file), or in Codepen (be sure to go into the Settings for your pen and check off the box to add the jQuery library).

---

## Exercise 4

In this exercise, you're going create two click events&mdash;one that **adds another list item** to the list below, and one that **crosses off an item** in the list when its "done" link is clicked:

```html
<div class="list-editor">
   <ul class="my-list">
      <li>
         <span>My to-do</span> <a href="#" class="delete">[done]</a>
      </li>
   </ul>
   <input type="text" name="new-item" />
   <button>Add an item</button>
</div>
```

You'll need to think about traversing the DOM, and which of jQuery's methods you'll need to update the `<ul>` element's content.

You can complete this activity in a basic HTML file in a text editor of your choice (don't forget to include the jQuery library in the footer of your file), or in Codepen (be sure to go into the Settings for your pen and check off the box to add the jQuery library).

---

## Lab Activity

We’ll continue to work on Project 1 in today’s lab.

Your goal for today is to implement the required interactive elements to the website using jQuery.

---

## Additional Resources

A bookmark-worthy jQuery cheatsheet:

- [jQuery API Quick Reference](http://oscarotero.com/jquery/)

---
layout: lesson
title: Intro to jQuery
slides: ['_slides/week-07/02-intro-to-jquery-slides.md']
---

## Recommended Reading

From the JavaScript & jQuery textbook:

- Document Object Model (pp. 184-187)
- jQuery (pp. 296-331)

---

## Learning Objectives

- Understand what jQuery is in relation to JavaScript, and how to implement it on a website
- Learn what the browser’s Document Object Model (DOM) is, and how to traverse it using jQuery
- Use basic jQuery methods to manipulate the appearance of elements on a website

---

## Keywords

- Document Object Model (DOM)
- Method
- Traverse
- Chaining
- Event handling

---

## Exercise 1

Let's map the DOM for the homepage of our project sites...

Take a piece of paper and map out in a tree-structure what the DOM looks like for your project site.

Be as detailed as you possibly can. When you're done, pair up with a classmate and explain the design of your DOM diagram to them.

---

## Exercise 2

Let's try traversing the DOM to make some change to an HTML document:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/OVNjLB/?height=268&theme-id=0&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/OVNjLB/'>OVNjLB</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/VLazKX).

---

## Exercise 3

Try creating a function that listens for an click event on a link:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/VLazbx/?height=268&theme-id=0&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/VLazbx/'>VLazbx</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/RPaZgY).

---

## Homework

### Part 1

jQuery challenge time! For this homework activity, you're going create two click events&mdash;one that **adds another list item** to the list below, and one that **takes away the last item** in the list:

```html
<div class="list-editor">
   <ul class="my-list">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
   </ul>
   <button>Add an item</button>
   <button>Delete an item</button>
</div>
```

You'll need to think about traversing the DOM, and which of jQuery's methods you'll need to make to update the `<ul>` element's content.

You can complete this activity in a basic HTML file in a text editor of your choice (don't forget to include the jQuery library in the footer of your file), or in Codepen (be sure to go into the Settings for your pen and check off the box to add the jQuery library).

### Part 2

You second task is to research **jQuery plugins**. jQuery plugins are script files containing jQuery that other people have written and that you can include in your website to add extra functionality without having to write all of the code yourself first. For example:

- An image slider
- An accordion to dynamically show or hide content
- Animated filtering and sorting of content
- Interactive navigation behaviour

Your task is to find an example of an interesting jQuery plugin and bring a demo for your classmates showing how to use it.

---

## Additional Resources

Get extra practice with jQuery basics by completing this free Code School course:

- [Try jQuery](http://try.jquery.com/)

A bookmark-worthy jQuery cheatsheet:

- [jQuery API Quick Reference](http://oscarotero.com/jquery/)

---
layout: lesson
title: Animation with jQuery
slides: ["_slides/week-02/05-jquery-animation.md"]
lesson_date: 2018-10-16
---

## Pre-Work

Provided you finished the readings and Code School tutorial assigned in the previous lesson, there is no pre-work for this lesson.

---

## Learning Objectives

- Use jQuery animation methods to add dynamic behaviours to a webpage.
- Identify what jQuery plugins are for, and add one to a webpage.

---

## Keywords

- Effect methods
- Form methods
- Select menu

---

## Exercise 1

In this exercise, you're going to use jQuery to create an accordion-style show/hide effect for a basic FAQ list.

You're welcome to use either **Codepen** or a **code editor** to complete this exercise.

Using the mark-up below, write a jQuery script to selectively show or hide a particular answer when the question is clicked:

```html
<ul class="faq-list">
  <li>
    <a href="#" rel="acc-1">First question?</a>
    <p id="acc-1">This is the first answer.</p>
  </li>
  <li>
    <a href="#" rel="acc-2">Second question?</a>
    <p id="acc-2">This is the second answer.</p>
  </li>
  <li>
    <a href="#" rel="acc-3">Third question?</a>
    <p id="acc-3">This is the third answer.</p>
  </li>
</ul>
```

Try executing this effect in **two different ways**:

1.  The user must click the question to show the answer, and manually click it again to hide the answer (so multiple answers can be viewed at once)
2.  When the user clicks on a particular question to reveal the answer, all of the other questions' answers will be automatically re-hidden.

**Hint:** You'll want to use CSS to initially hide all of the answers.

---

## Exercise 2

We're not going to build a slider from scratch for Project 1 (phew!).

Instead, we will use a plugin called **[Flickity](http://flickity.metafizzy.co/)** to implement the product slider. To do that, you will need to **[install Flickity](http://flickity.metafizzy.co/#install)** and then **[initialize it with jQuery](http://flickity.metafizzy.co/#initialize-with-jquery)**.

Do this on your project now!

---

## Lab Activity

See the [Intro to jQuery](/lesson/intro-to-jquery/) for lab activity details.

---

## Additional Resources

Another great jQuery resource to read through:

- [jQuery Fundamentals](http://jqfundamentals.com/)

More on custom animation with jQuery:

- [A Guide to the jQuery animate() Method](http://www.sitepoint.com/guide-jquery-animate-method/)

Feeling ambitious? Try creating your own jQuery plugin:

- [Writing Your Own jQuery Plugins](http://blog.teamtreehouse.com/writing-your-own-jquery-plugins)

A more powerful animation tool which is almost identical to jQuery in terms of how you use it:

- [Velocity.js](http://velocityjs.org/)

Another animation tool worth bookmarking:

- [Greensock or GSAP](https://greensock.com/)

---
layout: lesson
title: CSS Best Practices
slides: ['_slides/week-05/01a-css-best-practices-slides.md']
---

## Recommended Reading

Some tips on writing good CSS (and HTML too):

- [Lesson 1: Performance & Organization](http://learn.shayhowe.com/advanced-html-css/performance-organization/)
- [Lesson 12: Writing Your Best Code](http://learn.shayhowe.com/html-css/writing-your-best-code/)

---

## Learning Objectives

- Apply the rules of CSS specificity in an informed, strategic way in a stylesheet.
- Implement CSS rules in a way that allow them to scale easily.
- Understand CSS best practices related to an object-oriented CSS approach.

---

## Keywords

- Specificity
- Object-oriented CSS

---

## Exercise 1

Let's experiment with CSS rule specificity:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/XbpXdG/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/XbpXdG/'>XbpXdG</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

## Exercise 2

Let's clean up some code with the best practices we just learned:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/BNpjxY/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/BNpjxY/'>BNpjxY</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/KpaVJJ).

---

## Homework

Time for a little code refactoring!

By now your work on Project 2 should be well underway, which makes this the perfect time to take a step back and see how you can **clean up your CSS a bit**.

First, **watch the video** where Nicole Sullivan (the pioneer of OOCSS) discusses strategies for writing efficient CSS and controlling code bloat:

<iframe src="https://player.vimeo.com/video/72759139" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p>

Based on what you learn from the lesson and Nicole's video, turn a critical eye toward your project's CSS to see what you can clean up and streamline.

Specifically, you want to:

- Make sure rules and properties are in a logical order
- Use CSS shorthand wherever possible
- Abstract repeated styles into a helper class, and apply the class where required in the HTML
- Add some comments to further organize your CSS, and for future reference

---

## Additional Resources

More on CSS specificity:

- [How CSS Specificity Works](http://sixrevisions.com/css/css-specificity/)

Tips to help keep CSS specificity in check:

- [Hacks for dealing with specificity](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/)

Test the specificity of the rules in your stylesheet, and view the results in a graph:

- [CSS Specificity Graph Generator](http://jonassebastianohlsson.com/specificity-graph/)

More reading on OOCSS:

- [An Introduction To Object Oriented CSS (OOCSS)](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

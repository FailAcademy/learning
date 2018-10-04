---
layout: lesson
title: CSS3 Properties
slides: ['_slides/07-css3-properties-slides.md']
---

## Pre-work

Some introductory reading on CSS transitions and transforms:

- [Lesson 7: Transforms](http://learn.shayhowe.com/advanced-html-css/css-transforms/)
- [Lesson 8: Transitions & Animations](http://learn.shayhowe.com/advanced-html-css/transitions-animations/)

---

## Learning Objectives

- Distinguish the difference between CSS2 and CSS3.
- Use CSS transitions to add simple animations to elements.
- Use CSS transforms to change the position of elements.
- Learn what properties are animatable using CSS3.
- Explore other CSS3 features such as border radius, box shadow, gradients, opacity, and multiple backgrounds.
- Apply the rules of CSS specificity in an informed, strategic way in a stylesheet.
- Implement CSS rules in a way that allow them to scale easily.

---

## Keywords

- [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
- [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [`opacity`](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
- [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [Specificity](https://developer.mozilla.org/en/docs/Web/CSS/Specificity)
- [Inheritance](https://developer.mozilla.org/en/docs/Web/CSS/Inheritance)
- Scalability
- Maintainability
- Modularity 

---

## Exercise 1

You may have noticed that there's a slight dark overlay over top of the banner hero image in the design comps for the project. We want to add this overlay to our site using code (i.e. we don't want to use an image editor to adjust the original image).

To do this we'll need to use a combination of CSS3 multiple backgrounds and a `linear-gradient` to enhance our banner's background image with the overlay.

Try adding this to your project now. 

*What other CSS3 properties will you need to use on your site?*

---

## Exercise 2

Take CSS transitions for a spin:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/ZGaMWE/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/ZGaMWE/'>ZGaMWE</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

## Exercise 3

Experiment with CSS3 transforms and transitions together:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/PqOgax/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/PqOgax/'>PqOgax</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

## Exercise 4

Time for a [specificity showdown!](http://codepen.io/redacademy/pen/VvmwoQ?editors=110).

---

## Homework

Continue working on your project for homework. Be sure to incorporate all of the required CSS3 properties now, and take a good look at your CSS to see you can clean it up based on what you've learned about CSS best practices.

---

## Additional Resources

Some CSS Tricks articles containing detailed explanations of how various CSS3 properties work:

- [Box-shadow](https://css-tricks.com/almanac/properties/b/box-shadow/)
- [CSS3 Gradients](https://css-tricks.com/css3-gradients/)
- [Opacity](https://css-tricks.com/almanac/properties/o/opacity/)
- [Stacking Order of Multiple Backgrounds](https://css-tricks.com/stacking-order-of-multiple-backgrounds/)

A primer on using CSS transitions:

- [Using CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions)

A helpful resource for determining browser support for various HTML and CSS features:

- [Can I use...](http://caniuse.com/)

A CSS3 gradient generator:

- [Ultimate CSS3 Gradient Generator](http://www.colorzilla.com/gradient-editor/)

A table outlining what CSS properties are animatable:

- [CSS Animatable Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

An online guide for writing scalable, maintainable, modular CSS:

- [MaintainableCSS](http://maintainablecss.com/)

Great CSS Tricks articles on CSS specificity:

- [Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)
- [A Specificity Battle!](https://css-tricks.com/a-specificity-battle/)

A tool for evaluating the CSS on your websites:

- [CSS Stats](http://www.cssstats.com/)

And an interesting implementation of CSS Stats:

- [CSS Purge](http://www.csspurge.com/)

Some well-known CSS frameworks for helping you organize your CSS:

- [Object-Oriented CSS (OOCSS)](http://oocss.org/)
- [Block Element Modifier (BEM)](http://getbem.com/)
- [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/)

Do you really need that class? Some tips on using ARIA roles and element selectors to write more meaningful CSS:

- [Meaningful CSS: Style Like You Mean It](http://alistapart.com/article/meaningful-css-style-like-you-mean-it)

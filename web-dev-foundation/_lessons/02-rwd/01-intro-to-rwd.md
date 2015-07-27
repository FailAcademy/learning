---
layout: lesson
title: Responsive Web Design
slides: ['_slides/02-rwd/01-intro-to-rwd-slides.md']
---

## Recommended Reading

From the HTML & CSS textbook:

- **Chapter 15: Layout** (pp. 378-386)

Some introductory reading on responsive web design:

- [Lesson 4: Responsive Web Design](http://learn.shayhowe.com/advanced-html-css/responsive-web-design/)

This article by Ethan Marcotte on A List Apart, which is widely credited with kicking off the responsive web design movement:

- [Responsive Web Design](http://alistapart.com/article/responsive-web-design/)

## Learning Objectives

- Explore what responsive web design (RWD) is, and how it differs from creating a “mobile-only” website
- Understand the difference between fixed, fluid, adaptive, and responsive websites
- Understand how to use a “mobile-first” approach to web development
- Use media queries to manipulate website styles at various "breakpoints"

## Keywords

- [Responsive web design](http://blog.teamtreehouse.com/modern-field-guide-responsive-web-design)
- [Media queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)
- [@media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
- [Mobile first](http://bradfrost.com/blog/web/mobile-first-responsive-web-design/)

## Exercise 1

Try converting a fixed layout to flexible layout:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/WvozXj/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/WvozXj/'>WvozXj</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/QbGmrM).

## Exercise 2

Write your first media query:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/OVvXWV/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/OVvXWV/'>OVvXWV</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/VLXjPR).

## Exercise 3

Time to try out creating mobile-first media queries for yourself:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/qdqoKG/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/qdqoKG/'>qdqoKG</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/LVbdXw).

## Lab Activity

In this lab activity, you're **refactor the CSS** code for a more complex fixed-width website and turn it into a responsive website **using mobile-first media queries**.

You can download the [website's source code here](/public/files/labs/rwd-lab.zip)

The breakpoints you want to optimize for are: `720px` and `1200px`.

**For our base CSS**:

- The website content should occupy one column
- The site title should be stacked over the navigation menu
- Only two gallery images should appear in a row

**At 720px**:

- The site title and the navigation menu should float left and right respectively (do you need to adjust the padding around the menu items or the `h1` size at this breakpoint to make them fit better?)
- The content area should break into two columns
- The `artcle` element's column should occupy 2/3 of the space and the sidebar should occupy 1/3 (don't forget about the margin to the right of the `article`!)
- Four gallery images should now appear in a row

**At 1200px**:

- The `artcle` element's column should occupy 3/4 of the space and the sidebar should occupy 1/4
- The website should look exactly as it did in the fixed-width version (do you need to reset any elements' CSS properties that you shrunk down to work with the narrower breakpoints?)

Don't forget to **change static units** `px` units into relative units like `em` and `%`!

## Additional Resources

Nine GIFs that explain the principles of responsive web design:

- [9 basic principles of responsive web design](http://blog.froont.com/9-basic-principles-of-responsive-web-design/)

A CSS Tricks article helps demystify how media queries work:

- [CSS Media Queries & Using Available Space](https://css-tricks.com/css-media-queries/)

A collection of responsive web design patterns and resources:

- [This is Responsive](http://bradfrost.github.io/this-is-responsive/)

A showcase of inspirational responsively designed websites:

- [Media Queries](http://mediaqueri.es/)

Confused about `em` vs. `rem`? Then read through this:

- [Comprehensive Guide: When to Use Em vs. Rem](https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984)

---
layout: lesson
title: CSS Layouts
slides: ['_slides/week-02/02-css-layout-slides.md']
---

## Recommended Reading

From the HTML & CSS textbook:

- Layout (pp. 358-376)
- Designing Navigation (pp. 470-471)
- Background color (p. 250)
- Background images (pp. 413-416)

## Learning Objectives

- Use HTML5 elements to structure the mark-up on a webpage.
- Use CSS positioning (static, relative, absolute, and fixed) to move elements around a webpage.
- Use CSS floats to manipulate elements, including list-based navigation menus.
- Use CSS background properties to set background colors or images.
- Understand what CSS resets are and why they are needed.

## Keywords

- [Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [Background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
- CSS Reset

## Exercise 1

Cure this website of its div-itis using HTML5 elements:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/doqVmo/?height=268&theme-id=0&default-tab=html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/doqVmo/'>doqVmo</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/OVoxvm).

## Exercise 2

Let's try out different kinds of positioning in CSS:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/mJwRxG/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/mJwRxG/'>mJwRxG</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/waegmZ)

## Exercise 3

Time to try using CSS floats to lay out a webpage:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/yNXgGO/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/yNXgGO/'>yNXgGO</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/xGrgmP)

## Exercise 4

Try implementing CSS backgrounds in three different ways:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/eNeKXr/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/eNeKXr/'>eNeKXr</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/doZKrB)

## Lab Activity

Back to our resumes again! This time we're going to **enhance the layout** of our resume using CSS.

Specifically, you want to:

- Add either `absolute` or `fixed` positioning to at least one element...perhaps you want to lock your name at the top of your resume when the page is scrolled?
- Use the `z-index` property on at least one element
- Use the `float` property on at least one element...perhaps float an image or the block containing your contact details (and don't forget about float clearing!)
- Add either a repeating or non-repeating background image to your resume (or an element within in it)

Finally, you need to **add a CSS reset** to your resume webpage. Does the reset affect any of your existing styles? Re-adjust your CSS properties where required.

Need help finding a repeating background image for your resume? Try [Subtle Patterns](http://subtlepatterns.com/) for some CC-licensed pattern images.

## Additional Resources

Some great CSS Tricks resources to further explain layout concepts:

- [All About Floats](https://css-tricks.com/all-about-floats/)
- [Quick Overview of CSS Position Values](https://css-tricks.com/video-screencasts/110-quick-overview-of-css-position-values/)
- [z-index](https://css-tricks.com/almanac/properties/z/z-index/)

And some CSS reset resources:

- [Eric Meyer Reset](http://meyerweb.com/eric/tools/css/reset/index.html)
- [normalize.css](http://necolas.github.io/normalize.css/)
- [Box Model Reset](https://sunnyis.me/blog/box-model-reset)
- [Pure CSS](http://purecss.io/)

More on the new semantically-named structural elements in HTML5:

- [HTML5 for Web Designers - Semantics](http://html5forwebdesigners.com/semantics/)

---
layout: lesson
title: CSS3 Transitions & Transforms
slides: ['_slides/week-03/04b-css-transitions-transforms.md']
lesson_date: 2016-07-22
---

## Pre-Work

Readings from *Learn to Code Advanced HTML & CSS*:

- [Lesson 7: Transforms](http://learn.shayhowe.com/advanced-html-css/css-transforms/)
- [Lesson 8: Transitions & Animations](http://learn.shayhowe.com/advanced-html-css/transitions-animations/)

---

## Learning Objectives

- Use CSS transitions to add simple animation to elements.
- Use CSS transforms to change the position of elements.
- Distinguish which properties are animatable (and which are not) using CSS3.
- Create keyframe animations in CSS.

---

## Keywords

- [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [`@keyframe`](https://developer.mozilla.org/en/docs/Web/CSS/@keyframes)

---

## Exercise 1

Choose your own adventure!

Open up a Codepen and try applying what you just learned about CSS3 transitions to create an interesting demo for the class.

Make sure you're applying your transitions to properties that are actually animatable!

---

## Exercise 2

Now try experimenting with CSS transforms and keyframe animations.

You're goal is to make a ball icon bounce when clicked:

![Keyframe bouncy ball animation](/public/files/exercises/keyframe-bouncy-animation.gif)

The easiest way to set this exercise up will be in a Codepen. Be sure to add the **[Font Awesome CDN link](http://fontawesome.io/get-started/)** to the CSS panel settings, and add **jQuery** to the JS panel settings.

Here's the HTML, CSS and JS you'll need to get started:

```html
<!-- The HTML set-up... -->

<div class="ball">
   <i class="fa fa-futbol-o fa-5x"></i>
</div>
```

```css
/* The CSS set-up... */

@keyframes bounce-me {

}

.ball {

}

.bouncy-bouncy {

}
```

```js
// The JS set-up...

$('.ball').on('click', function() {
   $(this).toggleClass('bouncy-bouncy');
});
```

Figuring out the rest of the CSS is up to you!

---

## Lab Activity

We’ll continue to work on Project 2 in today’s lab.

As you're working on your project this afternoon, keep in mind that you'll need to use CSS transitions if you're going for the animation stretch goal.

---

## Additional Resources

A list of all transition-able CSS properties:

- [Animatable Properties](http://www.w3.org/TR/css3-transitions/#animatable-properties-)

Some excellent tutorials and demos for learning about CSS transitions and transforms:

- [CSS3 = Awesome](http://css3.bradshawenterprises.com/)
- [3D Transforms](https://desandro.github.io/3dtransforms/)
- [Keyframe Animation Syntax](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)

A primer on using CSS transitions:

- [Using CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions)

Some CSS transition inspiration:

- [Animatable (by Lea Verou)](http://leaverou.github.io/animatable/)

A free ebook on CSS animations:

- [The CSS Animations Pocket Guide](http://valhead.com/book/)

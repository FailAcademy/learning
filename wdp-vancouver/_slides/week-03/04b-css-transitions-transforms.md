---
layout: slidedeck
title: CSS3 Transitions & Transforms Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# CSS Transition & Transforms

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. CSS Transitions
2. CSS Transforms
3. CSS Animations
4. Use Sass to go fast!

---
template: inverse

# CSS Transitions

---
class: center, middle

### Browser support for CSS Transitions

![CSS browser support](/public/img/slide-assets/browser-support-transitions.png) (Watch out for IE!)

---

# An Example

On the element you want to animate, add the following CSS:

```css
.my-awesome-div {
   -webkit-transition: all 1s ease-in-out 1.5s;
   -moz-transition: all 1s ease-in-out 1.5s;
   -o-transition: all 1s ease-in-out 1.5s;
   transition: all 1s ease-in-out 1.5s;
}
```

---

# The Syntax

**CSS Transition syntax consist of the following properties:**

- `all` : The property you want to animate <br>
- `1s` : The duration of your animation <br>
- `ease-in-out` : The 'timing function' of your animation <br>
- `1.5s` : Delay time, before the animation starts

---

# The Syntax

Each of these properties can be added individually:

```css
.my-awesome-div {
    transition: all;
    transition-duration: 1s;
    transition-timing-function: 'ease-in-out';
    transition-delay: 1.5s
}
```
.footnote[.red[* ] Vendor prefixes left out for brevity!]

---

# The Syntax

This allows us to create interesting animations of multiple properties:

```css
.super-div {
  transition-property: top, left, border-radius, background-color;
  transition-duration: 2s, 1s, 0.5s, 0.5s;
  transition-delay: 0s, 0.5s, 1s, 1.5s;
}
```

---

# The Syntax

To save space, we can write all of those transition properties in a shorthand format:

```css
a {
   padding: 5px 10px;
   background: #9c3;
   transition: background 0.3s ease 0.5s;
}
```

The transition values must be listed in the order of property, duration, timing function, and then delay.

---

# The Syntax

We can also use the `all` value to transition all of the animatable properties in the same way at once:

```css
a {
   padding: 5px 10px;
   background: #9c3;
   font-size: 12px;
   transition: all 0.3s ease 0.5s;
}

a:hover {
   background: #690;
   font-size: 16px;
}
```

---
class: center, middle

### What can be animated?

**[Animatable Properties](http://www.w3.org/TR/css3-transitions/#animatable-properties-)**

---

# Exercise 1

Choose your own adventure!

Open up a Codepen and try applying what you just learned about CSS3 transitions to create an interesting demo for the class. Be creative!

Make sure your applying your transitions to properties that are actually animatable.

---
template: inverse

# CSS Transforms

---
class: center, middle

.large[
   Transforms come in 2 flavours: <br />**2D** & **3D**
]

---

# Browser support

**2D Transforms:**
![2D transform support](/public/img/slide-assets/browser-support-2d-transforms.png)

**3D Transforms:**
![3D transform support](/public/img/slide-assets/browser-support-3d-transforms.png)

---

# Transform Values

The CSS transform property has special values you can apply to it. These are just a few:

- `translate(12px, 50%)`
- `scale(2, 0.5)`
- `rotate(0.5turn)`
- `skewX(30deg)`
- `skewY(1.07rad)`

---

# 2D Transforms

Here is the syntax for performing 2D transforms in CSS:

```css
.skew {
  transform: skew(35deg);
}

.scale {
  transform: scale(1,0.5);
}

.rotate {
  transform: rotate(45deg);
}

.translate {
  transform: translate(10px, 20px);
}

.rotate-skew-scale-translate {
  transform: skew(3deg) scale(.9, .9) rotate(4deg) translate(1px, 2px);
}
```

---

# 3D Transforms

These properties are the same as their 2D counterparts:

- `rotateX( deg )`, `rotateY( deg )`, `rotateZ( deg )`

The 3D functions are more complex require values for 3 dimensions:

- `rotate3d( x, y, z, deg )`
- `translate3d( x, y, z )`
- `scale3d( x, y, z )`

---

# Get 3D With It!

To activate 3D space, an element needs perspective. This can be applied in two ways&mdash;using the `transform` property, with the perspective as a functional notation.

`transform: perspective( 600px );`

**or**

`perspective: 600px;`

The perspective property should apply to the parent element. All Children will share the same 3D space.

.footnote[.red[* ] Vendor prefixes left out for brevity!]

---
class: center, middle

### What does perspective do?

The perspective property effects how the 3D transform will look. A larger perspective value will produce a less dramatic result. A smaller value produces a more dramatic 3D effect.

---
template: inverse

#CSS Animations

---
class: center, middle

###Browser support

![CSS browser support](/public/img/slide-assets/browser-support-css-animations.png)

---

# Try It!

```css
@keyframes resize {
  0% {
    padding: 0;
  }
  50% {
    padding: 0 20px;
    background-color:rgba(255,0,0,0.2);
  }
  100% {
    padding: 0 100px;
    background-color:rgba(255,0,0,0.9);
  }
}

.box {
  animation-name: resize;
  animation-duration: 1s;
  animation-iteration-count: 4;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}
```

---
class: center, middle

.large[
   You can create as many intervals and as many keyframes as you like!
]

---

# Exercise 2

**Create and demo Part 2...**

Now try experimenting with CSS transforms and keyframe animations.

Create a small demo in Codepen and be prepared share it with the class.

---

# What We've Learned

- How to use CSS transitions
- How CSS transforms work (both 2D and 3D)
- How CSS keyframe animation works

---
template: inverse

#Questions?

{% endhighlight %}

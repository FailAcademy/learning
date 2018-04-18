---
layout: slidedeck
title: CSS3 Transitions & Transforms Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# CSS Transitions & Transforms

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

???
##### Sass Review:
In partners check the lab tasks:
- Media query helpers
- Basic theme-ability, using Sass variables
- Separating your styles into Sass partials
- Sass compilation, minification, and auto-prefixing using Gulp
---
layout: false

# Agenda

1. Transitions
2. Transforms
3. Keyframe animation

---
template: inverse

# Transitions

---
class: center, middle

### Transitions Defined:

CSS transitions cause **changes to a property** (or multiple properties) and take place **over a ￼period of time**.



???
##### Emphasis steps:
1. There must be an element with a state change 
  - Ask for examples of some state changes (:hover, focus, active, etc)
2. Properties (with different values) must be defined on each state
3. Now apply the transition css property.

Examples: Button colour change on hover
---

# An Example

On the element you want to transition, you could add the following CSS:

```css
.my-awesome-div {
   transition: all 1s ease-in-out 1.5s;
}
```

This is the CSS **shorthand** for applying transitions to selectors.

???
- Note: vendor prefixes are needed currently for browser support.
---

# The Syntax

Let's unpack what each of those values are for:

```css
.my-awesome-div {
   transition: all 1s ease-in-out 1.5s;
}
```

- `all` : The **property** you want to animate
- `1s` : The **duration** of your animation
- `ease-in-out` : The **"timing function"** of your animation
- `1.5s` : **Delay time**, before the animation starts

---

# The Syntax

Each of these properties can be added individually too:

```css
.my-awesome-div {
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: 'ease-in-out';
    transition-delay: 1.5s
}
```

---

# The Syntax

We can also transition multiple specific properties for a selector at the same time:

```css
/* longhand syntax */

.super-div{
  transition-property: top, left, border-radius, background-color;
  transition-duration: 2s, 1s, 0.5s, 0.5s;
}

/* shorthand syntax */

.super-div {
   transition:
      top 2s,
      left 1s,
      border-radius 0.5s,
      background-color 0.5s;
}
```

---

# The Syntax

To save space, we typically use the shorthand format:

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

We use the `all` value to transition all of the animatable properties in the same way at once:

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

Use `all` with care as it may have unintended consequences and performance drawbacks.

---
class: center, middle

### What can be animated?

**[Animatable Properties](http://www.w3.org/TR/css3-transitions/#animatable-properties-)**

---

# Exercise 1

Choose your own adventure!

Open up a Codepen and try applying what you just learned about CSS3 transitions to create an interesting demo for the class. Be creative!

Make sure you are applying your transitions to properties that are actually animatable.

---
template: inverse

# Transforms

---
class: center, middle

### Transforms Defined

CSS transforms let you modify elements in their coordinate space. They can be **rotated**, **translated**, **scaled**, and **skewed**.

---
class: center, middle

.large[
   Transforms come in 2 flavours: <br />**2D** & **3D**
]

---

# Transform Values

The CSS `transform` property has special values you can apply to it. These are just a few:

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

The 3D functions are more complex and require values for 3 dimensions:

- `rotate3d( x, y, z, deg )`
- `translate3d( x, y, z )`
- `scale3d( x, y, z )`

---

# Get 3D With It!

To activate 3D space, an element needs perspective. This can be applied in two ways&mdash;using the `transform` property, with the perspective as a functional notation.

`transform: perspective( 600px );`

**or**

`perspective: 600px;`

The perspective property should apply to the parent element. All children will share the same 3D space.

---
class: center, middle

### What does perspective do?

The perspective property effects how the 3D transform will look. A larger perspective value will produce a less dramatic result. A smaller value produces a more dramatic 3D effect.

---

# Let's Play!

<iframe height='431' scrolling='no' src='//codepen.io/redacademy/embed/vKLzZX/?height=431&theme-id=0&default-tab=css,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

---
template: inverse

# Keyframe Animations

---
class: center, middle

### What are they for?

The `@keyframes` CSS at-rule permits fine-grained control over a CSS animation sequence.

---

# The Syntax

```css
@keyframes resize {
   0% {
      padding: 0;
   }
   50% {
      padding: 0 20px;
      background-color: rgba(255,0,0,0.2);
   }
   100% {
      padding: 0 100px;
      background-color: rgba(255,0,0,0.9);
   }
}

.box {
   animation-name: resize;
   animation-duration: 1s;
   animation-iteration-count: infinite;
   animation-direction: alternate;
   animation-timing-function: ease-in-out;
}
```

---

# The Syntax

We can also use shorthand when applying animation:

```css
.box {
   animation: resize 1s infinite alternate ease-in-out;
}
```

---

# Transform Origin

And we can specify a `transform-origin` to control how our animation is applied to an element (very helpful when paired with certain CSS transform properties):

```css
￼@keyframes swing {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(-10deg); }
}

#left-arm {
   transform-origin: top center;
   animation: swing 2s infinite;
}
```

The default `transform-origin` is `50% 50% 0` (i.e. `center center 0`).

---
class: center, middle

.large[
   You can create as many intervals and as many keyframes as you like!
]

---

# Exercise 2

Now try experimenting with CSS transforms and keyframe animations.

See the [lesson page](/lesson/04-css-transitions-transforms/) for more details.

---

# What We've Learned

- How to use CSS transitions
- How CSS transforms work (both 2D and 3D)
- How CSS keyframe animations works

---
template: inverse

#Questions?

{% endhighlight %}

---
layout: slidedeck
title: Animation with CSS Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

<!-- typed animation -->
<style type="text/css">
.typewriter h1 {
   position: relative;
   max-width: 450px;
   overflow: hidden; 
   border-right: .15rem solid red; 
   white-space: nowrap;
   margin: 0 auto;
   /* letter-spacing: .15em;  */
   animation: 
      typing 3.5s steps(30, end),
      blink-caret .5s step-end infinite;
}
/* typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
/* typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: red }
}
</style>

<div class="typewriter">
   <h1>CSS Animation </h1>
</div>
<!-- end of typed animation -->

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

CSS transitions **animate changes to properties** over a set period of time.

???
##### Emphasis steps:
1. There must be an element with a state change 
  - Ask for examples of some state changes (:hover, focus, active, etc)
2. Properties (with different values) must be defined on each state
3. Now apply the transition css property.

Examples: Button colour change on hover
---

# An Example

On the element you want to transition add a transition property:

```css
a {
   transition: all 1s ease-in-out 1.5s;
}
```

This is the CSS **shorthand** for applying transitions.

_**Note** that the transitions only work when a CSS property changes e.g. on **a:hover** the color may change and would transition._

???
- Note: vendor prefixes are needed currently for browser support.
---

# The Syntax

Let's take a closer look at each of the values:

```css
a {
   transition: all 1s ease-in-out 1.5s;
}
```

- `all` : The **property** you want to animate, e.g. `background`, `width`, `color` etc...
- `1s` : The **duration** of your animation
- `ease-in-out` : How **slow/fast** the animation **starts/ends**.
- `1.5s` : **Delay time**, before the animation starts

---

# The Syntax

Each of these properties can be added individually too:

```css
a {
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: 'ease-in-out';
    transition-delay: 1.5s
}
```

The same example written line by line, not shorthand.

---

# The Syntax

Note that all you really need to create a transition is the transition-duration:

```css
a {
   transition: 0.5s;
}
```

This will apply a transition to all properties of the `<a>` tag and would take **0.5 seconds** to animate.

_**Note:** the transition is applied to what's called the **"base-state"**. A base-state is the element without a psuedo-class e.g. `:hover`, `:focus` etc... These other states would be called things like: **"hover-state"** or **"focus-state"**._

---

# The Syntax

And here is how the transition is applied.

```css

a { /* base state, where you add transitions */
   transition: 0.5s;
   color: black;
   background: white;
}

a:hover { /* pseudo class, hover state */
   color: white;
   background: black;
}
```

*Note that the `<a>` tag has some colors applied to the "base state" and the pseudo-class `:hover` is changing these colors.*

<a href="#9" class="link-hover-example">Hover Me</a>
<style type="text/css">
a.link-hover-example {
   transition: 0.5s;
   color: black;
   background: white;
}

a.link-hover-example:hover {
   color: white;
   background: black;
}
</style>

---

# The Syntax

We use the `all` value to transition all of the animatable properties at once.
To only animate certain properties you can specify the rules you want to animate e.g.

```css
a {
   display: inline-block;
   padding: 10px;
   background: skyblue;
   transition: background 0.3s;
}

a:hover {
   background: coral;
}
```

*Using `all` can have performance drawbacks e.g. if you are animating too many things at once.*

---

# The Syntax

To animate more than one property you can separate each property and animations with a `,` comma.

```css
a {
   display: inline-block;
   padding: 10px;
   background: midnightblue;
   color: white;
   transition: background 0.3s, color 0.5s 0.3s;
}

a:hover {
   background: coral;
   color: black;
}
```

*Note the 2nd timing value for the **color**, this will add a **delay** before the transition will start.*

---

# The Syntax

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS Transition Example a:hover" src="https://codepen.io/redacademy/embed/Jjjyyyo?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/redacademy/pen/Jjjyyyo'>CSS Transition Example a:hover</a> by RED Academy
  (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Toggle Transition

You can also trigger an animation with jQuery by using `.toggleClass()`. Here is an example: 

```html
<button id="anim-toggle-btn">Toggle Transition</button>
<div class="box"></div>
```

```css
.box { 
   width: 100px; 
   height: 100px; 
   background: skyblue; 
   transition: 0.5s; 
}
.animated { background: coral; width: 200px; }
```

```js
$('#anim-toggle-btn').on('click', function(){
   $('.box').toggleClass('animated');
});
```

---

# Toggle Transition

jQuery 

<iframe height="400" style="width: 100%;" scrolling="no" title="jQuery Toggle Transition" src="https://codepen.io/redacademy/embed/bGGrrvM?height=265&theme-id=light&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/redacademy/pen/bGGrrvM'>jQuery Toggle Transition</a> by RED Academy
  (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Toggle Transition

Or with "Vanilla" JavaScript by using `.classList.toggle()`.

```html
<button id="anim-toggle-btn">Toggle Transition</button>
<div class="box" id="box"></div>
```

```css
.box { 
   width: 100px; 
   height: 100px; 
   background: skyblue; 
   transition: 0.5s; 
}
.animated { background: coral; width: 200px; }
```

```js
const animToggleBtn = document.getElementById("anim-toggle-btn");
const box = document.getElementById("box");

animToggleBtn.addEventListener("click", function(){
   box.classList.toggle("animated");
});
```

---

# Toggle Transition

JavaScript

<iframe height="400" style="width: 100%;" scrolling="no" title="JavaScript Toggle Transition" src="https://codepen.io/redacademy/embed/xxxLLzG?height=265&theme-id=light&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/redacademy/pen/xxxLLzG'>JavaScript Toggle Transition</a> by RED Academy
  (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: center, middle

### What can be animated?

**[Animatable Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)**

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

CSS transforms let you modify elements in their coordinate space, *where they are placed on the page*. 

They can be **rotated**, **translated**, **scaled**, and **skewed**.

![rotate, translate, scale, skew, example](/public/img/slide-assets/css-animation/css-anim-rot-trans-scale-skew.jpg)

---
class: center, middle

.large[
   The two types of transforms: <br />**2D** & **3D**
]

We suggest using 2D transforms however 3D can be interesting/challenging.

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

# 2D Transforms

Note that when using the `transform` property, all of your transforms need to be added to 1 rule e.g. the following will not work.

```css
.animated { /* does not work */
   transform: rotate(90deg);
   transform: scale(1.5);
   transform: translateX(20px);
}
```

Instead you would need to write:

```css
.animated { /* all transforms on one-line, works */
   transform: rotate(90deg) scale(1.5) translateX(20px);
}
```

---

# 2D Transform Example

<iframe height="450" style="width: 100%;" scrolling="no" title="jQuery Toggle Transition 2D Transform" src="https://codepen.io/redacademy/embed/PooKOeZ?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/redacademy/pen/PooKOeZ'>jQuery Toggle Transition 2D Transform</a> by RED Academy
  (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# 3D Transforms

These properties are the same as their 2D counterparts however more complex due to an added z coordinate:

- `rotateX( deg )`, `rotateY( deg )`, `rotateZ( deg )`

The 3D functions are more complex and require values for 3 dimensions:

- `rotate3d( x, y, z, deg )`
- `translate3d( x, y, z )`
- `scale3d( x, y, z )`

---

# 3D Transforms

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

# 3D Transform in Action

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS 3D Card Flip" src="https://codepen.io/redacademy/embed/OKRMQx?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/redacademy/pen/OKRMQx'>CSS 3D Card Flip</a> by RED Academy
  (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# 3D Transform in Action

Now try editing a few values e.g. see what happens when you... 

- edit `perspective: 1000px;` to be something smaller e.g. `perspective: 300px;`
- remove `backface-visibility: hidden;` and see how the animation is affected

---
template: inverse

# Keyframe Animations

---
class: center, middle

### What are they for?

The `@keyframes` CSS at-rule permits fine-grained control over a CSS animation sequence.

---

# Keyframe Animations

**Keyframes** are a common concept in animation. You create a starting point and ending point then fill in the in-between animation which is often called a tween.

<div style="display: flex; justify-content: center;">
   <img src="/public/img/slide-assets/css-animation/animationKeyframes.png">
</div>

---

# The Syntax

Here we have 3 keyframes, however you can have many.

```css
@keyframes resize {
   0% {/* keyframe */
      transform: scale(1);
   }
   50% {/* keyframe */
      transform: scale(1.5);
      background-color: rgba(255,0,0,0.2);
   }
   100% {/* keyframe */
      transform: scale(1) rotate(180deg);
      background-color: rgba(255,0,0,0.9);
   }
}

.box {
   animation: resize 3s infinite alternate ease-in-out;
}
```

---

# The Syntax

Note that if you only have 2 keyframes you can also write this with `from` and `to`.

```css
@keyframes resize {
   from {/* keyframe */
      transform: scale(1);
   }
   to {/* keyframe */
      transform: scale(2);
   }
}
```

---

# Keyframe Example

<iframe height="450" style="width: 100%;" scrolling="no" title="Whacky CSS Keyframes animation" src="https://codepen.io/redacademy/embed/GRRvQGw?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/redacademy/pen/GRRvQGw'>Whacky CSS Keyframes animation</a> by RED Academy
  (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Keyframe Example

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS Animation Keyframes Example 1. Transform" src="https://codepen.io/redacademy/embed/ZEEJaNR?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/redacademy/pen/ZEEJaNR'>CSS Animation Keyframes Example 1. Transform</a> by RED Academy
  (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Keyframe Example

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS Animated Header Background" src="//codepen.io/redacademy/embed/KOgNeK/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/redacademy/pen/KOgNeK/'>CSS Animated Header Background</a> by RED Academy
  (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Keyframe Example

There's a fair amount of CSS in the last example however one thing to note is the `forwards` value in the `animation property`. This will leave an animated element with the value being used in the last keyframe. Try removing the value `forwards` to see how this works.

---

# Exercise 2

Now try experimenting with CSS transforms and keyframe animations.

See the [lesson page](/lesson/02-animation-with-css/) for more details.

---

# What We've Learned

- How to use CSS transitions
- How CSS transforms work (both 2D and 3D)
- How CSS keyframe animations works

---
template: inverse

#Questions?

{% endhighlight %}

---
layout: slidedeck
title: CSS3 Properties Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# CSS3 Properties

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. CSS2 vs CSS3
2. Using CSS3 properties
3. Transitions
4. Transforms
5. CSS best practices

---
template: inverse

# CSS2 vs. CSS3

---

# A Bit of History

- First proposed in 1994
- CSS1 was released in late 1996
- CSS2 came out in 1998
- CSS2 usually means **CSS 2.1**
- CSS3 has been under development since 1998

---
class: center, middle

### What's the Difference?

The main difference between CSS2 and CSS3 is that it has a **broader variety of selectors.**

Many of these selectors allow you to implement designs and animations in the browser that were previously only possible using images and JavaScript.

---
class: center, middle

.inline-images[
   ![CSS levels](../../public/img/slide-assets/css-level-taxonomy.jpg)
]

---
class: center, middle

.large[
   You've already been using CSS3.
]

---
class: center, middle

.large[
   RGBa colour values<br />
   Media queries<br />
   @font-face
]

---
template: inverse

# CSS3 Properties

---

# Border Radius

The border radius property allows us to round off corners:

```css
button {
   border-radius: 5px;
}
```

**Output:**

<button style="border-radius: 5px;">Click me!</button>

---

# Border Radius

You can also target each box corner selectively:

```css
button {
   border-top-left-radius: 5px;
   border-bottom-right-radius: 5px;
}
```

**Output:**

<button style="border-top-left-radius: 5px; border-bottom-right-radius: 5px;">Click me!</button>

---

# Border Radius

Or add enough border radius to make a circle:

```html
<div class="circle"></div>
```

```css
.circle {
   background: red;
   width: 100px;
   height: 100px;
   border-radius: 50%;
}
```

**Output:**

<div class="circle" style="background: red; width: 100px; height: 100px; border-radius: 50%;"></div>

---

# Box Shadow

Box shadow allows you to add drop-shadows and inset shadows to your HTML elements using this syntax:

```css
button {
   box-shadow:
      5px   /* horizontal offset */
      5px   /* vertical offset */
      5px   /* blur radius */
      0     /* OPTIONAL spread radius */
      #666  /* colour */;
}
```

---

# Box Shadow

This example omits the optional radius spread:

```css
button {
   box-shadow: 5px 5px 5px #666;
}
```

**Output:**

<button style="box-shadow: 5px 5px 5px #666;">Click Me!</button>

---

# Gradients

With CSS3 we can know create colour gradients using the `background-image` property:

```css
div {
   background-image: linear-gradient(
      to top,       /* direction */
      #f0f9ff 0%,   /* first colour stop */
      #cbebff 47%,  /* second colour stop */
      #a1dbff 100%  /* third colour stop */
   );
}
```

**Output:**

<div style="width: 100%; height: 80px; background-image: linear-gradient(to top, #f0f9ff 0%, #cbebff 47%, #a1dbff 100%);"></div>

---

# Gradients

We can specify degrees as a direction instead:

```css
div {
   background-image: linear-gradient(
      45deg, #f0f9ff 0%, #cbebff 75%, #a1dbff 100%
   );
}
```

**Output:**
<div style="width: 100%; height: 160px; background-image: linear-gradient(45deg, #f0f9ff 0%, #cbebff 75%, #a1dbff 100%);"></div>

---

# Gradients

Or include as many colour stops as we want:

```css
div {
   background-image: linear-gradient(
      to right, #a1dbff 0%, #f0f9ff 16%, #a1dbff 33%,
      #f0f9ff 50%, #a1dbff 67%, #f0f9ff 84%, #a1dbff 100%
   );
}
```

**Output:**
<div style="width: 100%; height: 160px; background-image: linear-gradient(to right, #a1dbff 0%, #f0f9ff 16%, #a1dbff 33%, #f0f9ff 50%, #a1dbff 67%, #f0f9ff 84%, #a1dbff 100%);"></div>

---

# Gradients

And we can make the edges of our gradient transitions very obvious by overlapping colour stops:

```css
div {
   background-image: linear-gradient(
      to right, #ffff00 0%, #ffff00 33%, #fc0000 33%,
      #fc0000 67%, #000ff0 67%, #000ff0 100%
   );
}
```

**Output**:

<div style="width: 100%; height: 120px; background-image: linear-gradient(to right, #ffff00 0%, #ffff00 33%, #fc0000 33%, #fc0000 67%, #000ff0 67%, #000ff0 100%);"></div>

---

# Opacity

The `opacity` property lets you specify a level of transparency for an element:

```html
<p class="see-through">Opacity 0.5</p>
```

```css
.see-through {
   background-color: DeepSkyBlue;
   opacity: 0.5;
}
```

**Output:**

<div style="background-color:DeepSkyBlue;opacity:0.5">Opacity 0.5</div>

---

# Opacity

Lower values make the element more transparent:

<div style="background-color:DeepSkyBlue">Opacity 1</div>
<div style="background-color:DeepSkyBlue;opacity:0.9">Opacity 0.9</div>
<div style="background-color:DeepSkyBlue;opacity:0.8">Opacity 0.8</div>
<div style="background-color:DeepSkyBlue;opacity:0.7">Opacity 0.7</div>
<div style="background-color:DeepSkyBlue;opacity:0.6">Opacity 0.6</div>
<div style="background-color:DeepSkyBlue;opacity:0.5">Opacity 0.5</div>
<div style="background-color:DeepSkyBlue;opacity:0.4">Opacity 0.4</div>
<div style="background-color:DeepSkyBlue;opacity:0.3">Opacity 0.3</div>
<div style="background-color:DeepSkyBlue;opacity:0.2">Opacity 0.2</div>
<div style="background-color:DeepSkyBlue;opacity:0.1">Opacity 0.1</div>

---

# Multiple Backgrounds

CSS3 lets you set multiple background images for an element:

```css
.page-wrap {
   background:
      url(watermark.png),  /* on top */
      url(overlay.png),    /* in the middle */
      url(texture.png);    /* on the bottom */
}
```

Declaring multiple backgrounds is just like declaring a single background, but you comma separate your multiple background values (with the first on top, etc.).

---

# Exercise 1

You may have noticed that there's a slight dark overlay over top of the banner hero image in the design comps for the project. We want to add this overlay to our site using code (i.e. we don't want to use an image editor to adjust the original image).

To do this we'll need to use a combination of CSS3 multiple backgrounds and a `linear-gradient` to enhance our banner's background image with the overlay.

Try adding this to your project now. 

*What other CSS3 properties will you need to use on your site?*

---
template: inverse

# Transitions

---

# Making Things Move

CSS transitions bring your webpages to life in a way that was previously only achievable with JavaScript.

```html
<a href="http://mysite.com">Transition Me!</a>
```

```css
a {
   padding: 5px 10px;
   background: #9c3;
   transition-property: background;
   transition-duration: 0.3s;
   transition-timing-function: ease;
}

a:hover {
   background: #690;
}
```

---

# Transition Properties

A CSS transition has three parts:

- `transition-property`: The CSS property to be transitioned
- `transition-duration`: How long the transition will last
- `transition-timing-function`: How fast the transition will happen over time

---

# Transition Properties

We can also add a `transition-delay` property to force the transition to wait before firing, once activated:

```css
a {
   padding: 5px 10px;
   background: #9c3;
   transition-property: background;
   transition-duration: 0.3s;
   transition-timing-function: ease;
   transition-delay: 0.5s;
}
```

---

# Transition Shorthand

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

# Transition Shorthand

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

# Animatable Properties

*Not all CSS properties can be animated!*

The following are some of the properties that **will not work** with CSS transitions:

- `background-image`
- `display`
- `float`
- `position`

---
class: center, middle

### Taking It Further...

If you're ambitious, once you've mastered CSS transitions you'll want to check out **keyframe animation**.

---

# Exercise 2

Take CSS3 transitions for a spin:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/ZGaMWE/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/ZGaMWE/'>ZGaMWE</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
template: inverse

# Transforms

---

# CSS Transforms

CSS transforms give us new, powerful tools for styling the **shape**, **size**, and **position** of HTML elements.

CSS3 supports **2D** and **3D** transforms, but we'll just be focusing on 2D transforms for now.

**Combined with transitions**, we can achieve some pretty amazing effects.

---

# Transform Values

The CSS transform property has special values you can apply to it. These are just a few:

- `translate(12px, 50%)`
- `scale(2, 0.5)`
- `rotate(0.5turn)`
- `skewX(30deg)`
- `skewY(1.07rad)`

---

# Transform Syntax

You can also just specify a `translate` or `scale` for just the X or Y axis using shorthand:

```css
div {
   /* This...*/
   transform: translate(12px, 50%);

   /* Is the same as this...*/
   transform: translateX(12px) translateY(50%);
}
```

And assign multiple types of transforms to an element at once:

```css
div {
   transform: translate(12px, 50%) rotate(0.5turn);
}
```

---

# Transforms in Action

Let's look at how transforms can be combined with transitions:

```html
<img src="http://placehold.it/300x300" class="spin-me" />
```

```css
.spin-me {
  transform: rotate(0deg) scale(1);
  transition: transform 0.5s ease;
}

.spin-me:hover {
  transform: rotate(306deg) scale(0);
}
```

---

# Transforms in Action

Another example using `translate`:

```html
<img src="http://placehold.it/300x300" class="move-along" />
```

```css
.move-along {
   transition: transform 0.2s ease-in;
}

.move-along:hover {
   transform: translate(100%, 25%) scale(0.5);
}
```

---

# Exercise 3

Experiment with CSS3 transforms and transitions together:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/PqOgax/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/PqOgax/'>PqOgax</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
template: inverse

# CSS Best Practices: Specificity

---
class: center, middle

### What We Mean by "Specificity"

Specificity determines which CSS rules are applied to an element by the browser.

---

class: center, middle

.large[
   What makes a rule more specific?
]

---
class: center, middle

![Specificity hierarchy](../../public/img/slide-assets/specificity-hierarchy.svg)

---
class: center, middle

.large[
   So how does it work?
]

---
class: center, middle

.large[
   Keep these 2 things in mind...
]

---

# How Specificity Works

**Where specificity is equal, the rules that comes last applies.**

```html
<header class="masthead">
   <h1>My Awesome Site</h1>
</header>
```

```css
header h1 {
   color: black;
}

header h1 {
   color: red;
}
```

*What colour will the text be in this example?*

---

# How Specificity Works

**Where specificity is not equal, the more specific rule applies.**

```html
<header class="masthead">
   <h1>My Awesome Site</h1>
</header>
```

```css
.masthead h1 {
   color: black;
}

header h1 {
   color: red;
}
```

*What colour will the text be in this example?*

---
class: center, middle

.large[
   Gotcha alert!
]

---

# Specificity Run Amok

It doesn't take much for CSS specificity to spiral out of control:

```html
<nav id="social-nav">
   <ul class="social-links">
      <li><a href="#" class="social">Facebook</a></li>
   </ul>
</nav>
```

```css
nav#social-nav ul.social-links li a.social:hover {
   color: white;
}
```

**Yikes!**

---

# Specificity Run Amok

There's a good chance that CSS would be just as effective written as follows:

```css
.social:hover {
   color: white;
}
```

---

# Taming the Beast

Here are a few strategies to help avoid painting yourself into a corner with CSS specificity:

- Almost never use `!important`
- Don't use IDs as CSS selectors
- Avoid nesting selectors unnecessarily
- Don't over-qualify selectors
- Use classes, and create re-usable classes wherever possible

---

# Exercise 4

Time for a [specificity showdown!](http://codepen.io/redacademy/pen/VvmwoQ?editors=110).

---
template: inverse

# CSS Best Pratices: Scalability & Maintainability

---
class: center, middle

### Your CSS Should Scale Easily

We may have good intentions when we start writing our CSS, but as a project grows over time we need to make sure we're writing CSS that's **maintainable** and that **scales**.

---

# CSS Pro Tips

1. Keep your code organized
2. Use semantic selector names
3. Document your code with comments
4. Make it modular

---

# Get Organized

Well-organized code will save you headaches in the long run. Here are some organization tips:

- Order things logically (it matters for specificity, but also for readability)
- Put your properties in some kind of logical order
- Use whitespace, line breaks, and indentation
- Use shorthand wherever possible
- Be consistent!

---

# Keep It Semantic

The class and ID names you choose for your HTML elements should relate to the content itself, and not the styles applied to it. For example, this:

```html
<p class="alert">Error! Please try again.</p>
```

Is much more semantic and future-proof than this:

```html
<p class="red">Error! Please try again.</p>
```

---

# Document It

Adding comments to your code is an effective way to explain what your code does, both to other developers and to your future self. For example, this:

```css
/* Main navigation */
.dropdown-nav { }

/* Footer navigation */
.inline-nav { }
```

Is more helpful than this:

```css
.dropdown-nav { }
.inline-nav { }
```

---

# Modularity

Modular code is reusable code. For example, abstract re-used styles into a class like this:

```css
.brand-color {
   color: red;
}
```

Is better than this:

```css
article h3 {
   color: red;
}

aside h3 {
   color: red;
}
```

---

# What We've Learned

- The difference between CSS2 and CSS3
- How to use `border-radius`, `box-shadow`, `gradients`, `opacity`, and multiple backgrounds
- How to use CSS transitions and transforms
- How to tame the specificity beast by keeping selector specificity under control
- Why scalability, maintainability, and modularity matter in our project stylesheets
- How to write CSS in a future-friendly way

---
template: inverse

# Questions?

{% endhighlight %}

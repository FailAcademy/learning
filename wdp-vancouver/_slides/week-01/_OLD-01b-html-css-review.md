---
layout: slidedeck
title: HTML & CSS Review Slides [Part 2]
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# HTML & CSS Review: Part 2

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. CSS concept review
2. CSS3 properties
3. CSS resets & cross-browser compatibility

---
class: center, middle

.large[
   Pop Quiz Time!
]

---

# Question 1

Which part of this rule is the CSS selector?

```css
p { font-family: Arial, sans-serif; }
```

**a)** `p`

**b)** `{ font-family: Arial, sans-serif; }`

**c)** `p { font-family: Arial, sans-serif; }`

---

# Question 2

A selector can indicate that a CSS rule applies to multiple elements. How is this done?

**a)** `h1 h2 h3 {}`

**b)** `h1, h2, h3 {}`

**c)** `h1; h2; h3 {}`

---

# Question 3

If you want to have more than one declaration in a CSS rule, what character separates them?

**a)** comma `,`

**b)** semi-colon `;`

**c)** colon `:`

---

# Question 4

In an HTML file, which element do you use to link to an external stylesheet?

**a)** `<link>`

**b)** `<a>`

**c)** `<style>`

---

# Question 5

Which selector applies a rule to all elements?

**a)** `*`

**b)** `#`

**c)** `.`

---

# Question 6

Which selector indicates this element?

```html
<a id="top"></a>
```

**a)** `.top {}`

**b)** `#top {}`

**c)** `*top {}`

---

# Question 7

When an element sits inside of another element, the outer box is known as the...

**a)** Containing element

**b)** Outer box

**c)** Bounding element

---

# Question 8

What can you use to keep an element in the same spot in a browser window, even if a user scrolls?

**a)** Absolute positioning

**b)** Fixed positioning

**c)** Floats

---

# Question 9

When elements overlap, which property indicates the element that should appear above or below others?

**a)** `z-index`

**b)** `height`

**c)** `stacking-context`

---

# Question 10

If you have floated elements sitting next to each other, what can be used to ensure a box starts on a new line?

**a)** `clear: left;`

**b)** `float: none;`

**c)** `margin-right: 100%;`

---

# Question 11

Which of the following rules would center a paragraph on the page?

**a)** `p { width: 960px; text-align: center; }`

**b)** `p { width: 960px; margin: 0 auto; }`

**c)** `p { width: 960px; float: center; }`

---

# Question 12

Which measurement would you use to create a liquid layout?

**a)** `%`

**b)** `em`

**c)** `px`

---

# Question 13

Which of the following a the correct way to specify a square box?

**a)** `x: 200px; y: 200px;`

**b)** `height: 200px; width: 200px;`

**c)** `max-height: 200px; max-width: 200px;`

---

# Question 14

Which of the following is the correct rule to prevent users from seeing content that is bigger than the box containing it?

**a)** `overflow: hidden;`

**b)** `overflow: scroll`

**c)** `display: none;`

---

# Question 15

There are three paragraphs on top of each the use this rule:

```css
p { margin: 10px; }
```

How much vertical space is between the paragraphs?

**a)** 10 pixels

**b)** 15 pixels

**c)** 20 pixels

---

# Question 16

Which statement about the box model is correct?

**a)** Margin is outside of the border, while padding is inside.

**b)** Padding is outside of the border, while margin is inside.

**c)** Neither statement is correct.

---

# Question 17

Which of the following rules makes the content of a set of `<li>` elements sit next to each other?

**a)** `li { visibility: inline; }`

**b)** `li { display: block; }`

**c)** `li { display: inline-block; }`

---

# Question 18

Which of the following rules hides the content of a box, but leaves space for the area it would take up?

**a)** `display: none;`

**b)** `visibility: hidden;`

**c)** `display: hidden;`

---

# Question 19

Which of these is **not** a valid way to specify the color of paragraphy text?

**a)** `p { color: 50, 60, 70; }`

**b)** `p { color: rgb(50, 60, 70); }`

**c)** `p { color: #323c46; }`

---

# Question 20

CSS3 introduced the `rgba` and `hsla` values for specifying colors. What does the `a` stand for?

**a)** Alpha

**b)** Array

**c)** Accurate

---

# Bonus Question!

Correctly identify each of the following as either pseudo-class or pseudo-element:

**a)** `:hover`

**b)** `:before`

**c)** `:nth-child(2n+3)`

---

# Exercise 1

In groups you'll design a poster, code demo, etc. that would be suitable for explaining your assigned topic to someone who knows nothing about them:

- **Block** vs. **Inline** vs. **Inline-block elements**
- **Floats** vs. **Positioning**
- **Pseudo-elements** vs. **Pseudo-classes**
- **Box model properties** and its **shorthand** tricks
- Three methods for **clearing floats**

---
template: inverse

# CSS3 Properties

---

# CSS3 Properties

- `@font-face`
- `border-radius`
- `box-shadow`
- `gradients`
- `opacity`
- multiple backgrounds

---

# Font Formats

Once you've included an `@font-face` declaration at the top of your stylesheet, you can use it throughout your CSS:

```css
@font-face {
    font-family: 'robotoregular';
    src: url('Roboto-webfont.eot');
    src: url('Roboto-webfont.eot?#iefix') format('embedded-opentype'),
         url('Roboto-webfont.woff') format('woff'),
         url('Roboto-webfont.ttf') format('truetype'),
         url('Roboto-webfont.svg#robotoregular') format('svg');
    font-weight: normal;
    font-style: normal;
}
```

Order matters! You'll want to include the `src` files for your fonts in this order: `eot`, `woff`, `ttf/otf`, and then `svg`.

---

# Font Squirrel

The website [Font Squirrel](http://www.fontsquirrel.com/) is a great resource for finding and creating `@font-face` font packages:

.inline-images[
   ![Font Squirrel Webfont Generator](/public/img/slide-assets/font-squirrel-generator.jpg)
]

---
class: center, middle

## Thar be copyright dragons!

Before you embed a font on your website using `@font-face` you need to be sure that its license enables you to do so.

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

---

# Exercise 2

Use this Codepen to build out the login form depicted on the following slide:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/VLoqVR/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/VLoqVR/'>VLoqVR</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

# Exercise 2

.inline-images[
   ![Login prototype](/public/files/exercises/login-prototype.gif)
]

---
template: inverse

# Resets, Compatibility & Testing

---
class: center, middle

.large[
   What's a CSS reset?
]

---
class: center, middle

.large[
   How do we use a CSS reset?
]

---

# Popular Resets

There are a few popular CSS resets used today:

- [Eric Meyer reset](http://meyerweb.com/eric/tools/css/reset/)
- [normalize.css](http://necolas.github.io/normalize.css/)

---
class: center, middle

.large[
   And how can we make sure that newer CSS properties play nice with browsers?
]

---

# Using Vendor Prefixes

Different browsers have their own unique vendor prefixes:

- Webkit: `-webkit-`
- Firefox: `-moz-`
- Opera: `-o-`
- IE: `-ms-`

---

# Using Vendor Prefixes

To use vendor prefixes, you simply put each required prefix in front of the experimental property in question:

```css
.example {
  -webkit-transform: rotate(30deg); /* Ch <36, Saf 5.1+ */
      -ms-transform: rotate(30deg); /* IE 9 */
          transform: rotate(30deg); /* W3C, IE 10, Fx 16+, Op 12.1+ */
}
```

---
class: center, middle

.large[
   **[caniuse.com](http://caniuse.com/)**
]

---
class: center, middle

.large[
   What other steps can we take to make sure our websites look great across browsers and devices?
]

---

# Browser Testing

There are **many (mostly paid) tools** that can assist with cross-browser testing:

- [BrowserStack](https://www.browserstack.com/)
- [Browserling](https://www.browserling.com/)
- [BrowserShots](http://browsershots.org/)

These tools can be a little slow and/or janky...you've been warned!

---

# Browser Testing

When it comes to browser and device testing, nothing beat the real thing.

To test on multiple version of IE, checkout the Windows "Virtual Machines" available at [modern.ie](http://dev.modern.ie/tools/vms/).

You can also use a device rental service such as [Wavefront](http://www.wavefrontac.com/national-device-library-rental/) to test on a broad variety of mobile devices.

---

# Validating Code

To make sure our code is **valid** we can use these services:

- [W3C Mark-up Validation Service](https://validator.w3.org/)
- [W3C Mark-up CSS Service](https://jigsaw.w3.org/css-validator/)

---

# Optimizing Code

To test page load speed, page size, and learn about other points of optimization, check out:

- [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Pingdom Website Speed Test](http://tools.pingdom.com/)
- [CSS Specificity Graph Generator](https://jonassebastianohlsson.com/specificity-graph/)

---

# Exercise 3

Time to put your own project under the microscope!

Try running your project's HTML through the W3C validator. Are there any errors or warnings? How can you address them?

You're also encourages to take some of the other tools (performance testers, etc.) for spin on other projects you've previously completed.

---

# What We've Learned

- A whirlwind tour of CSS & CSS3!
- Some of the shiny new CSS3 properties
- How to use a CSS reset (and why we need one)
- How to improve cross-browser compatibility
- How we can test our HTML and CSS code

---
template: inverse

# Questions?

{% endhighlight %}

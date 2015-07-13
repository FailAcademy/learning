---
layout: slidedeck
title: CSS Layout Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# CSS Layouts

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Positioning elements with CSS
2. Floating elements with CSS
3. List-based navigation menus
4. Styling the background
5. Using CSS resets

---

template: inverse

# Position

---
class: center, middle

.large[
	Review: Block vs. Inline
]

---

class: center, middle

.inline-images[
   ![Block-level element](/public/img/slide-assets/css-block-element.svg)
]

---
class: center, middle

.inline-images[
   ![Inline element](/public/img/slide-assets/css-inline-element.svg)
]

---
class: center, middle

.large[
	Review: Boxes in Boxes
]

---
class: center, middle

.inline-images[
   ![CSS Box Concept](/public/img/slide-assets/css-box-concept.svg)
]

---

# Changing Display

Every HTML element has a default display property, but we can override it using the `display` property in your CSS.

For example:

```css
li {
	display: inline;
}
```

Or:

```css
span {
	display: block;
}
```

---

# Working with Position

We can take even more control over our layouts using the CSS `position` property. The `position` property can take a specific array of values:

- `static` (the default behaviour, aka **normal flow**)
- `relative`
- `absolute`
- `fixed`

---

# Relative Positioning

Relative positioning moves an element in relation to where it would have been the normal flow:

```css
header h1 {
	position: relative;
	top: 5%;
	right: 200px;
}
```

To adjust an element's position relatively, we can either specify `top` or `bottom`, and `left` or `right` in pixel, percentage, or em units.

---

# Absolute Positioning

This is where things can get really interesting. Setting `position` to `absolute` takes it out of the normal flow.

With absolute positioning, it's like the other elements on the page suddenly forget that it's there.

```css
header h1 {
	position: absolute;
	top: 0;
	right: 0;
	width: 200px;
}
```

---

# Absolute + Relative

An element will be absolutely positioned to the HTML document unless you set `position: relative` on one of its parent elements.

```css
.page-wrapper {
	position: relative;
}

header h1 {
	position: absolute;
	top: 0;
	right: 0;
	width: 200px;
}
```

---

# Fixed Positioning

Fixed positioning is like absolute positioning, but it positions the element in relation to the browser window instead of the HTML document.

This means that the element will stay put in one place on the screen as you scroll:

```css
header h1 {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: #c8c8c8;
}
```

---

# z-index

With elements that have `relative`, `absolute`, or `fixed` position set, we can apply another property called `z-index`.

The z-index property let's us specify the stacking order of non-static, overlapping elements.

Elements with a higher z-index will appear on top:

```css
header h1 {
	position: absolute;
	top: 0;
	right: 0;
	width: 200px;
	z-index: 100;
}
```

---

# Exercise 1

Let's try out different kinds of positioning in CSS:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/mJwRxG/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/mJwRxG/'>mJwRxG</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
template: inverse

# Floats

---

# What's a Float?

Floats are another handy layout tool in CSS.

They also take elements out of the normal flow and place to the far left or far right side of their container element.

Text and other inline elements will then wrap around the floated element.

---
class: center, middle

.inline-images[
   ![An unfloated element](/public/img/slide-assets/css-float-none.svg)
]

---
class: center, middle

.inline-images[
   ![A left-floated element](/public/img/slide-assets/css-float-left.svg)
]

---
class: center, middle

.inline-images[
   ![A right-floated element](/public/img/slide-assets/css-float-right.svg)
]

---
class: center, middle

.large[
	Floats are the key to creating multi-column layouts.
]

---
class: center, middle

.inline-images[
   ![Two-column website layout](/public/img/slide-assets/css-column-layout.svg)
]

---

# Using Floats

To float elements in CSS, we use the `float` property:

```css
article {
	width: 67%;
	float: left;
}

aside {
	width: 33%;
	float: right;
}
```

We can also stop a previously floated element from floating:

```css
.sidebar {
	float: none;
}
```

---

# Clearing Floats

The `clear` property is an important one when using floats.

You can clear a float on the `left`, `right`, or `both`:

```css
article {
	width: 67%;
	float: left;
}

aside {
	width: 33%;
	float: right;
}

footer {
	clear: both;
}
```

---
class: center, middle

.large[
	Why do we clear floats?
]

---
class: center, middle

.inline-images[
   ![Cleared floats](/public/img/slide-assets/css-floats-not-cleared.svg)
]

---
class: center, middle

.inline-images[
   ![Floats not cleared](/public/img/slide-assets/css-floats-cleared.svg)
]

---
template: inverse

# Navigation Menus

---

# Creating Nav Menus

Many of the navigation menus you see on websites today structured as unordered lists.

We can then take advantage of floats and other CSS properties to make lists look more like navigation menus.

---

# Creating Nav Menus

For example, the HTML for a typical menu may look like this:

```html
<nav role="navigation">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Clients</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>
</nav>  
```

But we don't want it to look like unordered list on our website, so we can use CSS to fix that.

---

# Creating Nav Menus

Using the `float`, `list-style`, and some box-model properties, we can transform our list into a navigation menu:

```css
ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  float: left;
  margin: 5px 10px;
}
```

---
class: center, middle

.large[
	Which allows us to turn this:
]

.inline-images[
   ![Unstyled list](/public/img/slide-assets/css-list-unstyled.png)
]

---
class: center, middle

.large[
	Into this:
]

.inline-images[
   ![Floats not cleared](/public/img/slide-assets/css-list-floated.png)
]

---

# Exercise 2

Time to try using CSS floats to lay out a webpage:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/yNXgGO/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/yNXgGO/'>yNXgGO</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
template: inverse

# Backgrounds

---

# Background Properties

CSS gives us a number of tools for controlling the look of the backgrounds of our HTML elements.

We can specify:

- `background-color`: an RGBa, HSLa, hexadecimal, or named color code
- `background-image`: an URL of a background image (in parantheses)

---

# Background Properties

And if we specify a `background-image` URL, we can also set these properties for it:

- `background-repeat`: whether to repeat an image across the X or Y axis, or both
- `background-attachment`: whether the image should **scroll** with the browser or remain **fixed** in place
- `background-position`: for non-repeated images, specify if it should be anchored at the **left**, **center**, or **right**, and the **top**, **center**, or **bottom**

---

# Background Shorthand

To clean up our code a bit we can also use the `background` shorthand property to specify multiple properties at once:

```css
body {
    background: #969696 url('images/bkgd.png') no-repeat center top;
}
```

If you don't require all of the properties, you can leave them out:

```css
body {
    background: url('images/bkgd-tile.png') fixed;
}
```

---

# Background Size

In newer browsers, we can use `background-size`:

```css
body {
	background: #969696 url('images/bkgd.png') no-repeat center top;
	background-size: 80% 80%; /* width, height */
}
```

We can also set `background-size` to `contain` (always show the whole image) or `cover` (always fill the screen with the image).

Note that `background-size` isn't supported in IE8!

---
template: inverse

# CSS Reset

---

# What's a CSS Reset?

The goal of a **css reset** is to **inconsistencies amongst browsers** in things like default line heights, margins, and font sizes of headings.

Reset styles are **intentionally very generic**. They are just meant to standardize how browsers display HTML elements before your start applying your custom styles.

Think of reset as *leveling the playing field*.

---

# Popular Resets

There are a few popular CSS resets that are commonly used today:

- [Eric Meyer reset](http://meyerweb.com/eric/tools/css/reset/)
- [normalize.css](http://necolas.github.io/normalize.css/)

---

# Using a Reset

To use a reset, you would simply put this CSS at the top of your stylesheet, and then start writing your own code after it.

The key is to pick a reset that makes the most sense for your website, and to only include the CSS rules that you need.

---

# Exercise 3

Try implementing CSS backgrounds in three different ways:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/eNeKXr/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/eNeKXr/'>eNeKXr</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

# What We've Learned

- Different ways to use the `position` property
- How to `float` elements
- How to use the `background` property in CSS
- What a CSS reset is

---
template: inverse

# Questions?

{% endhighlight %}

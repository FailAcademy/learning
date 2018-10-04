---
layout: slidedeck
title: Intro to CSS - Positioning, Background Images and Colour Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to CSS:<br />Positioning, Background Images and Colour<br /> (with Devloper Tools and CSS Resets)

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Developer tools and code validation
2. CSS "resets"
3. Positioning with CSS
4. Color and backgrounds

---

template: inverse

# Developer Tools & Validating Your Code

---

class: center, middle

.large[
As a developer, where do you find the most important feature of your browser?
]

???

* Conduct a quick intro to basic dev tool features

---

class: center, middle

.large[
Learn your dev tools:

**[discover-devtools.codeschool.com](http://discover-devtools.codeschool.com/)**
]

???

* Be sure to reinforce that it's very important to learn your dev tools, this Code School tutorial will go into further depth than we can get into in class
* Also point out that from now on, their dev tools should always be open when the develop!

---

# Validating Code

To make sure our code is **valid** we can use these services:

* [W3C Mark-up Validation Service](https://validator.w3.org/)
* [W3C Mark-up CSS Service](https://jigsaw.w3.org/css-validator/)

???

* Mention any browser extensions you like for validating code too

---

class: center, middle

.large[
I need CSS help!<br />Where do I go?
]

---

# Go-to CSS Resources

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
* [Stack Overflow](http://stackoverflow.com/)
* [CSS Tricks](https://css-tricks.com/)
* [Smashing Magazine](http://www.smashingmagazine.com/)
* Each other!

---

# Mini-Exercise

Time to put your own project under the microscope!

Try running your project's HTML through the W3C validator. Are there any errors or warnings? How can you address them?

---

template: inverse

# CSS Resets

---

class: center, middle

.large[
What's a CSS reset?<br />
Why do we need one?
]

---

# Popular Resets

There are a few popular CSS resets used today:

* [Eric Meyer reset](http://meyerweb.com/eric/tools/css/reset/)
* [normalize.css](http://necolas.github.io/normalize.css/)

---

# Exericse 1

Add the [Eric Meyer reset](http://meyerweb.com/eric/tools/css/reset/) to your Project 1. Do you notice anything different when you refresh your browser?

---

template: inverse

# Position

---

class: center, middle

.inline-images[
![CSS Box Concept](/public/img/slide-assets/css-box-concept.svg)
]

???

* Quick refresher around the box model...

---

# Working with Position

We can take even more control over our layouts using the CSS `position` property. The `position` property can take a specific array of values:

* `static` (the default behaviour, aka **normal flow**)
* `relative`
* `absolute`
* `fixed`

---

# Relative Positioning

Relative positioning moves an element in relation to where it would have been in the normal flow:

```css
header h1 {
  position: relative;
  top: 5%;
  right: 200px;
}
```

To adjust an element's position relatively, we can either specify `top` or `bottom`, and `left` or `right` in `px`, `%`, `em`, or `rem` units.

---

# Absolute Positioning

This is where things get really interesting. Setting `position` to `absolute` takes an element out of the normal flow.

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

An element will be absolutely positioned to the **HTML document** unless you set `position: relative` on one of its parent elements.

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

Fixed positioning is like absolute positioning, but it positions the element in relation to the **browser window** instead of the HTML document.

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

The z-index property let's us specify the **stacking order** of non-static, overlapping elements.

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

# Exercise 2

Both of the stretch goals for Project 1 will require positioning properties to style it. With a partner, discuss how you would implement the cart icon stretch goal in CSS. Draw it out on paper if it helps!

.inline-images[
![Aloha cart icon screenshot](/public/img/slide-assets/css-cart-positioning.jpg)
]

---

template: inverse

# Colour on the Web

---

# Using Color

On the web, we have four options for specifying the colours of our HTML elements:

* Colour names
* HEX codes
* RGB/RGBa values
* HSL/HSLa values

---

# Colour Names

There are 147 predefined colour names supported by browsers, which we can use like this:

```css
p {
  color: maroon;
}

a {
  color: MediumSlateBlue;
}
```

Check out **[this list](http://en.wikipedia.org/wiki/Web_colors)** for all of the names of the predefined colours.

---

# HEX Codes

Alternatively, we can specify a HEX code that corresponds to a specific colour.

For example, the HEX code for white is `#FFFFFF` (or `#FFF` in shorthand).

In your CSS, a HEX code would be used like this:

```css
p {
  color: #111111; /* very dark grey */
}
```

---

# HEX Codes

To get a HEX code, you can use an [online colour picker tool](http://www.colorpicker.com/), or use the colour palette in an image editing program.

.inline-images[
![PS colour picker](../../public/img/slide-assets/color-picker-screenshot.png)
]

---

# RGB/RGBa Colours

We can also use RGB (red, green, blue) values to specify colours in our CSS:

```css
a {
  color: rgb(237, 67, 67);
}
```

The equivalent of this RGB colour in HEX would be `#ed4343`.

---

# RGB/RGBa Colours

RGBa values allow us to also specify the **opacity** of the colour:

```css
header {
  background-color: rgba(237, 67, 67, 0.5);
}
```

The `a` that represents opacity is written as a decimal, with a range of `0` (fully transparent) to `1` (solid).

---

# HSL/HSLa Colours

Specifying colour using HSLa is similar to using RGBa.

However, instead of giving coordinates for the amount of red, blue, or green to mix in the colour, we specify values for **hue**, **saturation**, and **lightness**.

```css
header {
  background-color: hsla(360, 83%, 60%, 0.5);
}
```

---

# Hue

What we refer to as colour is technically referred to **hue**.

Hues can be **chromatic** or **achromatic**.

Hues can be **neutral** (white, black, or grey) or **near-neutral** (beige or off-white).

---

class: center, middle

.inline-images[
![Hue](/public/img/slide-assets/color-hue.png)  
]

.footnote.right[
_Source: [Designing for the Web](http://www.designingfortheweb.co.uk/part4/part4_chapter17.php)_
]

---

# Value

Value is the potential for a colour to be light or dark.

**High value** colours have white added to them.

**Low value** colours have black added to them.

---

class: center, middle

.inline-images[
![High value](/public/img/slide-assets/color-value-high.png)  
]

.inline-images[
![Low value](/public/img/slide-assets/color-value-low.png)
]

.footnote.right[
_Source: [Designing for the Web](http://www.designingfortheweb.co.uk/part4/part4_chapter17.php)_
]

---

# Saturation

Saturation is the brightness or dullness of a hue.

Colours can be **high chroma** (full intensity).

Colours can be **low chroma** (made dull by adding a complement).

---

class: center, middle

.inline-images[
![Saturation](/public/img/slide-assets/color-saturation.png)  
]

.footnote.right[
_Source: [Designing for the Web](http://www.designingfortheweb.co.uk/part4/part4_chapter17.php)_
]

---

class: center, middle

.inline-images[
![Hue saturation value model](/public/img/slide-assets/color-hue-sat-val.png)  
]

.footnote.right[
_Source: [Designing for the Web](http://www.designingfortheweb.co.uk/part4/part4_chapter17.php)_
]

---

template: inverse

# Backgrounds

---

# Background Properties

CSS gives us a number of tools for controlling the backgrounds of our HTML elements.

We can specify:

* `background-color`: an RGBa, HSLa, hexadecimal, or named color code
* `background-image`: an URL of a background image (in parantheses)

---

# Background Properties

And if we specify a `background-image` URL, we can also set these properties for it:

* `background-repeat`: whether to repeat an image across the X or Y axis, or both
* `background-attachment`: whether the image should **scroll** with the browser or remain **fixed** in place
* `background-position`: for non-repeated images, specify if it should be anchored at the **left**, **center**, or **right**, and the **top**, **center**, or **bottom**

---

# Background Shorthand

To clean up our code a bit we can also use the `background` shorthand property to specify multiple properties at once:

```css
body {
  background: #969696 url("images/bkgd.png") no-repeat center top;
}
```

If you don't need to change all of the properties from their defaults, you can leave them out:

```css
body {
  background: url("images/bkgd-tile.png") fixed;
}
```

---

# Background Size

We can also use the `background-size` property to control the size of our background images:

```css
body {
  background: #969696 url("images/bkgd.png") no-repeat center top;
  background-size: 80% 80%; /* width, height */
}
```

We can also set `background-size` to `contain` (always show the whole image) or `cover` (always fill the screen with the image).

---

# Multiple Backgrounds

CSS3 lets you set multiple background images for an element:

```css
header {
  background: url(watermark.png), url(overlay.png), url(texture.png); /* on the bottom */
}
```

Declaring multiple background is just like declaring a single background, but you comma separate your multiple background values (with the first on top, etc.).

---

# Exercise 3

There are two components to this exercise&mdash;adding some colour, and beginning to add background images.

Change the colour of the links and the orange headings to `#e2574c`.

Also add the floral background image to the banner area.

**Challenge!** How could we get the partially transparent background layer and the photo of the girl to sit on top of this image (also as a background)?

---

# What We've Learned

* How to use a CSS reset, code validators, and a browser's developer tools
* How to layout a webpage using position
* How to add colour and background images via CSS

---

template: inverse

# Questions?

{% endhighlight %}

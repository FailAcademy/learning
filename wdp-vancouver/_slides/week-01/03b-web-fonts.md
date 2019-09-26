---
layout: slidedeck
title: Fonts on the Web Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Fonts on the Web

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Custom fonts on the web
2. Using `@font-face`
3. Using Google Fonts
4. Web font services
5. Icon fonts
6. CSS Positioning

---

template: inverse

# Intro to Web Fonts

---

class: center, middle

### A bit of history...

We used to be limited to using **web-safe fonts**.

In other words, fonts that you could be reasonably sure would already be installed on a user's computer system.

---

.left-column[

## Web-Safe Fonts

]

.right-column[
As a result, we had very few choices:

* <span style="font-family: Arial">Arial</span>
* <span style="font-family: Times">Times New Roman</span>
* <span style="font-family: Courier">Courier New / Courier</span>
* <span style="font-family: Comic Sans, Comic Sans MS">Comic Sans</span>
* <span style="font-family: Verdana">Verdana</span>
  ]

---

class: center, middle

.large[
Thanks to CSS3, <br />those days are over!
]

---

template: inverse

# @font-face

---

# Using @font-face

The `@font-face` property in CSS allows us to embed custom fonts directly in our website.

That means we don't have to depend on users having that font already installed on their computer.

```css
@font-face {
  font-family: "Roboto Regular Web";
  src: url("Roboto-Regular-webfont.eot");
}
```

---

# Using @font-face

Once you've included an `@font-face` declaration at the top of your stylesheet, you can use it throughout your CSS:

```css
body {
  font-family: "Roboto Regular Web", Arial, sans-serif;
}
```

---

# There's a Catch (Again)

Unfortunately, different browsers support different font file formats, so when we use `@font-face` we need to make sure we include multiple versions of the same font:

* **EOT** - IE only.
* **WOFF** - Compressed, emerging standard.
* **TTF** - Works in most browsers except IE and iPhone.
* **SVG** - iPhone/iPad.

---

# Font Formats

A full example:

```css
@font-face {
  font-family: "Roboto Regular Web";
  src: url("Roboto-webfont.eot");
  src: url("Roboto-webfont.eot?#iefix") format("embedded-opentype"), url("Roboto-webfont.woff")
      format("woff"), url("Roboto-webfont.ttf") format("truetype"), url("Roboto-webfont.svg#robotoregular")
      format("svg");
  font-weight: normal;
  font-style: normal;
}
```

Order matters! You'll want to include the `src` files for your fonts in this order: `eot`, `woff`, `ttf/otf`, and then `svg`.

---

# Transfonter

The website [Transfonter](https://transfonter.org/) is a great resource for creating `@font-face` font packages:

.inline-images[
![Transfonter screenshot](/public/img/slide-assets/transfonter-screenshot.jpg)
]

---

class: center, middle

## Thar be copyright dragons!

Before you embed a font on your website using `@font-face` you need to be sure that its license enables you to do so.

---

# Exercise 1

Go to **Transfonter** and download the Webfont Kit for the custom typefaces that we'll be using for Project 1: **[Playfair Display](http://www.fontsquirrel.com/fonts/playfair-display)** (Regular and Bold) and **[Raleway](http://www.fontsquirrel.com/fonts/raleway)** (Light and Medium).

You'll need to download both of the weights and their italic versions too for each typeface. Add the contents of your generated web font packages to your project.

---

template: inverse

# Google Web Fonts

---

# Using Google Fonts

One popular alternative to directly embedding fonts in your website with `@font-face` is to use [Google Fonts](https://www.google.com/fonts).

To use Google Fonts, simply select the font you want to use, and embed the link in the `<head>` of your website:

```html
<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
```

You can then use it throughout your CSS:

```css
body {
  font-family: "Roboto", sans-serif;
}
```

---

# Fonts vs. Performance

When using custom fonts (whether through `@font-face` or Google Fonts), be sure to think about performance:

.inline-images[
![Google Fonts weight](/public/img/slide-assets/google-fonts-weight.png)
]

---

template: inverse

# Web Font Services

---

# Third-Party Services

For fonts with licensing restrictions, you may have to use a third-party web font services if you want to use the font on your website.

Some of these services include:

* [Typekit](https://typekit.com/)
* [Hoefler & Co.](http://www.typography.com/cloud/welcome/)
* [Webtype](http://www.webtype.com/)

---

template: inverse

# What's an Icon Font?

---

class: center, middle

### Icon fonts are just fonts.

But instead of containing letters and numbers, they contain symbols (aka **glyphs**).

---

# Why Are They Awesome?

* You can target CSS at them, just like a normal font
* They're SVGs, so they scale without pixelating (so they're very responsive)
* They're supported even as far back as IE6!
* All of the icons supported by the font load with one HTTP request

---

class: center, middle

.large[
The old way...
]

---

class: center, middle

.inline-images[
![Image sprite example](/public/img/slide-assets/image-sprite-example.png)
]

---

template: inverse

# Using an Icon Font

---

# Pick a Font

There are a few ready-made icon fonts out there that you can use on your website for free:

* [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
* [IcoMoon](https://icomoon.io/)

We're going to use Font Awesome for Project 1...

---

# Using Font Awesome

To use Font Awesome, you can either externally link to it on a Content Delivery Network (CDN), or you can download and include the entire package directly on your website.

You would include this code in the `<head>` tag of your website:

```html
<!-- Option 1: CDN Link -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

<!-- Option 2: Direct Include -->
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
```

---

# Using Font Awesome

Now for the fun part&mdash;you actually get to start using the icons.

Let's say we want to include a [bicycle icon](http://fortawesome.github.io/Font-Awesome/icon/bicycle/) on our website.

All we would need to do is include an `<i>` tag with some special classes applied:

```html
<i class="fas fa-bicycle"></i>
```

And the result will look like this:

<i class="fa fa-bicycle"></i>

---

# Using Font Awesome

We can adjust the size of the icons with extra classes:

```html
<i class="fas fa-bicycle fa-lg"></i> fa-lg
<i class="fas fa-bicycle fa-2x"></i> fa-2x
<i class="fas fa-bicycle fa-3x"></i> fa-3x
<i class="fas fa-bicycle fa-4x"></i> fa-4x
```

<i class="fa fa-bicycle fa-lg"></i> fa-lg<br />
<i class="fa fa-bicycle fa-2x"></i> fa-2x<br />
<i class="fa fa-bicycle fa-3x"></i> fa-3x<br />
<i class="fa fa-bicycle fa-4x"></i> fa-4x

---

# Using Font Awesome

And animate the icons:

```html
<i class="fas fa-circle-o-notch fa-spin fa-3x"></i>
<i class="fas fa-spinner fa-pulse fa-3x"></i>
<i class="fas fa-bicycle fa-spin fa-3x"></i>
```

.inline-images[
<br /><i class="fa fa-circle-o-notch fa-spin fa-3x"></i>&nbsp;&nbsp;&nbsp;
<i class="fa fa-spinner fa-pulse fa-3x"></i>&nbsp;&nbsp;&nbsp;
<i class="fa fa-bicycle fa-spin fa-3x"></i>
]
<br />

You can find all of Font Awesome's [icons referenced here](http://fortawesome.github.io/Font-Awesome/icons/) and [usage examples here](http://fortawesome.github.io/Font-Awesome/examples/).

---

# Using Font Awesome

Every Font Awesome icon also has a [Unicode value](http://fortawesome.github.io/Font-Awesome/cheatsheet/). Using those values, we can use Font Awesome directly in our CSS too as a value in the `content` property:

```html
<button class="menu-toggle"><span>Menu</span></button>
```

```css
.menu-toggle span {
  display: none;
}

.menu-toggle:after {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f0c9";
}
```

---

# Exercise 2

We're going to use Font Awesome to add the social media icons in the footer of the Project 1 website.

Download Font Awesome and add the font files and minified CSS file to your project (unless you choose to link to the CDN resource).

Be sure to hook up the stylesheet in the `<head>` of your website too!

To add the social media icons, check out Font Awesome's [Brand Icons](https://fontawesome.com/icons?d=gallery&s=brands).

---


template: inverse

# CSS Positioning

---

# Document Flow

Notice how the `<h1>` takes an entire row, `display: block;` and the `<a>` tag is inline, `display: inline;`.

.inline-images[
![CSS Box Concept](/public/img/slide-assets/css-box-concept.svg)
]

---

# Document Flow

With **CSS Positioning** we can change the default flow and move things around the page as we see fit.

There are a few position values that we can use. 
The main ones are:

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

# What We've Learned

* How to use `@font-face`
* How to use Google Fonts
* What licensed font services are available
* What an icon font is and the advantages of using one
* How to use Font Awesome
* CSS Positioning

---

template: inverse

# Questions?

{% endhighlight %}

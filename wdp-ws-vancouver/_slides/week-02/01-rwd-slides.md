---
layout: slidedeck
title: Responsive Web Design Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Responsive Web Design

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. What is "Responsive Web Design"?
2. Three components of RWD
3. Mobile-first
4. CSS3 properties

---

template: inverse

# What is RWD?

---

class: center, middle

.inline-images-border[
![RED desktop view](/public/img/slide-assets/red-screenshot-desktop.jpg)
]

---

class: center, middle

.inline-images-border[
![RED mobile view](/public/img/slide-assets/red-screenshot-phone.jpg)
]

---

class: center, middle

.large[
Fixed vs. Fluid vs. Adaptive vs. Responsive ... GO!
]

---

# vs. Mobile-Only

* Mobile-only websites are designed specifically to be viewed on mobile devices
* They are not the same the website as the desktop version
* Usually require "browser sniffing" (not foolproof)
* You often find them on "m." sub-domains
* Check out: https://m.facebook.com/
* This is becoming less common today...

---

class: center, middle

.large[
What are the 3 components of responsively designed websites?
]

---

template: inverse

# 1) Flexible Grids & Layouts

---

# Be Flexible!

What needs to be done to make this layout flexible?

```html
<div class="container">
   <article>This is the content...</article>
   <aside>This is the sidebar...</aside>
</div>
```

```css
.container {
  display: flex;
  width: 960px;
}

article {
  width: 640px;
}

aside {
  width: 320px;
}
```

---

class: center, middle

.large[
And how do we make font and box model units flexible?
]

---

# EM vs. REM

_What's the difference?_

* `em` units change the size relative to the **parent element**
* `rem` units are always relative to the `font-size` set on the `<html>` element

Using `rem` units can make proportionally scaling font sizes a little much more manageable.

_Let see a quick demo of how this works..._

---

template: inverse

# 2) Flexible Images & Media

---

# Wrangling Media

Flexible layouts are great, but images and other media require special attention in RWD.

CSS offers some helpers to assist with this wrangling:

* `max-width`
* `min-width`
* `max-height`
* `min-height`

---

# max-width

Using `max-width` is a handy way scale your media:

```css
img,
video {
  max-width: 100%; /* adhere to container width */
  height: auto; /* make sure height scales correctly */
}
```

Setting the `max-width: 100%` property/value will ensure that the element is never larger than it's container.

---

# min-width

Conversely, `min-width` can ensure that a particular element never shrinks below a certain width:

```css
.logo {
  width: 20%; /* scale the logo */
  min-width: 200px; /* but make sure it's at least 200px */
}
```

---

template: inverse

# 3) Media Queries

---

# More on Media Queries

The idea of targeting media for specific devices has been around for a long time.

Even in pre-CSS3 days, we could target styles for different media types using the `media` attribute in a `link` tag:

```html
/* These styles are targeted for display in the browser screen */
<link rel="stylesheet" href="styles.css" media="screen" />

/* These styles customize the page so it works better for print */
<link rel="stylesheet" href="print.css" media="print" />
```

---

# Old Dog, New Tricks

Today, we can take that a step further and target our stylesheets for more specific circumstances:

```html
<link rel="stylesheet" href="styles.css" media="all and (max-width: 960px)">
```

The CSS in this stylesheet will apply to all types of media, but only if they are 960px wide or less.

Currently available media types include `all`, `screen`, `print`, and `speech`.

---

# Old Dog, New Tricks

We can target entire stylesheets or just parts of them at particular screen sizes, resolutions, orientations or device contexts:

```html
<!-- In the <head> tag of an .html file... -->

<link rel="stylesheet" href="style.css" media="all and (max-width: 960px)">
```

```css
/* In a .css file... */

@media all and (max-width: 960px) {
  /* Targeted CSS goes here... */
}
```

Using `@media` in a stylesheet is typically the preferred method&mdash;and it's what we'll use in our projects.

---

# A New Meta Tag

But whichever approach you take, there's a new `meta` tag you may want to include when building a responsive website:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Read more about [managing the viewport](https://css-tricks.com/snippets/html/responsive-meta-tag/).

---

# Media Query Anatomy

The code you stick inside your media query rules works just like any other CSS:

```css
@media screen and (max-width: 960px) {
  body {
    color: red;
  }
}
```

_Who can explain what this media query does in plain English?_

---

# Media Query Anatomy

You can specify the screen orientation:

```css
@media screen and (max-width: 960px) and (orientation: landscape) {
}
```

Or target high-density pixel displays, like the Retina screens on Apple devices:

```css
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
}
```

---

# Exercise 1

Your task is to find an example of a responsively-designed website. Take notes on:

* Where are the main breakpoints? What happens at these breakpoints?
* What happens to the navigation for mobile widths?
* Are there ads on the site? How are they handled?
* Does anything seem to be not-quite-right at any width?

Afterward, we'll pair up and share our findings.

---

template: inverse

# Mobile First

---

class: center, middle

.large[
What does it mean to take a mobile-first approach to RWD?
]

---

class: center, middle

.large[
[Improving Smashing Magazine’s Performance: <br />A Case Study](http://www.smashingmagazine.com/2014/09/improving-smashing-magazine-performance-case-study/)
]

---

# Mobile-First Breakpoints

There's nothing particularly fancy about writing media queries to be mobile-first. We simply rely predominantly on `min-width` instead of `max-width`:

```css
@media screen and (min-width: 480px) {
}

@media screen and (min-width: 600px) {
}

/* and so on... */
```

Think about mobile-first as being an **additive** rather than **subtractive** approach to web development.

---

# Exercise 2

Let's try converting a desktop-only website to be fully responsive and mobile-first.

You'll be optimizing for two breakpoints: `480px` and `720px`

Screenshots of what the website should look like at mobile, tablet, and desktop width have been included in the following package:

**[Download the exercise &rarr;](/public/files/exercises/rwd-refactor.zip)**

---

# Exercise 3

Now that we've had a chance to brush up our RWD skills, let's strategize how we'll apply this to our Project 1.

Take a few moments to review the two narrower design comps and think about what areas of the site will specifically be affected by the changes that are happening at each breakpoint.

Jot some idea out on your own, then you'll team up to discuss this with a partner. We'll then reconvene to discuss each other's findings, as well as any questions or concerns before starting with the lab work.

---

template: inverse

# Bonus Round: <br />More CSS3 Properties

---

# CSS3 Properties

The `@media` syntax for media queries comes to us courtesy of CSS3.

CSS3 provides us with these additional properties too:

* `border-radius`
* `box-shadow`
* `opacity`
* gradients

---

# Exercise 4

Let's teach each other about these CSS3 properties...

Your task is to take your assigned property and create a demo of how it can be used for your classmates.

Also take a look at Project 1, and see if you can recommend where it this property could potentially be used (if at all).

---

# What We've Learned

* The difference between, fixed, fluid, adaptive, responsive, and mobile-only websites
* The 3 components of RWD
* How to write mobile-first media queries
* Other mobile-first considerations
* How to use `border-radius`, `box-shadow`, `opacity`, and gradients

---

template: inverse

# Questions?

{% endhighlight %}

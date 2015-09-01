---
layout: slidedeck
title: Responsive Web Design Review
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Responsive Web Design Review

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is "Responsive Web Design"?
2. Three components of RWD
3. Mobile-first

---
template: inverse

# What is RWD?

---
class: center, middle

.inline-images-border[
   ![RED desktop view](/public/img/slide-assets/red-screenshot-desktop.png)
]

---
class: center, middle

.inline-images-border[
   ![RED mobile view](/public/img/slide-assets/red-screenshot-phone.png)
]

---
class: center, middle

.large[
   Fixed vs. Fluid vs. Adaptive vs. Responsive ... GO!
]

---

# vs. Mobile-Only

- Mobile-only websites are designed specifically to be viewed on mobile devices
- They are not the same the website as the desktop version
- Usually require "browser sniffing" (not foolproof)
- You often find them on "m." sub-domains
- Check out: https://m.facebook.com/
- This is becoming less common today...

---
class: center, middle

.large[
   What are the 3 components of responsively designed websites?
]

---
template: inverse

# 1) Flexible Grids & Layouts

---

# Flex It!

What needs to be done to make this layout flexible?

```html
<div class="container">
   <article>This is the content...</article>
   <aside>This is the sidebar...</aside>
</div>
```

```css
.container {
   width: 960px;
}

article {
   width: 640px;
   float: left;
}

aside {
   width: 320px;
   float: right;
}
```

---
class: center, middle

.large[
   And how do we make font and box model units flexible?
]

---

# EM vs. REM

*What's the difference?*

- `em` units change the size relative to the **parent element**
- `rem` units are always relative to the `font-size` set on the `<html>` element

Using `rem` units can make proportionally scaling font sizes a little more manageable, but it's not supported by IE8.

---
template: inverse

# 2) Flexible Images & Media

---

# Wrangling Media

Flexible layouts are great, but images and other media require special attention in RWD.

CSS offers some helpers to assist with this wrangling:

- `max-width`
- `min-width`
- `max-height`
- `min-height`

---

# max-width

Using `max-width` is a handy way scale your media:

```css
img, video {
   max-width: 100%; /* adhere to container width */
   height: auto; /* make sure height scales correctly */
}
```

Setting the `max-width: 100%` property will ensure that the element is never larger than it's container.

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

# Targeting CSS

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

*Who can explain what this media query does in plain English?*

---

# Media Query Anatomy

You can specify the screen orientation:

```css
@media screen and (max-width: 960px) and (orientation: landscape) {

}
```

Or target high-density pixel displays, like the Retina screens on Apple devices:

```css
@media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 192dpi) {

}
```

---

# Exercise 1

Your task is to find an example of a responsively-designed website. Take notes on:

- Where are the main breakpoints? What happens at these breakpoints?
- What happens to the navigation for mobile widths?
- Are there ads on the site? How are they handled?
- Does anything seem to be not-quite-right at any width?

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

**[Download the exercise &rarr;](/public/files/exercises/rwd-review-e2.zip)**

---

# Exercise 3

Now that we've had a chance to brush up our RWD skills, let's strategize how we'll apply this to our Week 1 projects.

Take a few moments to review the two new design comps and think about what areas of the site will specifically be affected by the changes that are happening at each breakpoint.

Jot some idea out on your own, then you'll team up to discuss with a partner. We'll then reconvene to discuss each other strategies, as well as any questions or concerns before starting with the lab work.

---

# What We've Learned

- The difference between, fixed, fluid, adaptive, responsive, and mobile-only websites
- The 3 components of RWD
- How to write mobile-first media queries
- Other mobile-first considerations

---
template: inverse

# Questions?

{% endhighlight %}

---
layout: slidedeck
title: Intro to CSS Transitions
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to CSS Transitions

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. CSS Transform types
2. Vendor Prefixes
3. Distinguish what properties are animatable in CSS3
4. Transition Properties
5. Applying basic CSS transitions to elements.


---

template: inverse

# CSS Transform Types
##Scale, Rotate, Transform, Skew
---

template: inverse

# What are Vendor Prefixes?

---
# Getting to know Vendor Prefixes

This website link [Vendor Prefixes](http://webdesign.about.com/od/css/a/css-vendor-prefixes.htm) explains how if you are building a website that might be viewed on an older browser, that you should add all types of vendor styles. It's recommended you still want to show the W3C standard property in the CSS statement (as shown in the last line).

```CSS

-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;  

```

---
#W3C Standard for CSS Properties

```CSS

border:dashed 5px #000000;
box-shadow:10px 10px 5px #000000;
transition: all 4s ease;

```


---
template: inverse

# What are Animatable Properties?
##Cascading Style Sheets
---

## Animatable Properties


[List of Animatable Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

---
template: inverse

# Transition Properties
##Cascading Style Sheets
---

# Applying Basic Transitions

---

## How to Apply Transitions
Transitions that can be applied with CSS3 onto different elements in your site such as buttons, images, content, divs, links etc.

---
# Syntax Highlighting

```html
<!-- A bit of sample HTML with syntax highlighting-->

<html>
   <head>
      <title>An Awesome Website</title>
   </head>
   <body>
      <h1>Hello world again!</h1>
      <p class="my-class">Just a little bit of sample code.</p>
   </body>
</html>
```

---

.left-column[
  ## Remark How-tos
]

.right-column[
   This slideshow is based on [remark.js](https://github.com/gnab/remark).

   To learn more about building a slideshow with remark, check out:

   - [The remark formatting guide](https://github.com/gnab/remark/wiki/Formatting)
   - [The remark Markdown guide](https://github.com/gnab/remark/wiki/Markdown)
]

---
template: inverse

# Fin!

{% endhighlight %}

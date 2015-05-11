---
layout: slidedeck
title: Intro to CSS Layout Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# CSS Navigation and Layouts

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Create HTML lists (ordered & unordered)
2. Apply CSS Reset
3. CSS positioning (static, relative, absolute, and fixed)
4. CSS floats/clear floats
5. Use Images in CSS
6. Standard Layout Practices
---
template: inverse

# HTML Lists
##Ordered and Unordered Lists

---
## Types of Lists
**Ordered List** displays list items numbered in different styles (decimal, roman and alpha)

**Unordered List** displays list items as various bulleted styles (disc, circle, square or custom) 

*See pg. 333-336 in your HTML/CSS text for further examples* 
---

template: inverse

# CSS Reset

---
## CSS Reset
- The goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings.

---
## Example of Eric Meyer's Reset
```css
/**
 * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
 * http://cssreset.com
 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

```
---
## Example of Eric Meyer's Reset (cont)
```css
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```
---

template: inverse

# CSS Positioning
## Static, Relative, Absolute, Fixed

---
##CSS Positioning Types

****Static/Normal Flow****: Default behaviour of content on a page

****Relative****: Moves an element from its normal flow

****Absolute****: This element is removed from its normal flow, and moves in relation to its containing block.

****Fixed***: Positions the element with relation to the browser window, and does not move when page is scrolled. 

*See pg. 363-376 in your HTML/CSS text for further examples* 
---

## Z-Index
- The Z-Index property allows for elements to stack and overlap each other. The higher the z-index, the more closer the element is to the front, the smaller the number, the element will appear more in the background. 
---
## Common Web Formats

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


---
template: inverse

# Fin!

{% endhighlight %}

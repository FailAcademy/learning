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
5. Standard Layout Practices
6. Navigation List Menus
---
template: inverse

# HTML Lists
##Ordered and Unordered Lists

---
## Types of Lists
**Ordered List** displays list items numbered in different styles (decimal, roman and alpha)

```html
<h3> Star Wars Movies </h3>
<ol style="list-style-type:upper-roman">
	<li>The Phantom Menace</li>
	<li>Attack of the Clones</li>
	<li>Revenge of the Sith</li>
</ol>
```

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/yNgWwe/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/yNgWwe/'>yNgWwe</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
## Types of Lists
**Unordered List** displays list items as various bulleted styles (disc, circle, square or custom) 
```html
<h3> Star Wars Characters</h3>
<ul style="list-style-type:square">
	<li>Anakin Skywalker</li>
	<li>Obi-Wan</li>
	<li>Darth Vader</li>	
</ul>
```
<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/YXNmwP/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/YXNmwP/'>YXNmwP</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

*See pg. 333-336 in your HTML/CSS text for further examples* 
---

template: inverse

# CSS Reset

---
## CSS Reset
- The goal of a reset stylesheet is to **reduce browser inconsistencies** in things like default line heights, margins and font sizes of headings.

- The reset styles shown on the next page are **intentionally very generic**. There isn't any default color or background set for the body element, for example, and you'll want to tweak the reset so it works with your website's styling.

---
## Example of Eric Meyer's Reset
```css
/** Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
 http://cssreset.com */
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
## CodePen Example of Meyer's Reset

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/gpgVrM/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/gpgVrM/'>gpgVrM</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
---

template: inverse

# CSS Positioning
## Static, Relative, Absolute, Fixed

---
##CSS Positioning Types

****Static/Normal Flow****: Default behaviour of content on a page

****Relative****: Moves an element from its normal flow

****Absolute****: This element is removed from its normal flow, and moves in relation to its containing block.

***Fixed***: Positions the element with relation to the browser window, and does not move when page is scrolled. 

*See pg. 363-368 in your HTML/CSS text for further examples* 
---

## Z-Index
- The Z-Index property allows for elements to stack and overlap each other. The higher the z-index, the more closer the element is to the front, the smaller the number, the element will appear more in the background. 

---
template: inverse

# CSS Floats

---

## Uses for CSS Floats
**Floating Images with Text** When this float is applied, it moves an element either left or right on the page while the rest of the content flows around it. This is commonly used to wrap text around images in the content section of a page.  

**Floating Images Beside Each Other** When this float is applied, it allows for elements to be situated side by side one another. Typically, each element will contain a width and float property.

*See pg. 370-371,375 in your HTML/CSS text for further examples*
---
## Uses for CSS Floats cont. 

**Creating Multi-Column Layouts** When this type of float is applied to divs with different paragraph content, the text will flow as a few columns across the page. Typically, each div column will contain a width and float:left property.

*See pg. 375 in your HTML/CSS text for further examples*
---
## Clearing Floats 
Use the *clear* property to remove and prior floats to an element. You can specify: left, right or both. The clear property can be applied onto ID selectors as well as custom class selectors. 

```css

img {
    float: left;
}

.clearfloat {
	clear: both;
	}

```

*See pg. 372 in your HTML/CSS text for further examples*
---
template: inverse

# CSS Backgrounds

---
## CSS Background Properties
- **Background-color:** web hexidecimal code
- **Background-image:** url(image);
- **Background-repeat:** values (repeat, repeat-x, repeat-y,            
 or no-repeat)
- **Background-attachment:** values (scroll or fixed)
- **Background-position:** values (left, right, top, bottom)

---
## CSS Background Shorthand

###### Since there are so many properties for specifying backgrounds, you can use the shorthand method by specifying the properties you want in the correct order (and leave out the properties you do not require).

```css
body {
    background: #hexcode url("tile.png") repeat-x center top;
}

```

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/ZGLgeM/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/ZGLgeM/'>ZGLgeM</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
---
template: inverse

# Common CSS Layout Examples

---
## Basic DIV Layout Set-up

.inline-images[![Balsamiq Wireframe](../../public/img/slide-assets/div_layout_balsamiq.png)]

---
template: inverse

# Navigation List Menus

---
## Converting A List into a Horizontal Menu

There are some key properties that will turn a list into a horizontal menu.
- **display: block; ** takes the list items and moves them horizontally
- **list-style-type: none; ** removes the bulleted points from the ul list.
- **text-decoration: none; ** removes the underline from the button links

---
## Take a Closer Look at A Basic Horizontal Menu

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/WvRBYV/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/WvRBYV/'>WvRBYV</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
---

template: inverse

# Fin!

{% endhighlight %}

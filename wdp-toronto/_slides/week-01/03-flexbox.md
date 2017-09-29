---
layout: slidedeck
title: Flexbox Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Flexbox

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Why Flexbox?
2. Flexbox properties and values
3. Try some flexbox layouts

---
template: inverse

# Why Flexbox?

---

# Flexbox FTW!

Flexbox makes common web-page layout requirements easy to code:

- Equal height columns
- Evenly spaced containers
- Vertical centering
- Sticky footers
- ...and more!

---
class: center, middle

.large[
   NO MORE FLOAT BASED LAYOUTS!
]

---
class: center, middle

.large[
   NO MORE POSITIONING HACKS!
]

---
class: center, middle

.inline-images[
   ![Flexbox everywhere](/public/img/slide-assets/flexbox-everywhere.jpg)
]

---
class: center, middle

.inline-images[
   ![Flexbox tears of joy](/public/img/slide-assets/flexbox-tears.jpg)
]

---
template: inverse

# Using Flexbox

---
class: center, middle

### Bookmark this resource right now:

**[CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**

---

# Flexbox Syntax

Here is how we create a horizontally/vertically-centered element using flexbox:

```css
.container {
  align-items: center;
  display: flex;
  height: 300px;
  justify-content: center;
}
```

---
class: center, middle

.large[
   Wait, what?
]

---
class: center, middle

.large[
   Once again, CSS has found a way to make things less obvious than they should be.
]

---

# Flexbox Syntax

When creating flexbox-based layouts, you need to keep a few things in mind:

1. The parent element that you use is the **flex container**
2. The children elements that are affected is the **flex items**
3. The flex items follow each other along the **main axis**
4. The **cross axis** is perpendicular to the main axis

*Let's clarify this by taking a closer look...*

---
class: center, middle

### Code-along time!

Open this CodePen and code along with me: **[codepen.io/redacademy/pen/eJyXPy](http://codepen.io/redacademy/pen/eJyXPy?editors=1100)**

---
template: inverse

# Flex Container Properties

---

# flex

Creating a flex container is accomplished simply using the `display` property in our CSS:

```html
<ul class="parent">
   <li class="child">Child 1</li>
   <li class="child">Child 2</li>
</li>
```

```css
.parent {
   display: flex;
}
```

You can also set `display: inline-flex` to create a non-block-level flex container element.

---

# flex-direction

The `flex-direction` property determines the **main axis**:

```css
.parent {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

How it works:

- `row` (default) / `row-reverse` makes the main axis horizontal
- `column` / `column-reverse` makes the main axis vertical

---

# flex-wrap

The `flex-wrap` property determines whether the flex items can wrap onto a new line:

```css
.parent {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

The `nowrap` value is the default value.

---

# flex-flow

The `flex-flow` property is short-hand for `flex-direction` and `flex-wrap` together:

```css
.parent {
   flex-flow: <‘flex-direction’> || <‘flex-wrap’>
}
```

The default value is `row nowrap`.

---

# justify-content

Controls how flex items are laid out along the **main axis**

```css
.parent {
   justify-content: flex-start | flex-end | center | space-between
                    | space-around;
}
```

The `flex-start` value (default) aligns items to the start, `flex-end` aligns items to the end, and `center` centers the items along the axis.

The `space-between` value spaces items evenly with the first item at the start and last item at the end of the line, while `space-around` adds equal space on each side of each item.

---

# align-items

Controls how flex items are laid out along the **cross axis**:

```css
.parent {
   align-items: flex-start | flex-end | center | baseline | stretch;
}
```

The first 3 behave like `justify-content` for the cross axis.

The  `baseline` value aligns the baselines of the items, while `stretch` (default) stretches the items along the cross axis to fill the container.

.footnote[.red[* ] The flex container must have a height set for this to work!]

---

# align-content

This property aligns the line(s) of flex items where there is extra space along the cross axis:

```css
.container {
   align-content: flex-start | flex-end | center | space-between
                  | space-around | stretch;
}
```

The default value is `stretch` (so that items take up remaining space along the cross axis).

.footnote[.red[* ] You must have multiple rows of content (`flex-wrap: wrap`) for this to work!]

---

# Exercise 1

Let's apply these flexbox concepts to Project 1.

We'll start by refactoring the floats in the site `<footer>` into flexbox properties following these steps:

1. Remove your floats
2. Apply `display: flex` to the appropriate element
3. Figure out how to get the address and the social links aligned to the left and right sides as they were with your floats (for screen widths `600px` and up only, of course!)

---
template: inverse

# Flex Items Properties

---

# order

The `order` property allows you to manipulate the order of the items to be different from how they naturally flow based on your mark-up:

```css
.child {
   order: <integer>;
}
```

*Remember this one, it's a life-saver with RWD!*

---

# flex-grow

This property determines whether an item can grow, if necessary. The value must be a single, unit-less (but proportional) value:

```css
.item {
   flex-grow: <number>; /* default 0 */
}
```

If all the child items are set to `flex-grow: 1`, then they will be evenly distributed.

If a child is set to `flex-grow: 2` it will try to occupy double the space of the other children (when free space is distributed). Negative numbers are not valid.

---

# flex-shrink

Opposite to `flex-grow`, `flex-shrink` determines the ability for an item to shrink proportionally:

```css
.child {
   flex-shrink: <number>; /* default 1 */
}
```

By default all flex items can be shrunk. If we set `flex-shrink` to 0 (don’t shrink) they will keep the original size.

Negative numbers are not valid.

---

# flex-basis

This defines the default size of an element before the remaining space is distributed.

It can be a length (i.e. an absolute unit such as `px`, `mm` or `pt`, or a percentage ) or a keyword:

```css
.child {
  flex-basis: <length> | auto; /* default auto */
}
```

The `auto` keyword will look at the width or height property of a given child to determine its size.

---

# flex

The `flex` property gives us a shorthand method for `flex-grow`, `flex-shrink` and `flex-basis` combined:

```css
.child {
   flex: none | [ <`flex-grow`> <`flex-shrink`> || <`flex-basis`> ]
}
```

As a general rule, use this shorthand instead of the previous individual properties.

The default value is `0 1 auto`.

---

# align-self

The `align-self` property allows you to override the default alignment for an individual flex item:

```css
.item {
   align-self: auto | flex-start | flex-end | center
               | baseline | stretch;
}
```

The values for `align-self` behave as they do for the `align-items`.

---

# Exercise 2

Let's try out some of the flex item-related properties in project within the site `<header>` now following these steps:

1. Remove all floats from your `<header>` elements
2. Apply `display: flex` to the appropriate container
3. Use a combination of flex item properties to set the logo back to the left edge and the cart icon set to right edge of the page (and make sure they are the right size!)

---
template: inverse

# A Few More Things...

---
class: center, middle

.large[
   You can nest `display: flex` elements inside of one another.
]

---
class: center, middle

.large[
   Flexbox works well in modern browsers, but you may require **vendor prefixes** to support older browsers.
]

---

# Vendor Prefixes

**Vendor prefixes** are characters that are placed in front of CSS3 properties that are considered **experimental** in any particular version of a browser.

One of two things makes a property experimental:

1. The property belongs to a module in the CSS3 specification that hasn't been finalized yet
2. A browser vendor wants to create their own experimental properties that aren't included in any proposed standard

---

# What's a Vendor Prefix?

Different browsers have their own unique vendor prefixes:

- Webkit: `-webkit-`
- Firefox: `-moz-`
- Opera: `-o-`
- IE: `-ms-`

---

# Using Vendor Prefixes

To use vendor prefixes, you simply put each required prefix in front of the experimental property in question:

```css
.container {
   -webkit-box-align: center;
   -webkit-align-items: center;
        -ms-flex-align: center;
           align-items: center;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   height: 300px;
   -webkit-box-pack: center;
   -webkit-justify-content: center;
             -ms-flex-pack: center;
           justify-content: center;
}
```

---
class: center, middle

.large[
   But how do you know what needs to be prefixed?
]

---

# Vendor Prefix Tools

**[Autoprefixer](https://github.com/postcss/autoprefixer) to the rescue!**

- Use an app for that...[Codekit](https://incident57.com/codekit/)
- Use a [text editor plugin](https://github.com/postcss/autoprefixer#text-editors-and-ide)
- Use an [online tool](https://autoprefixer.github.io/)
- Learn a JS taskrunner like [Gulp](http://gulpjs.com/) or [Grunt](http://gruntjs.com/)

---

# Exercise 3

Go back to your [Codepen flexbox demo](http://codepen.io/redacademy/pen/eJyXPy?editors=1100) and see if you can get the text (e.g. Item 1, etc.) centered vertically and horizontally inside of the coloured boxes.

Think about whether you need to make any adjustments to the mark-up to make this happen...

**Bonus challenge!** Can you figure out how to use nested `display: flex` parent/child elements to lock each coloured box in a corner of the browser window?

---

# What We've Learned

1. How (and why!) to use flexbox in lieu of floats and positioning
2. The difference between flex containers vs. items, and the main vs. cross axis
3. What a vendor prefix is and why we need them

---
template: inverse

# Questions?

{% endhighlight %}

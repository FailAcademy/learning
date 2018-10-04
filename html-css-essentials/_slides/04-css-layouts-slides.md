---
layout: slidedeck
title: CSS Layout and Flexbox Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# CSS Layouts and Flexbox

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Review: block vs. inline
2. Positioning elements with CSS
3. Floating elements with CSS
4. Why Flexbox?
5. Flexbox properties and values
6. Validating HTML and CSS code

---
template: inverse

# Review+

---
class: center, middle

.large[
	Block vs. Inline
]

---
class: center, middle

### CSS Display Properties

We've learned that HTML elements can be inline or block-level, but there's more to the story than that.

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

# Changing Display

We can override an element default display behaviour using the `display` property in our CSS.

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
class: center, middle

### Not that simple!

But there's another distinction to be made...<br />an element can also be **inline-block**.

---

# Display Differences

Block                                 | Inline-block                    | Inline
------------------------------------- | --------------------------------|---------------------------------
Has top/bottom margin & padding       | Has top/bottom margin & padding | No top/bottom margin or padding
Has left/right margin & padding       | Has left/right margin & padding | Has left/right margin & padding
Can have set height and width         | Can have set height and width   | Cannot have set width or height
Forces a line break after the element | Does not a force a line break   | Does not force a line break

---
class: center, middle

.inline-images[
   ![CSS display properties](/public/img/slide-assets/css-display-props.svg)
]

---
template: inverse

# Position

---

# Working with Position

We can take even more control over our layouts using the CSS `position` property. The `position` property can take a specific array of values:

- `static` (the default behaviour, aka **normal flow**)
- `relative`
- `absolute`
- `fixed`

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

The z-index property lets us specify the stacking order of non-static, overlapping elements.

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

Now that you've learned about CSS positioning using `relative`, `absolute`, and `fixed`, determine what type of positioning you'll need to use on the project `header` element. 

Implement it now!

---
template: inverse

# Floats

---

# What's a Float?

Floats are another handy layout tool in CSS.

They also take elements **out of the normal flow** and place to the **far left** or **far right** side of their container element.

Text and other inline elements will then **wrap around** the floated element.

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
	Floats used to be the key to creating multi-column layouts.<br />(But we have flexbox now...)
]

---

# Using Floats

To float elements in CSS, we use the `float` property:

```css
aside {
	width: 200px;
	float: right;
}
```

We can also stop a previously floated element from floating:

```css
aside {
	float: none;
}
```
---
class: center, middle

.large[
	Important caveat alert!
]

---

# Float Weirdness

When using floats to position groups of elements, we often must intentionally **cancel out** the floating behaviour to prevent subsequent elements from floating unintentionally.

This is known as **clearing floats**.

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

# Using a Clearfix

A popular option is to use the **clearfix** method, which applies the `clear` property to a **pseudo-element** of the container&mdash;an "imaginary" element that follows a real element:

```html
<section class="clearfix">
	<!-- float elements in here -->
</section>
<!-- imaginary element after the .clearfix element here -->
```

```css
.clearfix:after {
	content: "";
	display: table;
	clear: both;
}
```

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
   NO MORE HACKS TO BUILD COMMON PAGE LAYOUTS!
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

Here is how we style a element with **vertically and horizontally centered children** using flexbox:

```css
.container {
  align-items: center;
  display: flex;
  height: 300px;
  justify-content: center;
}
```

---

# Flexbox Syntax

When creating flexbox-based layouts, you need to keep a few things in mind:

1. The parent element that you use as the **flex container**
2. The children elements that are affected as the **flex items**
3. The flex items follow each other along the **main axis**
4. The **cross axis** is perpendicular to the main axis

*Let's clarify this by taking a closer look...*

---
class: center, middle

### Code-along time!

Open this CodePen and try these properties along with me: **[codepen.io/redacademy/pen/GoYLaG](http://codepen.io/redacademy/pen/GoYLaG?editors=1100)**

---
template: inverse

# Flex Container Properties

---

# flex

Creating a flex container is accomplished simply by using the `display` property in our CSS:

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

- `row` (default) / `row-reverse` make the main axis horizontal
- `column` / `column-reverse` make the main axis vertically

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

# Exercise 2

Let's apply these flexbox concepts to your project.

We'll start styling the site `<footer>` with flexbox properties following these steps:

1. Apply `display: flex` to the appropriate element
2. Figure out how to get the address and the social links aligned to the left and right sides of their parent element

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

Opposite to `flex-shrink`, determines the ability for an item to shrink proportionally:

```css
.child {
   flex-shrink: <number>; /* default 1 */
}
```

By default all flex items can be shrunk. If we set `flex-shrink` to 0 (don’t shrink) they will keep the original size.

Negative numbers are not valid.

---

# flex-basis

This defines the default size of an element before the remaining space is distributed. It can be a length (i.e. an absolute unit such as px, mm or pt, or a percentage ) or a keyword:

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
template: inverse

# A Few More Things...

---
class: center, middle

.large[
   You can nest `display: flex` elements inside of one another.
]

---

# Exercise 3

Apply `display: flex` to your project's image gallery (in the About section). Make sure that the images are flexed so the left edge of the first image touches the left side of the container, and the right edge of the last image touches the right side of the container.

Now figure out how to use the `flex` property shorthand on the individual images to ensure they only occupy `32%` of the screen's width each.

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
template: inverse

# Validating Your Code

---

# What is Validation?

Validating your code simply means that you make sure it conforms to the norms and standards set forth by various organizations.

Valid code will help ensure your website universally understood.

---

# Validation Tools

There many are different validation tools available for validating your HTML and CSS:

Some recommended tools include:

- [W3C Mark-up Validation Service](https://validator.w3.org/)
- [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/)

*Also use the developer tools in your browser to ensure there are no obvious broken links to files or images.*

---

# What We've Learned

- The difference between `block`, `inline-block`, and `inline` elements
- Different ways to use the `position` property
- How to `float` elements
- How to use flexbox in lieu of floats and positioning for creating layouts
- What a vendor prefix is and why we need them
- How we can validate our HTML and CSS

---
template: inverse

# Questions?

{% endhighlight %}

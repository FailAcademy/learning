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

1. Review: block vs. inline, HTML5
2. Positioning elements with CSS
3. Floating elements with CSS
4. List-based navigation menus

6. Using CSS resets

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
class: center, middle

.large[
	HTML5 Elements
]

---
class: center, middle

.inline-images[
   ![HTML5 example layout](/public/img/slide-assets/html5-semantic-tags.png)
]

---

# Div-itis

We've learned that the `<div>` can be used for flowing and organizing groups of related elements or content. Before HTML5, our websites often relied heavily on `<div>` elements:

```html
<div id="header">
   <h1>A Tall Tale</h1>
</div>
<div class="short-story">
   <div class="chapter-one">
      <p>The paragraph goes here...</p>
   </div>
</div>
<div class="widget">
	<p>"The aside goes here..."</p>
</div>
<div id="footer">
   &copy; 2015.
</div>
```

---
class: center, middle

### HTML5 to the rescue!

With HTML5 we can replace a lot of those `<div>` elements with more semantically named structural elements.

---

# HTML5 Structure

With HTML5, we can now mark-up our website content with more descriptive structural elements:

```html
<header>
   <h1>A Tall Tale</h1>
</header>
<article class="short-story">
   <section class="chapter-one">
      <p>The paragraph goes here...</p>
   </section>
</article>
<aside class="widget">
	<p>"The aside goes here..."</p>
</aside>
<footer>
   &copy; 2015.
</footer>
```

---

# Header

```html
<header>...</header>
```

The `<header>` element is used to identify the top of a page, article, section, or other segment of a page. It may even include navigational elements.

**But watch out!**

This element is not to be confused with the `<head>` element (for containing page metadata, etc.) or with the `<h1>` through `<h6>` elements (for containing actual heading text)!

---

# Nav

```html
<nav>...</nav>
```

The `<nav>` element is for wrapping major navigational elements, such as the main website navigation menu, or previous/next links within blog posts.

One-off links shouldn't be wrapped in `<nav>` tags, they should simply be wrapped in `<a>` tags as they always have.

---

# Article

```html
<article>...</article>
```

The `<article>` element is used to identify a single, **self-contained** chunk of content such as a blog post, news article, or perhaps even an entire online book.

The key to knowing whether to use an `<article>` element is to ask yourself "if I cut this content out and pasted it somewhere else, would that content make sense on its own?"

---

# Section

```html
<section>...</section>
```

The section element is for grouping **thematically-related** content together.

That may make it sound like an HTML5 drop-in replacement for the `<div>`, but the key to using the `<section>` element is that its content must be thematically-related.

And similarly, they differ from the `<article>` element because those must be self-contained.

---

# Aside

```html
<aside>...</aside>
```

The `<aside>` element is used for tangentially related content (e.g. an author bio).

However, just because something appears to the right or left of the main content area does not necessarily make it suitable for an `<aside>`.

---

# Footer

```html
<footer>...</footer>
```

The `<footer>` element is a companion to the `<header>` element and can be used to wrap elements at the bottom of a page, section, or article.

A `<footer>` element should appear at the very bottom of its parent element.

---
class: center, middle

.large[
	Why are these elements <br />better than divs?
]

---

# Exercise 1

Let's cure our project sites of div-itis now...

Look at at your mark-up and decide which of the HTML5 elements should be used to replace the various `<div>` elements you have already added to your code.

The tricky part will be deciding how (and if) you should use the `<section>` or `<article>` element.

Remember that if you have added any classes to your existing `<div>` elements you will need to transfer those over or your CSS will break.

---
template: inverse

# Position

---
class: center, middle

.inline-images[
   ![CSS Box Concept](/public/img/slide-assets/css-box-concept.svg)
]

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

# Exercise 2

Let's try out different kinds of positioning in CSS:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/mJwRxG/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/mJwRxG/'>mJwRxG</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

# Mini-Exercise

Now that you've tried out CSS positioning using `relative`, `absolute`, and `fixed`, determine what type of positioning you'll need to use on the Project 1 `header` element. 

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

The `float` property was originally meant to allow content to flow around images, not for layout and positioning purposes.

When using floats to position groups of elements, we often must intentionally **cancel out** the floating behaviour to prevent subsequent elements from floating unintentionally.

---

# Clearing Floats

The `clear` property is how we cancel out floating behaviour.

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

# Even Better

We can also abstract our float-clearning behaviour into a special class so it can be re-used on other elements too:

```html
<footer class="clear"><!-- footer content --></footer>
```

```css
.clear {
	clear: both;
}
```

---

# Even Better Still

As an alternative to applying the `clear` property to an element, to set the `overflow` property the floated elements' parent to be `auto` or `hidden`:

```html
<section class="wrapper">
	<article><!-- article content --></article>
	<aside><!-- aside content --></aside>
</section>
```

```css
.wrapper {
	overflow: auto;
}

article,
aside {
	width: 50%;
	float: left;
}
```

---

# Best: The Clearfix

Another popular option is to use the **clearfix** method, which applies the `clear` property to a **pseudo-element** of the container&mdash;an "imaginary" element that follows a real element:

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

# Navigation Menus

---

# Creating Nav Menus

Many of the navigation menus you see on websites today are structured as **unordered lists**.

We can then **take advantage of floats** and other CSS properties to make lists look more like navigation menus.

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

But we don't want it to look like an unordered list on our website, so we can use CSS to fix that.

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

# Exercise 3

Time to add some floats to our project. First, work with a partner to determine where floats will need to be used in the project to build out the layout.

Next, work together to figure out how to add those floats in your CSS.

Don't forget to add a clearfix!

---
template: inverse

# CSS Reset

---

# What's a CSS Reset?

The goal of a **CSS reset** is to reduce **inconsistencies amongst browsers** in things like default line heights, margins, and font sizes of headings.

Reset styles are **intentionally very generic**. They are just meant to standardize how browsers display HTML elements before your start applying your custom styles.

Think of the reset as *leveling the playing field*.

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

# Exercise 4

Add a CSS reset to your project (your best bet for Project 1 will be the Eric Meyer reset).

You may need to adjust some of your existing CSS rules once you do this (esp. rules related to typography and box model properties).

---

# What We've Learned

- The difference between `block`, `inline-block`, and `inline` elements
- More on HTML5 structural elements
- Different ways to use the `position` property
- How to `float` elements
- What a CSS reset is and how to use one

---
template: inverse

# Questions?

{% endhighlight %}

---
layout: slidedeck
title: CSS Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to CSS

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. What CSS is and how to use it
2. CSS "resets"
3. The box model and block vs. inline elements
4. Classes and IDs
5. Color & backgrounds
6. Developer tools

---

template: inverse

# What Is CSS?

---

# CSS is fun!

![CSS is awesome!](https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif)

---

class: center, middle

### What does "CSS" mean?

CSS stands for **Cascading Style Sheets**.

CSS describes how an HTML element will be rendered on a screen. In other words, it allows us to add **styles** to our HTML.

(But it's a not a programming language...)

---

class: center, middle

.large[
**HTML** &rarr; the content layer

**CSS** &rarr; the presentation layer
]

---

class: center, middle

.large[
What does CSS look like?
]

---

class: center, middle

.inline-images[
![CSS selector and declaration](/public/img/slide-assets/css-declaration-diagram.svg)
]

---

# A CSS Ruleset

But you can do a lot more than just change the background color behind some paragraph text.

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  font-style: italic;
  line-height: 1.25;
}

/* Comments in CSS also look a little different from HTML */
```

We can also use CSS to change everything from **font size** to the **position** of elements in the browser window, and even **animate** our HTML elements too.

---

# All About that Text

Beyond the example we just saw, CSS provides us with many more powerful properties for adjusting the display of text:

```css
p {
  color: black;
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1.5;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  word-spacing: 15px;
}
```

---

template: inverse

# Adding CSS to Your Website

---

# Including CSS

We have a few different options for how we include CSS on a website. We can:

1. Use **inline** CSS
2. Use an **internal** stylesheet
3. Use an **external** stylesheet (usually preferable!)

---

# Inline CSS

When we use inline CSS, we apply our styles as an **attribute** directly inside an HTML element:

```html
<p style="font-size: 16px; font-style: italic;">Hello, world!</p>
```

However, this method is usually not preferred because it's very difficult to override these styles (more on **specificity** later...).

And it's really not much different from the 1990s way of applying inline styles, which makes it difficult to maintain!

---

# Internal Stylesheet

Using internal CSS means that you include your CSS inside `<style>` tags in the head of your HTML file. For example:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>My Page</title>
      <style type="text/css">
         p {
            font-size: 16px;
            font-style: italic;
         }
      </style>
   <head>
   <body>
      <p>Hello, world!</p>
   </body>
</html>
```

---

class: center, middle

### Internal vs. External Stylesheets

Using internal CSS is better than using inline CSS, but what would happen if your website has multiple pages?

---

# External Stylesheet

With external CSS, you put all of your CSS in a separate `.css` file, and link to it inside the `<head>` of your document:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>My Page</title>
      <link rel="stylesheet" href="style.css">
   <head>
   <body>
      <p>Hello, world!</p>
   </body>
</html>
```

```css
/* Inside your style.css file... */
p {
  font-size: 16px;
  font-style: italic;
}
```

---

class: center, middle

.inline-images[
![Linking to an external stylesheet](/public/img/slide-assets/css-folder-structure.png)
]

---

# External Advantages

* It's easy to link the same stylesheet to multiple pages across your website
* It's much easier to make global changes to your CSS that are immediately picked up throughout the website
* Your website's content is clearly separated from your website's style

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

# Exercise 1

Let's add a CSS file to your Project 1 webpage now.

To do that, create a `style.css` file in the root folder of your website.

Next, just like in the last example, add a `<link>` tag to the `<head>` of your HTML file so it knows to apply the styles that we add to this file to your webpage.

Now try adding a style declaration for the `p` selector (e.g. change the `font-size`), and see if it works.

---

template: inverse

# Boxes and Blocks

---

# Boxes Everywhere

When writing CSS, it's helpful to think of every HTML element in your document being wrapped in an invisible box.

.inline-images[
![CSS Box Concept](/public/img/slide-assets/css-box-concept.svg)
]

---

class: center, middle

.large[
This is called the **box model**.<br />It's an important CSS concept.
]

---

# The Box Model

The box model gives additional properties that we can adjust for each HTML too. These properties include:

* `margin`
* `border`
* `padding`
* `width`
* `height`

---

class: center, middle

.inline-images[
![CSS Box Model](/public/img/slide-assets/css-box-model.svg)
]

---

# Box Model Properties

Using the box model to style our HTML elements, we can use CSS properties such as:

```css
p {
  margin: 15px;
  border-top: 1px solid black;
  border-bottom: 3px dotted blue;
  padding-left: 30px;
  width: 300px;
}
```

You can target specific sides of a box by adding <br> `-bottom`, `-top`, `-left`, or `-right` to the properties. Otherwise, the style will apply to all sides.

---

# Box Model Shorthand

Or instead of writing out all the properties for each side, we can use shorthand:

```css
header {
  margin: 0 auto; /* this is horizontal centering trick in CSS */
  padding: 5px 0 5px 10px;
}
```

If you include **two properties**, they are applied to the **top/bottom** and then **left/right**.

If you include **four properties**, they will be applied in the order **top**, **right**, **bottom**, and **left** (like going around a clock).

---

class: center, middle

### Block vs. Inline

HTML elements will either be **block-level** or **inline**.

---

class: center, middle

Block elements will always appear to start on a new line.

.inline-images[
![Block-level element](/public/img/slide-assets/css-block-element.svg)
]

Some block level elements include `<h1>`, `<p>`, and `<ul>`.

---

class: center, middle

Inline elements will appear on the same line and flow with their neighbouring elements.

.inline-images[
![Inline element](/public/img/slide-assets/css-inline-element.svg)
]

Some inline elements include `<img>`, `<a>`, and `<strong>`.

---

# Changing Display

We can override an element's default display behaviour using the `display` property in our CSS.

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

| Block                                 | Inline-block                    | Inline                          |
| ------------------------------------- | ------------------------------- | ------------------------------- |
| Has top/bottom margin & padding       | Has top/bottom margin & padding | No top/bottom margin or padding |
| Has left/right margin & padding       | Has left/right margin & padding | Has left/right margin & padding |
| Can have set height and width         | Can have set height and width   | Cannot have set width or height |
| Forces a line break after the element | Does not force a line break     | Does not force a line break     |

---

class: center, middle

.inline-images[
![CSS display properties](/public/img/slide-assets/css-display-props.svg)
]

---

template: inverse

# How CSS Cascades

---

class: center, middle

### The "C" in "CSS"

The idea of **cascading order** is the key to how CSS works on our HTML elements.

---

# Specificity

How specificity applies to the cascade:

1. Where specificity is equal, **the rule that comes last applies**
2. Where specificity isn't equal, **the more specific rule applies**

---

# Inheritance

Inheritance is another important concept in CSS.

This means exactly what it suggests&mdash;**child elements in your HTML will inherit styles from the parent elements** in which they are nested.

This saves us from having to specify the same styles for every element used in our mark-up.

---

# Specificity & Inheritance

So given this example:

```css
header {
  font-family: Helvetica, sans-serif;
}
```

What elements in the `<header>` will be styled in Helvetica?

```html
<header>
   <h1>My Site Title</h1>
   <p>My excellent tagline</p>
</header>
```

---

# Specificity & Inheritance

And what would we expect to happen in this example?

```css
header h1 {
  font-family: Georgia, serif;
}

header {
  font-family: Helvetica, sans-serif;
}
```

```html
<header>
   <h1>My Site Title</h1>
   <p>My excellent tagline</p>
</header>
```

Also note the use of a **[descendant selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors)** above!

---

# Exercise 2

Let's start styling our project website using what we just learned about CSS text properties and the box model.

If you haven't done so already, wrap the hero image banner area in a `<section>` element. Your goal is to then write CSS that will:

* **center** the text
* adjust the **size of the text**
* add adequate **margin** above and below it

Don't worry about the background image yet, we'll get to that.

---

template: inverse

# Classes & IDs

---

# What are they?

Every HTML element can have `class` and `id` attributes added to it like this:

```html
<h1 class="site-title" id="masthead">My Awesome Website</h1>
```

Classes and IDs make it much easier to target specific CSS (and JavaScript) to elements in our HTML.

---

# What's the difference?

Think about an actual school...a student can be in multiple classes, but each student will have a unique name.

Similarly, if an HTML element has an ID, that **ID must be unique to the element**.

But a class can be applied to as many elements as you like.

---

# In Your CSS...

```html
<h1 class="site-title" id="masthead">My Awesome Website</h1>
```

To target a class, use a **dot** plus the class name:

```css
.site-title {
  font-weight: bold;
}
```

To target an ID, use a **pound sign** plus the ID name:

```css
#masthead {
  color: red;
}
```

---

# Multiple Classes/IDs

You can specify **multiple classes** for an element by separating them with a space:

```html
<h1 class="site-title home-title" id="masthead">My Awesome Website</h1>
```

And if you wanted to target an element that had **both of those classes**, your CSS would look like this:

```css
.site-title.home-title {
  font-size: 32px;
}
```

---

# Which do you pick?

In general, you'll want to **stick to classes** wherever possible.

IDs are considered to be **more specific** than classes in your CSS, which makes the ID-based styles you apply to your website harder to override later on.

Classes are also reusable, which can help make your CSS more efficient.

---

# Naming Tips

Some tips for naming the classes and IDs in your HTML:

* Class and ID names must start with a letter or an underscore character
* Choose semantic class and ID names
* Remember that ID names must be unique to the element!

---

# Attribute Selector

We can always target form inputs by their `id` or `class`, but we can also target entire types of form elements using the [attribute selector](https://developer.mozilla.org/en/docs/Web/CSS/Attribute_selectors) in our CSS:

```css
input {
  margin-bottom: 10px;
}

input[type="text"],
input[type="search"] {
  color: #111;
  font-family: Helvetica, sans-serif;
  padding: 2px 5px;
}
```

---

# Pseudo-classes

**[Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)** are special built-in keywords you can add to elements to describe some dynamic state of the element:

```css
a {
  color: red;
  text-decoration: none;
}

a:hover {
  color: blue;
  text-decoration: underline;
}
```

You can use the `:link` and `:visited` pseudo-classes for links, and `:hover`, `:active`, and `:focus` pseudo-classes for a broader array of elements.

???

* Explain pseudo-classes are useful when styling forms.

Question to ask:

* What should happen to an individual form input when a user **focuses** it?
* How should buttons react when hovered or clicked?
* How should the form display on a mobile device to assist with usability?

---

# Pseudo-classes: State

Expanding on the previous example, lets think about how certain elements can have different states.
Psuedo-classes can help with styling the state of UI elements. For example the `<a>` tag has different states such as:

- Hover, when the mouse-cursor moves over a link
- Active, when a link is clicked, mouse-down state
- Focus, when a link is clicked it becomes focused
- Visited, after a link has been clicked it has been visited


---

class: center, middle

<iframe height="500" style="width: 100%;" scrolling="no" title="Pseudo Classes: hover, focus, &amp; visited" src="https://codepen.io/redacademy/embed/JjPVbVp?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/redacademy/pen/JjPVbVp'>Pseudo Classes: hover, focus, &amp; visited</a> by RED Academy
  (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Pseudo-classes & Forms

The `:focus` pseudo-class is also very useful when working with `<input>` elements, common when building Forms.

```css
input {
  border: 1px solid #969696;
}

input:focus {
  border: 1px solid #464646;
}
```

*Note that when an element is clicked on it gains **Focus**, there's an event we will use later, in JavaScript, called **Blur**. This happens When you click off of a focused element, it loses focus.* 🤓

---

# Pseudo-classes & Forms

Similar to the `<a>` tag we can use the `:active` pseudo-class with buttons to provide feedback to a user when a button has been activated:

```css
button {
  background-color: blue;
}

button:hover,
button:active {
  background-color: navy;
}
```

---

# Exercise 3

Let's get the width of our website under control.

One common way to do that is to create a `container` class and strategically apply that to various elements to keep their widths in check.

We want our `container` class to keep everything inside of it at a width of `1240px`. Create that class in your CSS and apply it where you think it's needed.

Is there anywhere that you may need to create an extra wrapping `<div>` around some of your content to contain it without conflicting with a full-width background treatment?


---

template: inverse

# Color on the Web

---

# Using Color

On the web, we have four options for specifying the colors of our HTML elements:

* Color names
* HEX codes
* RGB/RGBa values

---

# Color Names

There are 147 predefined color names supported by browsers, which we can use like this:

```css
p {
  color: maroon;
}

a {
  color: MediumSlateBlue;
}
```

Check out **[this list](http://en.wikipedia.org/wiki/Web_colors)** for all of the names of the predefined colors.

---

# HEX Codes

Alternatively, we can specify a HEX code that corresponds to a specific color.

For example, the HEX code for white is `#FFFFFF` (or `#FFF` in shorthand).

In your CSS, a HEX code would be used like this:

```css
p {
  color: #111111; /* very dark grey */
}
```

---

# HEX Codes

To get a HEX code, you can use an [online color picker tool](https://www.colorzilla.com/), or use the color palette in an image editing program.

.inline-images[
![PS color picker](../../public/img/slide-assets/color-picker-screenshot.png)
]

---

# RGB/RGBa Colors

We can also use RGB (red, green, blue) values to specify colors in our CSS:

```css
a {
  color: rgb(237, 67, 67);
}
```

The equivalent of this RGB color in HEX would be `#ed4343`.

---

# RGB/RGBa Colors

RGBa values allow us to also specify the **opacity** of the color:

```css
header {
  background-color: rgba(237, 67, 67, 0.5);
}
```

The `a` that represents opacity is written as a decimal, with a range of `0` (fully transparent) to `1` (solid).

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

# Background Gradients

<iframe height="500" style="width: 100%;" scrolling="no" title="CSS Background Gradient" src="https://codepen.io/redacademy/embed/aboxpLj?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/redacademy/pen/aboxpLj'>CSS Background Gradient</a> by RED Academy
  (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Gradient Resources

- [gradpad](http://ourownthing.co.uk/gradpad.html)
- [colorzilla](https://www.colorzilla.com/gradient-editor/)
- [uigradients](https://uigradients.com/)

And many more, just Google `CSS gradient generator`.
Also note that generators can be a useful way of learning, over time you can try to memorize the code that generators create e.g. the order of properties and different values that can be used.

If you Google `CSS generator` there will be many options you can try. Here's one example: [css3generator](http://css3generator.com/)

---

# Exercise 4

There are two components to this exercise&mdash;adding some color, and beginning to add background images.

Change the color of the links and the orange headings to `#e2574c`.

Also add the floral background image to the banner area.

**Challenge!** How could we get the partially transparent background layer and the photo of the girl to sit on top of this image (also as a background)?


---

class: center, middle

.large[
As a developer, what's the most important feature of your browser?
]

---

template: inverse

# Devtools

---

# Why Devtools

DevTools are important because it gives us ability to inspect **things that are happening "behind the scenes"**. 🕵️‍♀️

For example we can inspect elements, see how a site is structured, and we can inspect the CSS being applied to different elements. This is extremely useful when trying to figure out things like, **"why is the CSS I just wrote not working?"**.
---

# Devtools: Shortcuts

How to open devtools with Keyboard shortcuts.

Shortcut Actions |  Mac | Windows
-------|---------------------------------
Last panel used | Command+Option+I | F12 or Control+Shift+I
Console panel   | Command+Option+J | Control+Shift+J
Elements panel  | Command+Shift+C | Control+Shift+C

[chrome-devtools/shortcuts](https://developers.google.com/web/tools/chrome-devtools/shortcuts)

---

class: center, middle

.large[
Learn your dev tools:

**[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)**
]

---

# Validating Code

To make sure our code is **valid** we can use these services:

* [W3C Mark-up Validation Service](https://validator.w3.org/)
* [W3C Mark-up CSS Service](https://jigsaw.w3.org/css-validator/)

---

# Mini-Exercise

Time to put your own project under the microscope!

Try running your project's HTML through the W3C validator. Are there any errors or warnings? How can you address them?

---

class: center, middle

.large[
I still need help!<br />Where do I go?
]

---

# Go-to Resources

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
* [Stack Overflow](http://stackoverflow.com/)
* [CSS Tricks](https://css-tricks.com/)
* [Smashing Magazine](http://www.smashingmagazine.com/)
* Each other!

---

# What We've Learned

* Different ways to include CSS in our webpage
* What the box model is
* How specificity and inheritance work
* How to use classes and IDs to target our styles
* How to layout a webpage using position
* How to add color and background images via CSS
* How to use a CSS reset, code validators, and a browser's developer tools

---

template: inverse

# Questions?

{% endhighlight %}

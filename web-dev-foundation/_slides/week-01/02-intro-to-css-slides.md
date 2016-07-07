---
layout: slidedeck
title: Intro to CSS Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to CSS

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is CSS?
2. Using CSS
3. How CSS cascades
4. Adding CSS to your website
5. Classes and IDs
6. Developer tools

---
template: inverse

# What Is CSS?

---
class: center, middle

### What does "CSS" mean?

CSS stands for **Cascading Style Sheets**.

CSS describes how an HTML element will be rendered on a screen. In other words, it allows us to add **styles** to our HTML.

---

# Before CSS...

In the old days, we used to add styles to our websites like this:

```html
<p>
   <font face="Arial" color="red" size="2">Some text...</font>
</p>
```

Now imagine a large website with dozens of pages...can you see a major flaw in styling a website this way?

---
class: center, middle

.large[
   **HTML** &rarr; the content layer

   **CSS** &rarr; the presentation layer
]

---

# CSS to the Rescue

CSS allows us to abstract presentation details away from the content and structure of our HTML.

That makes it much easier to globally add and change styles for our websites.

*So let's take a look at how it works...*

---
template: inverse

# Using CSS

---
class: center, middle

.large[
   What does CSS look like?
]

---
class: center, middle

.inline-images[
   ![CSS declaration](/public/img/slide-assets/css-declaration-diagram.svg)
]

---

# A CSS Declaration

But you can do a lot more than just change the background colour behind some paragraph text.

```css
p {
   color: red;
   font-family: Helvetica, Arial, sans-serif;
   font-style: italic;
   line-height: 1.25;
}

/* Comments in CSS also look a little different from HTML */
```

We can also use CSS to change font sizes, background colours, the position of elements in the browser window, and much more.

---

# A CSS Declaration

We can also be more specific when targeting HTML elements. For example, if we want our styling to only affect `<p>` tags that are inside of the `<header>`:

```css
header p {
   color: red;
   font-family: Helvetica, Arial, sans-serif;
   font-style: italic;
   line-height: 1.25;
}
```

This rules is said to be more **specific** than the last rule.

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

The box model gives additional properties that we can adjust for each HTML element too. These properties include:

- `margin`
- `border`
- `padding`
- `width`
- `height`

---
class: center, middle

.inline-images[
   ![CSS Box Model](/public/img/slide-assets/css-box-model.svg)
]

---
class: center, middle

.inline-images[
   ![CSS Box Model](/public/img/slide-assets/css-box-model-example.svg)
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

You can target specific sides of a box by adding `-bottom`, `-top`, `-left`, or `-right` to the properties. Otherwise, the style will apply to all sides.

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

# Exercise 1

Try adding margin, borders, and padding to some HTML elements as instructed below:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/GJEPPJ/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/GJEPPJ/'>GJEPPJ</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
template: inverse

# Block & Inline

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
template: inverse

# How CSS Cascades

---
class: center, middle

### The "C" in "CSS"

The idea of **cascading order** is the key to how CSS works on our HTML elements.

---

# Specificity

We'll dive deep into how CSS specificity works later on, but for now know these two things:

1. Where specificity is equal, **the rule that comes last applies**
2. Where specificity isn't equal, **the more specific rule applies**

---

# Inheritance

Inheritance is another important concept in CSS.

This means exactly what it suggests&mdash;**child elements in your HTML will inherit styles from an parent elements** in which they are nested.

This saves from having to specify the same styles for every element used.

---

# Specificity & Inheritance

So for example, this CSS:

```css
header {
   font-family: Helvetica, sans-serif;
}
```

Will style all of the text inside the `<header>` in Helvetica:

```html
<header>
   <h1>My Site Title</h1>
   <p>My excellent tagline</p>
</header>
```

---

# Specificity & Inheritance

But if we wrote a more specific rule for the `<h1>`:

```css
header {
   font-family: Helvetica, sans-serif;
}

header h1 {
   font-family: Georgia, serif;
}
```

The `<h1>` inside the header will be rendered in Georgia, and the style that **descends** from the parent `<header>` will be overwritten.

---

template: inverse

# Adding CSS to Your Website

---

# Including CSS

We have a few different options for how we include CSS in a website. We can:

1. Use **inline** CSS
2. Use **internal** CSS
3. Use **external** CSS (usually preferable!)

---

# Inline CSS

When we use inline CSS, we apply our styles as an **attribute** directly inside an HTML element:

```html
<p style="font-size: 16px; font-style: italic;">Hello, world!</p>
```

However, this method is usually not preferred because it's very difficult to override these styles later on.

And it's really not much different from the 1990s way of applying inline styles, which makes it difficult to maintain!

---

# Internal CSS

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

### Internal vs. External CSS

Using internal CSS is better than using inline CSS, but what would happen if your website has multiple pages?

---

# External CSS

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

- It's easy to link the same stylesheet to multiple pages across your website
- It's much easier to make global changes to your CSS that are immediately picked up throughout the website
- Your website's content is clearly separated from your website's style

---
template: inverse

# Class & IDs

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

Similarly, if an HTML element has an ID, that ID must be unique to the element. But a class can be applied to as many elements as you like.

---

# Classes in CSS

To target an element's class in your CSS, you would use a dot plus the class name:

```html
<h1 class="site-title" id="masthead">My Awesome Website</h1>
```

```css
.site-title {
   font-weight: bold;
}
```

---

# IDs in CSS

To target an element's ID in your CSS, you would use a pound sign plus the ID name:

```html
<h1 class="site-title" id="masthead">My Awesome Website</h1>
```

```css
.site-title {
   font-weight: bold;
}

#masthead {
   color: red;
}
```

---

# Multiple Classes/IDs

You can specify multiple classes or IDs for an element by separating them with a space:

```html
<h1 class="site-title home-title" id="masthead">My Awesome Website</h1>
```

And if you wanted to target an element that had both of those classes, your CSS would look like this:

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

*More on that when we talk about best practices later on...*

---

# Naming Tips

Some tips for naming the classes and IDs in your HTML:

- Class and ID names must start with a letter or an underscore character
- Choose semantic class and ID names
- Remember that ID names must be unique to the element!

---
class: center, middle

.large[
   Sidebar!
]

---

# Pseudo-classes

**Pseudo-classes** are special built-in keywords you can add to elements to describe some dynamic state of the element:

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

---

# Pseudo-classes

Pseudo-classes also allow us to select very specific child elements inside of a parent:

```css
li:first-child {
   border-left: 0;
}

li:nth-child(2),
li:nth-child(odd) {
   color: blue;
}

li:nth-child(3n+4) {
   text-transform: uppercase; /* match children 4, 7, 10, etc. */
}

li:last-child {
   border-right: 0;
}
```

---

# Exercise 2

Now let's try using CSS class and IDs to style some text elements:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/ZGywWj/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/ZGywWj/'>ZGywWj</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
template: inverse

# Developer Tools

---

# Developer Tools

Every modern web browser has some powerful tools under the hood (you may have opened these by accident before!).

You can find them by **right-clicking** inside your browser window and selecting **Inspect Element**:

.inline-images[
   ![Inspect element screenshot](/public/img/slide-assets/inspect-element-screenshot.png)
]

---
class: center, middle

.inline-images[
   ![Developer tools screenshot](/public/img/slide-assets/developer-tools-screenshot.png)
]

---

# Exercise 3

Time to explore the developer tools built into your browser.

Go to a website of your choice, open the web inspector, and try altering some of the styles to see what happens.

Also try "forcing element states", editing the content of some of the HTML elements on the screen, and deleting some elements too.

*Remember that you will lose all of the changes you've made inside the web inspector as soon as you refresh the page.*

---

# What We've Learned

- What CSS is in relation to HTML
- Different ways to include CSS in our webpage
- What the box model is
- How specificity and inheritance work
- How to use classes and IDs to target our styles
- How to use a browser's developer tools

---

template: inverse

# Questions?

{% endhighlight %}

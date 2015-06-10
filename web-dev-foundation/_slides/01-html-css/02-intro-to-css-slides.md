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

But you can do a lot more than just change the color of paragraph text:

```css
p {
   color: red;
   font-family: Helvetica, Arial, sans-serif;
   font-style: italic;
   line-height: 1.25;
   margin-bottom: 15px;
}
```

We can also use CSS to font size, background colours, the position of elements in the browser window, and much more.

---

# A CSS Declaration

We can also be more specific about targeting those styles to only affect `<p>` tags that are nested inside a particular element:

```css
header p {
   color: red;
   font-family: Helvetica, Arial, sans-serif;
   font-style: italic;
   line-height: 1.25;
   margin-bottom: 15px;
}
```

This rules is said to be more **specific** than the last rule.

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

# How CSS Cascade

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

# Exercise 1

Goes here...

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
      <link rel="stylesheet" type="text/css" href="style.css">
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
- Your website's content is clearly separated form your website's style

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

# Pseudo-classes

**Pseudo-classes** allow you change the appearance of an element when users interact with them:

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

# Exercise 2

Goes here...

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

template: inverse

# Fin!

{% endhighlight %}

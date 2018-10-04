---
layout: slidedeck
title: Intro to HTML Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to HTML

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. What is HTML?
2. Elements and attributes
3. Creating a webpage
4. Doctypes, meta tags and comments
5. Structuring a webpage
6. Other essential elements
7. Form Element

---

template: inverse

# What is the Web?

---

class: center, middle

![HTTP request diagram](/public/img/slide-assets/http-request-diagram.svg)

---

class: center, middle

.large[
What does "HTML" mean?
]

---

class: center, middle

.inline-images[
![Traditional documents](/public/img/slide-assets/html-traditional-doc.svg)
]

---

class: center, middle

.inline-images[
![HyperText documents](/public/img/slide-assets/html-hypertext-doc.svg)
]

---

template: inverse

# Elements & Attributes

---

# A Basic Element

If we wanted to markup a paragraph in HTML, our code would look like this:

```html
<p>The quick brown fox jumps over the lazy dog.</p>
```

Notice that the text is wrapped in `<p>` tags, and the closing tag contains a `/` after the opening angle bracket.

---

# A Basic Element

And if we want to add a second paragraph, we'll enclose its text inside of its own set of `p` tags:

```html
<p>The quick brown fox jumps over the lazy dog.</p>
<p>Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
```

---

# Adding Attributes

An **attribute** is a bit of information we add inside the element's opening tag.

They are made up of two parts, a **name** and a **value** that are separated by an equal sign:

```html
<p lang="fr">Bonjour mes amis!</p>
```

HTML offers many different attributes. Some can be used **globally** on any element, but many are **element-specific**.

---

# Nesting Elements

We can also **nest** elements in HTML. For example, to add emphasis to our paragraph text we can use the `<em>` element.

```html
<p>
   <em>The quick brown fox jumps over the lazy dog.</em>
</p>
```

Open up a [CodePen](https://codepen.io/pen/) and try this for yourself.

**Tip:** Think of nested elements like Russian _Matryoshka_ dolls.

---

template: inverse

# Creating a Webpage

---

class: center, middle

.large[
What three things do we need to make a webpage?
]

---

# What We Need

1. **[Visual Studio Code](https://code.visualstudio.com/)**
2. A file with an HTML extension
3. An handful of HTML elements that are common to all webpages

---

# Code Editors

Any program that edits plain text files can be used as a code editor (e.g. Notepad on Windows).

But programs that are specially designed for editing code offer extra features like **syntax highlighting**.

**[Visual Studio Code](https://code.visualstudio.com/)** is our favourite.

---

# Building Blocks

Virtually all websites share the same basic structure. They contain a `<head>` and a `<body>`, and those two elements are wrapped in `<html>` tags:

```html
<html>
   <head>
      <title>This is the Page Title</title>
   </head>
   <body>
      <p>This is a paragraph.</p>
   </body>
</html>
```

---

class: center, middle

.large[
Why call it `index.html`?
]

---

# Keep It Organized

We want to keep our project files organized in a **root folder/directory**:

* Stick to lowercase names consistently
* Don't use spaces in your file names, instead use hyphens or underscores to separate words
* Don't use special characters in your file names
* Choose logical and descriptive names for files and folders

---

class: center, middle

.inline-images[
![Root folders](/public/img/slide-assets/html-folder-structure.png)
]

---

# Exercise 1

Your turn! Time to create your first webpage.

First things first...you need to pick a code editor to download and install (if you haven't done so already).

Next create a new folder somewhere on your computer and save a new file called `index.html`.

Then open that folder and create a simple webpage containing `<html>`, `<head>`, `<title>`, and `<body>` elements, then add a few paragraphs of text.

Lastly, save and view your new website in a browser.

---

template: inverse

# A Few More Important Components...

---

# Then & Now...

**XHTML:**

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

**HTML5:**

```html
<!DOCTYPE html>
```

---

# Meta Tags

In addition to adding a doctype, there's other information we can add to the `<head>` of our document to help with rendering and describing our webpage using `meta` tags:

```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>This is the Page Title</title>

      <meta name="description" content="A most excellent website">
      <meta name="author" content="RED Academy">
   </head>
   <body>
      <p>This is a paragraph.</p>
   </body>
</html>
```

---

# Mini Exercise

What is the difference between **Meta Tags** and **Attributes**?

What does `utf-8` mean?

Group up in pairs of two and try and figure it out!

---

# Comments

Similar to the doctype declaration, comments aren't HTML elements per se.

Adding comments to our HTML is a good practice to help us **document** our code for ourselves and others.

```html
<!-- This text will not be visible in the browser window. -->
<p>The quick brown fox jumps over the lazy dog.</p>

<!-- <p>We can comment-out elements to temporarily hide them.</p> -->
```

---

template: inverse

# Let's Add More Structure

---

# Headings

We've already seen the `<p>` element in action, now let's take a look at headings.

In HTML, you can denote 6 different levels of headings with markup like so:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

---

# Lists

In HTML we can create both **ordered** and **unordered** lists:

```html
<ol>
   <li>Mix ingredients</li>
   <li>Put cake in oven</li>
</ol>
```

```html
<ul>
   <li>Apples</li>
   <li>Oranges</li>
</ul>
```

We can also create something called a [definition list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) in HTML, but those are a bit advanced.

---

# Whitespace

We can create whitespace in HTML using line breaks:

```html
<h1>Stopping by Woods on a Snowy Evening</h1>
<p>Whose woods these are I think I know.<br />His house is in the village though...</p>
```

Or horizontal rules:

```html
<p>This paragraph talks about a specific topic.</p>
<hr />
<p>This paragraph shifts to a different topic.</p>
```

Notice something special about these elements? They don't contain an text, an are represented by a single, self-closing tag. These are called **empty elements**.

---

# Divs

You'll likely also run into a structural element called a `<div>`:

```html
<div>
   <p>The quick brown fox jumps over the lazy dog.</p>
</div>
```

---

# Div-itis

Before HTML5, our websites often relied heavily on `<div>` elements:

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

# HTML5 Goodness

An HTML5 webpage would look something more like this:

```html
<header>
   <h1>Article Title</h1>
</header>
<article>
   <section>
      <p>The paragraph goes here...</p>
   </secton>
   <aside>
      <p>"The aside goes here..."</p>
   </aside>
</article>
<footer>
   &copy; 2015.
</footer>
```

---

# Mini Exercise

Why do we keep using the word **semantic**?

In groups of 4 (or so) have a quick discussion about:

1. What the definition of semantic is?
2. Why is semantic code important?

---

class: center, middle

.inline-images[
![HTML5 example layout](/public/img/slide-assets/html5-semantic-tags.png)
]

---

# Exercise 2

Let's explore what these HTML5 elements are good for.

In teams of two, research your assigned element and report back to the class:

* What the semantically appropriate usage of the element is
* Any potential sources of confusion about this element's usage
* Where you think this element may be used in this week's project (if at all)

---

template: inverse

# Other Essential Elements

---

# Link Elements

Links are the lifeblood of the web, so let's take a look at how we make one:

```html
<p>The <a href="https://developer.mozilla.org/en-US/">
Mozilla Developer Network</a> is a great resource!</p>
```

**Note** that any text contained within the `<a>` tags will be linked to the page inside the quotes of the `href` attribute.

---

# Link Elements

Links can also be **relative** to the root folder of your website:

```html
<a href="about.html">About Us</a>
```

And if a page is in a sub-folder:

```html
<a href="sub_pages/about.html">About Us</a>
```

---

# Link Elements

Links can be internal

```html
<a href="contact.html">Go to our contact page</a>
```

or they can be external

```html
<a href="http://www.google.com">Click here to go to Google</a>
```

---

# Image Elements

And of course, images!

```html
<img src="images/grumpy-cat.jpg" alt="Grumpy Cat scowls furiously" />
```

An `<img>` element has two important attributes:

* `src` tells the browser where to find the image
* `alt` provides a description of the image so the content can be understood by screenreader software and search engines

---

# Image Elements

We can also specify `title`, `width`, and `height` attributes:

```html
<img src="images/grumpy-cat.jpg" alt="Grumpy Cat scowls furiously" title="The Grumpiest Cat on the Web" width="480" height="320" />
```

The `title` of the image will appear as a **tooltip** in most browsers when you hover over it.

---

# Web-Friendly Formats

Today, images for the web are saved in the following formats:

* **JPG/JPEG** (Joint Photographers Group)
* **GIF** (Graphics Interchange Format)
* **PNG** (Portable Network Graphics)
* **SVG** (Scalable Vector Graphics)

---

# Format Cheatsheet

* Use **PNG-8** over **GIF** for graphics with simple colours
* Use **PNG-24** over **JPEG** when using alpha transparency
* Use **JPEG** over **PNG** for photographic images
* Use **GIF** for simple animated graphics
* Use **SVG** for icons and logos that need to scale

---

# Formatting Pro Tips

* **Scale down images** to the appropriate size for your webpage (or use responsive images to deliver different image sizes to different screen sizes)
* **Choose the correct** image format
* **Optimize images** to be the best possible quality at the smallest possible size
* **Save** image names with relevant names (that will help with SEO later)
* **Keep a copy** of the original image before optimizing it

---

# Exercise 3

Let's dive right in and start thinking about how we might tackle the first project's design comp to convert it into semantic HTML elements.

Jot some ideas on your own, then you'll pair up to discuss your approach with a partner. Based on this discussion, is there anything you'd revise in your approach?

Finally, you and your partner will share your insights with the class.

---

template: inverse

# Common Form Elements

---

# The Form Element

All forms on the web use the `<form>` element:

```html
<form action="submit.php" method="get">
   <!-- The form inputs go here... -->
</form>
```

The `action` attribute defines the location (an URL) where the form's collected data should be sent.

The `method` attribute defines which HTTP method to use to send the data (can be `get` or `post`).

---

# Input Element

We can use the `<input>` element inside a form to create a variety of different form controls:

```html
<form action="submit.php" method="post">
   <input type="text" name="username" size="12" maxlength="12" />
   <input type="checkbox" name="registered" checked="checked" />
</form>
```

By specifying the `type` attribute, the browser will know **what kind of input to display**.

Common input types include `text`, `checkbox`, `radio`, and `submit`. HTML5 introduced a number of [more specific form input types](http://html5doctor.com/html5-forms-input-types/) as well.

---

# Input Element

To create radio inputs, we simply create multiple `<input>` elements with a type of `radio`:

```html
<form action="submit.php" method="post">
   <input type="radio" name="gender" value="male" id="male" />Male
   <input type="radio" name="gender" value="female" id="female" />Female
</form>
```

Radio buttons that have the same value for the `name` attribute are in the same **radio button group**.

Only one radio button in a group can be selected at a time.

---

# Input Element

The `password` input type will obfuscate the characters that a user types into it:

```html
<input type="password" name="password" size="8" minlength="6" maxlength="8" />
```

Note that while the characters are hidden this doesn't mean that the entered data is secure when sent to the server!

It's best to use [SSL/TLS certificates](https://letsencrypt.org/) to send requests securely.

---

# Textarea Element

A `<textarea>` element will create a multi-line text input:

```html
<form action="submit.php" method="post">
   <textarea name="message" cols="10" rows="4">
      Enter your message...
   </textarea>
</form>
```

Using the `cols` and `rows` attributes you can specify the size of the `<textarea>` box.

---

# Select Element

The `<select>` element is a special form element that will create a drop-down menu based on the `<option>` elements nested inside:

```html
<form action="submit.php" method="get">
   <select>
      <option value="mac" selected="selected">Mac</option>
      <option value="pc">PC</option>
   </select>
</form>
```

The `selected` attribute will set a option to be selected by default.

---

# Label Element

The `<label>` tag is used to describe what an input is for, and helps with accessibility for vision-impaired users.

It can be used by either wrapping the `<input>` element it pertains to, or by giving it a `for` attribute that matches the `id` of the input it's labeling:

```html
<label>
   First Name: <input type="text" name="first_name" />
</label>

<label for="terms">I agree to the terms and conditions</label>
<input type="checkbox" name="terms" id="terms" />
```

---

# Button Element

Last but not least, you're probably going to want some way for the user to submit the data in your form.

For that, we have the `<button>` element:

```html
<button type="submit">Submit Form</button>
```

It's optional to specify `type="submit"` because this is the default. Other types for the `<button>` element include `reset` and `button`.

---

# Button vs. Input

In lieu of a `<button>` element, you can may also see an `<input>` element with `type="submit"`:

```html
<input type="submit" name="submit" value="Submit Form" />
```

The main difference between `<button>` and `<input type="submit" />` is that the input element is self-closing, while the button can contain content.

_Functionally they are the same if their types are the same._

---

# What We've Learned

* What HTML is and it's basic elements
* How to create a webpage on your computer
* New HTML5 elements
* How to create links and add images
* How to create HTML form elements

---

template: inverse

# Questions?

{% endhighlight %}

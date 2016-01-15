---
layout: slidedeck
title: Introduction to jQuery Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Introduction to jQuery

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. JavaScript and the Web
1. What is jQuery? What is it for?
2. The "Document Object Model" (DOM)
3. jQuery basics (traversing and chaining)
4. Working HTML elements and attributes
5. Working with CSS in jQuery
6. Creating click events

---
template: inverse

# JavaScript and the Web

---

.left-column[
  ## The Window Object
]

.right-column[
   The "window object" is the browser's representation of each window or tab.

   .inline-images[
      ![Window Object](../../public/img/slide-assets/window-object.svg)
   ]
]

---

.left-column[
  ## The Document Object
]

.right-column[
   The document object is the model of the web page inside of the window/tab. It represents the HTML page:

   .inline-images[
      ![Document Object](../../public/img/slide-assets/document-object.svg)
   ]
]

---

class: center, middle

### Time for things to get real!

Sooner or later you're actually going to want to incorporate JS in a real website, so let's see how that's done...

---

# Directly in the HTML

You can wrap your JavaScript in `script` tags directly in the HTML document:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Spot's Dog Grooming</title>
   </head>
   <body>
      <h1>Spot's Dog Grooming</h1>
      <script>
         document.write('Welcome to Spot\'s!');
      </script>
   </body>
</html>
```

---

# As a Separate ".js" File

Usually, you'll want to link to a separate `.js` file:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Spot's Dog Grooming</title>
   </head>
   <body>
      <h1>Spot's Dog Grooming</h1>
      <script src="js/say-hello.js"></script>
   </body>
</html>
```

```javascript
// js/sayhello.js

document.write('Welcome to Spot\'s!');
```

---

# Include in the head tag or bottom of the page?

- You can include a `<script>` in the `<head>` tag or anywhere inside the `<body>`
- The best practice is to put scripts in the footer to prevent them from blocking the page load
- But some scripts must go in the `<head>`...

---
class: center, middle

### Accessing Elements

You're likely to find that `document.write()` has some serious limitations. So how we can get more specific about the elements we target on a real webpage?

---

# Accessing Elements

The document object has many methods in JS that can help you select and element in a webpage, such as:

- `getElementById()`
- `querySelector()`

---

# Accessing Elements

And these will help you select multiple elements:

- `getElementsByClassName()`
- `getElementsByTagName()`
- `querySelectorAll()`

---

# Accessing Elements

Let's say we want to update the message paragraph below:

```html
<body>
   <h1>Spot's Dog Grooming</h1>
   <p id="message">Welcome to Spots!</p>
   <script src="js/say-hello.js"></script>
</body>
```

We can use the `getElementById` method to target that `p`, and update it's content using the `innerHTML` property:

```javascript
// js/sayhello.js

document.getElementById('message').innerHTML = 'We love dogs!';
```

---

# Accessing Elements

We can also store the results of `getElementById` in a variable to make it faster and easier to re-use for other purposes later:

```javascript
// js/sayhello.js

var el = document.getElementById('message');
el.innerHTML = 'We love dogs!';
el.className = 'red'; // adds class name of "red" to the element
```

---

# Exercise 1

Let's add an external JS file to our Project 2 directory, and include it in our `index.html` file for the project.

To make sure you've done it correctly, `console.log()` any string in the JS file, and make sure that it shows up in the console when you open the HTML file in your browser window.

We won't be adding any other JS to this file today, but will be later in the week when we learn about jQuery.

---

class: center, middle

### What is a jQuery?

jQuery is library of code that makes it much easier to perform many essential tasks in JavaScript.

---

# What Is jQuery for?

- Find elements using CSS-style selectors
- Change content on the page
- Add animations to elements
- Watch what a user does and react to what they do
- Fetch new content

---

# How Do You Use jQuery?

To use jQuery you must include a link to its script file in your HTML document, just like any other JS file:

```html
<body>
   <h1>My Page</h1>
   <p class="intro">Welcome to my page!<p>
   <p>Thanks for stopping by.</p>
   <!-- The rest of the page content... -->
   <script src="js/jquery-1.11.3.js"></script>
   <script src="js/my-script-file.js"></script>
</body>
```

The best practice is to add it near the closing body tag, but it has be included before any other script files that use jQuery.

---

# Where Do You Get It?

You can find different versions of jQuery from [jquery.com](http://jquery.com/download/):

- jQuery 1.x will work with IE 6, 7, and 8
- jQuery 2.x will **not** work with IE 6, 7, and 8
- The compressed **production** version of jQuery has been "minified" and has all of the whitespace removed
- The uncompressed **development** version of jQuery still has its whitespace and is easier to read if you want to explore the library's internals

---
template: inverse

# The Document Object Model (DOM)

---

# What Is the DOM?

- The **Document Object Model** is the tree-like model of a webpage that a browser will store in memory.
- We can **traverse** the DOM to access different elements on a page using JavaScript (and jQuery too)

---

# What Is the DOM?

For example, take a typical HTML document:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>My Awesome Website</title>
   </head>
   <body>
      <div>
         <p class="intro">
            Welcome to my page! Thanks for stopping by.
         </p>
      </div>
   </body>
</html>
```

---

# What Is the DOM?

The a visual representation of the DOM for this page would look something like this:

.inline-images[
   ![DOM diagram](/public/img/slide-assets/dom-diagram.svg)
]

---

# What Is the DOM?

- DOM nodes can be seen as being parents, children, and/or siblings to one another
- This is very important to keep in mind when we begin **traversing** the DOM (i.e. moving up and down through DOM nodes) using jQuery

---

# Exercise 2

Let’s map the DOM for the homepage of our project sites…

Take a piece of paper and map out in a tree-structure what the DOM looks like for your project site.

Be as detailed as you possibly can. When you’re done, pair up with a classmate and explain the design of your DOM diagram to them.

---
template: inverse

# Let's Use Some jQuery

---

# How Does It Work?

Let's get to the fun stuff and look at a basic example. Take our previous code snippet:

```html
<body>
   <h1>My Page</h1>
   <p class="intro">Welcome to my page!</p>
   <p>Thanks for stopping by.</p>
   <!-- The rest of the page content... -->
   <script src="js/jquery-1.11.3.js"></script>
   <script src="js/my-script-file.js"></script>
</body>
```

Let's see how we can use jQuery to change the colour of the text in the paragraph with class of `intro`.

---

# How Does It Work?

To use jQuery to find the element with a class of `.intro`, we must use the `jQuery()` method and pass the CSS selector as a parameter:

```javascript
jQuery('.intro')
```

Although you'll generally see the jQuery method written using a dollar sign as shorthand:

```javascript
$('.intro')
```

---

# How Does It Work?

Now contrast the jQuery approach:

```javascript
$('.intro')
```

With using regular JavaScript:

```javascript
document.getElementByClassName('intro')

// or...

document.querySelector('intro')
```

It's easy to see why using jQuery is so appealing!

---

# How Does It Work?

Now let's actually change the colour of the text using jQuery:

```javascript
$('.intro').css('color', 'red');
```

It's that easy using the `.css()` method in jQuery! We can also store our jQuery selection in a variable for re-use later:

```javascript
var $intro = $('.intro');
$intro.css('color', 'red');
$intro.addClass('greeting');
```

---

# But There's a Catch!

Before we can start interacting with the DOM, we need to make sure the browser has fully constructed the DOM tree.

For this reason, you will often see jQuery wrapped in the following code:

```javascript
$(document).ready(function() {
   // your jQuery code here...
});

// Or more commonly, you'll see the shorthand version:

$(function() {
   // your jQuery code here...
});
```

---

# But There's a Catch!

Using the code from our previous example, our script file would now look like this:

```javascript
$(function() {
   var $intro = $('.intro');
   $intro.css('color', 'red');
   $intro.addClass('greeting');
});
```

---

# jQuery Has Methods Too

We just used the `.css()` and `.ready()` methods, but jQuery has many more.

For instance we can use jQuery methods to traverse the DOM:

- `.children()`
- `.parents()`
- `.siblings()`

---

# Traversing the DOM

```html
<div class="page-wrapper">
   <h1>My Blog Post</h1>
   <article class="post">
      <p class="opening-line">It was the best of times,</p>
      <p>it was the blurst of times...</p>
   </article>
</div>
```

Try this jQuery out in Codepen and see what happens:

```javascript
$(function() {
   $('.opening-line').siblings().addClass('second-line');

   $('article').children('.opening-line').css('font-style', 'italic');

   $('p').parent().siblings().text('A Tale of Two Blog Posts');
});
```

---

# Chaining

In the last jQuery code snippet, we just saw multiple examples of **chaining**.

Chaining allows you to place several methods on the same selector at once, which makes your code more compact:

```javascript
// Chained:
$('#menu').addClass('.active').css('margin-right', '10px');

// Unchained:
$('#menu').addClass('.active');
$('#menu').css('margin-right', '10px');
```

---
template: inverse

# Doing More with the DOM

---

# Getting Element Content

We've already seen a preview of how jQuery helps you manipulate the DOM, but let's dive a little deeper:

- the `.html()` method will get the HTML inside the first element of the matched set (and its descendents)
- the `.text()` method will just get the text from inside first element of the matched set (and its descendents)

---

# Updating Content

We can use the `.prepend()`, `.append()`, and `.remove()` methods to update content:

```html
<ul class="numbers">
   <li>one</li>
   <li>two</li>
</ul>
```

```javascript
// Add new a new item to the end of the list:
var newContent = '<li>three</li>';
$('.numbers').append(newContent);

// Change the content of the second list item:
$('.numbers li:nth-child(2)').text('2');

// Remove the first item from the list:
$('.numbers').children(':first').remove();
```

---

# Updating Content

Note that `.prepend()` and `.append()` will add content inside the element's opening and closing tags respectively.

The `.before()` and `.after` methods will add content just before or just after the selected element.

---

# Working with Attributes

As we have seen, it's very easy to add classes to elements with jQuery using `.addClass()`:

```javascript
$('ul').addClass('menu');
```

And we can similarly remove them with `.removeClass()`:

```javascript
$('ul').removeClass('menu');
```

---

# Working with Attributes

We can also target other element attributes using the `.attr()` and `.prop()` methods:

```javascript
$('li').attr('id', 'active');
$('input').prop('disabled', true)
```

Ostensibly, `.attr()` and `.prop()` do very similar things, but `.prop()` offers a slightly more modern, semantic approach and allows you to work with element attributes that are booleans, like the example above.

---

# Working with CSS

As we saw in an earlier example, we can also use jQuery to get and update an elements styles:

```javascript
// Get the font size and log it:
var $fontSize = $('p').css('font-size');
console.log($fontSize);

// Change the font size:
$('p').css('font-size', '18px');
```

We can even make multiple adjustments:

```javascript
$('p').css({'font-size': '18px', 'font-weight': 'bold'});
```

---

# Exercise 3

Using what you just learned about traversing the DOM and jQuery methods, come up with at least three unique solutions for changing the color of the text in the second `<p>` inside the `<article>` red using jQuery only (no CSS!).

[See the lesson page](/lesson/jquery-basics/) for further instructions.

---
template: inverse

# Event Handling

---

# Events in jQuery

Website are usually interactive, and jQuery makes it very easy to react to things that website users do while on a page.

To do this, we usually use the `.on()` method:

```javascript
$('button').on('click', function() {

   // Code to run when button clicked...

});
```

There are many different kinds of events in jQuery...

---
class: middle

.large[
   focus, blur, change, input, keydown, keyup, keypress, click, dblclick, mouseup, mousedown, mouseover, mousemove, mouseout, hover, submit, select, ready, load, unload, error, resize, scroll
]

---

# Mini-Exercise

Quick! Look up another example of an event that you can pass in as a parameter to the `.on()` method.

Share the method name and what it can be used for with the class.

---

# Events in jQuery

For basic event handlers to work, they must be attached to elements that exist when your code makes the call to `.on()`.

If the following button was dynamically added to the page after the page loaded, the alert would not appear:

```javascript
$('button').on('click', function() {
   alert('You clicked the button');
});

$('form').append('<button>My Button</button>');
```

---

# Event Delegation

Alternatively, we can use **event delegation** to attach events to elements.

Event delegation allows us to attach events to children of an element, even if they do not exist at the time of the page load.

```javascript
$('div').on('click', 'button', function() {
   alert('You clicked the button');
});
```

Can you spot the difference in this approach?

---

# Event Delegation

Bonus! Using the event delegation approach can also be beneficial for code performance when you can attach an event to a single parent element instead of many lower-level ones.

---

# The Event Object

Every event handling function receives and event object, and this object has methods and properties of its own.

To access these methods and properties, we must pass in the event object as a parameter for our function:

```javascript
$('div').on('click', 'button', function(event) {
   // Code to run when button is clicked
});
```

---

# The Event Object

*And why exactly is this useful?*

Sometimes we want attach events to HTML elements that have default behaviours that we need to override.

For instance, you may want to attach a special click handler to an `a href` that performs a different action than click through to wherever that link points.

---

# The Event Object

The event object has a method that allows us to do this. That method is called `.preventDefault()`:

```javascript
$('div').on('click', 'button', function(event) {

   // Stop the default behavior on the button click
   event.preventDefault();

   // Now perform our custom button click actions here...
});
```

---

# Exercise 4

In this exercise, you're going create two click events&mdash;one that **adds another list item** to the list below, and one that **crosses off an item** in the list when its "done" link is clicked.

[See the lesson page](/lesson/jquery-basics/) for further instructions.

---

# What We've Learned

- How to use JavaScript on web pages
- What jQuery is
- What the DOM is and how to traverse it
- How to change the way a website looks using jQuery
- How to add interactivity to a page with jQuery

---
template: inverse

# Questions?

{% endhighlight %}

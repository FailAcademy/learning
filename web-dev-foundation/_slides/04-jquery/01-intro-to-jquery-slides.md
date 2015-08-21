---
layout: slidedeck
title: Intro to jQuery Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to jQuery

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is jQuery? What is it for?
2. The "Document Object Model" (DOM)
3. jQuery basics (traversing and chaining)
4. Working HTML elements and attributes
5. Working with CSS in jQuery
6. Creating click events

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
   ![DOM diagram](../../public/img/slide-assets/dom-diagram.svg)
]

---

# What Is the DOM?

- DOM nodes can be seen as being parents, children, and/or siblings to one another
- This is very important to keep in mind when we begin **traversing** the DOM (i.e. moving up and down through DOM nodes) using jQuery

---

# Exercise 1

Let's map the DOM for the homepage of our project sites...

Take a piece of paper and map out in a tree-structure what the DOM looks like for your project site.

Be as detailed as you possibly can. When you're done, pair up with a classmate and explain the design of your DOM diagram to them.

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

We just used the `.css()` and `.ready()` methods, but jQuery has many more.*

For instance we can use jQuery methods to traverse the DOM:

- `.children()`
- `.parents()`
- `.siblings()`

.footnote[.red[ * ] Many of these methods are summarized on pages 304-305 of your text book.]

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

# Exercise 2

Let's try traversing the DOM to make some change to an HTML document:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/OVNjLB/?height=268&theme-id=0&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/OVNjLB/'>OVNjLB</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

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

# Mini-Exercise

Quick! Look up another example of an event that you can pass in as a parameter to the `.on()` method.

Share the method name and what it can be used for with the class.

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

# Exercise 3

Try creating a function that listens for an click event on a link:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/VLazbx/?height=268&theme-id=0&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/VLazbx/'>VLazbx</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

# What We've Learned

- What jQuery is
- What the DOM is and how to traverse it
- How to change the way a website looks using jQuery
- How to add interactivity to a page with jQuery

---
template: inverse

# Questions?

{% endhighlight %}

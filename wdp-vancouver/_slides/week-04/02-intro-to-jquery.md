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

1. What is jQuery? What is it for?
2. jQuery basics (traversing and chaining)
3. Working HTML elements and attributes
4. Working with CSS in jQuery
5. Creating event listeners with jQuery
6. Creating animation effects with jQuery
7. Working with HTML forms with jQuery

---

template: inverse

# What is jQuery?

---

class: center, middle

### jQuery is just JavaScript!

jQuery is a library of code that makes it much easier to perform many essential tasks in JavaScript.

Check out the [source code of the original jQuery release](http://genius.it/ejohn.org/files/jquery-original.html).

---

# What Is jQuery for?

- Find elements using CSS-style selectors
- Change content on the page
- Add animations to elements
- Watch what a user does and react to what they do
- Fetch new content

---

# jQuery's Claim to Fame

jQuery's main claim to fame&mdash;and it's original purpose&mdash;was to make selecting and manipulating DOM elements simpler.

It does this by wrapping JavaScript's _native_ DOM manipulation methods in an easy to use **API** (i.e. no more long method names like `getElementByClassName()`), and to provide **convenience methods** for parsing and updating HTML.

---

# How Do You Use jQuery?

To use jQuery you must include a link to its script file in your HTML document, just like any other JS file:

```html
<body>
  <h1>My Page</h1>
  <p class="intro">Welcome to my page!</p>
  <p></p>
  <p>Thanks for stopping by.</p>
  <!-- The rest of the page content... -->
  <script src="js/jquery-3.3.1.js"></script>
  <script src="js/my-script-file.js"></script>
</body>
```

The best practice is to add it near the closing body tag, but it has to be included before any other script files that use jQuery.

???

Pop open a Codepen and demonstrate jQuery not working if they're in the wrong order

---

# Where Do You Get It?

You can find different versions of jQuery from [jquery.com](http://jquery.com/download/):

- The compressed **production** version of jQuery has been "minified" and has all of the whitespace removed
- The uncompressed **development** version of jQuery still has its whitespace and is easier to read if you want to explore the library's internals

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
  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/my-script-file.js"></script>
</body>
```

Let's see how we can use jQuery to **change the colour of the text** in the paragraph with a class of `intro`.

---

# How Does It Work?

To use jQuery to find the element with a class of `.intro`, we must use the `jQuery()` function and pass the CSS selector as an argument:

```javascript
jQuery(".intro");
```

Although you'll generally see the jQuery method written using a dollar sign as shorthand:

```javascript
$(".intro");
```

---

# How Does It Work?

Now contrast the jQuery approach:

```javascript
$(".intro");
```

With using regular JavaScript:

```javascript
document.getElementsByClassName("intro");

// or...

document.querySelector(".intro");
```

It's easy to see why using jQuery is so appealing!

---

# What We Just Did...

But what does that actually do?

By writing `$('.intro')` in our code, we run a function that **returns** a **jQuery collection** (which is an object!), of matching elements.

This is also known as **wrapping** the matching elements in the jQuery object.

You can read more about the [jQuery object](https://learn.jquery.com/using-jquery-core/jquery-object/) in the docs.

---

# And Why Do We Care?

Our jQuery object may look like an array, but has a special set of **methods** you can call on it.

Now that our `.intro` elements are "wrapped" in a jQuery object, all of **jQuery's methods are available** for us to use on those elements. Let's see how that works...

---

# So What Next?

Now let's actually change the colour of the text using jQuery:

```javascript
$(".intro").css("color", "red");
```

It's that easy using the `.css()` method in jQuery!

We can also store our jQuery selection in a variable for re-use later:

```javascript
const $intro = $(".intro");
$intro.css("color", "red");
$intro.addClass("greeting");
```

---

# But There's a Catch!

Before we can start interacting with the DOM, we still need to make sure the browser has fully constructed the DOM tree.

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

???

**Note:** Point out that this is like what already used with regular JS:

```js
document.addEventListener("DOMContentLoaded", function() {
  // all of your JS code goes here
});
```

---

# But There's a Catch!

Using the code from our previous example, our script file would now look like this:

```javascript
$(function() {
  const $intro = $(".intro");
  $intro.css("color", "red");
  $intro.addClass("greeting");
});
```

---

# More jQuery Methods

We just used the `.css()` and `.ready()` methods, but jQuery has many more.

For instance we can use jQuery methods to **traverse** the DOM:

- `.children()`
- `.parents()`
- `.siblings()`

---

# Traversing the DOM

Given the following mark-up...

```html
<div class="page-wrapper">
  <h1>My Blog Post</h1>
  <article class="post">
    <p class="opening-line">It was the best of times,</p>
    <p>it was the blurst of times...</p>
  </article>
</div>
```

---

# Traversing the DOM

...try this jQuery out in Codepen and see what happens:

```javascript
$(function() {
  $(".opening-line")
    .siblings()
    .addClass("second-line");

  $("article")
    .children(".opening-line")
    .css("font-style", "italic");

  $("p")
    .parent()
    .siblings()
    .text("A Tale of Two Blog Posts");
});
```

---

# Chaining

In the last jQuery code snippet, we just saw multiple examples of **chaining**.

Chaining allows you to place several methods on the same selector at once, which makes your code more compact:

```javascript
// Chained:
$("#menu")
  .addClass(".active")
  .css("margin-right", "10px");

// Unchained:
$("#menu").addClass(".active");
$("#menu").css("margin-right", "10px");
```

---

template: inverse

# Doing More with the DOM

---

# Getting Element Content

We've already seen a preview of how jQuery helps you manipulate the DOM, but let's dive a little deeper:

- the `.html()` method will get the HTML inside the first element of the matched set (and its descendents)
- the `.text()` method will just get the text from inside the first element of the matched set (and its descendents)

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
const newContent = "<li>three</li>";
$(".numbers").append(newContent);

// Change the content of the second list item:
$(".numbers li:nth-child(2)").text("2");

// Remove the first item from the list:
$(".numbers")
  .children(":first")
  .remove();
```

---

# Updating Content

Note that `.prepend()` and `.append()` will add content inside the element's opening and closing tags respectively.

The `.before()` and `.after()` methods will add content just before or just after the selected element.

---

# Working with Attributes

As we have seen, it's very easy to add classes to elements with jQuery using `.addClass()`:

```javascript
$("ul").addClass("menu");
```

And we can similarly remove them with `.removeClass()`:

```javascript
$("ul").removeClass("menu");
```

???

Mention they don't need to add the dot for class names when adding/removing classes, nor the '#' when working with ID's

---

# Working with Attributes

We can also target other element attributes using the `.attr()` and `.prop()` methods:

```javascript
$("li").attr("id", "active");
$("input").prop("disabled", true);
```

Ostensibly, `.attr()` and `.prop()` do very similar things, but `.prop()` offers a slightly more modern, semantic approach and allows you to work with element attributes that are booleans, like the example above.

---

# Working with CSS

As we saw in an earlier example, we can also use jQuery to get and update an elements styles:

```javascript
// Get the font size and log it:
const $fontSize = $("p").css("font-size");
console.log($fontSize);

// Change the font size:
$("p").css("font-size", "18px");
```

We can even make multiple adjustments:

```javascript
$("p").css({ "font-size": "18px", "font-weight": "bold" });
```

???

Mention that the use of leaving one parameter out uses it as a getter, vs both parameters as a setter

---

# Exercise 1

Using what you just learned about traversing the DOM and jQuery methods, come up with at least three unique solutions for changing the color of the text to red in the second `<p>` inside the `<article>` using jQuery only (no CSS!).

[See the lesson page](/lesson/04-intro-to-jquery/) for further instructions.

---

template: inverse

# Event Listeners

---

# Events in jQuery

jQuery makes it even easier to create event listeners than we've seen with regular JavaScript.

To do this, we usually use the `.on()` method:

```javascript
$("button").on("click", function() {
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

# Events in jQuery

For basic event handlers to work, they must be attached to elements that exist when your code makes the call to `.on()`.

If the following button was dynamically added to the page after the page loaded, the alert would not appear:

```javascript
$("button").on("click", function() {
  alert("You clicked the button");
});

$("div").append("<button>My Button</button>");
```

???

Relate this back to what we've seen with `element.addEventListener()`.

---

# Event Delegation

Alternatively, we can use **event delegation** to attach events to elements.

Event delegation allows us to attach events to children of an element, even if they do not exist at the time of the page load.

```javascript
$("div").on("click", "button", function() {
  alert("You clicked the button");
});
```

Can you spot the difference in this approach?

---

# Event Delegation

Bonus! Using the event delegation approach can also be beneficial for code performance as it allows you to attach an event to a single parent element instead of many lower-level ones.

---

# Exercise 2

In this exercise, you're going create two click events&mdash;one that **adds another list item** to the list below, and one that **crosses off an item** in the list when its "done" link is clicked.

[See the lesson page](/lesson/04-intro-to-jquery/) for further instructions.

---

template: inverse

# Animating Elements

---

# Animation with jQuery

jQuery makes it easy to bring a webpage to life with animation. It offers many animation methods out of the box, including:

- `.show()`
- `.hide()`
- `.fadeIn()`
- `.fadeOut()`
- ...<a href="https://api.jquery.com/category/effects/" target="_blank">and many more!</a>

---

# Toggle Example

One of the most basic uses of animation in jQuery is to toggle the visibility of elements:

```html
<a href="#">Show a div</a>
<div id="my-div">This div is toggled when the link is clicked</div>
```

```javascript
$('a').on('click', function(event) {
  event.preventDefault();
  $('#my-div').toggle('fast');
});
```

We can pass in `fast`, `slow`, or a speed in milliseconds an argument for this method.

<a href="https://codepen.io/jimRedAcad/pen/YYOwrK" target="_blank">Try the Codepen example.</a>

---

# The .animate() Method

jQuery also offers an `.animate()` method, which will give you finer-grained control over how you implement your effects:

```html
<a href="#">Resize text</a>
<div id="my-div">This text will grow when the link is clicked</div>
```

```javascript
$('a').on('click', function(event) {
  event.preventDefault();

  $('#my-div').animate({ fontSize: '2em' }, 1000, function() {
    $(this).css('font-size', '1em');
  });
});
```

<a href="https://codepen.io/REDwdp/pen/MrqKVG" target="_blank">Try the Codepen example.</a>

---

# .animate() Complete

You may have noticed that you can run functions once .animate() has completed.

The basic structure looks like this.

```javascript
$(".box").animate({
  // animation runs
}, 2000, function() {
  // function run after animation finished, e.g. after 2000ms
});
```

---

template: inverse

# HTML Forms & jQuery

---

class: center, middle

### Souping Up Your Forms with jQuery

jQuery has some special features that make it much easier to work with and enhance HTML forms.

---

# Form Element Selectors

jQuery has special selectors that allow you to easily grab onto form elements, some of which include:

- `:checkbox`
- `:input`
- `:focus`
- `:selected`
- `:submit`

---

# The .val() Method

The `.val()` method allows you get or set the value entered into a form element:

```javascript
// Get the text string currently entered into the input:
$('input:text').val();

// Set a new value for the input by passing in a string:
$('input:text').val('A new value');

// Clear out an input by passing empty quotes into .val():
$('input:text').val('');
```

---

# The .is() Method

You can also use jQuery to figure out if a checkbox is checked:

```javascript
if ($('input:checkbox').is(':checked')) {
  console.log('The checkbox is checked.');
} else {
  console.log('The checkbox is not checked.');
}
```

---

# Forms and Events

We can also use jQuery's `.on()` method to handle a variety of other HTML form-related events:

- `blur`
- `change`
- `focus`
- `selected`
- `submit`

---

# Gotcha Alert!

You may have noticed that there are both `:focus` and `:submit` selectors, and `focus` and `submit` events.

Keep in mind that the former are for **finding** the focused element or submit element in the DOM, while the latter are for **detecting when** an input/select element is focused or a form is submitted.

---

# To Clarify...

You select the submit element like this:

```javascript
$('input:submit');
```

You detect when the form has been submitted like this:

```javascript
$('#my-form').on('submit', function() {
  // Do things on submit here...
});
```

---

# Form Event Example

Let's take a closer look at how we can use the `submit` event:

```html
<form id="my-form">
   <input type="text" id="my-text-input" />
   <input type="submit" />
</form>
```

```javascript
$('#my-form').on('submit', function(event) {
  event.preventDefault();

  if ($('#my-text-input').val() == '') {
    alert('You missed the field.');
  } else {
    alert('Thanks for filling the field!');
  }
});
```

---

# Form Event Example

Note that you can also write the previous code using `submit` as the actual method as follows:

```javascript
$('#my-form').submit(function(event) {
  event.preventDefault();

  if ($('#my-text-input').val() == '') {
    alert('You missed the field.');
  } else {
    alert('Thanks for filling the field!');
  }
});
```

However, using `submit` with the `.on()` method permits the use of event delegation.

What the? Let's take a closer look <a href="https://codepen.io/REDwdp/pen/qpQrbp" target="_blank">Codepen example.</a>

---

# The .change() Method

Similarly, we can also detect when a user chooses an `<option>` in a `<select>` menu using the change event:

```html
<select id="my-select-menu">
   <option value="">-- Pick an option --</option>
   <option value="option1">Option 1</option>
   <option value="option2">Option 2</option>
</select>
```

```javascript
$('#my-select-menu').on('change', function() {
  const selected = $(this).val();

  if (selected !== '') {
    console.log('The value you picked is: ' + selected);
  }
});
```

---

# Animating Forms

Last but not least, we can use jQuery effects to selectively show form elements based on values of other elements.

You can hide inputs by setting them to `display: none`:

```html
<style>
   label[for="fixins"], #fixins {
     display: none;
   }
</style>

<form id="food-order">
   <input type="checkbox" id="hamburger" />
   <label for="hamburger">Yes, I would like a hamburger</label>

   <label for="fixins">What would you like on your hamburger?</label>
   <input type="text" id="fixins" />
</form>
```

---

# Animating Forms

And then conditionally show those elements when the user changes another form field:

```javascript
$('#hamburger').on('change', function() {
  if ($(this).is(':checked')) {
    $('label[for="fixins"]').show('slow');
    $('#fixins').show('slow');
  } else {
    $('label[for="fixins"]').hide('slow');
    $('#fixins').hide('slow');
  }
});
```

<a href="https://codepen.io/REDwdp/pen/MvjdzE?editors=1010" target="_blank">Codepen example</a>

---

# Exercise 3

In this exercise, you're going to use jQuery to create an accordian-style show/hide effect for a basic FAQ list.

[See the lesson page](/lesson/05-jquery-animation/) for further instructions.

---

# What We've Learned

- How to use JavaScript on web pages
- What jQuery is
- How to change the way a website looks using jQuery
- How to add interactivity to a page with jQuery
- How we can bring our websites to life with jQuery's animation methods
- How to add interactivity to forms with jQuery

---

template: inverse

# Questions?

{% endhighlight %}

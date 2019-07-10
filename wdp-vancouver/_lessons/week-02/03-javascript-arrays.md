---
layout: lesson
title: JavaScript Arrays
slides: ["_slides/week-02/03-javascript-arrays.md"]
lesson_date: 2019-07-11
---

## Pre-Work

Check out [JSBin](https://jsbin.com/) or [CodePen](https://codepen.io). 
We'll be using these online editors to quickly test code.

---

## Learning Objectives

- Create JavaScript arrays and store values in them.
- Display the contents of arrays in the DOM.
- Use loops to read and modify array elements.
- Find elements inside of JavaScript arrays.
- Sort elements in JavaScript arrays.
- Map and filter elements in JavaScript arrays.

---

## Keywords

- Array
- Index
- Loop
- Method
- [.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

## Exercise 1

Add items to your bucket list array, and write some JS to display each item in an `<li>` inside of the `<ul>`.

**Use [JSBin](https://jsbin.com/?html,js,output) or [CodePen](https://codepen.io/) to complete this exercise**

```js
const bucketList = [
  // Add your items here
];

// Write JS to append each array item to the DOM here
```

```html
<h2>Bucket List:</h2>
<ul id="bucketList">
  <!-- Append your items using JS here -->
</ul>
```

---

## Exercise 2 - Refactor with Loops

Take the code you wrote in the previous exercise, and re-write your solution using the `forEach` function. Add an `id` to each `li` and set the value of the `id` to the item's index <br/> (eg. `<li id="2">Item</li>`). Good luck!

```js
const bucketList = [
  // Add your items here
];

// Use "forEach" to append each item to the DOM and add an id
```

```html
<h2>Bucket List:</h2>
<ul id="bucketList">
  <!-- Append your items here -->
</ul>
```

---

## Exercise 3

**Part 1:**

Start with the following code, and use what you know to complete the challenges listed below. 👩‍🏫

```js
const messageForm = document.getElementById("message-form");
// define other variables here if needed

messageForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // create a new <li> element to append to the DOM
  // set the inner text of the <li> to the form input value
  // append the new <li> to the existng <ul>
  // clear the input text
});
```

```html
<ul id="messages">
  <!--  Append messages here -->
</ul>
<form id="message-form">
  <input type="text" placeholder="Enter your message." />
  <button type="submit">Send</button>
</form>
```

When a user enters a message, the message should be appended to the list, and the input cleared.

**Part 2:**

Now that you can add items to the list, it's time to add a feature to remove them. You will need to **create a new event listener for this.**

When the user clicks an element with `class="remove"`, the message should be removed, and the list refreshed. How will you add `class="remove"` to your `<li>` items? And how will you check if an `<li>` has a class of "remove"?

You can then use `event.target.parentNode` to remove the specifically clicked list item if it has the correct class.

It would be a good idea to write out each step you need to complete in a comment (as you have seen in the exercise set-up), and then slowly work through translating these English phrases into code.

---

## Exercise 4

```js
const products = [
  ["Stretch Knit Dress", "dress"],
  ["Cotton Blue Shirt", "shirt"],
  ["Blue Hipster Backpack", "bag"]
];
```

**Use built-in JavaScript array methods to:**

1. Determine if the Array above contains a product with a value of 'bag'.
2. Find the index of the product with value of 'bag'.
3. `console.log` the name of the product with the value of 'bag'.

---

## Lab Activity

### Required: Add JS to Project 1

There are **three JavaScript requirements for Project 1**. Spend the remainder of the day writing that code.

**Be sure to wrap all of the code you write in the following code** (as in the previous lesson) to **ensure the DOM is ready** before you run your code:

`document.addEventListener("DOMContentLoaded", function() { ... }`

---

#### Requirement 1: Add a Slider

You can now add a slider to your site. You won't actually want write all of the code for a slider from scratch! You can use a "plugin" for this called **[Flickity](https://flickity.metafizzy.co/)**.

There are other slider plugins e.g. [OwlCarousel](https://owlcarousel2.github.io/OwlCarousel2/) however for consistency **we will all be using the Flickity plugin for this project**.

You can follow the [getting started](https://flickity.metafizzy.co#getting-started) instructions first, and then review the [initialize with vanilla JavaScript](https://flickity.metafizzy.co/#initialize-with-vanilla-javascript) instructions to add Flickity to your project.

Most plugins have some configuration options which can change the look and behaviour of the plugin.
Here are the [options for Flickity](https://flickity.metafizzy.co/options.html).

💡 **Flickity Guide**

*Although I do recommend checking out the getting started guide above, here is a step by step guide that you can follow to get Flickity working with your project.*

**Step 1:**
Add Flickity's CSS and JS files, the easiest way to do this is to use the provided [CDN](https://en.wikipedia.org/wiki/Content_delivery_network).

Add the following to the `<head>` of your html file. Make sure to add this CSS/JS links above your own CSS and JS files.

```html
<!-- Flickity CSS -->
<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
<!-- Flickity JavaScript -->
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
```

**Step 2:**

Where your "Most-Loved Products" section is add the following html.

```html
<div class="main-carousel">
  <div class="carousel-cell">
    <!-- product html here e.g. image, category, title & price  -->
  </div>
  <div class="carousel-cell">
    <!-- product html here e.g. image, category, title & price  -->
  </div>
  <div class="carousel-cell">
    <!-- product html here e.g. image, category, title & price  -->
  </div>
</div>
```

Once you've added the above html, start adding your other html inside of each carousel-cell's e.g. the product image, category, title & price.

**Step 3:**

Now we need to add some JavaScript to initialize the plugin.
**If you don't have a JavaScript file setup, add one now and link to it in the `<head>` of your html file.**

```js
const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  wrapAround: true,
  freeScroll: true
});
```

**Step 4:**

Add some CSS to style the Flickity carousel at different breakpoints.
Once you have your html inside of each carousel-cell you can adjust the widths and do some other styling like centering the content.

```css
/* mobile style */
.carousel-cell {
  width: 100%;
  text-align: center;
}

/* media query example */
@media screen and (min-width: 600px) {
  .carousel-cell {
    width: 25%;
  }
}
```

Now check and see if Flickity is working and try resizing your screen to see if the media query is working as expected.

---

#### Requirement 2: Conditionally Display an Alert

Lastly, you'll need to add another event listener to execute some conditional logic when the email sign-up form is submitted.

You want to display an alert box that says “Thanks for subscribing!” whenever a user successfully submits the newsletter form with an email address (i.e. not an empty value!), otherwise they should see a message in the alert box that asks them to enter an email address.

Checking to see **if** the input has a value is all the JavaScript you will need for this. If you are looking into **regular expressions** you've gone too far. A bit of the validation will be working by using`type="email"` for the subscribe input field. This will provide some validation to check if a user is including an @ symbol etc...

💡 You can use `.length` to check the value of an input field.

---

#### Requirement 3: Smooth Scrolling

You will need to add “smooth scrolling” into the menu so that menu items navigate to related sub-headings within the page on click.

Search for help on the web when implementing this. [This CSS Tricks article](https://css-tricks.com/snippets/jquery/smooth-scrolling/) is a great place to start.

The DRYest solution would involve using JS to get a list of all the link elements in the navigation menu, and then use `.forEach()` to loop over all of the link elements and add a `click` event listener to each.

In the callback for the event listener, you can do the work of scrolling to the appropriate section with `.scrollIntoView()`. The trickiest part will be figuring out how to get to the right section in the callback!

```js
const navLinks = document.querySelectorAll(/* nav link selector */);

navLinks.forEach(function(element) {
  // add click listener for the element in this iteration of the loop
  // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
  // get the section by its id using the string from the last step
  // scroll to that section with .scrollIntoView()
});
```

---

## Additional Resources

MDN resources for working with arrays in JS:

- [List of Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#)
- [Array Sorting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Searching Arrays using `find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Filtering Arrays with `filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Transforming Arrays with `map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

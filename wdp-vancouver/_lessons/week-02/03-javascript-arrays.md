---
layout: lesson
title: JavaScript Arrays
slides: ["_slides/week-02/03-javascript-arrays.md"]
lesson_date: 2019-07-11
---

## Pre-Work

Check out [JSBin](https://jsbin.com/). We'll be using it to test our code.

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

**Use JSBin to complete this exercise:<br />[https://jsbin.com/?html,js,output](https://jsbin.com/?html,js,output)**

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
const rangers = [
  ["Jason", "Triceratops"],
  ["Billy", "Tyrannosaurus"],
  ["Trini", "Sabre-toothed Tiger"],
  ["Kimberly", "Pteradactyl"]
];
```

**Use built-in JavaScript array methods to:**

1. Determine if the list above contains a ranger with 'Tyrannosaurus' avatar.
2. Find the index of the ranger with 'Tyrannosaurus' avatar.
3. `console.log` the name of the ranger with 'Tyrannosaurus' avatar.

---

## Lab Activity

### Required: Add JS to Project 1

There are three JavaScript requirements for Project 1. Spend the remainder of the day writing that code.

Be sure to wrap all of the code you write in the following code (as in the previous lesson) to ensure the DOM is ready before you run your code:

`document.addEventListener("DOMContentLoaded", function() { ... }`

**Requirement 1: Smooth Scrolling**

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

**Requirement 2: Add a Slider**

You can now add a slider to your site. You won't actually want write all of the code for a slider from scratch! You'll want to use a "plugin" for that. **[Flickity](https://flickity.metafizzy.co/)** is a great choice for a slider plugin.

Follow the [getting started](https://flickity.metafizzy.co#getting-started) instructions first, and then review the [initialize with vanilla JavaScript](initialize-with-vanilla-javascript) instructions to add Flickty to your project.

You will likely also need to review [what options are configurable](https://flickity.metafizzy.co/options.html) in Flickity's documentation.

**Requirement 3: Conditionally Display an Alert**

Lastly, you'll need to add another event listener to execute some conditional logic with the email sign-up form is submitted.

You want to display an alert box that says “Thanks for subscribing!” whenever a user successfully submits the newsletter form with an email address (i.e. not an empty value!), otherwise they should see a message in the alert box that asks them to enter an email address.

### Optional: Happiness Journal

_If you finish adding the required JS and styling Project 1, try this extra JS arrays challenge..._

Use the following code to build a functioning happiness journal.

Ensure all of the controls implemented in HTML are functioning and producing the correct UI.

When you're finished, add some CSS to make things look nice!

```html
<form id="happiness-form">
  <div id="controls">
    <div>
      Order By:
      <label for="h">
        Happiest
        <input type="radio" name="sort" value="h" />
      </label>
      <label for="u">
        Unhappiest
        <input type="radio" name="sort" value="u" />
      </label>
    </div>
    <div>
      Show only:
      <label for="+3">
        3 and above
        <input type="radio" name="filter" value="+3" />
      </label>
      <label for="-3">
        3 and below
        <input type="radio" name="filter" value="-3" />
      </label>
    </div>
  </div>
  <h3>Happiness Journal</h3>
  <ul id="happiness-journal">
    Empty.
    <!-- Add your journal entries here -->
  </ul>

  <h3>Add a new entry:</h3>
  <fieldset>
    <label for="happy-value">
      <div>How are you feeling?</div>
      1<input type="radio" name="happy-value" value="1" /> 2<input
        type="radio"
        name="happy-value"
        value="2"
      />
      3<input type="radio" name="happy-value" value="3" /> 4<input
        type="radio"
        name="happy-value"
        value="4"
      />
    </label>
  </fieldset>
  <fieldset>
    <label for="notes">
      <div>Add a note:</div>
      <textarea name="notes" id="notes" cols="30"></textarea>
    </label>
  </fieldset>
  <fieldset>
    <button type="submit">Submit your feelings</button>
  </fieldset>
</form>
```

```js
/* 
  This is just the starter code for the exercise. 
  Write your own additional logic and functions 
  to update the view when the user interacts with your form.
  Use an array (or multiple arrays) to store the data you
  will display in the list.
*/

const form = document.getElementById("happiness-form");
const sortInputs = document.querySelectorAll('[name="sort"]');
const filterInputs = document.querySelectorAll('[name="filter"]');

form.addEventListener("submit", function(e) {
  e.preventDefault();
  // Get the values from the form.
  // Append a new entry to your list!
});

sortInputs.forEach(function(radioInput) {
  radioInput.addEventListener("change", function(e) {
    // use e.target.value to sort your entries
  });
});

filterInputs.forEach(function(radioInput) {
  radioInput.addEventListener("change", function(e) {
    // use e.target.value to filter your entries
  });
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

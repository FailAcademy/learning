---
layout: slidedeck
title: JavaScript & jQuery Review
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# JavaScript & jQuery Review

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Essential JS programming concepts
2. jQuery review

---
class: center, middle

.large[
   Pop Quiz Time!
]

---

# Question 1

Which of the following are **not** used in objects?

**a)** Methods

**b)** Events

**c)** Groups

---

# Question 2

Which object represents a web page?

**a)** page object

**b)** document object

**c)** url object

---

# Question 3

Which of the following assigns a number to a variable?

**a)** `var quantity = '3';`

**b)** `var quantity = 3;`

**c)** `quantity == 3;`

---

# Question 4

How do you get the value **yellow** from this array:

```js
color = ['pink', 'yellow', 'green']
```

**a)** `color[0]`

**b)** `color[1]`

**c)** `color[2]`

---

# Question 5

Which symbol is used to multiply two values together?

**a)** `x`

**b)** `X`

**c)** `*`
---

# Question 6

Which of the following is true?

**a)** `3 !== 'three'`

**b)** `3 === three`

**c)** `5 < 3`

---

# Question 7

If `i` is `3`, what would `i` be after this statement:

```js
i++
```

**a)** 3

**b)** 4

**c)** 5

---

# Question 8

If a statement is not true, what keyword lets you offer an alternative code block?

**a)** `else`

**b)** `switch`

**c)** `or`

---

# Question 9

Which of the following is **not** and intended use of jQuery

**a)** Find elements using CSS-style selectors

**b)** Building complex web applications

**c)** Add animations to elements

---

# Question 10

True or false? jQuery is built into your web browser.

**a)** True

**b)** False

---

# Question 11

￼￼￼￼￼￼￼￼To add a new element inside a paragraph, right after the first `<p>` tag, which jQuery method would you use?

**a)** `.prepend()`

**b)** `.before()`

**c)** `.insertInto()`

---

# Question 12

Which of the following methods can be used to make an element appear?

**a)** `.slideIn()`

**b)** `.fade()`

**c)** `.appear()`

---

# Question 13

Which of the following jQuery methods will load HTML content into an element stored in a jQuery selection?

**a)** `$.get()`

**b)** `$.getHTML()`

**c)** `.load()`

---

# Question 14

Which command logs data to your browsers console that was generated in your script?

**a)** `console.log()`

**b)** `console.table()`

**c)** `console.info()`

---

# Question 15

Which methods of the event object can stop a form from being submitted?

**a)** `stop()`

**b)** `preventSubmit()`

**c)** `preventDefault()`

---

# Bonus Question!

True or false? The following demonstrates an example of event delegation:

```js
$('button').on('click', function() {
   alert('You clicked the button');
});
$('form').append('<button>My Button</button>');
```

**a)** True

**b)** False

---
template: inverse

# JS Concept Review

---
class: center, middle

.large[
   **HTML** &rarr; the content layer

   **CSS** &rarr; the presentation layer

   **JS** &rarr; the behaviour layer
]

---
class: center, middle

.large[
   What's a statement?
]

---
class: center, middle

.large[
   What's a conditional statement?
]

---
class: center, middle

.large[
   What's a variable?
]

---
class: center, middle

.large[
   What kinds of variables can we make in JS?
]

---

# Which Is Which?

Who can name what the **statements** and **variables** are in the following script?

```js
var today = new Date;
var dayOfWeek = today.getDay();
var greeting;

if ( dayOfWeek == 2 ) {
   greeting = 'Today is Tuesday';
} else {
   greeting = 'Nope, not Tuesday!';
}

alert('<h2>' + greeting + '</h2>');
```

Bonus points if you know what the `new Date`, `getDay()` and `alert()` are.

---
class: center, middle

.large[
   What's a function?
]

---

# What Are They For?

- Functions help us better organize our code
- Functions allow us to group together statements
- Functions allow us to only run certain steps in code when they are needed
- Function can perform very complex work for us and provide us with a single or multiple values afterword

---
class: center, middle

.large[
   What's the basic syntax for a function in JS?
]

---

# The Syntax of Functions

Who can describe what's happening in this function example?

```js
function add(a, b) {
   return a + b;
}

add(2, 2);
```

What will the result be?

---

# The Syntax of Functions

What's the difference between creating a function in the following ways?

**Example 1:**

```js
function volume(width, height, depth) {
   return width * height * depth;
}
```

**Example 2:**

```js
var volume = function(width, height, depth) {
   return width * height * depth;
}
```

---

# Functions and Scope

Where you define a variable will determine how you can use it:

- A variable defined inside a function has **local scope**
- A variable defined outside a function has **global scope**

```js
// global scope up here...

function myFunction() {

   // local scope in here...

}
```

---
class: center, middle

.large[
   What are the relative advantages and disadvantages of globally or locally defined variables?
]

---
class: center, middle

.large[
   What's an object?
]

---
class: center, middle

.large[
   How do we create one in JS?
]

---

# How Objects Help

- Like functions, objects help us **better organize our code** and make it more reusable
- When we define a variable in an object, we call it a **property**
- When we create a function in an object, we call it a **method**

---

# Using Objects

There are two ways we can access properties inside an object.

If we wanted to store the `beard` property in a variable, what two ways could we write it?

```js
var person  = {
   firstName: 'Silent',
   lastName: 'Bob',
   height: 1.75,
   beard: true,
   getName: function() {
      return this.firstName + ' ' + this.lastName;
   }
}
```

---

# Using Objects

After this object is declared, how could we later update the `beard` property to false?

```js
var person  = {
   firstName: 'Silent',
   lastName: 'Bob',
   height: 1.75,
   beard: true,
   getName: function() {
      return this.firstName + ' ' + this.lastName;
   }
}
```

---

# Using Objects

And how could we store the result of the `getName` method in a variable outside the object?

```js
var person  = {
   firstName: 'Silent',
   lastName: 'Bob',
   height: 1.75,
   beard: true,
   getName: function() {
      return this.firstName + ' ' + this.lastName;
   }
}
```

---
class: center, middle

.large[
   What's the difference between and object and an array?
]

---

# Index Numbers

- Index numbers in an array are like the property key names in regular objects
- But instead of choosing the names, they are always set to numbers in ascending order
- **Weirdness alert!** In JavaScript, counting always starts at 0
- Index numbers allow us to assign and access values in arrays

---

# Using Arrays

Add values to an array by separating them with commas:

```js
var shoppingList = ['coffee', 'peppers', 'apple juice'];
```

Access them by their index number:

```js
// Item 2 is available at index number 1:
var itemTwo = shoppingList[1]; // will equal "peppers"
```

And even add new values to the end of the array:

```js
shoppingList.push('oranges');
```

*How do we find out how many items are in the above array?*

---
class: center, middle

.large[
   And lastly, what's a loop?
]

---
class: center, middle

.large[
   What kinds of loops can we create in JS?
]

---

# Arrays and Loops

Let's take our shopping list array and print it out in a list:

```js
var shoppingList  = ['coffee', 'peppers', 'apple juice'];

// Remember how we manually set the max. number of loops before?
// We can use the array "length" to get the number automatically:

var totalItems = shoppingList.length;

for (var i = 0; i < totalItems; i++) {
   console.log( shoppingList[i] + '<br />' );
}
```

---

# Objects and Loops

We use slightly different syntax to loop through properties in an object:

```js
var bob = {
    firstName: 'Bob',
    lastName: 'Smith',
    phoneNumber: '604-604-6040',
    email: 'bob@redacademy.com'
};

for (var prop in bob) {
  console.log(bob[prop]);
}
```

What will the following loop output?

---

# Exercise 1

In this exercise, you're going to build a JS object of your own to represent a hotel.

Properties of the hotel object should include the **name** of the hotel (The Quay), the **total number of rooms** (40), the current number of **rooms booked** (25), an array of the **types of rooms** (twin, double, suite), and function to **check the availability**.

One you've created your object, **create a loop** to log to the console all of the room types one-by-one. Then, **update the booked rooms** to 30, check the new availability, and display that in an **alert box**.

---
template: inverse

# jQuery Review

---
class: center, middle

.large[
   What is jQuery?
]

---

# What Is jQuery for?

- Find elements using CSS-style selectors
- Change content on the page
- Add animations to elements
- Watch what a user does and react to what they do
- Fetch new content and add it to a page

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
class: center, middle

.large[
   What's the DOM?
]

---

# Mini-Exercise

Sketch out what the DOM tree would look like for this HTML:

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

# How Does It Work?

If we wanted to create a **jQuery object** specifically out of the paragraph element below, what two ways could write that?

```html
<p class="intro">Welcome to my page! Thanks for stopping by.</p>
```

And if we wanted to store that object in a variable to re-use multiple times, how would we write that out?

---

# Waiting for the DOM

But before we can start interacting with the DOM, we need to make sure the browser has fully constructed the DOM tree.

```js
$(document).ready(function() {
   // your jQuery code here...
});

// Or more commonly, you'll see the shorthand version:

$(function() {
   // your jQuery code here...
});
```

---
class: center, middle

### jQuery Has Methods Too

We know that jQuery has many methods that we can **chain** onto our jQuery objects to **traverse** the DOM around them and manipulate their appearance.

---
class: center, middle

.large[
   **Name that jQuery method!**
]

---
class: center, middle

.large[
   What method allows you to select a sibling element?
]

---
class: center, middle

.large[
   What method allows you to change a CSS property for an element?
]

---
class: center, middle

.large[
   What method allows you to change the text inside an element?
]

---
class: center, middle

.large[
   What method allows you to remove a class from an element?
]

---
class: center, middle

.large[
   What method allows you to add content just inside an element's closing tag?
]

---
class: center, middle

.large[
   What method allows you to add content just before an element's opening tag?
]

---
class: center, middle

.large[
   What method allows you to change an element's ID name?
]

---
class: center, middle

.large[
   What method allows us to execute code only when a user clicks on an element?
]

---

# Events in jQuery

Website are usually interactive, and jQuery makes it very easy to react to things that website users do while on a page.

To do this, we usually use the `.on()` method and pass the type of event in as the first parameter:

```js
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

# Event Delegation

Alternatively, we can use event delegation to attach events to elements.

Event delegation allows us to attach events to children of an element, even if they do not exist at the time of the page load.

```js
$('div').on('click', 'button', function() {
   alert('You clicked the button');
});
```

Can you spot the difference in this approach?

---

# The Event Object

Every event handling function receives and event object, and this object has methods and properties of its own.

To access these methods and properties, we must pass in the event object as a parameter for our function:

```js
$('div').on('click', 'button', function(event) {

   // Stop the default behavior on the button click
   event.preventDefault();

   // Now perform our custom button click actions here...
});
```

---

# Animation Methods

jQuery makes it easy to bring a webpage to life with animation with these methods:

- `.show()` / `.hide()` / `.toggle()`
- `.fadeIn()` / `.fadeOut()` / `.fadeToggle()`
- `.slideUp()` / `.slideDown()` / `slideToggle()`

...and many more!

---

# Exercise 2

In this exercise, you're going to use jQuery to create an accordian-style show/hide effect for a basic FAQ list.

[See the lesson page](/lesson/javascript-jquery-review/) for further instructions.

---

# What We've Learned

- Basic JS programming concepts
- What the DOM is
- jQuery methods for traversing the DOM
- jQuery's event methods
- jQuery's animation methods

---
template: inverse

# Questions?

{% endhighlight %}

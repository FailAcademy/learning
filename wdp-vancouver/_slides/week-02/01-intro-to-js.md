---
layout: slidedeck
title: JavaScript Basics Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# JavaScript Basics

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is JavaScript?
2. Statements, variables, and comments
3. The window and document "objects"
4. Arithmetic and comparison operators
5. Loops
6. Accessing elements on a page
7. Including scripts on a webpage

---
template: inverse

# What is JavaScript?

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
   Client-side vs. server-side?
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
class: center, middle

.large[
   How do we **concatenate** a string?
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
   What two ways can we add comments to our JS?
]

---
class: center, middle

.large[
   What's the difference between the `document` and the `window` objects?
]

---

# Objects Have Methods

Methods perform certain tasks for the objects:

- The `alert()` method will open an alert box in front of the window
- The `document.write()` method will add content to page wherever the script is executed
- `prompt()` is another handy method

*Let's try these out in a console...*

---

# Logging Values to the Browser Console

You can also use the `console.log()` method to simply print out and test values in the browser's console from your code, instead of writing them to your document.

```javascript
var greeting = "Hi there!"
console.log(greeting);
```

---

# Exercise 1

Open a new browser tab and open the console, and type in each line one at a time:

```js
alert('Hello World!');
prompt('What\'s your name?');
document.write('<h1>Hi There!</h1>');
```

If we wanted to store the value inputted into the `prompt` and print it out in an `alert` afterward, how might we do that?

And what would we do if wanted to output the value that was entered in the `prompt` with the string `Hello, ` in front of it in the subsequent `alert`?

---
template: inverse

# Arithmetic & Comparison Operators

---

# Arithmetic Operators

Operators allow us to create a single value from multiple values. We can use `+`, `-`, `/`, and `*` to calculate values and store them in variables:

```javascript
var quantity = 3 + 2;
var total = (4 - 1) * 3;
```

*What will the above variables return?*

---

# Arithmetic Operators

There are also special operators that allow us to increment or decrement a value:

```javascript
var i = 5;
i++;
```

```javascript
var i = 5;
i--;
```

Or find the remainder of an expression:

```javascript
var remainderOne = 10 % 3;
var remainderTwo = 6 % 2;
```

*What will the above variables return?*

---

# Comparison Operators

We can also compare values and evaluate their result:

```javascript
3 > 2

3 >= 2

3 < 2

3 == 2

3 === '3'

3 != '3'

3 !== 2
```

*What will the above expressions return?*

---

# Comparison Operators and Conditions

Comparison operators are helpful when paired with conditional statements:

```js
var score = prompt('What\'s your score?');

if ( score >= 50 ) {
   alert('You passed!');
} else {
   alert('Keep trying...');
}
```

*What will happen when this script runs?*

---
template: inverse

# Loops

---

# While Loops

While loops are helpful when you don't know how many times it needs to run:

```javascript
var i = 0;
var score = 0;

while (i < 5) {
  score = i;
  document.write("Your score : " + score + "<br />");
  i++;
}
```

*What do you think the final score will be after this loop runs?*

---

# Do While Loops

Do while loops are similar to while loops, but they always run at least once:

```javascript
var i = 2;
var score = 0;

do {
  score = i;
  document.write("Your score : " + score + "<br />");
  i++;
} while (i < 1);
```

*What do you think the loop will return this time?*

---

# For Loops

For loops allow you to set a specific number of times that the loop will run:

```javascript
var count = 0;

for (var i = 1; i < 5; i++) {
  count = i;
  document.write('Current count: ' + count + '<br />');
}
```

You will likely find yourself using for loops most often with "arrays" (we'll get to those shortly...).

---

# Exercise 2

Using what you just learned about conditional statements and loops, write a program that uses `console.log()` to print all the numbers from 1 to 100, with two exceptions.

For numbers divisible by 3, print **Fizz** instead of the number, and for numbers divisible by 5 (and not 3), print **Buzz** instead.

When you have that working, modify your program to print **FizzBuzz**, for numbers that are divisible by both 3 and 5 (and still print **Fizz** or **Buzz** for numbers divisible by only one of those).

---
template: inverse

# Using JavaScript on a Website

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

# Exercise 3

Let's add an external JS file to our Project 2 directory, and include it in our `index.html` file for the project.

To make sure you've done it correctly, `console.log()` any string in the JS file, and make sure that it shows up in the console when you open the HTML file in your browser window.

We won't be adding any other JS to this file today, but will be later in the week when we learn about jQuery.

---

# What We've Learned

1. What JavaScript is and what it's used for
2. How we can create variables, conditionals, and loops in JS
3. What the window and documents objects are
4. How to access HTML elements using JS
5. How to include JS files in a webpage

---
template: inverse

# Questions?

{% endhighlight %}

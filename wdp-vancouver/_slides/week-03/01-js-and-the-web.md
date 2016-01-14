---
layout: slidedeck
title: Ajax, JSON, and APIs Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse
template: inverse

---
# Javascript and the Web

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

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

# Exercise 3

Let's add an external JS file to our Project 2 directory, and include it in our `index.html` file for the project.

To make sure you've done it correctly, `console.log()` any string in the JS file, and make sure that it shows up in the console when you open the HTML file in your browser window.

We won't be adding any other JS to this file today, but will be later in the week when we learn about jQuery.

---
template: inverse

# Questions?

{% endhighlight %}
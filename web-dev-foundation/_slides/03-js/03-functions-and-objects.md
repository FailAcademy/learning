---
layout: slidedeck
title: JavaScript Functions, Objects, and Arrays Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# JavaScript Functions, Objects, and Arrays

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Functions
2. Objects
3. Arrays

---
template: inverse

# Functions

---
class: center, middle

### What is a function?

Functions are specific chunks code that you can use to repeat a set of instructions.

---

# How Do Functions Help?

- Functions help us better organize our code
- Functions allow us to group together statements
- Functions allow us to only run certain steps in code when they are needed
- Function can perform very complex work for us and provide us with a single or multiple values afterword

---

# The Syntax of Functions

Use the **function** keyword, followed by a variable name to store it for re-use later:

```javascript
function add(a, b) {
   return a + b;
}
```

The `a` and `b` in parentheses are called **parameters**. They allow us to pass different values into the function whenever we use it. Note that not all functions have parameters.

---

# How to Use a Function

But simply writing a function doesn't do much.

We need to **call** it for it to do any work for us:

```javascript
// This is called "declaring" the function
function add(a, b) {
   return a + b;
}

// This is called "calling" the function
add(2, 2);
```

---

# How to Use a Function

The output of function is called it's **return value**. Our previous example returned the integer 4.

Let's store the return value in a variable now, and write it out to the document:

```javascript
function add(a, b) {
   return a + b;
}

var twoPlusTwo = add(2, 2);

document.write(twoPlusTwo);
```

---

# Another Example

```javascript

```

---

# But Not All Functions Are Created Equal

In JavaScript, you can create different kinds of functions:

- Function declarations
- Function expressions
- Immediately invoked function expressions

---

# Function Declarations

Function declarations are exactly what we've seen so far.

These functions can be called before they are even declared:

```javascript
var size = volume(3, 4, 5);

document.write(size);

function area(width, height) {
   return width * height * depth;
}
```

---

# Function Expressions

Function expressions usually don't have a name. Functions without names are known as an **anonymous functions**.

This function expression is stored in a variable called `area`:

```javascript
var volume = function(width, height, depth) {
   return width * height * depth;
}

var size = volume(3, 4, 5);

document.write(size);
```

Unlike function declarations, this function won't be available to use until the interpreter reaches that point in the code.

---

# Immediately Invoked Function Expressions

These functions also aren't available until the interpreter finds them, and execute themselves when they are found:

```javascript
var volume = function(width, height, depth) {
   return width * height * depth;
}();

// Note the "()" before the closing semi-colon above
```

In this case, the variable `volume` will store the returned value of the function, instead of the function itself.

---

# Immediately Invoked Function Expressions

Now why on earth would we want to write a function this way?

---

# How Variables Work with Functions

- Talk about scope...

---

# Activity 1

- Mess around with different functions in Codepen

---
template: inverse

# Objects

---

# Activity 2

- Build some basic objects JS, and use some built-in ones two
- Require setting properties AND methods

---
template: inverse

# Arrays

---

# Activity 3

- Build an array in JS and iterate over it with a for loop (review!)...

---

.left-column[
  ## Title
]

.right-column[

]

---
template: inverse

# Fin!

{% endhighlight %}

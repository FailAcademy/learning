---
layout: slidedeck
title: JavaScript Functions, Objects, and Arrays Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# JS Functions, Objects, and Arrays

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. How we create functions in JS, and how they impact "scope"
2. What are objects? How do we make them?
3. Arrays (and how to "loop" over them)

---
template: inverse

# Functions

---
class: center, middle

### What is a function?

Functions are specific chunks code that you can use to **repeat a set of instructions**.

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

# Creating a Function

We can store our function using a **variable name** in order to re-use later too:

```javascript
function add(a, b) {
   return a + b;
}
```

The `a` and `b` in parentheses are called **parameters**. They allow us to pass different values into the function whenever we use it.

Note that not all functions have parameters.

---

# How to Use a Function

But simply writing a function doesn't do much.

We need to **call** it for it to do any work for us:

```javascript
// This is called "declaring" the function:

function add(a, b) {
   return a + b;
}

// This is called "calling" the function:

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

Notice that we don't explicitly "return" anything from this function, we just write out the result:

```javascript
function fullName() {
   var yourName = prompt('What\'s your name?')
   document.write('<h1>' + yourName + '</h1>');
}

fullName();
```

Keep in mind that JS functions always return something, even when you don't tell them to. If you `console.log()` the output of this function, it would return `undefined`.

---

# Functions in HTML

We can call functions from within an HTML file as well:

```javascript
function fullName() {
   var yourName = prompt('What\'s your name?')
   document.write('<h1>' + yourName + '</h1>');
}
```

The function is called using the `onclick` attribute:

```html
<button onclick="fullName();">Click here!</button>
```

---

# Not All Functions Are Created Equal...

In JavaScript, you can create different kinds of functions:

- Function declarations
- Function expressions
- Immediately invoked function expressions .red[* ]

.footnote[.red[* ]More on these later with jQuery...]

---

# Function Declarations

Function declarations are exactly what we've seen so far.

These functions can be called before they are even declared in your code (due to a concept in JS known as **hoisting**):

```javascript
var size = volume(3, 4, 5);

document.write(size);

function volume(width, height, depth) {
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

# What Kind of Scope?

Let’s look at some variables and figure out if they will have local or global scope...

```javascript
var fille = “Monique”;

function france() {
	var garcon = “Henri”;
}
```

---

# What Kind of Scope?

A more complex example:

```javascript
var fille = “Monique”;

function france() {
	var garcon = “Henri”;

	function paris() {
		var femme = “Marie”;
	}
}
```

---

# Global vs. Local Scope

There are pros and cons to each type of variable scope:

- **Global variables** can be **reused** throughout your code, but they **use more memory** and you may run into **naming collisions** with other scripts
- **Local variables** are more efficient because they **use less memory** and their **names are protected** within the function that they are defined, but they **can't be re-used** elsewhere in your code

---

# Exercise 1

Create an `index.html` file with and externally linked JS file included in it. Load that file in your browser window.

In your JS file, declare a function called `min` that compares to two numbers and logs out the lower number to the console:

```js
// Inside your JS file, first create your function declaration...

// Then run:

console.log(min(0, 10));
// should log out 0 in the console

console.log(min(0, -10));
// should log out -10 in the console
```

---
template: inverse

# Objects

---
class: center, middle

### What are objects?

Objects are like containers that hold groups of related variables and functions to create an organized model of something in your code.

---

# How Objects Help

- Like functions, objects help us **better organize our code** and make it more reusable
- When we define a variable in an object, we call it a **property**
- When we create a function in an object, we call it a **method**

---

# You've Used Methods

You've already made use of handful of objects and their methods. Remember that in JS we have `window` and `document` objects?

```javascript
// These are methods of the window object:

alert(); // this is the same as writing window.alert();
prompt(); // this is the same as writing window.prompt();
```

```javascript
// This is method of the document object:

document.write();
```

---

# The Syntax of Objects

We define objects in JS just like we define any other variables, but they are wrapped in curly braces:

```javascript
var person  = {
   // your properties and methods will go here...
};
```

---

# The Syntax of Objects

Properties and methods are defined for the object using **key/value pairs**.

This simply means that instead of writing `var firstName =` we write `firstName:` and separate multiple properties with commas instead of semi-colons.

```javascript
var person  = {
   firstName: 'Silent',
   lastName: 'Bob',
   height: 1.75,
   beard: true
};
```

---

# The Syntax of Objects

And the same goes for creating methods.

For object methods, we write `getName: function() {...}` instead of `function getName() {...}`:

```javascript
var person  = {
   firstName: 'Silent',
   lastName: 'Bob',
   height: 1.75,
   beard: true,
   getName: function() {
      return this.firstName + ' ' + this.lastName;
   }
};
```

---

# Using Object Properties

To access one of the object's properties or methods, we can use **dot notation**:

```javascript
var person = {
   // ...
   beard: true,
   //...
};

var hasBeard = person.beard; // will equal true
```

Or use square brackets with the property key in quotes:

```javascript
var hasBeard = person['beard']; // will equal true
```

---

# Using Object Properties

And just like variables, we can update object property values after they've been initially defined:

```javascript
var person = {
   // ...
   beard: true,
   //...
};

person.beard = false;
```

Or even add new ones:

```javascript
person.justShaved = true;
```

---

# Using Object Methods

We can also use dot notation to access object methods:

```javascript
var person = {
   // ...
   getName: function() {
      return this.firstName + ' ' + this.lastName;
   }
};

var fullName = person.getName(); // will return "Silent Bob"
```

---

# What Is "This"?

In JS, `this` is a special word and it always refers to one object (which object it refers to will depend on the context).

Inside of an object's method, it refers to the object itself:

```javascript
var person = {
   firstName: 'Silent',
   lastName: 'Bob',
   // ...
   getName: function() {

      // use "this" to get properties of the object inside of a method

      return this.firstName + ' ' + this.lastName;
   }
};
```

---
template: inverse

# Arrays

---
class: center, middle

### What are arrays?

Arrays are special object in JavaScript that store a list of values, but the key for each value is an **index number**.


---

# Index Numbers?

- Index numbers in an array are like the property key names in regular objects
- But instead of choosing the names, they are always set to numbers in ascending order
- **Weirdness alert!** In JavaScript, counting always starts at 0
- Index numbers allow us to assign and access values in arrays

---

# The Syntax of Arrays

Like normal objects, there's a special way to define arrays as variables.

For arrays, we use square brackets (instead of curly braces):

```javascript
var shoppingList  = [
   // your array items will go here...
];
```

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

# Arrays in Objects

We can also store arrays as properties in objects:

```javascript
var errands = {
   date: new Date(),
   complete: false,
   locations: ['Post Office', 'Grocery Store', 'Hardware Store']
};

var firstStop = errands.locations[0]; // will equal "Post Office"
```

---
class: center, middle

.large[
   And lastly, back to loops...
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

*Any guesses as to what the following loop will output?*

---

# Exercise 2

In this exercise, you're going to build a JS object of your own to represent a **hotel**.

Properties of the hotel object should include the **name** of the hotel (The Quay), the **total number of rooms** (40), the current number of **rooms booked** (25), an array of the **types of rooms** (twin, double, suite), and function to **check the availability**.

One you've created your object, **create a loop** to log to the console all of the room types one-by-one. Then, **update the booked rooms** to 30, check the new availability, and display that in an **alert box**.

---

# What We've Learned

- How to create function in JS
- How variable scope works with function in JS
- How to create objects that contain properties and methods
- How to create arrays and loop over them

---
template: inverse

# Questions?

{% endhighlight %}

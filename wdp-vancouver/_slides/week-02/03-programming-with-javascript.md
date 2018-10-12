---
layout: slidedeck
title: Programming with JavaScript Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Programming with JavaScript

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. What is JavaScript?
2. JavaScript Syntax
3. Values, Type and Operators
4. Arrays
5. Objects
6. Functions
7. Loops

---

template: inverse

# What is JavaScript?

---

class: center, middle

### JavaScript is a programming language

Computers need you to tell them what to do.

---

class: center, middle

### JavaScript is not "Java"

The shared name is a long story...

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

# About programming

**Most programming languages share similar concepts.** <br/>

- Variables
- Expressions (Math & truth checking)
- Arrays (Sometimes called Lists)
- Objects (Sometimes called classes)
- Functions
- Loops

---

# The Console

Because JS is "client-side" you can see it in your browser:

.border[
![Scripts in page source](../../public/img/slide-assets/elements-screenshot.png)
]

---

class: center, middle

### Open your browser console:

.large[
<strong>⌥ + ⌘ + i</strong>
]

---

# The Console

You can write it right in your browser too using the **console**:

.inline-images-border[
![Writing scripts in the console](../../public/img/slide-assets/console-screenshot.png)
]

You can also use the console to identify bugs in your JS code.

.inline-images-border[
![Error in the console](../../public/img/slide-assets/js-error-screenshot.png)
]

---

# Using console.log()

In JavaScript, we can use `console.log()` to print values into the **browser console**.

This helps us understand what particular values may be at specific points in your programs execution flow:

```js
console.log('hello!');
```

---

# Comments

We can add comments to our JS too:

```js
// Add a single line comment with 2 forward slashes

/*
   Add a multi-line comment like this...
   Commenting rules!
*/
```

**Review:** Comments are a powerful tool for helping you organize and understand your programs.

Comments are always hidden from execution in the script, and do not affect the output of the program.

---

# What Is Syntax?

- Syntax is the set of rules or **grammar** of a particular programming language
- It sets the rules that determine how your code should be structured so computers can understand it
- A text-based language's syntax will permit specific combinations of letter, numbers, and symbols

---

# What is Syntax?

When we talk about programming, we will use specific words to describe the programs we are talking about.

Here are a few examples:

**Statement, Expression, Value, Declaration, Assignment, Conditional, Object, Function, Method**

---

# Statements

Statements in JavaScript end with a `;`.

Here is an example of a statement:

```js
a = b * 2;
```

Statements are any combination of **variables**, **values**, and **operators**.

---

# Control Flow

The most common control flow statement is the `if else` statement:
Using `if` and `else` you can decide what code your program will run, depending on the **Truthyness** or **Falsiness** of a given statement, for example:

```javascript
// ...
const hungry = 9000;

if (hungry) {
  eat();
} else {
  doWork();
}
```

**What function will get called in this case?**

---

# Expressions

A statement is made up of one or more **expressions**.

An expression is any reference to a **variable** or **value**, (or a set of **variables** and **values**) combined with **operators**.

Here is an example of an **if statement**:

```js
if (a > 21 || a * 4 === 32) {
  console.log('Got a result!');
}
```

---

# Variables

The **const** keyword defines a variable in JavaScript.

This is what a **variable declaration** looks like:

```js
const color = 'red';
const amount = 100;
const list = ['first', 'second', 'third'];
const result = amount * 10;
```

---

# Uninitialized Variables

We can **declare** variables, without assigning a value using `let`.

Unassigned variables automatically get the JavaScript value `undefined`.

```js
let a;
let b;
let c;

console.log(a); // logs "undefined"
```

---

# Variable Pro Tips

- Variables can hold _any_ JavaScript value!
- Make sure your variable names are descriptive
- Use `camelCase` for defining JS variables
- You can only use the dollar sign and underscore special characters in variable names

---

# Which Is Which?

Who can name what the **statements** and **variables** are in the following script?

```js
const today = new Date();
const dayOfWeek = today.getDay();
let greeting;

if (dayOfWeek === 2) {
  greeting = 'Today is Tuesday';
} else {
  greeting = 'Nope, not Tuesday!';
}

console.log(greeting);
```

---

# Exercise 1

Copy and paste this code into the browser console:

```js
console.log('Hello World!');
const yourName = prompt("What's your name?");
console.log(yourName);
```

If we wanted to store the value inputted into the `prompt` and print it out in an `console.log` afterward, how might we do that?

And what would we do if wanted to output the value that was entered in the `prompt` with the string `Hello,` in front of it in the subsequent `console.log`?

---

template: inverse

# Values, Types & Operators

---

# Primitives

When working with operators (as we'll see in a moment), we'll have to ensure that the values we are using in our expressions are appropriate.

That means numbers for math, strings for creating text, etc.

Primitive values include:

```js
'I am a String'; // string
'I am another string'; // string
42; // number
true; // boolean
false; // boolean
```

There are two other primitives in ES5: `undefined` and `null`

---

# Arithmetic Operators

JavaScript has basic arithmetic operators:

`+`, `-`, `/`, `%` and `*`

In use:

```js
const quantity = 3 + 2;
const total = (4 - 1) * 3;
let totalAndOne = total++;
let totalMinusOne = total--;
```

_What will the above variables return?_

---

# Arithmetic Operators

There are also special operators that allow us to **increment** or **decrement** a value:

```js
let i = 5;
i++;
```

```js
let i = 5;
i--;
```

Or find the remainder of an expression:

```js
const remainderOne = 10 % 3;
const remainderTwo = 6 % 2;
```

_What will the above variables return?_

---

# Comparison Operators

We can also compare values and evaluate their result:

```js
3 > 2;

3 >= 2;

3 < 2;

3 == 2;

3 === '3';

3 != '3';

3 !== 2;
```

_What will the above expressions return?_

---

# Comparison Operators and Conditionals

Comparison operators are helpful when paired with conditional statements:

```js
const score = prompt("What's your score?");

if (score >= 50) {
  console.log('You passed!');
} else {
  console.log('Keep trying...');
}
```

_What will happen when this script runs?_

---

# Type Coercion

In JavaScript, certain **operations** can change the value of primitives.

Getting used to how JavaScript handles primitives is an important part of using the language, and also the cause of many bugs and frustrations for beginners.

Try this:

```js
const a = '42';
const b = Number(a);

console.log(a); // "42"
console.log(b); // 42
```

---

class: center, middle

### When is a number not a number?

(Answer: When it's a string)

---

# Coercion + Overloading

JavaScript is weird.

**More Type Coercion:**

```js
'2' === 2; // false
'2' == 2; // true, wtf?
```

**Operator Overloading:**

```js
'42' + 5; // "425" ... ok that makes sense?!
```

Because of this unique behavior, it's a best practice to **always use `===` (triple equals)** when doing value comparisons in JavaScript.

---

template: inverse

# Truthy and Falsy values

---

# JavaScript Truth Table

The following values are always `false`:

- `false`
- `undefined`
- `""` (an empty string)
- `null`
- `0`
- `NaN` (a special Number value meaning Not-a-Number!)

---

# And (&&) and Or (||)

In JavaScript we can check for **truthy** and **falsy** values.

For example, we can write an **if statement** like this:

```js
if (a < b || b > c) {
  console.log('Got a result');
}
```

---

# Short Circuits

We can use **comparison operators** and **assignment** to get a value depending on some condition:

```js
// The value of a will either be true or false
// depending on the truthiness of b & c ...

const a = b && c;
```

---

# The Ternary Operator

We can reduce the number of line in simple **conditionals** by using the ternary operator.

```js
const a = b < 21 ? b : c;
```

This statement reads: "If `b` is less than `21`, then the value of `a` will be `b`, otherwise `a` will have the value of `c` ... "

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

```js
const shoppingList = [
  // your array items will go here...
];
```

---

# Using Arrays

Add values to an array by separating them with commas:

```js
const shoppingList = ['coffee', 'peppers', 'apple juice'];
```

Access them by their index number:

```js
// Item 2 is available at index number 1:
const itemTwo = shoppingList[1]; // will equal "peppers"
```

And even add new values to the end of the array:

```js
shoppingList.push('oranges');
```

_How do we find out how many items are in the above array?_

---

template: inverse

# Objects

---

# What Are Objects?

**Objects** are like containers that hold groups of related variables and functions to create an organized **model** of something in your code.

```js
const myObject = {};

// An object literal!
```

---

# How Objects Help

- Like functions, objects help us **better organize our code** and make it more reusable
- When we define a variable in an object, we call it a **property**
- When we create a function in an object, we call it a **method**

---

# The Syntax of Objects

We define objects in JS just like we define any other variables, but they are wrapped in curly braces:

```js
const person = {
  // your properties and methods will go here...
};
```

---

# The Syntax of Objects

**Properties** and **methods** are defined for the object using **key/value pairs**.

This simply means that instead of writing `const firstName =` we write `firstName:` and separate multiple properties with commas instead of semi-colons.

```js
const person = {
  firstName: 'Silent',
  lastName: 'Bob',
  height: 1.75,
  beard: true,
};
```

---

# Using Object Properties

To access one of the object's properties or methods, we can use **dot notation**:

```js
const person = {
  // ...
  beard: true,
  //...
};

const hasBeard = person.beard; // will equal true
```

Or use square brackets with the property key in quotes:

```js
const hasBeard = person['beard']; // will equal true
```

---

# Using Object Properties

And just like variables, we can update object property values after they've been initially defined:

```js
const person = {
  // ...
  beard: true,
  //...
};

person.beard = false;
```

Or even add new ones:

```js
person.justShaved = true;
```

---

# Arrays in Objects

We can also store arrays as properties in objects:

```js
const errands = {
  date: new Date(),
  complete: false,
  locations: ['Post Office', 'Grocery Store', 'Hardware Store'],
};

const firstStop = errands.locations[0]; // will equal "Post Office"
```

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
- Functions can perform very complex work for us and provide us with a single value or multiple values afterword

---

class: center, middle

.large[
What's the basic syntax for a function in JS?
]

---

# Creating a Function

We can store our function using a **variable name** in order to re-use later too:

```js
function add(a, b) {
  return a + b;
}
```

The `a` and `b` in parentheses are called **parameters**. They allow us to pass different values into the function whenever we use it.

Parameters are not required to create a function.

---

# How to Use a Function

But simply writing a function doesn't do much.

We need to **call**, or **invoke** (we can use either of these terms) it for it to do any work for us:

```js
// This is called "declaring" the function:

function add(a, b) {
  return a + b;
}

// This is called "calling", or "invoking" the function:

add(2, 2);
```

---

# How to Use a Function

The output of function is called it's **return value**. Our previous example returned the integer `4`.

Let's store the return value in a variable now, and write it out to the console:

```js
function add(a, b) {
  return a + b;
}

const twoPlusTwo = add(2, 2);

console.log(twoPlusTwo);
```

---

# Another Example

Notice that we don't explicitly "return" anything from this function, we just write out the result:

```js
function fullName() {
  const yourName = prompt("What's your name?");
  console.log(yourName);
}

fullName();
```

Keep in mind that JS functions always return something, even when you don't tell them to. If you `console.log()` the output of this function, it would return `undefined`.

---

# Functions

This is an example of a JavaScript function in action

```js
function fullName() {
  const yourName = prompt("What's your name?");
  console.log(yourName);
}
```

The function is called later on in our code.

```js
// name will have the value that the user entered..
const name = fullName();
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

```js
const size = volume(3, 4, 5);

console.log(size);

function volume(width, height, depth) {
  return width * height * depth;
}
```

---

# Function Expressions

Function expressions usually don't have a name. Functions without names are known as an **anonymous functions**.

This function expression is stored in a variable called `volume`:

```js
const volume = function(width, height, depth) {
  return width * height * depth;
};

const size = volume(3, 4, 5);

console.log(size);
```

Unlike function declarations, this function **won't be available to use** until the interpreter reaches that point in the code.

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

```js
const fille = "Monique";

function france() {
  const garcon = "Henri";
}
```

---

# What Kind of Scope?

A more complex example:

```js
const fille = "Monique";

function france() {
  const garcon = "Henri";

  function paris() {
    const femme = "Marie";
  }
}
```

---

# Global vs. Local Scope

There are pros and cons to each type of variable scope:

- **Global variables** can be **reused** throughout your code, but they **use more memory** and you may run into **naming collisions** with other scripts. (Don't use global scope!)
- **Local variables** are more efficient because they **use less memory** and their **names are protected** within the function that they are defined, but they **can't be re-used** elsewhere in your code

---

# Methods (Functions as Object Properties)

For object methods, we write `getName: function() {...}` instead of `function getName() {...}`:

```js
const person = {
  firstName: 'Silent',
  lastName: 'Bob',
  height: 1.75,
  beard: true,
  getName: function() {
    return this.firstName + ' ' + this.lastName;
  },
};
```

---

# Using Object Methods

We use dot notation to access object methods:

```js
const person = {
  firstName: 'Silent',
  lastName: 'Bob',
  // ...
  getName: function() {
    return this.firstName + ' ' + this.lastName;
  },
};

const fullName = person.getName(); // will return "Silent Bob"
```

---

# What Is `this` ?

In JS, `this` is a special word and it always refers to one object (which object it refers to will depend on the context).

Inside of an object's method, it refers to the object itself:

```js
const person = {
  firstName: 'Silent',
  lastName: 'Bob',
  // ...
  getName: function() {
    // use "this" to get properties of the object inside of a method

    return this.firstName + ' ' + this.lastName;
  },
};
```

---

template: inverse

# Loops

---

# While Loops

While loops are helpful when you don't know how many times it needs to run:

```js
let i = 0;
let score = 0;

while (i < 5) {
  score = i;
  console.log('Your score : ' + score);
  i++;
}
```

_What do you think the final score will be after this loop runs?_

---

# For Loops

For loops allow you to set a specific number of times that the loop will run:

```js
let count = 0;

for (let i = 1; i < 5; i++) {
  count = i;
  console.log('Current count: ' + count);
}
```

You will likely find yourself using for loops most often with "arrays" (we'll get to those shortly...).

---

# Arrays and Loops

Let's take our shopping list array and print it out in a list:

```js
const shoppingList = ['coffee', 'peppers', 'apple juice'];

// Remember how we manually set the max. number of loops before?
// We can use the array "length" to get the number automatically:

const totalItems = shoppingList.length;

for (let i = 0; i < totalItems; i++) {
  console.log(shoppingList[i]);
}
```

---

# Objects and Loops

We use slightly different syntax to loop through properties in an object:

```js
const bob = {
  firstName: 'Bob',
  lastName: 'Smith',
  phoneNumber: '604-604-6040',
  email: 'bob@redacademy.com',
};

for (let prop in bob) {
  console.log(bob[prop]);
}
```

_Any guesses as to what the following loop will output?_

---

# Exercise 2

Using what you just learned about conditional statements and loops, write a program that uses `console.log()` to print all the numbers from 1 to 100, with two exceptions.

For numbers divisible by 3, print **Fizz** instead of the number, and for numbers divisible by 5 (and not 3), print **Buzz** instead.

When you have that working, modify your program to print **FizzBuzz**, for numbers that are divisible by both 3 and 5 (and still print **Fizz** or **Buzz** for numbers divisible by only one of those).

---

# Final Note on Style

JavaScript is a _flexible_ language, and the concept of _coding style_ is important. Coding with a conventional style will help other programmers understand your code.

In this course we'll be sticking as closely as possible to AirBnB's style guide, lets take a look now: **[AirBnB Style Guide](https://github.com/airbnb/javascript)**

---

# Exercise 3

In this exercise, you're going to build a JS object of your own to represent a **hotel**.

Properties of the hotel object should include the **name** of the hotel (The Quay), the **total number of rooms** (40), the current number of **rooms booked** (25), an array of the **types of rooms** (twin, double, suite), and function to **check the availability**.

One you've created your object, **create a loop** to log to the console all of the room types one-by-one. Then, **update the booked rooms** to 30, check the new availability, and output that using `console.log`

---

# What We've Learned

- What JavaScript is and what it's used for
- How we can create variables, conditionals, and loops in JS
- How to create function in JS
- How variable scope works with function in JS
- How to create objects that contain properties and methods
- How to create arrays and loop over them

---

template: inverse

# Questions?

{% endhighlight %}

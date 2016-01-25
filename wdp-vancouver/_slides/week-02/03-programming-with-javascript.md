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
4. Operators
5. Loops
6. Functions
7. Objects
8. Arrays

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

# The Console

Because JS is "client-side" you can see it in your browser:

.border[
   ![Scripts in page source](../../public/img/slide-assets/elements-screenshot.png)
]

---

### The Console

You can write it right in your browser too using the **console**:

.inline-images-border[
   ![Writing scripts in the console](../../public/img/slide-assets/console-screenshot.png)
]

You can also use the console to identify bugs in your JS code.

.inline-images-border[
   ![Error in the console](../../public/img/slide-assets/js-error-screenshot.png)
]

---

### The Node.js REPL

REPL is an acronym that stands for **"Read Evaluate Print Loop"**. Most programming languages have a REPL program that you can use to run code in that language, from the command line. Node.js provides a *JavaScript runtime environment* for your operating system.

To run a JavaScript program, `cd` to the directory where you've created your program, and run the command `node` followed by the name of the file you've created. For example, if your program is written in a file named `main.js` you can run the code in that file by typing `node main` from the command line.

---

### Debugging using `console.log()`

In JavaScript, we can use `console.log()` to print values into the *browser console* to help us understand what particuar values may be at specific points in your programs execution flow.

```js

function addNumbers(num1, num2) {
      // we can print the value of num1 and num2 
      // to the debugging console in your browser
      // whenever your program executes this function!
      console.log(num1, num2);
      console.log(num1 + num2);
      return num1 + num2;
}

```

.footnote.right[
   *Source: [How To Be A Programmer](https://github.com/braydie/HowToBeAProgrammer/blob/master/1-Beginner/Personal-Skills/04-How%20to%20Debug%20Using%20a%20Log.md)*
 ]

---

# Comments

We can add comments to our JS too:

```javascript

   // Add a single line comment with 2 forward slashes

   /*
      Add a multi-line comment like this...
      Commenting rules!
   */

```

Review: Comments are a powerful tool for helping you organize and understand your programs.
Comments are always hidden from execution in the script, and do not affect the output of the program.

---

# What Is Syntax?

- Syntax is the set of rules or "grammar" of a particular programming language
- It sets the rules that determine how your code should be structured so computers can understand it
- A text-based language's syntax will permit specific combinations of letter, numbers, and symbols

---

#What is Syntax?

When we talk about programming, we will use specific adjectives to describe the programs we are talking about.
Here are a few examples:

**Statement, Expression, Value, Declaration, Assignment, Conditional, Object, Function, Method**

---

### Statements

In a computer language, a group of words, numbers, and operators that performs a specific task is a **statement**. In JavaScript, a statement might look as follows: `a = b * 2;`

The characters `a` and `b` are called **variables**.

By contrast, the `2` is just a **value** itself, called a **literal value**, because it stands alone without being stored in a variable.

The `=` and `*` characters are **operators** -- they perform actions with the values and variables such as assignment and mathematic multiplication.


---

### Statements

Most statements in JavaScript conclude with a semicolon `;` at the end.

The statement `a = b * 2;` tells the computer, roughly, to get the current value stored in the variable `b`, multiply that value by `2`, then store the result back into another variable we call `a`.

Programs are just collections of many such statements, which together describe all the steps that it takes to perform your program's purpose.

---

# Expressions

Statements are made up of one or more **expressions**. An expression is any reference to a variable or value, or a set of **variable**(s) and **value**(s) combined with operators.


---

# Variables

In JS, we use the **var** keyword to define our variables, here is what a **variable declaration** looks like, in JavaScript!

```javascript

var color = 'red';
var amount = 100;
var list = ['first', 'second', 'third'];
var result = amount * 10;

```

---

# Uninitialized Variables

We can **declare** variables, without assinging a value. Unassigned variables automatically get the JavaScript value `undefined`.

```javascript

var a;
var b;
var c;

console.log(a); // logs undefined

```

---

# Variable Pro Tips

- Variables can hold *any* JavaScript value!
- Make sure your variable names are descriptive (i.e. not `var a = 'First'`)
- Use camelCase for defining JS variables
- You can only use the dollar sign and underscore special characters in variable names

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

alert(greeting);

```

---

# Exercise 1

Open a new browser tab and open the console, and type in each line one at a time:

```js

alert('Hello World!');
var yourName = prompt('What\'s your name?');
console.log(yourName);

```

If we wanted to store the value inputted into the `prompt` and print it out in an `alert` afterward, how might we do that?

And what would we do if wanted to output the value that was entered in the `prompt` with the string `Hello, ` in front of it in the subsequent `alert`?

---
template: inverse

# Values & Types


---
### Values & Types - Primitives

When working with operators, we'll have to ensure that the values we are using in our expressions are apropriate.
That means, numbers for math, strings for creating text and so on.

Primitive values:

`"I'm a String";`<br>
`'I'm another sring`;<br>
`42;`<br>
`true;`<br>
`false`;<br>

---

### Values &  Types - Type Coercion

In JavaScript, certain **operations** can change the value of primitives.
Getting used to how JavaScript handles primitives is an important part of using the language, and also the cause of many bugs and frustrations for beginners.


Try this:
```js

var a = "42";
var b = Number( a );

console.log( a );   // "42"
console.log( b );   // 42

```

---
template: inverse

# When is a number not a number?
(When it's a string)

---

# Coercion + Overloading

JavaScript is weird.

**More Type Coercion**
```js
"2" === 2 // false
"2" == 2 // true, wtf?
```

**Operator Overloading**
```js
"42" + 5; // "425" ok that maskes sense
```

Because of this unique behavior, it's a best practice to **always use `===` (triple equals)** when doing value comparisons in JavaScript.


---
template: inverse

# Truthy and Falsy values

---
### JavaScript Truth Table

The Following values are always `false`:

- `false`
- `undefined`
- `""` (an empty string)
- `null`
- `0`
- `NaN` (a special Number value meaning Not-a-Number!)


---
template: inverse

# Arithmetic & Comparison Operators

---

# Arithmetic Operators

Operators allow us to create a single value from multiple values. We can use `+`, `-`, `/`, and `*` to calculate values and store them in variables:

```javascript
var quantity = 3 + 2;
var total = (4 - 1) * 3;
var totalAndOne = total ++
var totalMinusOne = total --
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
  console.log("Your score : " + score);
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
  console.log("Your score : " + score);
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
  console.log("Current count: " + count);
}
```

You will likely find yourself using for loops most often with "arrays" (we'll get to those shortly...).

---

# Exercise 2

Using what you just learned about conditional statements and loops, write a program that uses `console.log()` to print all the numbers from 1 to 100, with two exceptions.

For numbers divisible by 3, print **Fizz** instead of the number, and for numbers divisible by 5 (and not 3), print **Buzz** instead.

When you have that working, modify your program to print **FizzBuzz**, for numbers that are divisible by both 3 and 5 (and still print **Fizz** or **Buzz** for numbers divisible by only one of those).

---

# What We've Learned

1. What JavaScript is and what it's used for
2. How we can create variables, conditionals, and loops in JS

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

Parameters are optional.

---

# How to Use a Function

But simply writing a function doesn't do much.

We need to **call**, or **invoke** (we can use either of these terms) it for it to do any work for us:

```javascript
// This is called "declaring" the function:

function add(a, b) {
   return a + b;
}

// This is called "calling", or "invoking" the function:

add(2, 2);
```

---

# How to Use a Function

The output of function is called it's **return value**. Our previous example returned the integer 4.

Let's store the return value in a variable now, and write it out to the console:

```javascript

function add(a, b) {
   return a + b;
}

var twoPlusTwo = add(2, 2);

console.log(twoPlusTwo);

```

---

# Another Example

Notice that we don't explicitly "return" anything from this function, we just write out the result:

```javascript
function fullName() {
   var yourName = prompt('What\'s your name?');
   console.log(yourName);
}

fullName();
```

Keep in mind that JS functions always return something, even when you don't tell them to. If you `console.log()` the output of this function, it would return `undefined`.

---

# Functions

This is an example of a JavaScript function in action

```javascript
function fullName() {
  var yourName = prompt('What\'s your name?')
  console.log(yourName);
}
```

The function is called later on in our code.

```javascript

// name will have the value that the user entered!
var name = fullName();

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

console.log(size);

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

console.log(size);
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

# What Kind of Scope?

Global variables can be reassigned within functions to have local-only values too:

```javascript
var faveColour = 'blue';

function sayColour() {
   alert(faveColour);
   faveColour = 'red'; // the "var" keyword is omitted!
   alert(faveColour);
}
sayColour();
```

If you use the `var` keyword inside the function, you will get an unexpected result. Try this out in CodePen...

---

# Why Does This Happen?

This quirky behaviour happens because of **hoisting**.

Hoisiting will result in the first `alert` returning "undefined":

```javascript
var faveColour = 'blue';

function sayColour() {
   console.log(faveColour); // faveColour is undefined here
   var faveColour = 'red'; // faveColour now equals 'red'
   console.log(faveColour);
}
sayColour();
```

Let's see why this happens...

---

# Why Does This Happen?

Whenever our JavaScript parser evaluates a script, it actually **makes two passes over it**.

First, it re-sorts your code and moves all of your declared variable names (aka your not-yet-filled buckets) to the top and waits for your code to fill them with something.

Only then does your browser make a second pass over your script to execute it.

---

# Why Does This Happen?

So in reality, the code your browser sees actually looks like this at the time it's executed:

```javascript
var faveColour; // bucket waiting to be filled
faveColour = 'blue'; // now it's filled with blue
var faveColour; // now it's redeclared and empty again

function sayColour() {
   console.log(faveColour); // our bucket was empty so it's undefined here
   faveColour = 'red'; // but now we filled the bucket with red
   console.log(faveColour); // so we alert 'red' now
}
sayColour();
```

---


# Global vs. Local Scope

There are pros and cons to each type of variable scope:

- **Global variables** can be **reused** throughout your code, but they **use more memory** and you may run into **naming collisions** with other scripts. (Don't use global scope!)
- **Local variables** are more efficient because they **use less memory** and their **names are protected** within the function that they are defined, but they **can't be re-used** elsewhere in your code

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

# What Is `this` ?

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

# Exercise 3

In this exercise, you're going to build a JS object of your own to represent a **hotel**.

Properties of the hotel object should include the **name** of the hotel (The Quay), the **total number of rooms** (40), the current number of **rooms booked** (25), an array of the **types of rooms** (twin, double, suite), and function to **check the availability**.

One you've created your object, **create a loop** to log to the console all of the room types one-by-one. Then, **update the booked rooms** to 30, check the new availability, and display that in an **alert box**.

---

#The importance of Style!

JavaScript is a *flexible* language, and  the concept of *coding style* is important. Coding with a conventional style will help other programmers understand your code.

In this course we'll be sticking as closely as possible to AirBnB's style guide, lets take a look now:
[AirBnB Style Guide](https://github.com/airbnb/javascript/tree/master/es5)

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

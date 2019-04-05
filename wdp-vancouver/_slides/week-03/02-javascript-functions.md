---
layout: slidedeck
title: JavaScript Functions Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# JavaScript Functions

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Beyond function basics
2. Scope
3. Arrow functions
4. Smarter parameters and arguments

---

template: inverse

# Beyond Function Basics

---

class: center, middle

### &ldquo;Functions are the bread and butter of JavaScript programming.&rdquo;

– Eloquent JavaScript

---

# Defining Functions

There are **6 ways** to define a function in JavaScript.

- [Function declaration](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function)
- [Function expression](https://developer.mozilla.org/en/docs/web/JavaScript/Reference/Operators/function)
- [Shorthand method definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Method_definitions)
- [Arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Function constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Generator function .red[\*]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

.footnote[.red[*] _You may ignore this one for now_]

???

**Ask:** Which have we seen/used so far?

Provide examples of each, or organize the students in small groups to quickly come up with examples.

---

# First-class Functions

JavaScript treats functions as **first-class objects** because it allows you to treat functions like any other variable.

_But what does this actually mean for us?_

1. We can assign **functions to variables**
2. We can pass a **function as an argument** to another function
3. We can **return a function** from another function

A function that takes another function as an input or returns a function (or does both) is called a **higher-order function.**

???

Note that not all programming languages treat funcitons as first-class objects. Also note that #2 and #3 make higher-order functions possible in JavaScript.

Poll the class on whether they think they have seen examples of these yet, then run through examples of each.

**Function assigned to a variable:**

```js
const add = function(a, b) {
  return a + b:
}
add();
```

**Function as an argument:**

```js
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
```

**Function returned from another function:**

```js
function sayHello(greeting) {
  return function(name) {
    return `${greeting}, ${name}`;
  };
}

const sayHelloWithGreeting = sayHello('Hi');
sayHelloWithGreeting('Bob');
```

---

class: center, middle

### Learn the Vocabulary:

.inline-images[
![Screenshot of a function definition](/public/img/slide-assets/function-diagram.png)
]

👆 This is a **function defintion.**

---

# Function Names

Functions names should describe what action the function takes. Good function names will _usually_ contain a **verb**.

**Key take-away:** When someone reads your function name, they should be able to tell what your function does.

```js
// Good function names:

showPopupMessage();
calculateTip(49.85, 15);
isValidEmail(email);
```

_Always use **camel case** when naming your functions._ 🐫 🐫 🐫

---

# Exercise 1

In pairs or small groups, rename these functions using the rules-of-thumb we just learned:

```js
function myFunction(age) {
  var dogYears = 7 * age;
  console.log('Your pup is ' + dogYears + ' dog-years old');
}

function makeItSo(radius) {
  var circumference = Math.PI * 2 * radius;
  console.log('The circumference is ' + circumference);
  var area = Math.PI * radius * radius;
  console.log('The area is ' + area);
}
```

You'll share your function names with the class afterward.

???

- Survey the function names the students cam up with
- Make sure they adhere to the rules described
- Suggest better function names where appropriate
- Remind them that naming things effectively is the hardest part of programming!

---

# return

Functions with a return statement are **functions as values**.

```js
function numberTen() {
  return 10;
}

console.log(numberTen()); // logs 10
```

The **value** of `numberTen()` (calling the function) is `10`. This is just a simple example to demonstrate how things work.

**Note:** Functions always return a value in JavaScript. If no return value is specified, the function will return `undefined`.

???

If this hasn't come up already, explain to students that this is why they see and `undefined` line in their console when they run `console.log()`.

---

# Exercise 2

Write the proper `return` statements for these functions. You may want to use JavaScript's built-in **[Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)** to help with the calculations.

```js
function exponent(number, exponent) {
  // ?
}

function average(numberList) {
  // ?
}

function roundUp(number) {
  // ?
}

console.log(roundUp(11.4)); // Should log: 12
console.log(average([1, 2, 3, 4, 5])); // Should log: 3
console.log(exponent(2, 10)); // / Should log: 1024
```

---

# Single Responsibility

A function should usually only do **one thing**.

This is called the **[single-responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)**, and it applies elsewhere in software too!

```js
// Can we split this function into multiple functions?
makeBreakfastLunchAndDinner();
```

Don't be afraid to split your code up into as many function as you need. Doing this will help you reason about your logic and help you spot bugs. 🐛 👀

---

# Exercise 3

This function is hard to read and can be improved using the single-responsibility principle. Refactor it's functionality to use more than one `function`.

```js
function convertTemp(temp, convertFrom, convertTo) {
  if (typeof temp !== 'number') {
    return new Error('Temp must be a number.');
  }
  if (convertFrom === 'C' && convertTo === 'F') {
    const fahrenheit = (temp * 9) / 5 + 32;
    console.log(temp + '°C is ' + fahrenheit + '°F');
  } else if (convertFrom === 'F' && convertTo === 'C') {
    const celsius = ((temp - 32) * 5) / 9;
    console.log(temp + '°F is ' + celsius + '°C');
  } else {
    return new Error("Can't convert these arguments.");
  }
}
```

???

**Note:** Point out the `Error` object to students and what it does.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

---

template: inverse

# Scope

---

# Global vs. Local

Inside the **function body** (local scope) you may read variables from **outside** (global scope), but not the other way around.

```js
// Global scope
const num1 = 10;

function add2Numbers(num1, num2) {
  // Local scope
  return num1 + num2;
}

// Global scope
console.log(add2Numbers(13, 13));
console.log(num2);
```

_What is the return value of this function? What will be logged to the console from the last two lines?_

---

# Global vs. Local

There are pros and cons to each type of variable scope:

- **Global variables** can be **reused** throughout your code, but they **use more memory** and you may run into **naming collisions** with other scripts. (Don't use global scope!)
- **Local variables** are more efficient because they **use less memory** and their **names are protected** within the function that they are defined, but they **can't be re-used** elsewhere in your code

---

# Nested Functions

Scope rules apply to nested functions too. Function scope creates a **context where you can safely declare local variables** that can't be overwritten from outside.

```js
// Global Scope
let unsafeVar = 5;

function someFunction() {
  // Local Scope #1
  function someOtherFunction() {
    let safeVar = 10;
    // Local Scope #2
  }
  unsafeVar = 15;
  safeVar = 0;
}

console.log(safeVar, unsafeVar); // What is logged to the console?
```

---

# Exercise 4

Can you fix the scoping issues in this code without modifying the first line or the last line? (i.e. You may only modify the code in the function body.)

```js
const timeOff = ['Mon', 'Tues', 'Weds'];

function bookVacation(days) {
  timeOff = {
    days: days,
  };
  return timeOff;
}

const vacation = bookVacation(['Fri', 'Sat', 'Sun']);
console.log(vacation); // error!
```

---

# Exercise 5

We learned that functions can return functions. Refactor this code to produce the right `console.log()` output:

```js
function loanAmount(amount, interest) {
  return function(numberOfMonths) {
    return (amount * (interest / 100)) / numberOfMonths;
  };
}

// Refactor the code below. You may add new variables... etc.
const loanPayment = undefined;
console.log(loanPayment);
```

---

# Scope & Hoisting

Run this code, what happens, why? 🤔

```js
const giraffe = 'outer';
function safari() {
  console.log('Went to visit', giraffe);
  const giraffe = 'inner';
}
safari();
```

Now, run this code, what happens, why? 🤯

```js
var zebra = 'outside';
function safari() {
  console.log('Went to visit', zebra);
  var zebra = 'inside';
}
safari();
```

.footnote[.red[***Avoid using `var`**]. Stick to `let` and `const`, _they do not get "hoisted"_.]

???

You may ask: What is on "global scope", what is in "local scope"?

Students may be surprised by what gets logged by the `var` example.

Here you'll need to take time to explain var hoisting, but don't spend too much time, as we aren't going to see `var` in the course ever again.

Hoisting results in the computer running the code like this:

```js
var zebra = 'outside';
function safari() {
  var zebra;
  console.log('Went to visit', zebra);
  zebra = 'inside';
}
safari();
```

---

# Side-Effects

**How to be a programmer:** When a function modifies information outside of it's scope, this is called a "side-effect".

As a general rule, try to write code using functions that **do not have side effects.**

This will not always be possible, but taking this approach will help reduce bugs.

In general this means, avoiding storing information (variables) in the **global scope** of your program.

---

template: inverse

# Arrow Functions

---

# Problem: this

Anonymous functions passed as callbacks to other functions **create their own scope**.

_What this means..._

```js
function counterES5() {
  // the value of "this" out here
  this.seconds = 0;

  window.setInterval(function() {
    // will be different from "this" in here
    this.seconds++;
    console.log(this.seconds); // WILL NOT WORK!
  }, 1000);
}

const counterA = new counterES5();
window.setTimeout(counterA, 1000);
```

---

# ES5 Solution

**Option 1:**

Store the outer function's `this` value in a variable:

```js
function counterES5() {
  this.seconds = 0;
  const that = this;

  window.setInterval(function() {
    that.seconds++;
    console.log(that.seconds);
  }, 1000);
}
```

---

# ES5 Solution

**Option 2:**

Use the `bind` method and pass `this` as an argument:

```js
function counterES5() {
  this.seconds = 0;

  window.setInterval(
    function() {
      this.seconds++;
      console.log(this.seconds);
    }.bind(this),
    1000,
  );
}
```

---

# ES2015 Solution

Use an **arrow function** to bind the scope of the function where it is defined, rather than where it is called.

This is also know as **lexical binding**.

```js
function counterES2015() {
  this.seconds = 0;

  window.setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
```

---

# More Arrow Functions

**ES5 `function`:**

```js
function sayHi() {
  console.log('hi');
}
function addOne(x) {
  return x + 1;
}
function multiply(a, b) {
  return a * b;
}
var multiply = function(a, b) {
  return a * b;
};
```

---

# More Arrow Functions

**ES2015 `=>`:**

```js
const sayHi = () => console.log('hi');
const addOne = x => x + 1;
const multiply = (a, b) => {
  return a * b;
};
const multiply = (a, b) => a * b;
```

---

# Warning

Arrow functions are **anonymous** (unnamed).

Anonymous functions are harder to trace when you have an error.

```js
function hasError() {
  return x;
}
// Error at function hasError. x is not defined.
```

```js
() => x;
// x is not defined.
```

---

# Exercise 6

Fix the following code with an arrow function so that the message logs to the console every second:

```js
const message = {
  text: 'Hello',
  display: function() {
    setInterval(function() {
      console.log(this.text);
    }, 1000);
  },
};
message.display();
```

???

Be sure to highlight that there's a time and place for arrow functions.

For example, this will not work:

```js
const button = document.getElementById('press');

button.addEventListener('click', () => {
  this.classList.toggle('on');
});
```

Show this code, and ask why it won't work.

---

template: inverse

# Smarter Parameters and Arguments

???

**Review:** What's the difference between an argument and a parameter?

---

# Default Parameters

Parameters are variables you define to be used inside your function's body:

```js
const cubeVolume = function(side) {
  const volume = side * side * side;
  return volume;
};
```

_With ES5, there's no way to set up default parameter values for a function, which makes our code more error-prone..._

---

# Default Parameters

If you call a function without providing a value for a parameter, it will be bound to the **value** `undefined`.

Previously, we would work around this issue by testing parameter values in the body of the function and then assign a value if they were `undefined`:

```js
const cubeVolume = function(side) {
  if (typeof side === undefined) {
    return new Error('Cube needs a side.');
  }
  const volume = side * side * side;
  return volume;
};
```

???

Prompt the students: What is the parameter here?

_Wouldn't it be nice if there was a way to set a default value in case no argument is passed?_

---

# Default Parameters

With ES2015, default function parameters allow us to initialize parameters with default values if no value or `undefined` is passed.

If the function you designed may not always receive an **argument** value, You can provide a default value to bind to the **parameter**:

```js
const cubeVolume = function(side = 0) {
  // No need to throw an error!
  const volume = side * side * side;
  return volume;
};
```

---

# Rest Parameters

The rest parameter syntax allows us to represent an **indefinite number of arguments** as an array:

```js
function sum(...numbers) {
  let result = 0;
  numbers.forEach(function(number) {
    result += number;
  });

  return result;
}
console.log(sum(1)); // 1
console.log(sum(1, 2, 3, 4, 5)); // 15
```

**Note:** No other named parameters can follow the rest parameter in the function declaration.

---

# Spread Operators

Spread operators allow us to pass array arguments separately into a function:

```js
function sum(a, b, c) {
  return a + b + c;
}

const args = [1, 2, 3];
const moreArgs = [4, 5];

console.log(sum(...args)); // 6
console.log(sum(...moreArgs, 6)); // 15
```

---

# What We've Learned

- How JavaScript treats functions as first-class objects
- How to work with global and local scope in functions
- When and how to use arrow functions
- How to assign default parameters to functions
- How to use rest parameters and spread operators with functions

---

template: inverse

# Questions?

{% endhighlight %}

```

```

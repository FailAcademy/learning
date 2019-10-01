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

1. What is a function?
2. Beyond function basics
3. Scope
4. Arrow functions
5. Smarter parameters and arguments

---

template: inverse

# Function Basics

---

# What is a Function?

Functions are specific chunks code that you can use to **repeat a set of instructions**.

In other words, if you want your code to do something, you'll need to execute a function!

In JavaScript **functions** are actually a type of object, meaning we can use them as values and assign them to variables.

---

# What Are They For?

- Functions help us better organize our code
- Functions allow us to group together statements
- Functions allow us to only run certain steps in code when they are needed
- Functions can be thought of as a black box; they take some input, perform complex work, and provide us with a value afterwards

---

# Creating a Function

We can store our function using a **name** (e.g. `add` in this example):

```js
function add(a, b) {
  return a + b;
}
```

The `a` and `b` in parentheses are called **parameters**. They allow us to pass different **arguments** into the function whenever we use it.

Parameters are not required to create a function (but we always need the parentheses even if they are empty).

---

# How to Use a Function

Simply writing a function doesn't do much, to use it we need to **call** or **invoke** it (we can use either of these terms):

```js
// This is called "declaring" the function:

function add(a, b) {
  return a + b;
}

// This is called "calling" or "invoking" the function:

const result = add(2, 2);
```

The output of function is called its **return value**. Here we store the return value in a variable. 

_What will the value of `result` be?_

---

# Function Options

There are many ways to create functions in JavaScript:

```js
function myFunction() {
  // Function declaration
} // No semicolon!

const myFunction = function() {
  // Function expression
};

const myFunction = function namedFunction() {
  // Named function expression
};

const myFunction = () => {
  // Arrow function expression
};

(function() {
  // "IIFE" aka "Immediately invoked function expression"
})();
```

???

Briefly speak to the purpose and usefulness of each type of function, taking care to not get bogged down in the details of lexical binding of `this` with arrow functions yet... (more to come in the Functions lesson)

---

# Use Arguments

Here we pass the `waterTemp` variable into the function as an **argument**:

```js
function checkWaterTemp(waterTemp) {
  if (waterTemp <= 0) {
    console.log("Water is frozen");
  } else if (waterTemp > 0 && waterTemp < 100) {
    console.log("Water is liquid");
  } else {
    console.log("Water is boiling");
  }
}

// "Call" or "Invoke" the function 
checkWaterTemp(-5);
checkWaterTemp(15);
checkWaterTemp(120);
```

???

Be sure to highlight the usefulness of using an argument here instead.

---

# Function Return

**Return values** allow us to pass data back from our functions:

```js
function checkWaterTemp(waterTemp) {
  if (waterTemp <= 0) {
    return "Water is frozen";
  } else if (waterTemp > 0 && waterTemp < 100) {
    return "Water is liquid";
  } else {
    return "Water is boiling";
  }
}

// Invoke the function and bind the return value to a variable.
const result = checkWaterTemp(60);
console.log(result);
```

**Note:** Functions always return a value in JavaScript. If no return value is specified, the function will return `undefined`.

???

If this hasn't come up already, explain to students that this is why they see and `undefined` line in their console when they run `console.log()`.


---

class: center, middle

### Learn the Vocabulary:

.inline-images[
![Screenshot of a function definition](/public/img/slide-assets/function-diagram.png)
]

👆 This is a **function defintion.**

---

# Sidebar: Ternary

If your `if` statement is simple and short, you may want to use the **ternary operator**.

Statements using the ternary operator use `?` and `:` to denote the branching condition, like so:

`[expression] ? [if true] : [if false]`

Example:

```js
let age = 22;
const isAdult = age >= 18 ? true : false;
// What will be the value of isAdult?
```

---

# Ternary + Implicit Return

Arrow function expressions `() => ()` are special. They can return a value _implicitly_, without the need for the `return` keyword:

```js
const checkAge = (age, minAge) => (age >= minAge ? "true" : "false");

let isAdult = checkAge(16, 18); // What is the value of isAdult?
isAdult = checkAge(50, 18); // How about now?
```

This syntax helps us realize the power of **functions as values** by giving us the ability to express value-functions with simple, readable syntax.

???

Show students how to write the (almost) equivalent code for this example using a regular function and explicit return.

Highlight the compactness!

---

template: inverse

# Beyond Function Basics

---

class: center, middle

### &ldquo;Functions are the bread and butter of JavaScript programming.&rdquo;

– Eloquent JavaScript

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
  let dogYears = 7 * age;
  console.log('Your pup is ' + dogYears + ' dog-years old');
}

function makeItSo(radius) {
  let circumference = Math.PI * 2 * radius;
  console.log('The circumference is ' + circumference);
  let area = Math.PI * radius * radius;
  console.log('The area is ' + area);
}
```

You'll share your function names with the class afterward.

???

- Survey the function names the students came up with
- Make sure they adhere to the rules described
- Suggest better function names where appropriate
- Remind them that naming things effectively is one of the hardest parts of programming!

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

???

```js
function exponent(number, exponent) {
  return Math.pow(number, exponent); 
}

function average(numberList) {
  let total = 0;

  for(let i = 0; i < numberList.length; i++) {
    total += numberList[i];
  }

  return total / numberList.length;
}

function roundUp(number) {
  return Math.ceil(number);
}
```

---

# Single Responsibility

A function should usually only do **one thing**.

This is called the **[single-responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)**, and it applies elsewhere in software too!

```js
// Can we split this function into multiple functions?
createCarouselandEnableMobileMenu();
```

Don't be afraid to split your code up into as many functions as you need. Doing this will help you reason about your logic and help you spot bugs. 🐛 👀

---

# Exercise 3

This function is hard to read and can be improved using the single-responsibility principle. Refactor its functionality to use more than one `function`.

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

# Function Scope

**Arguments** are _local to the inside of the function_. Their value is not available outside. This is called **function scope**.

```js
function checkWaterTemp(waterTemp) {
  if (waterTemp <= 0) {
    console.log("Water is frozen");
  } else if (waterTemp > 0 && waterTemp < 100) {
    console.log("Water is liquid");
  } else {
    console.log("Water is boiling");
  }
}

// waterTemp is out of scope, this will produce an error
console.log(waterTemp);

// "Call" or "Invoke" the function 
checkWaterTemp(20);
```

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
console.log(num1);
console.log(num2);
```

_What is the return value of this function? What will be logged to the console from the last three lines?_

---

# Global vs. Local

There are pros and cons to each type of variable scope:

- **Global variables** can be **reused** throughout your code, but they **use more memory** and you may run into **naming collisions** with other scripts
- **Local variables** are more efficient because they **use less memory** and their **names are protected** within the function that they are defined, but they **can't be re-used** elsewhere in your code

Generally we try to avoid using global variables.

---

# Nested Functions

Scope rules apply to nested functions too:
```js
// Global Scope
let globalVar = 5;

function someFunction() {
  let outerVar = 10;

  function someOtherFunction() {
    let innerVar = 15;
    
    // Can access globalVar, outerVar and innerVar here
    console.log(globalVar + outerVar + innerVar); 
  }

  // Can't access innerVar here
  console.log(globalVar + outerVar + innerVar); 
}

// Can only access globalVar here
console.log(globalVar + outerVar + innerVar); 
```

---

# Exercise 4

Can you fix the scoping issues in this code by only modifying the code in the function body?

```js
const prices = [16.99, 42.99, 89.99];

function discountPrices(pricesToDiscount) {
  
  // Error: Assignment to constant variable.
  prices = [];

  pricesToDiscount.forEach(function(price, index) {
    prices[index] = price * 0.9;
  });
  return prices;
}

const discountedPrices = discountPrices(prices);
console.log(discountedPrices); 
```

---

# Exercise 5

We learned that functions can return functions. Refactor this code to produce the right `console.log()` output:

```js
function loanPayment(amount, interest) {
  return function(numberOfMonths) {
    return (amount * (1 + (interest / 100))) / numberOfMonths;
  };
}

// Refactor the code below so that it logs the monthly payment 
// for a loan of $1000 at 15% interest over 10 months (i.e. 115)
const loanAmount = loanPayment(1000, 15);
console.log(loanAmount);
```

---

# Scope & Hoisting

Run this code, what happens, why? 🤔

```js
const name = 'Jack';
function sayHello() {
  console.log('Hello', name);
  const name = 'Jill';
}
sayHello();
```

Now, run this code, what happens, why? 🤯

```js
var name = 'Jack';
function sayHello() {
  console.log('Hello', name);
  var name = 'Jill';
}
sayHello();
```

.footnote[.red[***Avoid using `var`**]. Stick to `let` and `const`, _they do not get "hoisted"_.]

???

You may ask: What is in "global scope", what is in "local scope"?

Students may be surprised by what gets logged by the `var` example. You can also remove the `var name = 'Jill'` line (and move it above console.log) to demonstrate how var works. 

Here you'll need to take time to explain var hoisting, but don't spend too much time, as we aren't going to see `var` in the course ever again.

Hoisting results in the computer running the code like this:

```js
var name = 'Jack';
function sayHello() {
  var name;
  console.log('Hello', name);
  name = 'Jill';
}
sayHello();
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
function counterA() {
  // the value of "this" out here
  this.seconds = 0;

  window.setInterval(function() {
    // will be different from "this" in here
    this.seconds++;
    console.log(this.seconds); // WILL NOT WORK!
  }, 1000);
}

const counter = new counterA();
```

---

# ES5 Solution

**Option 1:**

Store the outer function's `this` value in a variable:

```js
function counterB() {
  this.seconds = 0;
  const that = this;

  window.setInterval(function() {
    that.seconds++;
    console.log(that.seconds);
  }, 1000);
}

const counter = new counterB();
```

---

# ES5 Solution

**Option 2:**

Use the `bind` method and pass `this` as an argument:

```js
function counterC() {
  this.seconds = 0;

  window.setInterval(
    function() {
      this.seconds++;
      console.log(this.seconds);
    }.bind(this),
    1000,
  );
}

const counter = new counterC();
```

---

# ES2015 Solution

**Option 3:**

Use an **arrow function** to bind the scope of the function where it is defined, rather than where it is called.

This is also know as **lexical binding**.

```js
function counterD() {
  this.seconds = 0;

  window.setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

const counter = new counterD();
```

---

# More Arrow Functions

```js
// ES5

function sayHi() {
  console.log('hi');
}

function addOne(x) {
  return x + 1;
}

function multiply(a, b) {
  return a * b;
}
```

```js
// ES2015

const sayHi = () => console.log('hi');

const addOne = x => x + 1;

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
const cubeVolume = function(length) {
  const volume = length * length * length;
  return volume;
};
```

_With ES5, there's no way to set up default parameter values for a function, which makes our code more error-prone..._

---

# Default Parameters

If you call a function without providing a value for a parameter, it will be bound to the **value** `undefined`.

Previously, we would work around this issue by testing parameter values in the body of the function and then assign a value if they were `undefined`:

```js
const cubeVolume = function(length) {
  if (typeof side === undefined) {
    return new Error('Cube needs a length.');
  }
  const volume = length * length * length;
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
const cubeVolume = function(length = 1) {
  // No need to throw an error!
  const volume = length * length * length;
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

# Exercise 7 

Amend the average function we wrote earlier to accept any number of arguments, using a rest parameter, rather than an array. 

```js
function average(...numbers) {
  // Average the arguments passed in
}

average(5, 6, 7, 8, 9); // 7
average(1, 2, 12); // 5
```

???

```js
function average(...numbers) {

  let total = 0;

  for(let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total / numbers.length;
}
```

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

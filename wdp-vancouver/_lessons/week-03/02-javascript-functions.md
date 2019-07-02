---
layout: lesson
title: JavaScript Functions
slides: ['_slides/week-03/02-javascript-functions.md']
lesson_date: 2019-07-16
---

## Pre-Work

Read [this chapter on Functions](https://eloquentjavascript.net/03_functions.html) from Eloquent JavaScript.

There three exercises at the end of this chapter—see if you can complete at least one of them before class begins.

---

## Learning Objectives

- Write a variety of JavaScript functions, such as function declarations, function expressions, and arrow functions.
- Use functions scope to protect global variables.
- Refactor larger functions using the single-responsibility principle.
- Describe the difference between an argument and a parameter.
- Use default parameters, rest parameters, and spread operators to pass arguments to functions more effectively.
- Use a closure to protect global variables.

---

## Keywords

- [`function`](https://developer.mozilla.org/en-US/docs/Glossary/Function)
- [Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [Function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
- [`Function` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Method_definitions)
- [Generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [Argument](https://developer.mozilla.org/en-US/docs/Glossary/Argument)
- [Parameter](https://developer.mozilla.org/en-US/docs/Glossary/Parameter)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

## Exercise 1

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

---

## Exercise 2

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

## Exercise 3

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

---

## Exercise 4

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

## Exercise 5

Functions can return functions. Refactor this code to produce the right `console.log` output.

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

## Exercise 6

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

---

## Lab Activity

Avoiding "global" information is an important principle to use when writing JavaScript programs. Variables in the global scope are available to **ALL** of the functions in your program, thanks to JavaScript's scoping rules.

One way to avoid global variables is to understand JavaScript **closures**. In the following example a **closure** is used to protect the
variable `total` from the global scope.

The `total` variable is storing the total number of inches we have grown, and updating every time we make add a new calculation.

Finish the code provided so it produces the output described in the code comments. Read **[this post on closures on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)** to help you solve this challenge:

```js
const lifeInches = function() {
  // Local scope / closure
  let total = 0;
  // Add a variable to track the starting age.
  return function(inches, endAge, startAge) {
    // only update the starting age if it's undefined.
    if (inches && endAge) {
      total = total + inches;
      return (
        "You've grown " + total + ' inches in ' + (endAge - firstAge) + ' years'
      );
    }
  };
};

const updateTotalInches = lifeInches();

const calcInches = function(startAge, endAge, inchesGrown) {
  // Finish this function using only the other functions provided.
  // You may need to add extra variables and parameters.
  // The final console.log statement should print the correct values,
  // representing the total number of inches grown!
};

let growth = calcInches(5, 10, 25);

growth = calcInches(10, 30, 100);
growth = calcInches(30, 90, 10);

console.log(growth);
```

When you complete this part of the lab, revisit the exercises you have not yet completed from the [Functions chapter](https://eloquentjavascript.net/03_functions.html) in Eloquent JavaScript. You should be in a good position to finish those now.

---

## Additional Resources

More helpful resources from MDN on functions:

- [JavaScript Globals - Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Default Parameters on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [JavaScript Closures on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Understand JavaScript Closures](https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4)
- [Single-Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)

Great videos from Laracast's [ES2015 Crash Course](https://laracasts.com/series/es6-cliffsnotes) on new function features:

- [04: Arrows](https://laracasts.com/series/es6-cliffsnotes/episodes/4)
- [05: Default Parameters](https://laracasts.com/series/es6-cliffsnotes/episodes/5)
- [06: Rest and Spread](https://laracasts.com/series/es6-cliffsnotes/episodes/6)

More on using functions in JavaScript:

- [JavaScript Functions — Understanding The Basics](https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99)
- [Discover the power of first class functions](https://medium.freecodecamp.org/discover-the-power-of-first-class-functions-fd0d7b599b69)
- [When (and why) you should use ES6 arrow functions — and when you shouldn’t](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26)

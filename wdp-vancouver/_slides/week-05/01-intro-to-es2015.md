---
layout: slidedeck
title: Intro to ES2015 Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to ES2015

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. ES5 vs. ES2015 (plus dev environment set-up)
2. `let` and `const`
3. Arrow functions
4. ES2015 shorthand
5. `for...of` loops

---

# JavaScript Changes

Ecma International is the standards organization in charge of publishing each new specification of JavaScript:

| Year | Release    |
| ---- |------------|
| 1997 | ES         |
| 1998 | ES2        |
| 1999 | ES3        |
| ?    | ES4        |
| 2009 | ES5        |
| 2015 | ES6/ES2015 |

---

# ES2015 Compatibility

How well does ES5 work in browsers today?

- [ECMAScript 5 compatibility table](http://kangax.github.io/compat-table/es5/)

How about ES6?

- [ECMAScript 6 compatibility table](http://kangax.github.io/compat-table/es6/)

---

# Using ES2015 Today

**How do we use ES2015 today?**

Answer: **Transpiling**

Try to change your ES2015 code to ES5 using the [Babel online REPL](https://babeljs.io/repl/).

*We'll also need to transpile our code when we use TypeScript with Angular later in the course.*

---
template: inverse

# Dev Environment Setup

---

# Gulp Babel

We'll need to use a Gulp plugin to transpile our ES2015 code to ES5 during our build process. We can use [**Gulp-Babel**](https://www.npmjs.com/package/gulp-babel) for that:

```js
const gulp = require('gulp');
const babel = require('gulp-babel');

const input = 'src/index.js';
const output = 'dist';

gulp.task('babel', () => {
	return gulp.src(input)
		.pipe(babel())
		.pipe(gulp.dest(output));
});
```

*Note the `=>` and `const` syntax...more on that to come!*

**[See a complete example.](https://github.com/redacademy/red-gulp-babel)**

---

# Gulp Babel

You'll need to install `gulp-babel` as a development dependency too. To do that, run:

`npm install -D gulp-babel babel-preset-es2015`

What is the `babel-preset-es2015` package for?

---

# Babel Presets

[Presets](https://babeljs.io/docs/plugins/preset-es2015/) are sharable `.babelrc` configs or simply an array of babel plugins.

To use a preset, you'll need to create a `.babelrc` file include the following code in it

```json
{
  "presets": ["es2015"]
}
```
---
template: inverse

# let & const

---

# Variables

There are now three ways to declare variables in JavaScript:

- `var`
- `let`
- `const`

These new solutions solve some common problems with variable declarations.

---

# Problem 1: Hoisting

The variable `i` is hoisted to the top of the function and shared across each iteration of the loop.

```html
<div id="1">1</div>
<div id="2">2</div>
<div id="3">3</div>
<div id="4">4</div>
<div id="5">5</div>
```

```js
for (var i = 1; i < 6; i++) {
	$("#" + i).click(function() {
		alert(i);
	});
}
```

**[Open this example in Codepen](http://codepen.io/redacademy/pen/pyZpqV)** to see this gotcha in action.

---

# Solution: let

The `let` keyword allows you to create a **block-scoped declaration**, meaning that the scope of the variable is limited to the block, statement, or expression on which it is used.

Conversely, `var` defines a variable globally, or locally to an entire function regardless of block scope.

---

# Exercise 1

[Refactor the previous Codepen example](http://codepen.io/redacademy/pen/pyZpqV) with `let` to fix the issue previously cause by `var`.

---

# Problem 2: Avoiding Redeclaration

Variables defined with `var` can lead to "name conflicts", where a coder overwrites a variable name, often unknowingly.

```js
var teachers = [
  'Mandi',
  'Ben',
  'Shawn',
  'Mack',
];

var teachers = ['Alice', 'Bob', 'Jane'];
// teachers variable is redeclared
```

Both `let` and `const` prevent redeclaring with the same variable name.

---

# Problem 3: Avoiding Change

`let` still allows reassigning of the value.

```js
let teachers = [
  'Mandi',
  'Ben',
  'Shawn',
  'Mack',
];

teachers = ['Alice', 'Bob', 'Jane'];
// note: not redeclared, only changing the value
```

However, some values could benefit from being marked as unchanging.

---

# Solution: const

`const` acts like `let`, but with the addition that its values cannot be reassigned.

```js
const teachers = [
  'Mandi',
  'Ben',
  'Shawn',
  'Mack',
];

teachers = ['Kyle', 'Kurtis', 'Rony'];
// TypeError: Assignment to constant variable.
```

---

# Using const

*What happens when you try running the following code?*

**1. Reassigning a primitive value**

```js
const value = 1;
value = 2;

const numbers = [1, 2, 3];
numbers = [4, 5, 6];
```

**2. Updating an object or array**

```js
const array = [1, 2, 3];
array.push(4);

const object = {a: 1, b: 2};``
object['c'] = 3;
```

---

# let vs. const

When might you use `const` over `let`?

Fix [this Codepen](http://codepen.io/redacademy/pen/jqpYoz) and justify your changes.

---

template: inverse

# Arrow Functions

---

# Problem: this

Anonymous functions passed as callbacks to other functions **create their own scope**.

*What this means...*

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

var counterA = new counterES5();
window.setTimeout( counterA, 1000 );
```

---

# ES5 Solution

**Option 1:**

Store the outer function's `this` value in a variable:

```js
function counterES5() {
	this.seconds = 0;
	var that = this;

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

	window.setInterval(function() {
		this.seconds++;
		console.log(this.seconds);
	}.bind(this), 1000);
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
function sayHi() { console.log('hi'); }
function addOne(x) { return x + 1; }
function multiply(a, b) { return a * b; }
var multiply = function(a, b) { return a * b; }
```

**ES2015 `=>`:**

```js
const sayHi = () => console.log('hi');
const addOne = x => x + 1;
const multiply = (a, b) => { return a * b; }
const multiply = (a, b) => a * b
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

# Exercise 2

Use arrow functions to fix [this CodePen](http://codepen.io/redacademy/pen/mPjXVW).

---
template: inverse

# ES2015 Shorthand

---

# Template Literals

Template literals (or template strings) are string literals that allow **string interpolation**.

**ES5:**

```js
var name = 'Bob';
var city = 'Vancouver';
var description = name + ' lives in ' + city;
```

**ES2015:**

```js
let description = `${name} lives in ${city}`;
```

Note that the template literal is surrounded by **back-ticks** (not single quotes).

---

# Multiline Strings

Template literals also preserve white space:

**ES5:**

```js
var funkyArrows = '\n-->\n    -->\n        ->\n';
```

**ES2015:**

```js
let funkyArrows = `
->
	->
		->
`;
```

---

# Exercise 3

Use a template literal to refactor the following code.

```js
function fullName(first, last, birthYear) {
  return first + ' ' + last + ',\nage: ' + 2016 - birthYear + '.';
}

fullName('Emma', 'Morano', 1900);
```


---

# Enhanced Object Literals

**ES5:**

With ES5, if we want to define object properties with names that match their corresponding values, we end up writing code that's not very succinct:

```js
function makePerson(name, city) {
	return {
		name: name,
		city: city
	};
}

makePerson( 'Shawn', 'Vancouver' );
```

---

# Enhanced Object Literals

The new property value shorthand allows us to abbreviate the initialization of a property within an object literal, provided that the property key matches an existing variable name.

**ES2015:**

```js
function makePerson(name, city) {
	return {
		name,
		city
	};
}

makePerson( 'Shawn', 'Vancouver' );
```

---

# Default Parameters

With ES5, there's no way to set up default parameter values for a function, which makes our code more error-prone:

```js
function multiply(a, b) {
	return a * b;
}

multiply(1);
```

*Try this out in Codepen...*

---

# Default Parameters

Previously, we would work around this issue by testing parameter values in the body of the function and then assign a value if they were `undefined`.

**ES5 Solution:**

```js
function multiply(a, b) {
	if (typeof b === 'undefined') {
		b = 1;
	}

	return a * b;
}
multiply(1);
```

---

# Default Parameters

With ES20165, default function parameters allow us to initialize parameters with default values if no value or `undefined` is passed.

**ES2015:**

```js
function multiply(a, b = 1) {
	return a * b;
}
```

*Less typing FTW!*

---

# Destructuring Objects

Assigning object properties to individual variables is a bit tedious with ES5:

**ES5:**

```js
var point = {
  x: 1,
  y: 2
};

var x = point.x;
var y = point.y;

console.log(a); // 1
console.log(b); // 2
```

---

# Destructuring Objects

Destructuring allows us to assign properties from objects to individual variables with the same name:

**ES2015:**

```js
let point = {
  x: 1,
  y: 2
};

let { x, y } = point;

console.log(a); // 1
console.log(b); // 2
```

---

# Destructuring Objects

Another example using destructuring on an object:

**ES5:**

```js
var person = {
	name: 'Shawn',
	city: 'Vancouver',
};

function getName(person) {
	return person.name;
}
```

**ES2015:**

```js
function getName({name}) {
	return name;
}
```

---

# Destructuring Arrays

We can also use destructuring on items in an array:

**ES5:**

```js
var winners = ['Bob', 'Alice', 'Jane'];
var first = winners[0];
var second = winners[1];
var third = winners[2];
```

**ES2015:**

```js
let [first, second, third] = winners;
```

---

# Rest Parameters

The rest parameter syntax allows us to represent an **indefinite number of arguments** as an array:

```js
function sum(...numbers) {
	var result = 0;
	numbers.forEach(function (number) {
		result += number;
	});

	return result;
}
console.log( sum(1) ); // 1
console.log( sum(1, 2, 3, 4, 5) ); // 15
```

**Note:** No other named parameters can follow the spread parameter in the function declaration.

---

# Spread Operators

Spread operators allow us to pass array arguments separately into a function:

```js
function sum(a, b, c) {
  return a + b + c;
}

var args = [1, 2, 3];
var moreArgs = [4, 5];

console.log( sum(...args) ); // 6
console.log( sum(...moreArgs, 6) ); // 15
```

---
template: inverse

# for...of Loops

---
class: center, middle

.large[
	What kinds of loops have we used in JS so far?
]

---

# for...of Loops

The `for...of` is a better way to loop over arrays and other iterable objects:

```js
function groceryList(...items) {
  for ( let i of items) {
    console.log(i);
  }
}

groceryList('apples', 'oranges');
```

---

# Exercise 4

Create a simple function called `cashRegister` that uses `for...of` loop to calculate the total cost of any number of items a person wishes to purchase.

Because the number of purchased items may vary, you'll want to set up your function to accept as many (or as few) grocery items as need to be passed in.

The function also needs to accept an argument for the tax rate (with it's default set to 5%).

The tax amount will needed to be added to the subtotal of the summed item prices, with the total cost logged to the console.

---

# What We've Learned

- Syntactical differences between ES5 and ES2015
- How and where to replace `var` with `let` or `const`
- How to use arrow functions
- How to write more efficient JS with template literals, enhanced object literals, rest parameters, spread operators, and default parameters

---
template: inverse

# Questions?

{% endhighlight %}

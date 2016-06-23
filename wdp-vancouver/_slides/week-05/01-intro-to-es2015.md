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

But what's that `babel-preset-es2015` package for?

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

# Let & Const

---

# Problem: Hoisting

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

Refactor the previous [Codepen](http://codepen.io/redacademy/pen/pyZpqV) example with `let` to fix the issue previously cause by `var`.

---

# Problem: Avoiding Change

Sometimes we want to create **read-only** variables, but variables defined with `var` or `let` can be reassigned:

```js
var teachers = [
  'Mandi',
  'Ben',
  'Shawn',
  'Mack',
];

teachers = ['Alice', 'Bob', 'Jane'];
```

**[Open this example in Codepen](http://codepen.io/redacademy/pen/jqpYoz)** to see this gotcha in action.

---

# Solution: const

Constants are block-scoped like variables defined with `let`, but they cannot be redeclared and their values cannot be reassigned:

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

**1. Reassigning a value**

```js
const value = 1;
value = 2;

const numbers = [1, 2, 3];
numbers = [4, 5, 6];
```

**2. Changing a value**

```js
const array = [1, 2, 3];
array.push(4);

const object = {a: 1, b: 2};``
object['c'] = 3;
```

---

# let vs. const

Both behave similarly in that they allow block-scoped declarations, so consider semantics when choosing one over the other:

- Use `let` when you want to allow your variables to be potentially reassigned to new values
- Use `const` when you don't want them to change
- Constants also help convey intent and make your code more future-friendly (vs. simply using **magic numbers**)

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
class: center, middle

# ES2015 Improvements

---
class: center, middle

# Modules

### `import` & `export`

---

# Modules

### Why modules?

For the same reason an author divides a books into chapters & pages.

---

# ES5 Modules

No Native or agreed upon solution.

- CommonJS
- SystemJS
- RequireJS (AMD)
- more!

---

# ES2015 Modules

ES2015 standardizes modules.

### `import`

```js
import {a} from 'module';
import b from 'module'; // default
import * as c from 'module'; // alias
```

### `export`

```js
export function a() {}
export default function b() {}
```

---

# Challenge

Clone the ES2015 repo, and follow the README to get setup.

`> git clone https://github.com/redacademy/red-es2015`

In the directory, run `> npm i` & `> gulp`

---

# Refactor

Setup 'gulp-babel' in your project.

# Challenge

- Refactor out your API call into a separate function.
- Use `import` & `export` to load this function from another file.



---

# Refactor

In your project code, use:
- 3 or more arrow functions (`=>`)

---

template: inverse
class: center, middle

# ES2015 ShortHands

---
class: center, middle
# Template Literals

### <code>{% raw %}\`string\`{% endraw %}</code> (backtick)
### <code>{% raw %}\`${variable}\`{% endraw %}</code>

---

# Template Literals

### ES5
```js
	var name = 'name';
	var city = 'Vancouver';
	var description = name + ' lives in ' + city;
```

### ES2015

```js
let description = `${name} lives in ${city}`;
```

---

# Multiline Strings

Template literals preserve white space.

### ES5
```js
var funkyArrows = '\n-->\n    -->\n        ->\n';
```

### ES2015

```js
let funkyArrows = `
->
	->
		->
`;
```
.link[
	[Open in CodePen](http://codepen.io/redacademy/pen/PNBQvB)
]


---

# Refactor

In your project code, use:
- 2 or more template literals


---

# Object Literals

### ES5

```js
var name = 'Shawn';
var city = 'Vancouver';
{
	name: name,
	city: city,
}
```

### ES2015

```js
{
	name,
	city,
}
```

---

# Default Params

### ES5

```js
function multiply(a, b) {
	if (typeof b === 'undefined') {
		b = 1;
	}
  return a * b;
}
```

### ES2015

```js
function multiply(a, b = 1) {
	return a * b;
}
```

---

# Destructuring Objects

### ES5

```js
var person = {
	name: 'Shawn',
	city: 'Vancouver',
};

function getName(person) {
	return person.name;
}
```

### ES2015

```js
function getName({name}) {
	return name;
}
```

---

# Destructuring Arrays

### ES5

```js
var winners = ['Sarah', 'Holly', 'Andrew'];
var first = winners[0];
var second = winners[1];
var third = winners[2];
```

### ES2015

```js
let [first, second, third] = winners;
```

---

# Much More

- [Spread Operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)

```js
myFunction(...iterableObj);
```

- [Rest Parameter](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters)

```js
function(a, b, ...theArgs) {
  // ...
}
```
* `for..of`
* iterators & generators

---
template: inverse
class: center, middle

# Class

---

# ES5

```js
function Animal(name) {
  this.name = name;
}

Hello.prototype.speak = function speak() {
  console.log(this.name + ' makes a noise.');
};
```

# ES2015

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
```

---

# ES2015

### What is the purpose of ...
- the `constructor`
- `this`
- methods

```js
class Animal {
	// constructor runs first
  constructor(name) {
    this.name = name;
  }
	// methods
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
```

---

# `extends`

```js
class Animal {
  constructor(name) {
    this.name = name;
  }  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
	speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

let Scruffy = new Dog();
```

---
template: inverse
class: center, middle

# Promises

---

# Promise

1. **Asynchronous** vs. **Blocking**

2. [Promises Explained](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

# Questions?

{% endhighlight %}
